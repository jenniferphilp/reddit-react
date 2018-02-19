import React from 'react';

const SubredditOptions = () => {
    const options = ['nosleep', 'toronto', 'funny', 'worldnews', 'books']
   
    return options.map((subreddit) => {
            return(
                <option key={subreddit} value={subreddit}>
                    {subreddit}
                </option>
            )
        }) 
}
export default SubredditOptions;