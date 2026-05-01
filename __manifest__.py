{
    "name": "Web Home Menu",
    "version": "19.0.1.0.0",
    "summary": "Home Menu for Odoo Community",
    "description": """
Home Menu Module for Odoo Community Edition
Replaces the default backend menu with a grid-based dashboard similar to Odoo Enterprise
    """,
    "author": "3M Code Software",
    "website": "https://github.com/dev-mustafa-hussin/web-home-menu-community",
    "license": "LGPL-3",
    "category": "Web",
    "support": "support@3mcode.com",
    "depends": [
        "web",
    ],
    "data": [
        "views/home_page.xml",
        "security/groups.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "web_home_menu_community/static/src/js/home_menu.js",
            "web_home_menu_community/static/src/scss/home_menu.scss",
            "web_home_menu_community/static/src/xml/home_menu.xml",
        ],
    },
    "installable": True,
    "auto_install": False,
    "application": False,
}
