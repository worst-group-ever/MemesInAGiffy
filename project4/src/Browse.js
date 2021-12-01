import { useState, useEffect } from 'react';
import firebase from './firebase';

function Browse() {

    // enter placeholder data in firebase and get the data form firebase to display in browse

    const [firebaseObj, setFirebaseObj] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    const handleLikes = () => {
        setLikes(likes + 1);
    }

    const handleDislikes = () => {
        setDislikes(dislikes + 1);
    }
    // Pushing new creation into Firebase/preventing page from refreshing
    const handleSubmit = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(userInput);

        setUserInput('');
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

    console.log(firebaseObj)
    // <- leaving so we can uncomment if any issues arise

    return (
        <>
            <div className="browseContainer">
                <h1>Browse Page</h1>
                <h2>vote for your fav meme</h2>
                <div className="createdMemes">
                    <ul>
                        {firebaseObj.map((memes) => {
                            return (
                                <li key={memes.memeID}>
                                    <div className="meme-container">
                                        <div className="internalcontainer">
                                            <img src={memes.madeMeme[2]} alt="" className="meme" />
                                            <div className="content_container">
                                                <h2>{memes.madeMeme[0]}</h2>
                                                <h3>{memes.madeMeme[1]}</h3>
                                            </div>
                                            <div className="voter">

                                                

                                                <i className="far fa-thumbs-up" onClick={handleLikes}>{likes}</i>
                                                <i className="far fa-thumbs-down" onClick={handleDislikes}>{dislikes}</i>
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
