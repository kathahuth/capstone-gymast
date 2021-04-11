import styled from "styled-components/macro";

const WatchListStyled = styled.ul`

  
  padding: 0;
  list-style: none;
  margin: 0;
  
  > li {
    
    padding: 20px 0 20px 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
  }
`

export default WatchListStyled;

