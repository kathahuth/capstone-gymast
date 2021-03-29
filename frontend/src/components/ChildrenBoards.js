import styled from "styled-components/macro";
import ChildItem from "./ChildItem";

export default function ChildrenBoards({childrenNames}) {

    return (
        <List>
            {childrenNames.map((name) => (
                <li key={name}>
                    <ChildItem name={name}/>
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
  margin: 0;
`