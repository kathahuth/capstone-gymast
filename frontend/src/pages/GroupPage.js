import {useEffect, useState} from "react";
import {getDifficultyGroups} from "../services/MongoDbApiService";
import GroupBoards from "../components/boards/GroupBoards";
import PageNameGroup from "../components/difficultyheader/PageNameGroup";

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
            <GroupBoards difficulties={difficulties} />
        </>
    )
}

