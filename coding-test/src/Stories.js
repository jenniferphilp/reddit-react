import React from 'react';
import _ from 'lodash'
//import { Col } from 'react-bootstrap';

const Stories = (props) => {
return(
    props.redditItems.map((item) => {
    let textShortened = _.truncate(item.selftext, { 'length': 500 } )
    let formattedDate = _.truncate(new Date(item.created*1000).toString(), {'length': 25, 'omission': ' ' });
    //let formattedDate = date.toString();
    return(
        <div className="story" key={item.id}>
            <h2>{item.title} </h2>
            <h3 className="dateAdded">Date Added: {formattedDate}</h3>
            <p>By: {item.author}  <div className="upvotes text-center">{item.ups}</div></p>
            <p>{textShortened}</p>
            <a href={item.url} target="blank">Click for full story</a>
        </div>)
        })
    )
}
 export default Stories;   
