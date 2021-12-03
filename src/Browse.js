import { lowerCase } from 'lodash';
import { useState, useEffect } from 'react';
import firebase from './firebase';

function Browse() {
    // enter placeholder data in firebase and get the data form firebase to display in browse
    const [firebaseObj, setFirebaseObj] = useState([]);

    // Browse page search bar functions:
    const [browseQuery, setBrowseQuery] = useState('');
    const [filteredMemes, setFilteredMemes] = useState([]);

    // filtering through stored creations for search in Browse page
    const applyFilter = (event) => {
        event.preventDefault();
        if (browseQuery === ''){
            setFilteredMemes(firebaseObj)
        } else {
            let lowerCaseQuery = browseQuery.toLowerCase()
            let placeholder = firebaseObj.filter((entry) => {
                return (
                    String(entry.madeMeme[0]).toLowerCase().includes(lowerCaseQuery) || String(entry.madeMeme[1]).toLowerCase().includes(lowerCaseQuery)
                )
            })
            setFilteredMemes(placeholder)
        }
    }

    // function to update the number of up/downvotes on a meme
    const thumbs = (number, currentVote, e) => {
        const id = (e.target.value)
        firebase.database().ref(`${id}/3`).set(number + Number(currentVote));
    }

    // making Firebase data an array
    useEffect(() => {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const newState = [];

            const data = (response.val())

            for (let entry in data) {
                newState.push({
                    madeMeme: data[entry],
                    memeID: entry,
                });
            }

            setFirebaseObj(newState);
            setFilteredMemes(newState);
        })
    }, [])

    
    return (
        <>
            <div className="browseContainer">
                <h1>Browse Page</h1>
                <h2>vote for your fav meme</h2>
                <div className="browseMemes">

                    <h2>Searching for:{browseQuery}</h2>

                    <form action="submit">
                        <label htmlFor="browsePageSearch">Search for your Meme Template:</label>
                        <input type="text" name="browsePageSearch" id="browsePageSearch"
                            onChange={(e) => setBrowseQuery(e.target.value)} value={browseQuery}
                        />
                        <button onClick={applyFilter}>Search</button>
                    </form>
                </div>
                <div className="createdMemes">
                    <ul>
                        {filteredMemes.length < 1 ? <h2>Sorry no memes! Please try again.</h2> : null}

                        {filteredMemes.map((memes) => {
                            return (
                                <li>
                                    <div className="meme-container">
                                        <div className="internalcontainer">
                                            <img src={memes.madeMeme[2]} alt="" className="meme" />
                                            <div className="content_container">
                                                <h2>{memes.madeMeme[0]}</h2>
                                                <h3>{memes.madeMeme[1]}</h3>
                                            </div>
                                            <div className="voter">
                                                <button className="far fa-thumbs-up" value={memes.memeID} onClick={(event) => { thumbs(1, memes.madeMeme[3], event) }}></button>
                                                <h3>{memes.madeMeme[3]}</h3>
                                                <button className="far fa-thumbs-down" value={memes.memeID} onClick={(event) => { thumbs(-1, memes.madeMeme[3], event) }}></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Browse;
