import styled from "styled-components/macro";

export default function AppHeader(){
    return (
    <Header>
        <img src="/GymastLogoSmall.png" alt="gymast logo" />
    </Header>
    )
}

const Header = styled.header`
  
  background: var(--primary-color);
  padding: 0 25px;
  border-bottom: 1px solid var(--secondary-color);
  display: flex;
  justify-content: center;
  
  img {
  margin: 8px 0px;
  margin-bottem: 8px;
  }
`