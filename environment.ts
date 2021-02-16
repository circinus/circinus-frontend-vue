export interface IEnvironment {
    SITE: {
        API: string;
        NITROPATH: string;
        FIGUREIMAGING: string;
        BADGEMIMAGING: string;
    };
    POINTS: {
        [key: string]: number;
    };
}
export const environment: IEnvironment = {
    SITE: {
        API: 'https://api.circinus.dev/en/',
        NITROPATH: 'https://client.circinus.dev',
        FIGUREIMAGING: 'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure=',
        BADGEMIMAGING: 'https://client.circinus.dev/assets/c_images/album1584'
    },
    POINTS: {
        DUCKETS: 0,
        DIAMONDS: 5,
        GOTW: 103
    }
};
