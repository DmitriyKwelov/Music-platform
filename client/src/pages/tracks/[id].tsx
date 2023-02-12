import React from 'react';
import {ITrack} from "@/types/track";
import {useRouter} from "next/router";
import {Button, Grid, TextField} from "@mui/material";
import MainLayout from "@/layouts/MainLayout";

const TrackPage = () => {
    const track: ITrack = {
        _id: '1',
        name: "Трек 1",
        artist: "Исполнитель 1",
        text: 'Какой-то текст',
        listens: 5,
        audio: 'http://localhost:5000/audio/4489b151-4594-4e64-a9f9-ee2636a81c85.mp3',
        picture: 'http://localhost:5000/image/2d19ab76-2573-4796-b190-1f2195c917f1.jpg',
        comments: []
    };
    const router = useRouter();
    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
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
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Комментарий"
                    multiline
                    fullWidth
                    rows={4}
                />
                <Button>Отправить</Button>
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