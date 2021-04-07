import {Link} from "react-router-dom";
import AccountIcon from "../../icon/Account";

export default function LinkAccount() {

    return (
        <Link to='/gymnast/${username}'><AccountIcon/></Link>
    )
}

/*<Link to='/gymnast/:username'><AccountIcon/></Link>*/