import axios from "axios";

export const getDifficultyGroups = () =>
    axios.get("/api/difficulty").then((response) => response.data)