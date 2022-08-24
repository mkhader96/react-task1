import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./data";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      displayModal: false,
      selectedBeast: {}
    };
  }
  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({selectedBeast, displayModal:true});
  }
  hideModal = () => {this.setState({displayModal: false});
  }
  showBeasts = (beastData) => {this.setState({beastData});
  }
  
  render() {
    return (
      <div>
        <Header /><><br></br>
        <br></br>
        <br></br>
        <br></br></>
        <div>
          
          <Main
          showBeasts={this.showBeasts}
            showModal={this.showModal}
            beasts={this.state.beastData}
          />
          <SelectedBeast
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast} />
          
        </div>
        <><br></br>
        <br></br>
        <br></br>
        <br></br></>
        <Footer />
      </div>
    );
  }
}

export default App;
