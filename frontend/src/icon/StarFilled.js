import { AiFillStar } from "react-icons/ai";
import styled from "styled-components/macro";

export default function StarFilled() {
    return(

        <Star>
            <AiFillStar/>
        </Star>
    )

}

const Star = styled(AiFillStar)`

  color: #ff38ff;
  transform: scale(2.3);
`
