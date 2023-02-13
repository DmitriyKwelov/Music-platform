import React, {FC} from 'react';
import {ITrack} from "@/types/track";
import styles from '../styles/TrackItem.module.scss'
import IconButton from "@mui/material/IconButton";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {useAction} from "@/hooks/useAction";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();
    const {playTrack, pauseTrack, setActiveTrack} = useAction()

    const play = (e: any) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {active
                ?   <Pause/>
                :   <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={'http://localhost:5000/' + track.picture}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;