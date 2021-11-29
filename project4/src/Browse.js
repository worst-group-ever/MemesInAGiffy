import { useState, useEffect } from 'react';
import firebase from './firebase';

function Browse() {

    // enter placeholder data in firebase and get the data form firebase to display in browse

    // const [firebaseObj, setFirebaseObj] = useState([]);

    // pull up to 20 meme entries from firebase
    const [firebaseArray, setFirebaseArray] = useState([]);


    const dbRef = firebase.database().ref();

    useEffect(() => {
        // make a reference to our database

        // add the event listener to watch for changes to our database 
        dbRef.on('value', (response) => {
            // console.log(response.val());

            // variable to store new state
            const newState = []
            const data = response.val();

            // itirate through the data object

            for (let property in data) {
                // push each book name into the new array
                newState.push({
                    memeContent: data[property],
                    memeId: property
                });
            }
            setFirebaseArray(newState);
        })
    }, [])


    const [firebaseSearchQuery, setFirebaseSearchQuery] = useState('');

    const submitToFirebase = () => {
        dbRef.push(firebaseSearchQuery)
    }

    const purgeFirebase = () => {
        dbRef.remove();
    }

    return (
        <>
            <div className="browseContainer">
                <h1>Browse Page</h1>
                <h2>vote for your fav meme</h2>

                <input type="text" onChange={(event) => { setFirebaseSearchQuery(event.target.value) }} />

                <button onClick={submitToFirebase}>send to firebase</button>

                <button onClick={purgeFirebase}>reset ALL fb data</button>

                {
                    firebaseArray.map((entry) => {
                        return (
                            <h1>{`${entry.memeId}, ${entry.memeContent}`}</h1>
                        )
                    })
                }

            </div>
        </>
    )

}

export default Browse;
