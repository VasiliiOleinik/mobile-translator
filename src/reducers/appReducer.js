const SET_LANGUAGE = "SET_LANGUAGE";
const TEXT_TO_TRANSLATE = "TEXT_TO_TRANSLATE";
const RECORDED_TEXT = "RECORDED_TEXT";
const GET_LANGUAGE = "GET_LANGUAGE";
const TRANSLATED_TEXT = "TRANSLATED_TEXT";

const defaultState = {
    languageTo: "en",
    languageFrom: "",
    textToTranslate: "",
    translatedText: ""
}

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LANGUAGE: return { ...state, languageTo: action.payload }
        case TEXT_TO_TRANSLATE: return { ...state, textToTranslate: action.payload }
        case RECORDED_TEXT: return { ...state, textToTranslate: action.payload }
        case GET_LANGUAGE: return { ...state, languageFrom: action.payload }
        case TRANSLATED_TEXT: return { ...state, translatedText: action.payload }
        default:
            return state
    }
}

export const setLanguageReducer = (lang) => ({ type: SET_LANGUAGE, payload: lang });
export const getLanguageReducer = (lang) => ({ type: GET_LANGUAGE, payload: lang });
export const textToTranslateReducer = (text) => ({ type: TEXT_TO_TRANSLATE, payload: text });
export const recordedTextReducer = (text) => ({ type: TEXT_TO_TRANSLATE, payload: text });
export const translatedTextReducer = (text) => ({ type: TRANSLATED_TEXT, payload: text });
