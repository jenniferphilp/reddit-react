import { sortBy, truncate } from 'lodash'


export const sortReddit = (sorted, redditData) => {
    let sortedReddits;
    sorted ? 
    (sortedReddits = sortBy(redditData, [ o => o.ups])
        ) : (
    sortedReddits = sortBy(redditData, [o => -o.ups]));
    return sortedReddits;
} 

export const shortenParagraph = (item) => {
    const textShortened = truncate(item, { 'length': 500 } )
    return textShortened; 
}

export const humanReadableEST = (epoch) => {
    const convertToEST = (epoch*1000)-18000; 
    const formattedDate = truncate(new Date(convertToEST).toString() , {'length': 25, 'omission': ' ' });
    return formattedDate;
}