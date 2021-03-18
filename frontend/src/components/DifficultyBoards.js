import styled from "styled-components/macro";

export default function DifficultyBoards() {
    return (
    <Boards>
        <section>
            <h2>Grid-Box1</h2>
        </section>
        <section>
            <h2>Grid-Box2</h2>
        </section>
        <section>
            <h2>Grid-Box3</h2>
        </section>
    </Boards>
    )
}

const Boards = styled.main`

  background: #f0f8ff;
  overflow-y: scroll;
  padding: 0 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  grid-gap: 20px;
`