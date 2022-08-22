import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "./data.json";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
        votes : 0
    }
}

incrementVotes = () => {
    this.setState({
        votes : this.state.votes + 1
    })
}
  render() {
    return (
      <Row className="row" >
        <div  style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 15 }}>
          {data.map((jsonObject) => {
            return (
              
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={jsonObject.image_url} onClick={this.incrementVotes}/>
                  <Card.Body>
                    <Card.Title>{jsonObject.title}</Card.Title>
                    <Card.Text>{jsonObject.description}</Card.Text>
                    <Card.Text>Votes: {this.state.votes}</Card.Text>
                  </Card.Body>
                </Card>
              
            );
          })}
        </div>
      </Row>
    );
  }
}

export default HornedBeast;
