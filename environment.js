export const environment  = {
    POINTS: {
        "DUCKETS": 0,
        "DIAMONDS": 5,
        "GOTW": 103
    }
};


export const client = {
    swf: `${ process.env.VUE_HOTEL_DOMAIN }/${ process.env.VUE_HOTEL_PRODUCTION }/${ process.env.VUE_HOTEL_SWF }`,

    vars: {
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '1',
        'connection.info.host': `${ process.env.VUE_HOTEL_HOST }`,
        'connection.info.port': `${ process.env.VUE_HOTEL_PORT }`,
        'site.url': `jabbo.st`,
        'url.prefix': `jabbo.st`,
        'client.reload.url': `${ process.env.VUE_APP_URL }/client`,
        'client.fatal.error.url': `${ process.env.VUE_APP_URL }/client`,
        'client.connection.failed.url': `${ process.env.VUE_APP_URL }/client`,
        'external.override.texts.txt': `${ process.env.VUE_HOTEL_OVERRIDE_EXTERNAL_FLASH_TEXTS }`,
        'external.override.variables.txt': `${ process.env.VUE_HOTEL_OVERRIDE_EXTERNAL_VARIABLES }`,
        'external.variables.txt': `${ process.env.VUE_HOTEL_EXTERNAL_VARIABLES }`,
        'external.texts.txt': `${ process.env.VUE_HOTEL_EXTERNAL_FLASH_TEXTS }`,
        'external.figurepartlist.txt': `${ process.env.VUE_HOTEL_FIGUREDATA }`,
        'flash.dynamic.avatar.configuration': `${ process.env.VUE_HOTEL_FIGUREMAP }`,
        'productdata.load.url': `${ process.env.VUE_HOTEL_PRODUCTDATA }`,
        'furnidata.load.url': `${ process.env.VUE_HOTEL_FURNIDATA }`,
        'use.sso.ticket': '1',
        'sso.ticket': '',
        'processlog.enabled': '1',
        'flash.client.url': `${ process.env.VUE_HOTEL_DOMAIN }/${ process.env.VUE_HOTEL_PRODUCTION }/`,
        'diamonds.enabled': '1',
        'logout.url': `${ process.env.VUE_APP_URL }/logout`,
        'spaweb': '1'
    },

    params: {
        base: `${ process.env.VUE_HOTEL_DOMAIN }/${ process.env.VUE_HOTEL_PRODUCTION }/`,
        allowScriptAccess: 'always',
        wmode: 'opaque'
    }
};