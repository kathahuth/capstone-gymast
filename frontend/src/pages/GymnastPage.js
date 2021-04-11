import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getUserByUserName} from "../services/UserDbApiService";
import styled from "styled-components/macro";
import Watchlist from "../components/watchlists/Watchlist";

export default function GymnastPage(){

    const { username } = useParams()
    const [userData, setUserData] = useState()
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    useEffect(() => {
    if (!dataIsLoaded) {
    getUserByUserName(username).then((response) => {setUserData(response)})
        setDataIsLoaded(true)
    }}, [dataIsLoaded])

    if (!userData) {
        return (
            <section>
                <p>Loading Gymnast Data</p>
            </section>
        )
    }

    return (
        <>
            <UserDetailsContainer>
                <span className="user-name">{userData.gymnastname}'s list of difficulties</span>
            </UserDetailsContainer>
            <WatchlistContainer>
            <Watchlist/>
            </WatchlistContainer>
        </>
    )
}

const UserDetailsContainer = styled.section`

    background: var(--primary-color);
    padding: 30px 25px;
    
    .user-name {
      color: #00bfff;
    }
`

const WatchlistContainer = styled.section`
  background: var(--primary-color);
  padding: 0px 25px;
`
