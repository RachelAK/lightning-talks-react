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
        What date would you like to book your lightning talk?
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
          <a href="#email-input">Enter a date for your lightning talk</a>

        </li>
      </ul>
    </div>
  </div>
</div>: null}


      { submitted && !values.email ? <div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        What date would you like to book your lightning talk?
      </h1>
    </legend>
    <p id="error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Enter a date for your lightning talk
    </p>
    <div class="govuk-date-input" id="passport-issued">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="day" name="day" type="text" value="5" inputmode="numeric"/>
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="month" name="month" type="text" value="12" inputmode="numeric"/>
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="year" name="year" type="text" inputmode="numeric"/>
        </div>
      </div>
    </div>
  </fieldset>
</div> : <label className="govuk-label" for= "email-input">


            <span>Email address</span>
            <br/>
            <input 
            id="email-input"
            
            onChange={handleEmailInputChange}
            defaultValue={values.email} className="govuk-input govuk-input--width-20" type="text" required
            name="email" />

            
          </label>}


          {/* <input className="govuk-button" data-module="govuk-button" type="submit" value="Continue"/> */}
          <button onClick={handleSubmit} className="govuk-button" data-module="govuk-button">Continue</button>
          {submitted && values.email && values.confirm? <button>Continue</button>:null}

        </form>
      </div>
    )
  }