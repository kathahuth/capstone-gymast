import WatchlistItem from "./WatchlistItem";
import WatchListStyled from "../../form/WatchListStyled";


export default function WatchlistBoard({difficulties}) {

    return (
        <WatchListStyled>
            {difficulties.map((difficulty) => (
                <li key={difficulty}>
                    <WatchlistItem difficulty={difficulty}/>
                </li>
                )
            )}
        </WatchListStyled>
    )

}