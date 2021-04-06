import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getUserByUserName} from "../services/UserDbApiService";
import styled from "styled-components/macro";

export default function GymnastPage(){

    const { username } = useParams()
    const [userData, setUserData] = useState()

    useEffect(() => {
    getUserByUserName(username).then((response) => {setUserData(response)})
    }, [])

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
                <span className="user-name">{userData.gymnastname}</span>
            </UserDetailsContainer>
        </>
    )
}

const UserDetailsContainer = styled.section`

    background: var(--primary-color);
    padding: 15px 25px;
`
