import firebase from "firebase";
import { useState, useEffect } from 'react';

function BrowseSearch(){
    const [fbQuery, setFbQuery] = useState([]);
    const sendQueryToFirebase = (event) => {
        event.preventDefault();
    }
}