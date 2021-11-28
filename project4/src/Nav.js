import Browse from "./Browse";
import CreateSearch from "./CreateSearch";

function Nav(props){

    return(
        <>
        <h2>we're in {props.mode} mode</h2>
        {

            props.mode === 'browse'
            ? <Browse />
            : <CreateSearch />

        }
        </>
    )

}

export default Nav;