import styled from "styled-components/macro";
import TableIcon from "../icon/Table";
import AccountIcon from "../icon/Account";

export default function NavigationBar() {
    return (
        <Wrapper>
            <TableIcon/>
            <AccountIcon/>
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