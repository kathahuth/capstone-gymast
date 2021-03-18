import styled from "styled-components/macro";

export default function AppHeader(){
    return (
    <Header>
        <h1>
            gymast - Aerobic Gymnastics Diary
        </h1>
    </Header>
    )
}

const Header = styled.header`
  
  background: #e0ffff;
  padding: 0 25px;
`