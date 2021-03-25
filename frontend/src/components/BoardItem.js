import styled from "styled-components/macro";

export default function BoardItem({difficulty}){
    return (
    <BoardItemWrapper>
        <p>{difficulty.name}</p>
    </BoardItemWrapper>
    )
}

const BoardItemWrapper = styled.div`
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 0 8px 3px #2f3235;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--secondary-color);
`