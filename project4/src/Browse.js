import { useState, useEffect } from 'react';
import firebase from './firebase';

function Browse() {

    // enter placeholder data in firebase and get the data form firebase to display in browse

    const [firebaseObj, setFirebaseObj] = useState([]);
    const [userInput, setUserInput] = useState('');
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    const handleSubmit = (e) =>{
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

    // console.log(firebaseObj) <- leaving so we can uncomment if any issues arise

        return (
            <>
                <div className="browseContainer">
                    <h1>Browse Page</h1>
                    <h2>vote for your fav meme</h2>
                    <div className="createdMemes">
                        <ul>
                            {firebaseObj.map((memes) =>{
                                return (
                                    <li key={memes.memeID}>{memes.madeMeme}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )

}

export default Browse;
