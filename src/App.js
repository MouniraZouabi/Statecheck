import "./App.css";
import Counter from "./componentes/counter";
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
class App extends Component {
  state = {
    fullName: "Hogwarts",
    bio: "Hogwarts School of Witchcraft and Wizardry is a fictional British boarding school of magic ",
    imgUrl:"https://media1.giphy.com/media/jq0G0sHLSqSxnLX8ex/giphy.gif?cid=6c09b952v0o7yvs6go8dynp07gkwumf3u7vyc1tb61iaui4k&rid=giphy.gif&ct=s",
    profession: "	Ministry of Magic",  
    show: false,
    count: 0,
  };
  switchShow = () => {
    this.setState({ show:!this.state.show });
  };
  render() {
    return (
      <div class ="App2">  

      <Button style ={{ fontFamily: "Georgia, serif", backgroundColor: "#FFD700	",borderRadius: "4%", 
      color : "black" ,fontSize: "20px" , margin: "50px 20px", padding: "4px 50px" ,
      borderColor: "#FFD700" }} onClick={this.switchShow} >
      {this.state.show ? "Show me" : "Cover up"}
        </Button>
        
      {this.state.show ? (
          <><h1>{this.state.fullName} </h1>
          <img src = {this.state.imgUrl} alt ="me" style= {{ width :"400px"}}/> 
          <h5>{this.state.profession} </h5>
          <h6>{this.state.bio}</h6><h2><Counter /></h2></>
): null 
}   
      </div>
    );
      }
  }
export default App;
