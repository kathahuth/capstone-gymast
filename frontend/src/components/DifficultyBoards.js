import BoardItem from "./BoardItem";
import ListStyled from "../form/ListStyled";

export default function DifficultyBoards({difficulties}) {
    return (
        <ListStyled>
            {difficulties.map((difficulty) => (
                <li key={difficulty.name}>
                    <BoardItem difficulty={difficulty}/>
                </li>
            ))}
        </ListStyled>
    )
}