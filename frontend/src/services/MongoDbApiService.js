import axios from "axios";

const groupsUrl = ' /api/difficulty'

export const getDifficultyGroups = () =>
    axios.get(groupsUrl).then((response) => response.data)