const Addons = props => {
  const {values, handleChange, nextStep, prevStep} = props
  const {servicebt, storagebt, profile} = values

  const coNtinue = e => {
    e.preventDefault()
    nextStep()
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance</p>

      <input type="checkbox" id="service" />
      <label htmlFor="service">
        <h5>Online service</h5>
        <p>Access to multiplayer games</p>
      </label>

      <input type="checkbox" id="storage" />
      <label htmlFor="storage">
        <h5>Large Storage</h5>
        <p>extra TB</p>
      </label>

      <input type="checkbox" id="profile" />
      <label htmlFor="profile">
        <h5>Customizable Profile</h5>
        <p>Theme profile</p>
      </label>

      <button onClick={back}>Go back</button>

      <button onClick={coNtinue}>Next step</button>
    </div>
  )
}

export default Addons
