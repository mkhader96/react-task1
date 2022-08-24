import React from "react";
import HornedBeast from "./HornedBeast";
import {Row} from "react-bootstrap";
import HornCount from "./Horns";



class Main extends React.Component {
    render(){
        return(<>
           <HornCount
          showBeasts={this.props.showBeasts} 
        /> <><br></br>
        <br></br>
        <br></br>
        <br></br></>
        
          <div>
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
          </Row></div>
          </>
        )
    }
}

export default Main;