import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";

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

  render() {
    return (
      <Col>
      <Card style={{ width: "18rem", height: "500px" }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={this.voting}
          />
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Votes: {this.state.votes}</Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
  }
}

export default HornedBeast;
