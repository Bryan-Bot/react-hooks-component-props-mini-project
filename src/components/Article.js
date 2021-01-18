import React from 'react'

function Article({title, date, time, preview}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}- ☕️{time} mins</small>
            <p>{preview}</p>
        </article>
    )
}

Article.defaultProps = {
    date: "January 1, 1970"
}
export default Article