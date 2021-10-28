import { useEffect, useMemo, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { textToTranslate, translatedText } from '../actions/app'
import { TextField, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Dictaphone from './Dictaphone';

const TextToTranslate = () => {
    const dispatch = useDispatch();
    const typedText = useSelector((state) => state.app.textToTranslate);
    const languageTo = useSelector((state) => state.app.languageTo);
    const [langFrom, setLangFrom] = useState("");

    const options = useMemo(() => {
        const opt = {
            method: 'POST',
            url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
            params: {
                to: languageTo,
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
            },
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-key': 'bfcdf8e8cfmsh8992eb209e6217cp122b27jsn6c8dd884a8af'
            },
            data: [{ Text: typedText }]
        }
        return opt;
    }, [typedText, languageTo]);


    useEffect(() => {
        axios.request(options).then(function (response) {
            setLangFrom(response.data[0].detectedLanguage.language)
            dispatch(translatedText(response.data[0].translations[0].text));
        }).catch(function (error) {
            console.error(error);
        });
    }, [typedText, options, dispatch, languageTo]);

    return (
        <>
            <Typography component="h1" variant="h5" mb={2}>
                ОРИГИНАЛ
            </Typography>
            <Box mb={1}>
                <Dictaphone />
            </Box>
            <Box mb={1}>
                <Typography component="p" variant="p" p={0} pt={1}>Translate from: <b>{langFrom}</b></Typography>
            </Box>
            <Card variant="outlined">
                <CardContent>
                    <TextField
                        id="TextToTranslate"
                        multiline
                        fullWidth
                        value={typedText}
                        onChange={e => dispatch(textToTranslate(e.target.value))}
                    />
                </CardContent>
            </Card>
        </>
    );
};

export default TextToTranslate;