//external dependencies
import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import axios from 'axios';

//internal dependencies
import './App.css';
import Data from './Data';
import Header from './Header';
import Dropdown from './Dropdown';
import Story from './Story';

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
        selectedSubreddit: '',
        redditItems: []
    
    }
}

// componentDidMount(){
getData = () => {
    const subreddit = this.state.selectedSubreddit;
    axios.get(`https://www.reddit.com/r/${subreddit}.json`)
    .then(results => {
        const redditItems = results.data.data.children.map(item => item.data) 
            this.setState({ redditItems })
        })   
}

changeReddit = (e) => {
   this.setState({
       selectedSubreddit: e.target.value
   })

}

submitSubreddit = () => {
    //this.getData();
}
    
render() {
    return (
      <Grid>
        <Header />
        <Dropdown 
            changeReddit={this.changeReddit}
        />
        <Row>
            <Col sm={8} smOffset={2}>
                <Story 
                    redditItems={this.state.redditItems}
                />
            </Col>
        </Row>
        

        
      </Grid>
    );
  }
}

export default App;
