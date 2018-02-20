import React from 'react';

import Story from './Story'
import { shorten, humanReadableTime } from '../helpers.js'

const Stories = ({ redditItems }) => {
    return(
        redditItems.map((item) => {
            const textShortened = shorten(item.selftext, 500, '...');
            const formattedDate = humanReadableTime(item.created_utc);
            const shortenedDate = shorten(formattedDate, 25, '')
            
            return(
                <Story
                    key={item.id}
                    item={item}
                    formattedDate={shortenedDate}
                    textShortened={textShortened}
                />)
            })
        )
    }
 export default Stories;   
