import React from 'react';


class HornedBeast extends React.Component {
  render(){
    return(
    <div>
      <h2>{this.props.title}</h2>
      <img src={this.props.URL} alt={this.props.alt} title={this.props.imgTitle}></img>
      <p>{this.props.Description}</p>

    </div>
    )
  }
}

export default HornedBeast;