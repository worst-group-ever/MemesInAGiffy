// function DisplayPhotos({photos}){
//     return (
//         <section>
//             {/* use a ternary operator to check if the length of the photo array is 0 (aka there are no photos in the array) display a message saying there are no photos */}
//             {/* otherwise display the photos! */}
//             {
//                 photos.length === 0 ? (
//                     <h2>No Photos Found!</h2>
//                 ) : (
//                         // map through the photos array
//                         // return the image with alt text
//                     <>
//                         <h2>Photos!</h2>
//                         <div className="meme-container">
//                             {
//                                 photos.map(image => {
//                                     return (
//                                         <div className="internalcontainer" key={image.id}>
//                                             <img src={giphyGif.images.original.url} alt={images.alt_description}/>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
                        
//                     </>
//                 )
//             }

//         </section>
//     )
// }

// export default DisplayPhotos;