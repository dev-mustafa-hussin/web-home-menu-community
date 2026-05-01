/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";

export class HomeMenu extends Component {
    setup() {
        super.setup();
        this.menuService = useService("menu");
        this.state = { menuData: [], isVisible: true };
        this.loadApps();
    }

    loadApps() {
        const apps = this.menuService.getApps();
        this.state.menuData = apps.map((app) => ({
            id: app.id,
            name: app.name,
            xmlId: app.xmlid || "",
            actionID: app.actionID || null,
        }));
    }

    getMenuIcon(xmlId) {
        const iconMap = {
            "base.menu_administration": "fa-cogs",
            "base.menu_custom": "fa-puzzle-piece",
            "contacts.menu_contacts": "fa-address-book",
            "sale.sale_menu_root": "fa-shopping-cart",
            "account.menu_finance": "fa-calculator",
            "stock.menu_stock_root": "fa-cubes",
            "purchase.menu_purchase_root": "fa-shopping-bag",
            "hr.menu_hr_root": "fa-users",
            "project.menu_main_pm": "fa-tasks",
            "mrp.menu_mrp_root": "fa-industry",
            "website.menu_website_configuration": "fa-globe",
            "point_of_sale.menu_point_of_sale_root": "fa-cash-register",
            "helpdesk.helpdesk_menu_root": "fa-life-ring",
        };
        return iconMap[xmlId] || "fa-folder";
    }

    onHomeClick(ev) {
        ev.stopPropagation();
    }

    toggleHome(ev) {
        ev.stopPropagation();
        this.state.isVisible = !this.state.isVisible;
    }

    onMenuClick(ev, menu) {
        ev.stopPropagation();
        if (!menu) return;
        const href = menu.actionID
            ? `/web#action=${menu.actionID}${menu.id ? `&menu_id=${menu.id}` : ""}`
            : menu.id
            ? `/web#menu_id=${menu.id}`
            : null;
        if (href) window.location.href = href;
    }
}

HomeMenu.template = "web_home_menu_community.HomeMenu";
registry.category("actions").add("web_home_menu_community.home_menu", HomeMenu);
