(window["webpackJsonpreact-tutorial"]=window["webpackJsonpreact-tutorial"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=(a(19),a(13)),c=a(2),s=a(3),u=a(5),m=a(4),h=a(6),d=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{paddingTop:"40px"}},"New Post")))},f=function(e){var t=e.characterData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,r.a.createElement("img",{src:t.url,alt:"No GIF"})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))});return r.a.createElement("tbody",null,t)},p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(d,null),r.a.createElement(f,{characterData:t,removeCharacter:a}))}}]),t}(n.Component),b=a(10),E=a.n(b),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).log=function(e){a.props.addGif(e),a.setState({visible:!0})},a.state={visible:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{onSelected:this.log}),this.state.visible?r.a.createElement("img",{alt:"gif",src:this.props.url}):null)}}]),t}(n.Component),j=(a(20),a(12)),g=a(28),w=a(29),y=a(11),C=a.n(y),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){if("&nbsp;"===e.target.value)return e.target.value.replace(/&nbsp;/g," ");a.setState({name:e.target.value})},a.submitForm=function(e){e.preventDefault(),a.props.handleSubmit(a.state),a.setState(a.initialState)},a.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},a.keyPressChange=function(e){32===(e.keyCode||e.which)&&console.log("space")},a.showEmoji=function(){a.setState({showEmoji:!a.state.showEmoji})},a.showGif=function(){a.setState({showGif:!a.state.showGif})},a.handleClick=function(){a.refs.fileUploader.click();var e=a.refs.fileUploader.files[0];console.log(e)},a.addEmoji=function(e){var t=e.native;a.setState({name:a.state.name+t,showEmoji:!1})},a.addGif=function(e){var t=e.fixed_height_small.url;a.setState({url:t,name:a.state.name,showGif:!1})},a.initialState={showEmoji:!1,showGif:!1,name:"",url:""},a.state=a.initialState,a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("label",null,"Create Post"),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"divCursor toggle-emoji",onClick:this.showEmoji},r.a.createElement(g.a,null)),r.a.createElement("button",{type:"button",className:"divCursor toggle-emoji",onClick:this.showGif},r.a.createElement(w.a,null)),r.a.createElement(C.a,{className:"message-input",html:this.state.name,onPaste:this.pasteAsPlainText,onKeyPress:this.keyPressChange,placeholder:"What's in your mind?",disabled:!1,onChange:this.handleChange,style:{width:"70%",height:"300px"}})),r.a.createElement("button",{className:"post",type:"submit"},"Post")),this.state.showEmoji?r.a.createElement("span",{style:{position:"absolute",top:10,right:0}},r.a.createElement(j.a,{emojiTooltip:!0,title:"Pick your emoji\u2026",set:"emojione",onSelect:this.addEmoji})," "):null," ",this.state.showGif?r.a.createElement("span",{style:{position:"absolute",top:10,right:0}},r.a.createElement(v,{url:this.state.url,addGif:this.addGif})," "):null," ")}}]),t}(n.Component),S=(a(25),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(l.a)(a.state.characters),[e])})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement(O,{handleSubmit:this.handleSubmit}),r.a.createElement(p,{characterData:e,removeCharacter:this.removeCharacter}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.7c3dd7b5.chunk.js.map