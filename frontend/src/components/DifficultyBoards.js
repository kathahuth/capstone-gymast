import styled from "styled-components/macro";
import BoardItem from "./BoardItem";

export default function DifficultyBoards({difficulties}) {
    return (
    <Board>
        {difficulties.map((difficulties) => (
            <BoardItem
                key={difficulties.id}
                difficulties={difficulties}
                />
        ))}
    </Board>
    )
}

const Board = styled.main`

  background: var(--primary-color);
  overflow-y: scroll;
  padding: 0 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  grid-gap: 20px;
`