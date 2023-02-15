import { Form } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Booking() {
    const [values, setValues] = useState({
      email: "",
      confirm: "",
    });

    const [error, setError] =useState(true);

    // updates the state object 
    const handleEmailInputChange = (event) => {
      setValues({...values, email: event.target.value})
    }

    const handleConfirmInputChange = (event) => {
      setValues({...values, confirm: event.target.value})
    }

    const [submitted, setSubmitted] = useState(false);
    const navigate=useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      // setSubmitted(true);

      // (values.email && values.confirm) &&
 
     return values.email && values.confirm? navigate ("/date") : setSubmitted(true)
 

      // console.log("hi")
    }


    
        return (
      <div >
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 className="govuk-fieldset__heading">
        What is your email address?
        </h1>
        </legend>

        <form method="post" action="">
        { submitted &&  !values.confirm ? <div className="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 className="govuk-error-summary__title">
      There is a problem
    </h2>
    <div className="govuk-error-summary__body">
      <ul className="govuk-list govuk-error-summary__list">
        <li>
          <a href="#email-input">Enter an email address</a>
          <br/>
          <a href="#confirm-input">Confirm your email address</a>
        </li>
      </ul>
    </div>
  </div>
</div>: null}


      { submitted && !values.email ? <div className="govuk-form-group govuk-form-group--error">
        <label className="govuk-label" for="email-input">
         
        </label>
        <p id="email-error" className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> Enter your email address
        </p>
        <input className="govuk-input govuk-input--error" id="email-input" name="name" type="text" aria-describedby="full-name-input-error" />
      </div> : <label className="govuk-label" for= "email-input">


            <span>Email address</span>
            <br/>
            <input 
            id="email-input"
            
            onChange={handleEmailInputChange}
            defaultValue={values.email} className="govuk-input govuk-input--width-20" type="text" required
            name="email" />

            
          </label>}


          { submitted && !values.confirm ? <div class="govuk-form-group govuk-form-group--error">
        <label class="govuk-label" for="full-name-input">
         
        </label>
        <p id="confirm-input-error" class="govuk-error-message">
          <span class="govuk-visually-hidden">Error:</span> Enter your last name
        </p>
        <input class="govuk-input govuk-input--error" id="email-input" name="name" type="text" aria-describedby="confirm-input-error" />
      </div> :
          <><br /><label className="govuk-label">
                  <span>Last name</span>
                  <br />
                  <input id="confirm-input"
                    onChange={handleConfirmInputChange}
                    defaultValue={values.confirm} className="govuk-input govuk-input--width-20" type="text" required />
                </label><br /></>}
          {/* <input className="govuk-button" data-module="govuk-button" type="submit" value="Continue"/> */}
          <button onClick={handleSubmit} className="govuk-button" data-module="govuk-button">Continue</button>
          {submitted && values.email && values.confirm? <button>Continue</button>:null}

        </form>
      </div>
    )
  }