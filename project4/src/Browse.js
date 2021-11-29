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
            // console.log(response.val())

            for (let entry in data) {
                // console.log(entry, firebaseObj[entry]);
                // newState.push(firebaseObj[entry]);
                newState.push({
                    madeMeme: data[entry],
                    memeID: entry,
                });
                    
            }
            setFirebaseObj(newState);
        })
    }, [])


    // pull up to 20 meme entries from firebase

    // const [firebaseArray, setFirebaseArray] = useState([]);

    console.log(firebaseObj)

    // // iterate through the data object
    // for (let property in data) {
    //     // push each book name into the new array
    //     newState.push ({
    //       bookTitle: data[property],
    //       bookId: property
    //     });
    //   }


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
