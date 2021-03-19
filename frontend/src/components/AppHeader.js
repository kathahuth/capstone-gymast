import styled from "styled-components/macro";

export default function AppHeader(){
    return (
    <Header>
        <h2>
            gymast - header (comes later)
        </h2>
    </Header>
    )
}

const Header = styled.header`
  
  background: var(--primary-color);
  padding: 0 25px;
  border-bottom: 1px solid var(--secondary-color);
`