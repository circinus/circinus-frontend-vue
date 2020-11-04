export const environment  = {
    API: {
        base_url: 'https://api.circinus.dev/en/',
        client_url: 'https://client.circinus.dev'
    },
    POINTS: {
        "DUCKETS": 0,
        "DIAMONDS": 5,
        "GOTW": 103
    },
    Locale: require('./src/locales/en.json'),
};

export const client = {
    swf: `${environment.client_url}/gordon/PRODUCTION-201601012205-226667486/Habbo.swf`,

    vars: {
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '1',
        'connection.info.host': 'ip',
        'connection.info.port': 'port',
        'site.url': `${environment.API.base_url}/client`,
        'url.prefix': `${environment.API.base_url}/client`,
        'client.reload.url': `${environment.API.base_url}/client`,
        'client.fatal.error.url': `${environment.API.base_url}/client`,
        'client.connection.failed.url': `${environment.API.base_url}/client`,
        'external.override.texts.txt': `${environment.API.client_url}/gamedata/override/external_flash_override_texts.txt`,
        'external.override.variables.txt': `${environment.API.client_url}/gamedata/override/external_override_variables.txt`,
        'external.variables.txt': `${environment.API.client_url}/gamedata/external_variables.txt?tdest`,
        'external.texts.txt': `${environment.API.client_url}/gamedata/external_flash_texts.txt`,
        'external.figurepartlist.txt': `${environment.API.client_url}/gamedata/figuredata.xml?test`,
        'flash.dynamic.avatar.configuration': `${environment.API.client_url}/gamedata/figuremap.xml`,
        'productdata.load.url': `${environment.API.client_url}/gamedata/productdata.txt`,
        'furnidata.load.url': `${environment.API.client_url}/gamedata/furnidata.xml?ss`,
        'use.sso.ticket': '1',
        'sso.ticket': '',
        'processlog.enabled': '1',
        'flash.client.url': `$environment.API.client_url}/gordon/PRODUCTION-201601012205-226667486/`,
        'diamonds.enabled': '1',
        'logout.url': `${environment.API.client_url}/logout`,
        'spaweb': '1'
    },

    params: {
        base: `${environment.API.client_url}/gordon/PRODUCTION-201601012205-226667486/`,
        allowScriptAccess: 'always',
        wmode: 'opaque'
    }
};
