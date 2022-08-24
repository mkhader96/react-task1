import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {


    return (
      <Modal show={this.props.displayModal} onHide={this.props.hideModal}>
        <Modal.Dialog>
          <Modal.Header>
            <h2>{this.props.selectedBeast.title}</h2>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: "26rem" }}>
              <Card.Img src={this.props.selectedBeast.image_url} />
              <Card.Body>
                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                <Card.Text>{this.props.selectedBeast.description}</Card.Text>
                
                <Button onClick={this.props.hideModal} variant="primary" size="lg" block>
                  See you later
                </Button>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeast;
