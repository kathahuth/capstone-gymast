import {useEffect, useState} from "react";
import {getDifficultyGroups} from "../services/MongoDbApiService";

export default function GroupPage(){

    const [groupDifficulty, setGroupDifficulty] = useState([])

    useEffect(() => {
        getDifficultyGroups().then(setGroupDifficulty)
    }, [])

    /*return (
        <>
            {groupDifficulty}
        </>
    )*/
}

