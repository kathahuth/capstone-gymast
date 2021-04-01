import {useLocation} from "react-router";
import LinkStyled from "../form/LinkStyled";

export default function ChildItem({name}){

    const location = useLocation();
    const slug = name.toLowerCase().replaceAll(" ", "-");

    return (
            <LinkStyled to={`${location.pathname}/${slug}`}>{name}</LinkStyled>
    )
}