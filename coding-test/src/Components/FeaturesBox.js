import React from 'react';
import { FormControl, Button, ButtonGroup } from 'react-bootstrap';
import SubredditOptions from './SubredditOptions'

const FeaturesBox = (props) => {

    return(
            <form className="select-reddit-form">
                <label>Select a subreddit</label>
                <FormControl 
                    componentClass="select" 
                    placeholder="select"
                    onChange={props.changeReddit}>
                    <SubredditOptions />
                </FormControl>
                <ButtonGroup vertical>
                    <Button 
                        type="submit" 
                        className="buttonGroup"
                        bsStyle='success' 
                        onClick={props.handleLoadReddits}>
                        Submit
                    </Button>
                    <Button 
                        type="submit" 
                        className="buttonGroup"
                        bsStyle='primary' 
                        onClick={props.handleSort}>
                        Click to Sort by Upvotes
                    </Button>
                </ButtonGroup>
            </form>
        
     
        
     
    )
}
export default FeaturesBox; 