export interface IEnvironment {
    SITE: {
        LANG: string;
        API: string;
        NITROPATH: string;
        FIGUREIMAGING: string;
        BADGEMIMAGING: string;
        GUILDSIMAGING: string;
    };
    POINTS: {
        [key: string]: number;
    };
    COMPONENTS: {
        ROOMS: {
            [key: string]: number;
        };
    };
}
export const environment: IEnvironment = {
    SITE: {
        LANG: 'nl',
        API: 'https://api.circinus.dev/en/',
        NITROPATH: 'https://client.circinus.dev',
        FIGUREIMAGING: 'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=',
        BADGEMIMAGING: 'https://client.circinus.dev/assets/c_images/album1584',
        GUILDSIMAGING: 'https://swf.hangout.ph/Badgeparts/generated'
    },
    POINTS: {
        DUCKETS: 0,
        DIAMONDS: 5,
        GOTW: 103
    },
    COMPONENTS: {
        ROOMS: {
            MAXROOMS: 5
        }
    }
};
