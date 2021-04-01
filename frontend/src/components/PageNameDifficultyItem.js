import styled from "styled-components/macro";

export default function PageNameDifficultyItem() {

    return (
        <PageNameWrapper>
            <h4>Choose a Difficulty</h4>
        </PageNameWrapper>
    )
}

const PageNameWrapper = styled.div`
  
  background: var(--primary-color);
  padding: 0 25px;
`