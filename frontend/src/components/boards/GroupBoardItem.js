import {useLocation} from "react-router";
import LinkStyled from "../../form/LinkStyled";


export default function GroupBoardItem({difficulty}){

    const location = useLocation();

    return (
        <LinkStyled to={`${location.pathname}/${difficulty.id}`}>{difficulty.name}</LinkStyled>
    )
}