import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getCategoriesById} from "../services/MongoDbApiService";
import PageNameDifficultyItem from "../components/difficultyheader/PageNameDifficultyItem";
import DifficultyBoards from "../components/boards/DifficultyBoards";

export default function ListOfDifficultyItemPage({onWatchlistDifficultyClick, isOnWatchlistDifficulty}) {

    const [childrenNames, setChildrenNames] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {
        getCategoriesById(categoryId).then(data => setChildrenNames(data.childrenNames))
            .catch((error) => console.error(error))
    }, [])

    return (
        <>
            <PageNameDifficultyItem/>
            <DifficultyBoards childrenNames={childrenNames} onWatchlistDifficultyClick={onWatchlistDifficultyClick} isOnWatchlistDifficulty={isOnWatchlistDifficulty}/>
        </>
    )
}