export const environment  = {
    API: {
        base_url: 'https://api.circinus.dev/en/'
    },
    CLIENT: {
        path: 'https://client.circinus.dev',
        ip: '185.224.90.218',
        port: 3000
    },
    POINTS: {
        "DUCKETS": 0,
        "DIAMONDS": 5,
        "GOTW": 103
    },
    Locale: require('./src/locales/nl.json'),
};

export const client = {
    swf: `${environment.CLIENT.path}/gordon/PRODUCTION-202006192205-424220153/Circinus.swf`,

    vars: {
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '1',
        'connection.info.host': `${environment.CLIENT.ip}`,
        'connection.info.port': `${environment.CLIENT.port}`,
        'site.url': `jabbo.st`,
        'url.prefix': `jabbo.st`,
        'client.reload.url': `${environment.API.base_url}/client`,
        'client.fatal.error.url': `${environment.API.base_url}/client`,
        'client.connection.failed.url': `${environment.API.base_url}/client`,
        'external.override.texts.txt': `${environment.CLIENT.path}/gamedata/override/external_flash_override_texts.txt`,
        'external.override.variables.txt': `${environment.CLIENT.path}/gamedata/override/external_override_variables.txt`,
        'external.variables.txt': `${environment.CLIENT.path}/gamedata/external_variables.txt`,
        'external.texts.txt': `${environment.CLIENT.path}/gamedata/external_flash_texts.txt`,
        'external.figurepartlist.txt': `${environment.CLIENT.path}/gamedata/figuredata.xml`,
        'flash.dynamic.avatar.configuration': `${environment.CLIENT.path}/gamedata/figuremap.xml`,
        'productdata.load.url': `${environment.CLIENT.path}/gamedata/productdata.txt`,
        'furnidata.load.url': `${environment.CLIENT.path}/gamedata/furnidata.xml`,
        'use.sso.ticket': '1',
        'sso.ticket': '',
        'processlog.enabled': '1',
        'flash.client.url': `${environment.CLIENT.path}/gordon/PRODUCTION-202006192205-424220153/`,
        'diamonds.enabled': '1',
        'logout.url': `${environment.CLIENT.path}/logout`,
        'spaweb': '1'
    },

    params: {
        base: `${environment.CLIENT.path}/gordon/PRODUCTION-202006192205-424220153/`,
        allowScriptAccess: 'always',
        wmode: 'opaque'
    }
};
