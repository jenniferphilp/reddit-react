import React from 'react';

const Story = ({ formattedDate, item, textShortened }) => {
   
    return(
        <div 
            className="story" 
            key={item.id}>
            
            <h2>{item.title} </h2>
            <h3 
                className="date-added">
                Date Added: {formattedDate} 
                {item.thumbnail.includes('.jpg') ? 
                    (<img alt = "reddit"
                        className = "funny-image"
                        src = {item.thumbnail}
                    /> 
                    ) : null}
            </h3>

            <p>By: {item.author}</p>
            <span 
                 className="upvotes text-center">{item.ups}</span>          
            <p>{textShortened}</p>
            <a href={item.url} target="blank">Click for full story</a>
        </div>
    )
}
export default Story;