import axios from "axios";

const groupsUrl = '/api/difficulty'

export const getDifficultyGroups = () =>
    axios.get(groupsUrl).then(response => response.data)

export const getGroupsById = (groupId) =>
    axios.get(`${groupsUrl}/${groupId}`).then(response => response.data)

export const getFamiliesById = (groupId , familyId) =>
    axios.get(`${groupsUrl}/${groupId}/${familyId}`).then(response => response.data)