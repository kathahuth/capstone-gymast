import { BiUser } from "react-icons/bi";
import styled from "styled-components/macro";

export default function AccountIcon() {
    return(

        <Account>
            <BiUser/>
        </Account>
    )

}

const Account = styled(BiUser)`

  color: #00bfff;
  transform: scale(2);
`