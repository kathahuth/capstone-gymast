import { AiFillStar } from "react-icons/ai";
import styled from "styled-components/macro";

export default function StarIcon() {
    return(

        <Star>
            <AiFillStar/>
        </Star>
    )

}

const Star = styled(AiFillStar)`

  color: #00bfff;
  transform: scale(1.5);
`
