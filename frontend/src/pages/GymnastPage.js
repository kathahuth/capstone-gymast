import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {getUserByUserName} from "../services/UserDbApiService";
import styled from "styled-components/macro";

export default function GymnastPage() {

    const { username } = useParams()
    const [userData, setUserData] = useState()

    useEffect(() => {
        getUserByUserName(username).then(setUserData)
    }, [username])

    if (!userData) {
        return (
            <section>
                <p>Loading Gymnast Data</p>
            </section>
        )
    }

    return (

        <UserDetailsContainer>
            <span className="user-name">{userData.username}</span>
        </UserDetailsContainer>
    )
}

const UserDetailsContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: left;
    
    .user-name {
      margin-left: 16px;
    }
    
`