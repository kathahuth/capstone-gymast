import styled from "styled-components/macro";
import ArrowLeft from "../icon/ArrowLeft";

export default function PageNameDifficultyItem() {

    return (
        <PageNameWrapper>
            <ArrowLeft />
            <h4>Add a difficulty to your watchlist</h4>
        </PageNameWrapper>
    )
}

const PageNameWrapper = styled.div`
  
  background: var(--primary-color);
  padding: 0 25px;
  
  h4 {
  margin: 15px 0px 20px;
`