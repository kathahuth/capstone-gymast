import WatchlistItem from "./WatchlistItem";
import styled from "styled-components/macro";

export default function Watchlist({watchlistDifficulty}) {
    return (
        <Wrapper>
            {watchlistDifficulty.map((difficultyItem) => (
                <WatchlistItem key={difficultyItem} difficultyItem={difficultyItem}/>))}
        </Wrapper>
    )
}

const Wrapper = styled.ul`

    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    background: var(--secondary-color);
    overflow-y: scroll;
    padding: 0 25px;
    list-style: none;
    display: flex;
`