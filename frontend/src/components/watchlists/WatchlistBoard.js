import WatchlistItem from "./WatchlistItem";
import WatchListStyled from "../../form/WatchListStyled";
import Delete from "../../icon/Delete";


export default function WatchlistBoard({difficulties}) {

    return (
        <WatchListStyled>
            {difficulties.map((difficulty) => (
                <li key={difficulty}>
                    <WatchlistItem difficulty={difficulty}/>
                    <Delete/>
                </li>
                )
            )}
        </WatchListStyled>
    )

}