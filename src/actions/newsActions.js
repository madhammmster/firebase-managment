import {database, storage} from '../firebase/firebase';

import {performRequest} from "./appActions";
import {ADD_NEWS_SUCCESS, DELETE_NEWS_SUCCESS, GET_NEWS_SUCCESS, SET_ACTIVE_NEWS} from "../constants";


export const addNewsAction = (values) => {
    return async dispatch => {
        dispatch(performRequest());
        let newsId;

        if(values.key){
            newsId = values.key;
        }else{
            newsId = new Date().getTime();
        }

        const urls = await dispatch(sendImagesAction(values.images, newsId))
        values.images = urls;
        database.ref('news/' + newsId).set(values, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                dispatch(addNewsSuccess());
            }

        });

    }
};

export const sendImagesAction = (images, newsId) => {
    return async dispatch => {

        const imagesRef = storage.ref('images');

        var results = await Promise.all(images.map(async (image, index) => {
            let localSnapshot = null;
            if (image.size) {
                const thisRef = imagesRef.child('image_' + newsId + '_' + index);
                await thisRef.put(image).then((snapshot) => {
                    localSnapshot = snapshot
                });
            }else{
                localSnapshot = {downloadURL: image.preview, metadata:{name:  image.name}};
            }
            return {preview: localSnapshot.downloadURL, name: localSnapshot.metadata.name};
        }));

        return results;
    }


}

export const addNewsSuccess = () => {
    return {
        type: ADD_NEWS_SUCCESS
    }
};


export const deleteNewsAction = (news) => {
    return dispatch => {
        dispatch(performRequest());
        database.ref('news/' + news.key).remove(function (error) {
            if (error) {
                console.log(error);
            }
            else {
                dispatch(deleteNewsSuccess());
            }

        });

    }
};

export const deleteNewsSuccess = () => {
    return {
        type: DELETE_NEWS_SUCCESS
    }
};

export const getNews = () => {
    return dispatch => {
        return database.ref('/news').once('value', snap => {
            const news = snap.val();
            dispatch(getNewsSuccess(news))
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const setActiveNews = (news) => {
    return {
        type: SET_ACTIVE_NEWS,
        payload: news
    }
}

export const getNewsSuccess = (news) => {
    return {
        type: GET_NEWS_SUCCESS,
        payload: news
    }
}