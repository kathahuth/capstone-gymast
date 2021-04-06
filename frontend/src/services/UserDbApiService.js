import axios from "axios";

const userUrl = '/api/gymnast'

export const getUserByUserName = (username) =>
    axios.get(`${userUrl}/${username}`).then(response => response.data)