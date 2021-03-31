import axios from "axios";

const groupsUrl = '/api/difficulty'
const familyUrl = '/api/family'
const categoryUrl = '/api/category'

export const getDifficultyGroups = () =>
    axios.get(groupsUrl).then(response => response.data)

export const getGroupsById = (groupId) =>
    axios.get(`${groupsUrl}/${groupId}`).then(response => response.data)

export const getFamiliesById = (familyId) =>
    axios.get(`${familyUrl}/${familyId}`).then(response => response.data)

export const getCategoriesById = (categoryId) =>
    axios.get(`${categoryUrl}/${categoryId}`).then(response => response.data)