import React from 'react';
import _ from 'lodash'
//import { Col } from 'react-bootstrap';

const Story = (props) => {
return(
    props.redditItems.map((item) => {
    let textShortened = _.truncate(item.selftext, { 'length': 500 } )
    let date = new Date(item.created*1000);
    let formattedDate = date.toString();
    return(
        <div className="story" key={item.id}>
            <h2>{item.title}</h2>
            <h3>Date Added: {formattedDate}</h3>
            <p>{item.author}</p>
            <p>{textShortened}</p>
            <a href={item.url} target="blank">Click for full story</a>
        </div>)
        })
    )
}
 export default Story;   
