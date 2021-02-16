export interface IEnvironment {
    SITE: {
        IMAGING: string;
    };
    POINTS: {
        [key: string]: number;
    };
}
export const environment: IEnvironment = {
    SITE: {
        IMAGING: 'https://www.habbo.com.tr/habbo-imaging/avatarimage?figure='
    },
    POINTS: {
        DUCKETS: 0,
        DIAMONDS: 5,
        GOTW: 103
    }
};
