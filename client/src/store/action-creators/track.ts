import {Dispatch} from "react";
import {TrackAction, TrackActionTypes} from "@/types/track";
import axios from "axios";

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try{
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({type: TrackActionTypes.FETCH_TRACK, payload: response.data})
        } catch (e) {
            dispatch({type: TrackActionTypes.FETCH_TRACK_ERROR, payload: 'произошла ошибка'})
        }
    }
}
export const searchTrack = (query: string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try{
            const response = await axios.get('http://localhost:5000/tracks/search?query=' + query)
            dispatch({type: TrackActionTypes.FETCH_TRACK, payload: response.data})
        } catch (e) {
            dispatch({type: TrackActionTypes.FETCH_TRACK_ERROR, payload: 'произошла ошибка'})
        }
    }
}