import styled from "styled-components/macro";
import BackButton from "../button/BackButton";

export default function PageNameCategory() {

    return (
        <PageNameWrapper>
            <BackButton />
            <h4>Choose a difficulty category</h4>
        </PageNameWrapper>
    )
}

const PageNameWrapper = styled.div`
  
  background: var(--primary-color);
  padding: 0 25px;
    
  h4 {
  margin: 20px 0px 20px;
  }
`