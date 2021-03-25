import {useEffect, useState} from "react";
import {getDifficultyGroups} from "../services/MongoDbApiService";
import DifficultyBoards from "../components/DifficultyBoards";

export default function GroupPage(){

    const [difficulties, setDifficulties] = useState([])

    useEffect(() => {
        getDifficultyGroups()
            .then(setDifficulties)
            .catch((error) => console.error(error))
    }, [])

    return (
            <DifficultyBoards difficulties={difficulties} />
    )
}

