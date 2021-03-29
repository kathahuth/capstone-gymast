import axios from "axios";

const groupsUrl = '/api/difficulty'
const familyUrl = '/api/family'

export const getDifficultyGroups = () =>
    axios.get(groupsUrl).then(response => response.data)

export const getGroupsById = (groupId) =>
    axios.get(`${groupsUrl}/${groupId}`).then(response => response.data)

export const getFamiliesById = (familyId) =>
    axios.get(`${familyUrl}/${familyId}`).then(response => response.data)