import {getGroupsById} from "../services/MongoDbApiService";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import ChildrenBoards from "../components/boards/ChildrenBoards";
import PageNameFamily from "../components/difficultyheader/PageNameFamily";

export default function FamilyPage(){

    const [childrenNames, setChildrenNames] = useState([])
    const {groupId} = useParams();

    useEffect(() => {
        getGroupsById(groupId)
            .then(data => setChildrenNames(data.childrenNames))
            .catch((error) => console.error(error))
    }, [])

    return (

        <>
            <PageNameFamily/>
            <ChildrenBoards childrenNames={childrenNames} />
        </>
    )
}
