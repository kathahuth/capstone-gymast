import GroupBoardItem from "./GroupBoardItem";
import ListStyled from "../../form/ListStyled";
import ArrowRight from "../../icon/ArrowRight";

export default function GroupBoards({difficulties}) {
    return (
        <ListStyled>
            {difficulties.map((difficulty) => (
                <li key={difficulty.name}>
                    <GroupBoardItem difficulty={difficulty}/>
                    <ArrowRight/>
                </li>
            ))}
        </ListStyled>

    )
}