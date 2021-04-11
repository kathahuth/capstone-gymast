import styled from "styled-components/macro";
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {getUserByUserName} from "../../services/UserDbApiService";
import WatchlistBoard from "./WatchlistBoard";

export default function Watchlist() {

    const [difficulties, setDifficulties] = useState([])
    const {username} = useParams();

    useEffect(() => {
        getUserByUserName(username)
            .then(data => setDifficulties(data.difficulties))
            .catch((error) => console.error(error))
    }, [])

    return (
        <Wrapper>
            <WatchlistBoard difficulties={difficulties} />
        </Wrapper>
    )
}

const Wrapper = styled.ul`

  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 0 8px 3px #2f3235;
  background: var(--secondary-color);
  overflow-y: scroll;
  padding: 15px 25px;
  margin: 0px
`