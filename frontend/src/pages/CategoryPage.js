import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getFamiliesById} from "../services/MongoDbApiService";
import ChildrenBoards from "../components/boards/ChildrenBoards";
import PageNameCategory from "../components/difficultyheader/PageNameCategory";

export default function CategoryPage() {

    const [childrenNames, setChildrenNames] = useState([])
    const {familyId} = useParams();

    useEffect(() => {
        getFamiliesById(familyId).then(data => setChildrenNames(data.childrenNames))
            .catch((error) => console.error(error))
    }, [])

    return (

        <>
            <PageNameCategory/>
            <ChildrenBoards childrenNames={childrenNames} />
        </>
    )
}