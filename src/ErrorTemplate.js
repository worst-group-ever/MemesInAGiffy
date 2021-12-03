function ErrorTemplate(props){

    setTimeout(() => {
        props.closeErrorTemplate(false)
    },1500)

    return(
        <div className='closeTemplate'>
            <h2>GIPHY COULDNT FIND THAT FOR YOU</h2>
        </div>
    )
}

export default ErrorTemplate;