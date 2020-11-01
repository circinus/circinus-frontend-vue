import api from "../../../helpers/api";

export default {

    namespaced: true,

    state: {
        looks: null
    },

    actions: {
        async getLooks ({}, event ) {
            return await api.get('register/looks')
                .then((response) => {
                    return response.data.looks[event];
                });
        }
    }
}