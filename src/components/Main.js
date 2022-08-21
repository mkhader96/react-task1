import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render(){
    return(
    <div>
      <HornedBeast title='Cat' 
      URL='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg'
      alt='Cat'
      imgTitle='Cat'
      Description='The cat beast'/>
      <HornedBeast title='Dog' 
      URL='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg'
      alt='Cat'
      imgTitle='Cat'
      Description='The dog beast'/>

    </div>
    )
  }
}

export default Main;