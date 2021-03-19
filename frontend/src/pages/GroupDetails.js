import {useEffect, useState} from "react";
import {getDifficultyGroups} from "../services/MongoDbApiService";

export default function GroupDetails(){

    const [groupData, setGroupData] = useState([])

    useEffect(() => {
        getDifficultyGroups().then(setGroupData)
    }, [])
}

