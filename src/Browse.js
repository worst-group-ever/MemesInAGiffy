import { useState, useEffect } from 'react';
import firebase from './firebase';

function Browse() {

    // enter placeholder data in firebase and get the data form firebase to display in browse

    const [firebaseObj, setFirebaseObj] = useState([]);

    // function to update the number of up/downvotes on a meme

    const thumbs = (number, currentVote, e) => {
        const id = (e.target.value)
        firebase.database().ref(`${id}/3`).set(number + Number(currentVote));
    }

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
        })
    }, [])

    return (
        <>
            <div className="browseContainer">
                <h1>Browse Page</h1>
                <h2>vote for your fav meme</h2>
                <div className="createdMemes">
                    <ul>
                        {firebaseObj.map((memes) => {
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
                                                <button className="far fa-thumbs-up" value={memes.memeID} onClick={(event) => { thumbs(1, memes.madeMeme[3], event)}}></button>
                                                <h3>{memes.madeMeme[3]}</h3>
                                                <button className="far fa-thumbs-down" value={memes.memeID} onClick={(event) => { thumbs(-1, memes.madeMeme[3], event)}}></button>
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
