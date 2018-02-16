//external dependencies
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

//internal dependencies
import './App.css';
import Data from './Data'
import Header from './Header'

class App extends Component {
//     constructor(props) {
//     super(props)
//     this.state={


//     }
// }
    
    render() {
    return (
      <Grid>
        <Header />
        <Row>
            <Col sm={8} smOffset={2}>
                <Data />
            </Col>
        </Row>

        
      </Grid>
    );
  }
}

export default App;
