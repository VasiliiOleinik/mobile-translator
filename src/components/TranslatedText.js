import React from 'react';
import { TextField, Card, CardContent, Typography } from '@mui/material';
import Select from 'react-select';
import languagesList from '../utils/languages';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../actions/app';

const TranslatedText = () => {
    const dispatch = useDispatch();
    const translatedText = useSelector((state) => state.app.translatedText);
    const languageTo = useSelector((state) => state.app.languageTo);

    return (
        <>
            <Typography component="h1" variant="h5" mb={2}>
                ПЕРЕВОД
            </Typography>
            <Box mb={1}>
                <Select
                    options={languagesList}
                    placeholder="Select language for translate"
                    onChange={e => dispatch(setLanguage(e.value))}
                />
            </Box>
            <Box mb={1}>
                <Typography component="p" variant="p" p={0} pt={1}>Translate to: <b>{languageTo}</b></Typography>
            </Box>
            <Card variant="outlined">
                <CardContent>
                    <TextField
                        id="TranslatedText"
                        multiline
                        fullWidth
                        disabled={true}
                        value={translatedText}
                    />
                </CardContent>
            </Card>
        </>
    );
};

export default TranslatedText;