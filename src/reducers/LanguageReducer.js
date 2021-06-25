
let localLanguage = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

const initialState = {
    lang: localLanguage
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_LANG':
            return { ...state, lang: action.lang };
        default:
            return state;
    }
}
