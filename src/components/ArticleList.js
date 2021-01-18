import React from 'react'
import Article from './Article'

function ArticleList({data}){
    const content = data.map((stuff)=>< Article 
    title={stuff.title} 
    date={stuff.date} 
    time={stuff.minutes} 
    preview={stuff.preview} 
    />)
    return(
        <main>
            {content}
        </main>
    )
}


export default ArticleList;;