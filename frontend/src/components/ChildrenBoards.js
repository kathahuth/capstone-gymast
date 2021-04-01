import ChildItem from "./ChildItem";
import ListStyled from "../form/ListStyled";

export default function ChildrenBoards({childrenNames}) {

    return (
        <ListStyled>
            {childrenNames.map((name) => (
                <li key={name}>
                    <ChildItem name={name}/>
                </li>
            ))}
        </ListStyled>
    )
}