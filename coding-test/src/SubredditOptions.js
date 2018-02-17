import React from 'react';


const SubredditOptions = () => {
    const options = ['nosleep', 'toronto', 'funny', 'worldnews', 'books']

    return(
        options.map((subreddit, i) => {
            return(
                <option 
                    key={i}
                    value={subreddit}>
                    {subreddit}
                </option>
            )
        })
    )
}
export default SubredditOptions;