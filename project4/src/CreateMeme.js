function CreateMeme() {


    // need way for picture user click to show up in memeCreator

    // pass gif to <memeContainer> component

    return(
        <>
            <h2>Create Your Meme</h2>
            <div className="memeCreator">
                <img src="" alt="" />
                <div className="memeText">
                <form action="submit">
                    <label htmlFor="caption">Caption:</label>
                    <input required type="text" name="memeCaption" id="memeCaption" />
                    <input required type="text" name="memeTags" id="memeTags" />
                    <button>Make Me a Meme!</button>
                    <button>Clear Text</button>
                </form>
                </div>
            </div>
        </>
    )
    
}

export default CreateMeme;