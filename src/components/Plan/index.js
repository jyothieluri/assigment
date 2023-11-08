const Plan = props => {
  const {values, handleChange, activeplan, nextStep, prevStep} = props

  const coNtinue = e => {
    e.preventDefault()
    nextStep()
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }

  onclick = id => {
    activeplan(id)
  }
  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of montly or yearly billing</p>

      <div>
        <button onClick={onclick}>
          <div>
            <img src="" alt="" />
            <h4>Arcade</h4>
            <p>$9/mo</p>
          </div>
        </button>
        <button onClick={onclick}>
          <div>
            <img src="" alt="" />
            <h4>Advanced</h4>
            <p>$12/mo</p>
          </div>
        </button>
        <button onClick={onclick}>
          <div>
            <img src="" alt="" />
            <h4>Pro</h4>
            <p>$15/mo</p>
          </div>
        </button>
      </div>

      <input type="checkbox" id="cb" />
      <label htmlFor="cb">Monthly</label>

      <button onClick={back}>Go back</button>

      <button onClick={coNtinue}>Next step</button>
    </div>
  )
}

export default Plan
