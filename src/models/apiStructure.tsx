import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from './api';

// export const headers = {
//     "Content-type": "application/json"
// };

export const headers = {
    "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjJkYTllNmZmOTBkMmIxMTI0ODI4MTczIiwiaWF0IjoxNjU4OTg2MzIyfQ.20Or7oxPotxjUok7gnA2-teG-nIPszEA3HyQsJOjyJM",
    "content-type": "application/x-www-form-urlencoded",
};

export const getToken = {
    // fetch token from async storage
}

// export const getApi = async (url: string) => {
//     return await axios.get(
//         API_BASE_URL + url,
//         { headers }
//     )
//         .then(response => response.data)
//         .catch(error => error)
// }

// export const postApi = async (url: string, params = {}, token?: string) => {
//     return await axios.post(
//         API_BASE_URL + url, params,
//         { headers }
//     )
//         .then(response => response)
//         .catch(error => error)
// }