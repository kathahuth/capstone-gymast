import { BiTable } from "react-icons/bi";
import styled from "styled-components/macro";

export default function TableIcon() {
    return(

        <Table>
            <BiTable/>
        </Table>
    )

}

const Table = styled(BiTable)`

  color: #00bfff;
  transform: scale(2); 
`