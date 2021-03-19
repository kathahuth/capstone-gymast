import styled from "styled-components/macro";

export default function NavigationBar() {
    return (
        <Navigation>Navigation Bar (comes later)</Navigation>
    )
}

const Navigation = styled.form`
  background: var(--primary-color);
  padding: 0 25px;
  border-top: 1px solid var(--secondary-color);
`