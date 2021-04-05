import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components/macro";

export default function ArrowRight() {
    return (

        <Arrow>
            <FiChevronRight/>
        </Arrow>

    )
}

const Arrow = styled(FiChevronRight)`
  
  color: #00bfff;
  transform: scale(1.5);
`
