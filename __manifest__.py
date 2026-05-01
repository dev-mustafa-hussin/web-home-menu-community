{
    "name": "Web Home Menu",
    "version": "19.0.1.0.0",
    "summary": "Home Menu for Odoo Community",
    "description": """
Home Menu Module for Odoo Community Edition.
Adds a grid-based app launcher bar at the top of the backend,
similar to the Odoo Enterprise home screen.
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
        "security/groups.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "web_home_menu_community/static/src/xml/home_menu.xml",
            "web_home_menu_community/static/src/js/home_menu.js",
            "web_home_menu_community/static/src/scss/home_menu.scss",
        ],
    },
    "installable": True,
    "auto_install": False,
    "application": False,
}
