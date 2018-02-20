import { sortBy, truncate } from 'lodash'


export const sortReddit = (sorted, redditData) => {
    let sortedReddits;
    sorted ? 
    (sortedReddits = sortBy(redditData, [ o => o.ups])
        ) : (
    sortedReddits = sortBy(redditData, [o => -o.ups]));
    return sortedReddits;
} 

export const shorten = (item, length, omission) => {
    const textShortened = truncate(item, { 'length': length, 'omission': omission } )
    return textShortened; 
}

export const humanReadableTime = (epoch) => {
    //convert to ms
    const convertToSeconds = (epoch*1000)
    //new Date () converts to EST (based on system settings)
    const formattedDate = new Date(convertToSeconds).toString();
    return formattedDate;
}

