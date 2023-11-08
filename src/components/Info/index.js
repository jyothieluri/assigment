import {Component} from 'react'

class Info extends Component {
  continue = e => {
    e.preventDefault()
    this.nextStep()
  }

  render() {
    const {values, handleChange} = this.props
    return (
      <>
        <h1>Personal info</h1>
        <p>Please provide your name,email address and number</p>

        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter Your  Name"
          type="text"
          onChange={handleChange('firstName')}
          defaultValue={values.name}
        />
        <br />
        <label htmlFor="mail">Email Address</label>
        <input
          placeholder="Enter Your Email"
          id="mail"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        />
        <br />
        <label htmlFor="num">Phone Number</label>
        <input
          placeholder="Enter Your Number"
          id="num"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
        <br />
        <button type="button" onClick={this.continue}>
          Next Step
        </button>
      </>
    )
  }
}

export default Info
