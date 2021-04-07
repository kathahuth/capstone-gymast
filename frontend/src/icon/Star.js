import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components/macro";

export default function StarIcon() {
    return(

        <Star>
            <AiOutlineStar/>
        </Star>
    )

}

const Star = styled(AiOutlineStar)`

  color: #00bfff;
  transform: scale(2.3);
`
