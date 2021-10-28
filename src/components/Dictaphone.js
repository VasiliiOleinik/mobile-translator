import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, ButtonGroup } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import StopIcon from '@mui/icons-material/Stop';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { useDispatch } from 'react-redux';
import { recordedText } from '../actions/app';

const Dictaphone = () => {
  const dispatch = useDispatch();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    dispatch(recordedText(transcript));
  }, [transcript, dispatch]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        <Button onClick={SpeechRecognition.startListening}>
          {listening ? <SettingsVoiceIcon /> : <MicIcon />}
        </Button>
        <Button onClick={SpeechRecognition.stopListening}>
          <StopIcon />
        </Button>
        <Button onClick={resetTranscript}>
          <RotateLeftIcon />
        </Button>
      </ButtonGroup>
    </>
  );
};
export default Dictaphone;