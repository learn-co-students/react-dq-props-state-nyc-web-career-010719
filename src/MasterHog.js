import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "",
      children: []
    }
  }


  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    }, state => console.log("eyeColor", this.state))
  }

  fetchChildren = () => {
    console.log(offspring)
    offspring.map(pig => <BabyHog name={pig.name} hobby={pig.hobby}/>)
  }

  componentDidMount(){
    this.fetchChildren()
  }


  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>

        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>

        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>

        <ul className="hoglist">
          <BabyHog
            name={"mike cheng"}
            hobby={"coding and playing w my cats"}
            eyeColor={this.state.eyeColor}
          />
          <BabyHog
            name={"humzah"}
            hobby={"buying cool shoes"}
            eyeColor={this.state.eyeColor}
          />
          <BabyHog
            name={"zach"}
            hobby={"wearing black hoodies every day"}
            eyeColor={this.state.eyeColor}
          />
        </ul>

      </div>
    )
  }

}
