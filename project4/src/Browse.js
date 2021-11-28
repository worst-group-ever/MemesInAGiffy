import { useState, useEffect } from 'react';
import firebase from './firebase';

function Browse() {

    // enter placeholder data in firebase and get the data form firebase to display in browse

    const [firebaseObj, setFirebaseObj] = useState([]);



    useEffect(() => {

        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {

            setFirebaseObj(response.val())
            // console.log(response.val())

        })
    }, [])


    // pull up to 20 meme entries from firebase

    const [firebaseArray, setFirebaseArray] = useState([]);

    console.log(firebaseObj)
    for (let entry in firebaseObj) {
        console.log(entry, firebaseObj[entry])
    }

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
                </div>
            </>
        )

}

export default Browse;
