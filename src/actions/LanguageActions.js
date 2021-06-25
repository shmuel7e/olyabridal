export function setLanguage(lang) {
    return dispatch => {
        try {
            dispatch(setLang(lang));
        } catch (err) {
            console.log('LanguageService: err in getLang', err);
        }
    };
}


function setLang(lang) {
    return {
        type: 'SET_LANG',
        lang
    };
}