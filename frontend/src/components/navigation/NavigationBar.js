import styled from "styled-components/macro";
import LinkTable from "./LinkTable";
import LinkAccount from "./LinkAccount";

export default function NavigationBar() {
    return (
        <Wrapper>
            <LinkTable/>
            <LinkAccount/>
        </Wrapper>
    )
}

const Wrapper = styled.form`
  background: var(--primary-color);
  padding: 15px 25px;
  border-top: 1px solid var(--secondary-color);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`