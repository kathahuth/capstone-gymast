import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getCategoriesById, getFamiliesById, getGroupsById} from "../services/MongoDbApiService";
import ChildrenBoards from "../components/ChildrenBoards";
import PageNameDifficultyItem from "../components/PageNameDifficultyItem";

export default function ListOfDifficultyItemPage() {

    const [childrenNames, setChildrenNames] = useState([])
    const {groupId, familyId, categoryId} = useParams();

    useEffect(() => {
        getGroupsById(groupId).then(data => setChildrenNames(data.childrenNames))
        getFamiliesById(familyId).then(data => setChildrenNames(data.childrenNames))
        getCategoriesById(categoryId).then(data => setChildrenNames(data.childrenNames))
            .catch((error) => console.error(error))
    }, [groupId, familyId, categoryId])

    return (
        <>
            <PageNameDifficultyItem/>
            <ChildrenBoards childrenNames={childrenNames} />
        </>
    )
}