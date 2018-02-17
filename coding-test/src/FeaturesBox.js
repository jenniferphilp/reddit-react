import React from 'react';
import { FormControl, Button } from 'react-bootstrap';


const FeaturesBox = (props) => {

    const subredditOptions = ['nosleep', 'toronto', 'funny', 'worldnews', 'books']
    
    //@TODO separate option and Button into their own components
    return(
            <form className="select-reddit-form">
                <label>Select a subreddit</label>
                <FormControl 
                    componentClass="select" 
                    placeholder="select"
                    onChange={props.changeReddit}>
            
                    {subredditOptions.map((subreddit, i) => {
                        return(

                            <option 
                                key={i}
                                value={subreddit}>
                                {subreddit}
                            </option>
                        )
                    })}
                </FormControl>
                <Button 
                    type="submit" 
                    className="successButton"
                    bsStyle='success' 
                    onClick={props.handleLoadReddits}>
                    Submit
                </Button>
            </form>
        
     
        
     
    )
}
export default FeaturesBox; 