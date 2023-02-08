import { Form, redirect, useActionData } from "react-router-dom";

export default function Booking() {
        return (
      <div >
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 className="govuk-fieldset__heading">
        What is your name?
        </h1>
        </legend>

        <form method="post" action="">
          <label className="govuk-label">
            <span>First name</span>
            <br/>
            <input class="govuk-input govuk-input--width-20" type="text" required />
          </label>
          <br/>
          <label className="govuk-label">
            <span>Last name</span>
            <br/>
            <input className="govuk-input govuk-input--width-20" type="text"  required/>
          </label>
          <br/>
          <input class="govuk-button" data-module="govuk-button" type="submit" value="Continue"/>

        </form>
      </div>
    )
  }