import React from "react";
import HornedBeast from "./HornedBeast";
// import data from "./data";
import {Row} from "react-bootstrap";



class Main extends React.Component {
    render(){
        return(
          <Row xs={2} md={4} className="g-4">
            {this.props.beasts.map((beast, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal = {this.props.showModal}
                  title={beast.title}
                  img={beast.image_url}
                  description={beast.description}
                  horns={beast.horns}
                />
              </div>
            )
          })}
          </Row>
        )
    }
}

export default Main;