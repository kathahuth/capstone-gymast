import styled from "styled-components/macro";
import BoardItem from "./BoardItem";

export default function DifficultyBoards({difficulties}) {
    return (
    <List>
        {difficulties.map((difficulty) => (
            <li key={difficulty.name}>
            <BoardItem difficulty={difficulty}/>
            </li>
        ))}
    </List>
    )
}

const List = styled.ul`

  background: var(--primary-color);
  overflow-y: scroll;
  padding: 0 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  grid-gap: 20px;
  list-style: none;
  margin: 0px;
`