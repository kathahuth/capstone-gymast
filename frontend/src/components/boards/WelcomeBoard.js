import styled from "styled-components/macro";
import GetStartedButton from "../button/Welcome";

export default function WelcomeBoard() {

    return (
        <Container>
            <img src="/GymastLogoSmall.png" alt="gymast logo" />
            <section>
                <h4>A Training Notebook</h4>
                <p>Gymast supports aerobic gymnasts and their coaches to keep track on the difficulties that are being practiced.</p>
                <p>All difficulties, that are defined in the Aerobic Code of Points, can be found in the difficulty table and saved to a list.</p>
            </section>
            <GetStartedButton/>
        </Container>
    )
}

const Container = styled.div`
    
    display: grid;
    grid-template-rows: auto 1fr auto;
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    background: var(--secondary-color);
    opacity: 0.85;
    padding: 20px;
    position: absolute;
    bottom: 245px;
    margin: 15px;
    line-height: 1.5;
    justify-items: end;
  
  
    img {
      justify-self: center;
    }
  
        
`