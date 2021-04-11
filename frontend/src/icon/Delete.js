import {AiOutlineDelete} from "react-icons/ai";
import styled from "styled-components/macro";

export default function Delete() {

    return(
        <DeleteIcon>
            <AiOutlineDelete/>
        </DeleteIcon>
    )
}

const DeleteIcon = styled(AiOutlineDelete)`

  color: #00bfff;
  transform: scale(1.5);
`