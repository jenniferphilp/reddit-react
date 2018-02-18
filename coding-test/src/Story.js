import React from 'react';
import _ from 'lodash'
//import { Col } from 'react-bootstrap';

const Story = (props) => {
return(

    props.redditItems.map((item) => {

       let textShortened = _.truncate(item.selftext, { 'length': 500 } )

    return(
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
            <p>{textShortened}</p>
            <p>Click for read full story</p>
        </div>)
        })
    )
}
 export default Story;   
