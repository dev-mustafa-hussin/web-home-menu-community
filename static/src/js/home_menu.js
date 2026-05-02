/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class HomeMenu extends Component {
    static template = "web_home_menu_community.HomeMenu";
    static props = {};

    setup() {
        this.menuService = useService("menu");
        this.actionService = useService("action");
        this.state = useState({
            apps: [],
            filter: "",
        });

        onWillStart(async () => {
            const menus = this.menuService.getApps();
            this.state.apps = menus;
        });
    }

    get filteredApps() {
        const filter = this.state.filter.toLowerCase();
        if (!filter) return this.state.apps;
        return this.state.apps.filter(app =>
            app.name.toLowerCase().includes(filter)
        );
    }

    openApp(app) {
        this.menuService.selectMenu(app);
    }

    getInitials(name) {
        return name
            .split(" ")
            .slice(0, 2)
            .map(w => w[0])
            .join("")
            .toUpperCase();
    }

    getColor(index) {
        const colors = [
            "#875A7B", "#00A09D", "#F06050", "#F4A460",
            "#7C7BAD", "#52B849", "#1F6B7B", "#E4A800",
            "#D770AD", "#3A7D44", "#0073B7", "#C0392B",
        ];
        return colors[index % colors.length];
    }
}

registry.category("actions").add("web_home_menu_community.HomeMenu", HomeMenu);
