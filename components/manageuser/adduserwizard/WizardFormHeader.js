import React from 'react'
import { Check } from 'react-feather'
import { Media } from 'reactstrap'

const WizardFormHeader = ({ steps }) => {
    return (
        <ul className="wizard-steps">
            <li className={`step-container step-1 ${steps === 1 ? 'active' : ''} ${steps > 1 ? 'disabled' : ''}`}>
                <Media className="media">
                    <div className="step-icon"><Check /><span>1</span></div>
                    <Media body className="media-body">
                        <h5>Get started</h5>
                        <h6>Account information</h6>
                    </Media>
                </Media>
            </li>
            <li className={`step-container step-2 ${steps === 2 ? 'active' : ''} ${steps > 2 ? 'disabled' : ''}`}>
                <Media className="media">
                    <div className="step-icon"><Check /><span>2</span></div>
                    <Media body className="media-body">
                        <h5>Login details</h5>
                        <h6>Set your email</h6>
                    </Media>
                </Media>
            </li>
            <li className={`step-container step-3 ${steps === 3 ? 'active' : ''} ${steps > 3 ? 'disabled' : ''}`}>
                <Media className="media">
                    <div className="step-icon"><Check /><span>3</span></div>
                    <Media body className="media-body">
                        <h5>Upload files</h5>
                        <h6>Successfully submitted</h6>
                    </Media>
                </Media>
            </li>
        </ul>
    )
}

export default WizardFormHeader
