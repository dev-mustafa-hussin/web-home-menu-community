/** @odoo-module **/

import { Component, useState, onMounted, xml } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class HomeMenuBar extends Component {
    static template = "web_home_menu_community.HomeMenu";
    static props = {};

    setup() {
        this.menuService = useService("menu");
        this.homeMenuState = useState({
            isVisible: true,
            menuItems: [],
        });

        onMounted(() => {
            const apps = this.menuService.getApps();
            this.homeMenuState.menuItems = apps.map((app) => ({
                id: app.id,
                name: app.name,
                xmlId: app.xmlid || "",
                actionID: app.actionID || null,
            }));
        });
    }

    getMenuIcon(xmlId) {
        const iconMap = {
            "base.menu_administration": "fa-cogs",
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
            "note.action_note_note": "fa-sticky-note",
            "mail.action_discuss": "fa-comments",
        };
        return iconMap[xmlId] || "fa-th-large";
    }

    onHomeMenuClick(ev) {
        ev.stopPropagation();
    }

    toggleHomeMenu(ev) {
        ev.stopPropagation();
        this.homeMenuState.isVisible = !this.homeMenuState.isVisible;
    }

    openApp(ev, app) {
        ev.stopPropagation();
        if (!app) return;
        const href = app.actionID
            ? `/web#action=${app.actionID}&menu_id=${app.id}`
            : `/web#menu_id=${app.id}`;
        window.location.href = href;
    }
}

// Register as systray item so it appears inside the web client
registry.category("systray").add(
    "web_home_menu_community.home_menu_bar",
    { Component: HomeMenuBar },
    { sequence: 1 }
);
