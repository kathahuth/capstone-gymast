import axios from "axios";

const gymnastUrl = '/api/gymnast'

export const getUserByUserName = (username) =>
    axios.get(`${gymnastUrl}/${username}`).then(response => response.data)