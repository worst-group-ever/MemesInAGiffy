
import { Link } from 'react-router-dom'

const Catalogue = ({memes}) => {
    return(
        <ul className="catalogue">
            {
                memes.map((giphs) =>{
                    return(
                        <li key={giphs.id}>
                            <Link to={`/create/${giphs.id}`}>
                                <img src={`https://api.giphy.com/v1/gifs/search?`}>
                                </img>
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}