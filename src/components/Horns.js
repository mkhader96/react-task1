import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import data from './data.json'

class HornCount extends React.Component {
  filter = (e) => {
    const numOfHorns = parseInt(e.target.value);
    let beastData = data;
    if (numOfHorns) {
      beastData = data.filter((beast) => beast.horns === numOfHorns);
    }
    this.props.showBeasts(beastData);
  }
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="hornedChoices.ControlSelect1">
            <Form.Control id="formcontrol" as="select" onChange={this.filter}>
            <option value={0}>Choose number of horns</option>
              <option value={1}>1 Horn</option>
              <option value={2}>2 Horns</option>
              <option value={3}>3 Horns</option>
              <option value={100}>100 Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default HornCount;