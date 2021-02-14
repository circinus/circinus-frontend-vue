import api from "../../../helpers/api";
import { ActionContext, Module } from 'vuex';
import { IRootState } from '@/store';
import { IResponse } from '@/helpers/IResponse';
import { AxiosResponse } from 'axios';
import { IUser } from '@/store/modules/user/IUser';

export interface IPhoto {
    id: number;
    user: IUser;
    likes: number;
    dislikes: number;
}

export interface IState {
    photos: Array<IPhoto>;
}

export enum PhotoTypes {
    APPEND_PHOTOS = 'APPEND_PHOTOS'
}

const photos: Module<IState, IRootState> = {
    namespaced: true,

    state: {
        photos: []
    },

    getters: {
        photos(state: IState): Array<IPhoto> {
            return state.photos
        },
    },

    mutations: {
        [PhotoTypes.APPEND_PHOTOS](state: IState, photos: Array<IPhoto>): void {
            state.photos = photos
        }
    },

    actions: {
        async setPhotos({ commit, dispatch }: ActionContext<IState, IRootState>): Promise<void> {
            await api.get<IResponse<Array<IPhoto>>>('photos/list/1/10')
                .then((response: AxiosResponse<IResponse<Array<IPhoto>>>): void => {
                    dispatch('loader/change', 'getPhotos', {root:true})
                    commit(PhotoTypes.APPEND_PHOTOS, response.data.data)
                });
        }
    }
}

export default photos;
