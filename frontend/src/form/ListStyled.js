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
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    background: var(--secondary-color);
    &:hover{
      opacity: 0.5;
    }
    
    +li{
      margin: 10px 0;
    }
    
  }
`

export default ListStyled;

