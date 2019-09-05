import Picker from 'react-giphy-component'
import React, { Component} from 'react'

class Gif extends Component {
  constructor(props){
    super(props);

    this.state={
      visible:false
    }
  }


  log = (gif) => {
    {this.props.addGif(gif)};
    this.setState({
      visible:true
    })
    
  }

  render () {
    return (
      <div>
        <Picker onSelected={this.log}  />
        {this.state.visible ?<img alt="gif" src={this.props.url} ></img> : null}
        
      
      </div>
    )
  }
}

export default Gif;