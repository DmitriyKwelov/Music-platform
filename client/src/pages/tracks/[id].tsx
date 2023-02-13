import React, {FC, useState} from 'react';
import {ITrack} from "@/types/track";
import {useRouter} from "next/router";
import {Button, Grid, TextField} from "@mui/material";
import MainLayout from "@/layouts/MainLayout";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "@/hooks/useInput";

interface TrackPageProps {
    serverTrack: ITrack;
}

const TrackPage: FC<TrackPageProps> = ({serverTrack}) => {
    const [track, setTrack] = useState(serverTrack)
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <MainLayout title={"Музыкальная площадка - " + track.name  + " - " + track.artist}>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
                <div style={{margin: '0 20px'}}>
                    <h1>Название трака - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии: </h1>
            <Grid container>
                <TextField
                    {...username}
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    {...text}
                    label="Комментарий"
                    multiline
                    fullWidth
                    rows={4}
                />
                <Button onClick={addComment}>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    console.log(params?.id)
    const response = await axios.get('http://localhost:5000/tracks/' + params?.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}