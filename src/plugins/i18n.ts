import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { environment } from '../../environment';

Vue.use(VueI18n);

export interface Messages {
    [key: string]: Record<string, string>;
}

function loadLocaleMessages() {
    const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages: Messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}

export default new VueI18n({
    locale: environment.SITE.LANG || 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
});
