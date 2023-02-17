import { Form } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Booking() {
    const [values, setValues] = useState({
      firstName: "",
      lastName: "",
    });

    const [error, setError] =useState(true);

    // updates the state object 
    const handleFirstNameInputChange = (event) => {
      setValues({...values, firstName: event.target.value})
    }

    const handleLastNameInputChange = (event) => {
      setValues({...values, lastName: event.target.value})
    }

    const [submitted, setSubmitted] = useState(false);
    const navigate=useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      // setSubmitted(true);

      // (values.firstName && values.lastName) &&
      if (values.firstName && values.lastName) {console.log("hii")} else  {setSubmitted(true)}
    // values.firstName && values.lastName? navigate("/date") :setSubmitted(true)
      // console.log("hi")
    }


    
        return (
      <div >
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 className="govuk-fieldset__heading">
        What is your name?
        </h1>
        </legend>

        <form method="post" action="">
        { submitted &&  !values.lastName ? <div className="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 className="govuk-error-summary__title">
      There is a problem
    </h2>
    <div className="govuk-error-summary__body">
      <ul className="govuk-list govuk-error-summary__list">
        <li>
          <a href="#firstName-input">Enter a first name</a>
          <br/>
          <a href="#lastName-input">Enter a last name</a>
        </li>
      </ul>
    </div>
  </div>
</div>: null}


      { submitted && !values.firstName ? <div className="govuk-form-group govuk-form-group--error">
        <label className="govuk-label" for="full-name-input">
         
        </label>
        <p id="full-name-input-error" className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> Enter your first name
        </p>
        <input className="govuk-input govuk-input--error" id="firstName-input" name="name" type="text" aria-describedby="full-name-input-error" />
      </div> : <label className="govuk-label" for= "firstName-input">


            <span>First name</span>
            <br/>
            <input 
            id="firstName-input"
            
            onChange={handleFirstNameInputChange}
            defaultValue={values.firstName} className="govuk-input govuk-input--width-20" type="text" required
            name="firstName" />

            
          </label>}


          { submitted && !values.lastName ? <div class="govuk-form-group govuk-form-group--error">
        <label class="govuk-label" for="full-name-input">
         
        </label>
        <p id="lastName-input-error" class="govuk-error-message">
          <span class="govuk-visually-hidden">Error:</span> Enter your last name
        </p>
        <input class="govuk-input govuk-input--error" id="firstName-input" name="name" type="text" aria-describedby="lastName-input-error" />
      </div> :
          <><br /><label className="govuk-label">
                  <span>Last name</span>
                  <br />
                  <input id="lastName-input"
                    onChange={handleLastNameInputChange}
                    defaultValue={values.lastName} className="govuk-input govuk-input--width-20" type="text" required />
                </label><br /></>}

          <button onClick={handleSubmit} className="govuk-button" data-module="govuk-button">Continue</button>
          {submitted && values.firstName && values.lastName? <button>Continue</button>:null}

        </form>
      </div>
    )
  }