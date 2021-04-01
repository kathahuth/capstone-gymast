import styled from "styled-components/macro";

const ListStyled = styled.ul`

  background: var(--primary-color);
  overflow-y: scroll;
  padding: 0 25px;
  list-style: none;
  margin: 0px;
  
  > li {
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    box-shadow: 0 0 8px 3px #2f3235;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--secondary-color);
    &:hover{
      opacity: 0.5;
    }
    
    +li{
      margin: 10px 0;
    }
  }
`;

export default ListStyled;

