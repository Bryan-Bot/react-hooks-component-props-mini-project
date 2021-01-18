import React from 'react'

function About ({about, image}){
    return(
       <aside>
           <img alt="blog logo" src={image} />
           <p>{about}</p>
       </aside>
    )
}
export default About