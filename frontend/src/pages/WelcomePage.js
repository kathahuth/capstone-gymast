import styled from "styled-components/macro";
import WelcomeBoard from "../components/boards/WelcomeBoard";

export default function WelcomePage() {

    return (
        <Wrapper>
            <WelcomeBoard/>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    height: 100vh;
    background: url('BackgroundIndividualGymnast.jpg') fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;    
`