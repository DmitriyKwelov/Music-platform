import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import styles from '../styles/Player.module.scss'
import {Grid} from "@mui/material";
import TrackProgress from "@/components/TrackProgress";

const Player = () => {
    const track =  {_id: '1', name: "Трек 1", artist: "Исполнитель 1", text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/4489b151-4594-4e64-a9f9-ee2636a81c85.mp3', picture: 'http://localhost:5000/image/2d19ab76-2573-4796-b190-1f2195c917f1.jpg', comments: []}
    const active = false;
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                    ?   <Pause/>
                    :   <PlayArrow/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    );
};

export default Player;