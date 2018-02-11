import firebase from 'firebase';
import {configuration} from './conf';

firebase.initializeApp(configuration);

export const database = firebase.database();

export const auth = firebase.auth();

export const storage = firebase.storage();