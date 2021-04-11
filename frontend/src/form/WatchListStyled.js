import styled from "styled-components/macro";

const WatchListStyled = styled.ul`

  overflow-y: scroll;
  padding: 0px;
  list-style: none;
  margin: 0px;
  
  > li {
    
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    
  }
`

export default WatchListStyled;

