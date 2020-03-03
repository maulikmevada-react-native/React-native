// npm install --save react-native-web-service-handler

import API from './API';
import NetInfo from '@react-native-community/netinfo';
import WebServiceHandler from 'react-native-web-service-handler';

export const PostData = (api, json) => {
    const URL = API.mainurl + api;
    console.log(URL)
    console.log(global.token)
    if (global.isConnected) {
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' +global.token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: json,
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch(() => {
            });
    }
}

export const GetData = (api, json) => {
    const URL = API.mainurl + api;
    return WebServiceHandler.get(URL, json, null).then((response) => {
        response.json()})
        .then((responseJson) => {
            return responseJson;
        })
        .catch(() => {
        })
}
export const internet = () => {
    return NetInfo.isConnected.fetch();
}