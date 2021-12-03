function CloseTemplate(props){

    setTimeout(() => {
        props.closeCloseTemplate(false)
    },1500)

    return(
        <div className='closeTemplate'>
            <h2>Meme made. We're closign now</h2>
        </div>
    )
}

export default CloseTemplate;