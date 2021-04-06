import BoardItem from "./BoardItem";
import ListStyled from "../form/ListStyled";
import ArrowRight from "../icon/ArrowRight";

export default function DifficultyBoards({difficulties}) {
    return (
        <ListStyled>
            {difficulties.map((difficulty) => (
                <li key={difficulty.name}>
                    <BoardItem difficulty={difficulty}/>
                    <ArrowRight/>
                </li>
            ))}
        </ListStyled>

    )
}