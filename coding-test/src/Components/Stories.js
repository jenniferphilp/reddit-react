import React from 'react';

import Story from './Story'
import { shortenParagraph, humanReadableEST } from '../helpers.js'


const Stories = ({ redditItems }) => {
    return(
        redditItems.map((item) => {
            const textShortened = shortenParagraph(item.selftext);
            const formattedDate = humanReadableEST(item.created);
            
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
