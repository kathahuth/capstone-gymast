import styled from "styled-components/macro";

export default function PageNameGroup() {

    return (
        <PageNameWrapper>
            <h4>Choose a Difficulty Group</h4>
        </PageNameWrapper>
    )
}

const PageNameWrapper = styled.div`
  
  background: var(--primary-color);
  padding: 0 25px;
`