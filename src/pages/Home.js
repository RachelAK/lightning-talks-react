import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1  className="govuk-heading-xl">Book a lightning talk</h1>
            <p className="govuk-body">Contents</p>
            —<a href="#" className="govuk-link">What is a lightning talk</a>
            <br></br>
            —<a href="#" className="govuk-link">How to prepare</a>
            <h1 className="govuk-heading-l">What is a lightning talk</h1>
            <p className="govuk-body">A lightning talk is a very short presentation lasting only a few minutes.
            <br/>
            <br/>
                The topic of a lightning talk can be anything you think your audience will be interested in. This could include:
                <br/>
            </p>

            <ul className="govuk-list govuk-list--bullet">
                <li>A new skill you have learnt</li>
                <li>An experience you have had</li>
                <li>A practical demonstration</li>
            </ul>

            <h1 className="govuk-heading-l">How to prepare for a lightning talk</h1>
            <p className="govuk-body">To prepare for delivering your lightning talk, consider the following advice.</p>
            <br/>
            <ul className="govuk-list govuk-list--bullet">
                <li>Pick a topic you are interested in, your enthusiasm will make for a better presentation</li>
                <li>Make sure your talk fits within 2-5 minutes. Try timing yourself on a practice run to check</li>
                <li>Use slides as a way of enhancing your talk, rather than reading off them</li>
            </ul>
            
            <NavLink to="booking">Book a lightning Talk</NavLink>
            <br/>

            <h1 className="govuk-heading-l">Contact the lightning talk team</h1>
            <p className="govuk-body">If you have any questions about booking a lightning talk, please use the contact information below.</p>

            <div className="govuk-inset-text">
                Madeline Lasko
                <br/>
                madeline.lasko@trade.gov.uk
            </div>
            <div className="govuk-inset-text">
                Joanne Granton
                <br/>
                joanne.granton@trade.gov.uk
            </div>

        </div>
    )
}