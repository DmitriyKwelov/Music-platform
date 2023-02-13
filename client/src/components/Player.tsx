import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import styles from '../styles/Player.module.scss'
import {Grid} from "@mui/material";
import TrackProgress from "@/components/TrackProgress";
import {useTypeSelector} from "@/hooks/useTypeSelector";
import {useAction} from "@/hooks/useAction";

let audio: any;

const Player = () => {
    const track =  {_id: '1', name: "Трек 1", artist: "Исполнитель 1", text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/7c67ebf0-2757-44cc-8f7e-6cfc62c99b48.mp3', picture: 'http://localhost:5000/image/d3f6fd4b-a2f2-49b9-a5de-3854ebf5df98.jpg', comments: []}
    const {active, volume, duration, currentTime, pause} = useTypeSelector(state => state.player)
    const {playTrack, pauseTrack, setVolume, setDuration, setCurrentTime, setActiveTrack} = useAction()

    useEffect(() => {
        if(!audio){
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
        if(active) {
            audio.src = "http://localhost:5000/" + active.audio
            audio.volume = volume / 100
            audio.onloadeddata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if(pause){
            playTrack()
            audio.play()
        } else {
            console.log('fawefawef')
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value));
    }
    if(!active) {
        return null
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause
                    ?   <PlayArrow/>
                    :   <Pause/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{active && active.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{active && active.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;