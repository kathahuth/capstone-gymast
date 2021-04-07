import ListStyled from "../../form/ListStyled";
import DifficultyBoardItem from "./DifficultyBoardItem";
import StarIcon from "../../icon/Star";
import styled, {css} from "styled-components/macro";

export default function DifficultyBoards({childrenNames, onWatchlistDifficultyClick, isOnWatchlistDifficulty}) {

    return (
        <ListStyled>
            {childrenNames.map((name) => (
                <li key={name}>
                    <DifficultyBoardItem name={name}/>
                    <StyledButton status={isOnWatchlistDifficulty(name)} onClick={() => onWatchlistDifficultyClick(name)} type="button"><StarIcon/></StyledButton>
                </li>
            ))}
        </ListStyled>
    )
}


const StyledButton = styled.button`

    outline: 0;
    border: 0;
    background: transparent;
    
    ${props => props.status && css`
        fill: #00bfff;
        transform: scale(1.2);
    `}
`