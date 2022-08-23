import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  voting = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
    
    
  };
  seeMe = () => {
    this.props.showModal(this.props.title);
  }

  render() {
    return (
      <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={this.voting}
          />
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Votes: {this.state.votes}</Card.Text>
          <Button variant="primary" onClick={this.seeMe}>See Me!</Button>
          <Button variant="warning" onClick={this.voting}>Vote for me!</Button>

        </Card.Body>
      </Card>
      </Col>
    );
  }
}

export default HornedBeast;
