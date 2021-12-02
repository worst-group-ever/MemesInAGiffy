import firebase from "./firebase.js";
import { useState } from "react";

function MemeTemplate(props) {
  const dbRef = firebase.database().ref();

  const [memeCaption, setMemeCaption] = useState(props.caption);
  const [memeTags, setMemeTags] = useState(props.tags)

  const saveToFirebase = (event) => {
    event.preventDefault();

    // caption, tags, url, vote
    dbRef.push([memeCaption, memeTags, props.gifUrl, 0])
  };

  return (
    <>
      <div className="wrapper memeTemplate">

        {/* click on this button to close the meme template window */}
        <button onClick={() => {props.closeMemeTemplate(false)}}>
          <i class="fas fa-times fa-2x"></i>
        </button>

        <img src={props.gifUrl} alt="" />
        <form action="submit" onSubmit={(event) => saveToFirebase(event)}>
          <label htmlFor="caption">Caption:</label>
          <input
            required
            type="text"
            name="memeCaption"
            id="memeCaption"
            value={memeCaption}
            onChange={(event) => {
              setMemeCaption(event.target.value);
            }}
          />
          <br />
          <label htmlFor="caption">Tags:</label>
          <input
            required
            type="text"
            name="memeTags"
            id="memeTags"
            value={memeTags}
            onChange={(event) => {
              setMemeTags(event.target.value);
            }}
          />
          {/* <button>Make Me a Meme!</button>
          <button>Clear Text</button> */}

          <button type="submit">
            Save to Firebase
          </button>
        </form>
      </div>
    </>
  );
}

export default MemeTemplate;
