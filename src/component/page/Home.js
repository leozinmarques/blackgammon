import React, {Component} from 'react';
import {Grid,Row,Col, Image} from 'react-bootstrap';
import '../../style/css/Home.css';
import botao from '../../style/image/índice.jpeg'

export default class Gamao extends Component{
  constructor(){
    super()
    this.state = {
      superior: [5,0,0,0,0,0,0,0,1,2,3,3]
    }
  }

  render(){
    return(
      <Grid>
        <Row className="superior">
          {this.state.superior.map((i,index) => (
            <Col className="fila" md={1}lg={1}>
              {
                Array(i).fill(0).map(() => (
                  <Image src={botao}/>
                ))
              }
            </Col>
          ))
          }
        </Row>
      </Grid>
    );
  }
}
