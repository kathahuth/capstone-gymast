import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getFamiliesById, getGroupsById} from "../services/MongoDbApiService";
import ChildrenBoards from "../components/ChildrenBoards";
import PageNameCategory from "../components/PageNameCategory";

export default function CategoryPage() {

    const [childrenNames, setChildrenNames] = useState([])
    const {groupId, familyId} = useParams();

    useEffect(() => {
        getGroupsById(groupId).then(data => setChildrenNames(data.childrenNames))
        getFamiliesById(familyId).then(data => setChildrenNames(data.childrenNames))
            .catch((error) => console.error(error))
    }, [groupId, familyId])

    return (

        <>
            <PageNameCategory/>
            <ChildrenBoards childrenNames={childrenNames} />
        </>
    )
}