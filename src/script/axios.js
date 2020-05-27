import axios from 'axios';
import {Message} from 'iview';

axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


let httpHead;
if (process.env.NODE_ENV === 'production') {
    httpHead = location.href.split("://")[0] + "://" + location.href.split("://")[1].split("/")[0];
} else {
    httpHead = location.href.split("://")[0] + "://" + location.href.split("://")[1].split(":")[0] + ':80';
    httpHead = "http://localhost:3000/";
    // httpHead = "http://192.168.5.12:80"
}
axios.defaults.baseURL = httpHead;

axios.interceptors.request.use(
    config => {
        console.log(config)
        if (config.method === "post") {
            let params = new URLSearchParams();
            if (config.data) {
                for (let key in config.data) {
                    params.append(key, config.data[key])
                }
            }
            config.data = params;
        }
        return config;
    },
    error => {
        return Promise.reject(error.toString());
    }
);
axios.interceptors.response.use(
    (res) => {
        console.log(res);
        if (res.data.msg !== undefined) {
            return res.data.msg
        }
        return Promise.reject(tools.language.get(res.data.error));
    },
    (error) => {
        return Promise.reject(error.toString());
    }
);


export const http = {};
/**
 * function (cmd, msg, callback)
 *  callback = {onOk: function (data) {},
                onError: function (error) {}}可以根据需要传对应的回调函数
 **/
http.post = (cmd, msg, callback) => {
    axios.post(cmd, msg)
        .then(res => {
            callback.onOk(res)
        })
        .catch(response => {
            callback.onError ? callback.onError(response) : ''
        })
};
/**
 * function (cmd, msg, callback)
 *  callback = {onOk: function (data) {},
                onError: function (error) {}}可以根据需要传对应的回调函数
 **/
http.get = (cmd, msg, callback) => {
    axios.get(cmd, msg)
        .then(res => {
            callback.onOk(res)
        })
        .catch(response => {
            callback.onError ? callback.onError(response) : ''
        })
};

