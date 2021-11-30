import firebase from "./firebase.js";
import { useState } from "react";

function MemeTemplate(props) {
  const dbRef = firebase.database().ref();

  const [memeCaption, setMemeCaption] = useState(props.caption);
  const [memeTags, setMemeTags] = useState(props.tags)
  // const [gifUrl, setGifUrl] = useState(props.gifUrl);

  // props.picked is URL; change later

  // url
  // caption
  // tags
  let memeData = [];

  const saveToFirebase = (event) => {
    event.preventDefault();
    console.log(memeCaption, memeTags, props.gifUrl);

    // caption, tags, url, vote
    dbRef.push([memeCaption, memeTags, props.gifUrl, 0])
  };

  return (
    <>
      <h2>were in meme template</h2>

      <div className="wrapper">
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
          <button>Make Me a Meme!</button>
          <button>Clear Text</button>

          <button type="submit">
            Save to Firebase
          </button>
        </form>
      </div>
    </>
  );
}

export default MemeTemplate;
