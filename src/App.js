import React, { Component } from 'react'

export class App extends Component {
  state= {Person:{ FullName:"Achraf Khemakhem" , Bio:"Ingenieur" , ImgSrc: <img src="logo192.png" alt="logo"/>,Profession:"Full stack JS"

  },Show: false}
  toggle =() => this.setState({Show: !this.state.Show})
  render() {
    return (
      <div>
        


        <button onClick={this.toggle}>{this.state.Show ? "Hide" : "Show"}</button> <br/>
        {
          this.state.Show ? <div>
            <h1>Name : {this.state.Person.FullName}</h1> <br/>
        <h1>Bio : {this.state.Person.Bio}</h1> <br/>
        <h1>Image : {this.state.Person.ImgSrc}</h1> <br/>
        <h1>Profession : {this.state.Person.Profession}</h1>
          </div> : "Click to show your profil"
        }

      </div>
    )
  }
}

export default App
