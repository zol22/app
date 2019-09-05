import React, { Component } from 'react';
import Gif from './Gif';
import 'emoji-mart/css/emoji-mart.css'
import { Picker} from 'emoji-mart'
import { Smile , Heart} from 'react-feather';
import ContentEditable from 'react-contenteditable'

//import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete'; // emoji autocomplete(:) or for @ mentions (tag people)


class Create extends Component {
    constructor(props) {
      super(props);
      this.initialState = {
        showEmoji:false,
        showGif:false,
        name:'',
        url: '',
      };
      this.state = this.initialState;
    }

    /* Consume as many input fields you want with one single method handleChange,
        [name]:value , It's dynamic key assigment
        Main point-> We no longer have any individual handleChage function for each type of input
        change.


        Long way: Create two different handleChange() functions for the two inputs ...

        1)... const name = event.target.value
            this.setState({name: name})
        
        2)... const value = event.target.value
            this.setState({value:value})
    */
    handleChange = event => {
        /*const { name, value } = event.target
        this.setState({
          [name]: value,
        })
      */

        //Doesnt work for more than 1 space
        if(event.target.value === '&nbsp;'){
          return event.target.value.replace(/&nbsp;/g, ' ')
        }

        this.setState({
          name: event.target.value//textContent
        })
        //this.state.name.replace(/&nbsp;/g, '')
      }

    submitForm = (event) => {
      event.preventDefault();
      this.props.handleSubmit(this.state) // Whole State is send to handleSubmit
      this.setState(this.initialState); // Reset evyerthing to initialState again;
       
      }

    pasteAsPlainText = event => {
      event.preventDefault()
      const text = event.clipboardData.getData('text/plain')
      document.execCommand('insertHTML', false, text)
    }

    keyPressChange = event => {
      const keyCode = event.keyCode || event.which

      if(keyCode === 32){
        console.log("space");
      }
    }
    /*disableNewlines = event => {
      const keyCode = event.keyCode || event.which
    
      if (keyCode === 13) {
        event.returnValue = false
        if (event.preventDefault) event.preventDefault()
      }
    }*/

    showEmoji = () =>{
      this.setState({
        showEmoji:!this.state.showEmoji
      })
    }

    showGif = () =>{
      this.setState({
        showGif:!this.state.showGif,
      })
    }

    handleClick = () => {
      this.refs.fileUploader.click() // Open Browser File
      var file = this.refs.fileUploader.files[0];
      console.log(file);   
    }

    addEmoji = (emoji) =>{
      const e = emoji.native;
      this.setState({
        name: this.state.name + e,
        showEmoji: false,
      }); 
    }

    addGif= (gif) =>{
      var url = gif.fixed_height_small.url;
      this.setState({
        url : url,
        name: this.state.name, // + gif
        showGif: false,
      }); 
      
    }
      render() {  
        
        return (
        <div className="App">
          <form onSubmit={this.submitForm}>
            <label>Create Post</label>
            <div>
              <button type="button" className="divCursor toggle-emoji" onClick={this.showEmoji}><Smile /></button>
              <button type="button" className="divCursor toggle-emoji" onClick={this.showGif}><Heart /></button>
              <ContentEditable
                className="message-input"
                //contentEditable="true" //type=text
                html={this.state.name}
                onPaste={this.pasteAsPlainText} // Function to paste the text not the format
                //onKeyPress={this.disableNewlines}
                onKeyPress = {this.keyPressChange}
                //aria-multiline="true"
                placeholder={"What's in your mind?"}
                //suppressContentEditableWarning={true}
                //name="name"
                disabled={false}
                //value={this.state.name}
                //onClick={this.handleChange} 
                onChange = {this.handleChange} // Change the state value on every input field
                style={{width:"70%",height:"300px"}}
              >
          
              </ContentEditable>
              
            </div>

            {/*
            <div className="divCursor" onClick={() => this.handleClick()}>
              <Emoji symbol="🖼️" label="sheep"/>
              <span> Photo/Video</span>
              <input type="file" id="file" accept="image/png, image/jpeg, video/*" ref="fileUploader" style={{display: "none"}}></input>
            </div>
              */}
            <button className="post" type="submit">Post</button>
          </form>
            {this.state.showEmoji ? (<span style={{position:"absolute",top:10,right:0}} ><Picker emojiTooltip={true}title='Pick your emoji…' set="emojione" onSelect={this.addEmoji} /> </span>): null } {/*When select a emoji, call addemoji() */}
            {this.state.showGif ? (<span style={{position:"absolute",top:10,right:0}} ><Gif url={this.state.url} addGif={this.addGif}  /> </span>): null } {/*When select a emoji, call addGif() */}
        </div>
        );
      }
  }

  export default Create;