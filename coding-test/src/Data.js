import React, { Component } from 'react';
import axios from 'axios';
import Story from './Story';


class Data extends Component{

    constructor(){
        super()

        this.state={
            redditItems: []
        }
    }


    componentDidMount(){

        axios.get('https://www.reddit.com/r/nosleep.json')
        .then(results => {
            const redditItems = results.data.data.children.map(item => item.data) 
                this.setState({ redditItems })
            })
        }
    
render(){
    return(
            <Story 
                redditItems={this.state.redditItems}
            />

    )
}

}
export default Data; 