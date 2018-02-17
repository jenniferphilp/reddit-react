import React from 'react';
import _ from 'lodash'
import Story from './Story'


const Stories = (props) => {
    return(
        props.redditItems.map((item) => {
            const textShortened = _.truncate(item.selftext, { 'length': 500 } )
            const formattedDate = _.truncate(new Date(item.created*1000).toString(), {'length': 25, 'omission': ' ' });

            return(
                <Story
                    key={item.id}
                    item = {item}
                    formattedDate = {formattedDate}
                    textShortened = {textShortened}
                />
                )
            })
        )
    }
 export default Stories;   
