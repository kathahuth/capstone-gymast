import ChildItem from "./ChildItem";
import ListStyled from "../../form/ListStyled";
import ArrowRight from "../../icon/ArrowRight";

export default function ChildrenBoards({childrenNames}) {

    return (
        <ListStyled>
            {childrenNames.map((name) => (
                <li key={name}>
                    <ChildItem name={name}/>
                    <ArrowRight/>
                </li>
            ))}
        </ListStyled>
    )
}