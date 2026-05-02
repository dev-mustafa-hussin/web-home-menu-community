{
    'name': 'Web Home Menu',
    'version': '19.0.2.0.0',
    'summary': 'Home Menu for Odoo Community - Like Enterprise',
    'description': 'Replaces the default home screen with a grid of installed apps, similar to Odoo Enterprise.',
    'author': '3M Code Software',
    'website': 'https://github.com/dev-mustafa-hussin/web-home-menu-community',
    'license': 'LGPL-3',
    'category': 'Web',
    'depends': ['web'],
    'data': [
        'security/groups.xml',
        'views/home_menu_action.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'web_home_menu_community/static/src/js/home_menu.js',
            'web_home_menu_community/static/src/xml/home_menu.xml',
            'web_home_menu_community/static/src/css/home_menu.css',
        ],
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}
