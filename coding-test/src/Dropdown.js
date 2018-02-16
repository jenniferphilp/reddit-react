import React from 'react';
import { FormControl, ControlLabel, Col } from 'react-bootstrap';


const Dropdown = (props) => {

    //const { subreddits } = props; 
    const subredditOptions = ['nosleep', 'toronto', 'funny', 'worldnews', 'books']
    
    return(
       <Col sm={2} className="dropdownBox">
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
        </Col>
     
        
     
    )
}
export default Dropdown; 