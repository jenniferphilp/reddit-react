import React from 'react';
import { FormControl, Button, ButtonGroup } from 'react-bootstrap';
import SubredditOptions from './SubredditOptions'

const FeaturesBox = (props) => {

    return(
            <form>
                <label>Select a subreddit</label>
                <FormControl 
                    componentClass="select" 
                    placeholder="select"
                    onChange={props.changeReddit}>
                    <SubredditOptions />
                </FormControl>
                <ButtonGroup vertical className="button-group-container">
                    <Button 
                        type="submit" 
                        className="button-group"
                        bsStyle='success' 
                        onClick={props.handleLoadReddits}>
                        Submit
                    </Button>
                    <Button 
                        type="button"
                        className="button-group"
                        bsStyle='primary' 
                        onClick={props.handleSort}>
                        sort by upvotes<br/>
                        {props.sorted ? "(low to high)": "(high to low)"}
                    </Button>
                </ButtonGroup>
            </form>
        
     
        
     
    )
}
export default FeaturesBox; 