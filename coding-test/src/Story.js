import React from 'react';


const Story = ( props ) => {
    const { item } = props;
    // const textShortened = _.truncate(item.selftext, { 'length': 500 } )
    // const formattedDate = _.truncate(new Date(item.created*1000).toString(), {'length': 25, 'omission': ' ' })

    return(
        <div className="story" key={props.item.id}>
            <h2>{props.item.title} </h2>
            <h3 className="dateAdded">Date Added: {props.formattedDate}</h3>
            <p>By: {props.item.author}  <div className="upvotes text-center">{props.item.ups}</div></p>
            <p>{props.textShortened}</p>
            <a href={props.item.url} target="blank">Click for full story</a>
        </div>
    )
}
export default Story;