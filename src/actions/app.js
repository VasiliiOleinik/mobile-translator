import { setLanguageReducer, getLanguageReducer, textToTranslateReducer, recordedTextReducer, translatedTextReducer } from '../reducers/appReducer';

export function setLanguage(lang) {
    return (dispatch) => {
        try {
            console.log('lang', lang);
            dispatch(setLanguageReducer(lang));
        } catch (e) {
            console.log('setLanguage: ', e.response.data.message);
        }
    }
}

export function getLanguage(lang) {
    return (dispatch) => {
        try {
            dispatch(getLanguageReducer(lang));
        } catch (e) {
            console.log('getLanguage: ', e.response.data.message);
        }
    }
}

export function textToTranslate(text) {
    return (dispatch) => {
        try {

            dispatch(textToTranslateReducer(text));
        } catch (e) {
            console.log('textToTranslate: ', e.response.data.message);
        }
    }
}

export function recordedText(text) {
    return (dispatch) => {
        try {
            dispatch(recordedTextReducer(text));
        } catch (e) {
            console.log('recordedText: ', e.response.data.message);
        }
    }
}

export function translatedText(text) {
    return (dispatch) => {
        try {
            dispatch(translatedTextReducer(text));
        } catch (e) {
            console.log('translatedText: ', e.response.data.message);
        }
    }
}