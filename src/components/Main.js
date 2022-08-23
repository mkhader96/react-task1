import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data";
import {Row} from "react-bootstrap";


let allData = data.map(element => 
    <HornedBeast 
        id = {element._id}
        title = {element.title}
        img = {element.image_url}
        description = {element.description}
    /> 
);

class Main extends React.Component {
    render(){
        return(
          <Row xs={2} md={4} className="g-4">
            {allData}
          </Row>
        )
    }
}

export default Main;