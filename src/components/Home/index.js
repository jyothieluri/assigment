import React, {Component} from 'react'
import Info from '../Info'
import Plan from '../Plan'
import Summary from '../Summary'
import Addons from '../Addons'
import Thankpage from '../Thankpage'

class Home extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    number: '',
    activeplanid: '',
  }

  activeplan = id => {
    this.setState({
      activeplanid: id,
    })
  }

  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step + 1,
    })
  }

  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step - 1,
    })
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const {step} = this.state
    const {firstName, lastName, email, occupation, city, bio} = this.state
    const values = {firstName, lastName, email, occupation, city, bio}

    switch (step) {
      case 1:
        return (
          <Info
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <Plan
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Addons
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 4:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 5:
        return <Thankpage />
      default:
        console.log('This is a multi-step form built with React.')
    }
  }
}

export default Home
