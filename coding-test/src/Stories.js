import React from 'react';
import _ from 'lodash'
import Story from './Story'


const Stories = (props) => {
return(
    props.redditItems.map((item) => {
    
    let textShortened = _.truncate(item.selftext, { 'length': 500 } )
    let formattedDate = _.truncate(new Date(item.created*1000).toString(), {'length': 25, 'omission': ' ' });

        return(
            <Story
                item = {item}
                formattedDate = {formattedDate}
                textShortened = {textShortened}
            />
            )
        })
    )
}
 export default Stories;   
