import {useEffect, useState} from "react";
import {getDifficultyGroups} from "../services/MongoDbApiService";
import DifficultyBoards from "../components/DifficultyBoards";
import PageNameGroup from "../components/PageNameGroup";

export default function GroupPage(){

    const [difficulties, setDifficulties] = useState([])

    useEffect(() => {
        getDifficultyGroups()
            .then(setDifficulties)
            .catch((error) => console.error(error))
    }, [])

    return (

        <>
            <PageNameGroup/>
            <DifficultyBoards difficulties={difficulties} />
        </>
    )
}

