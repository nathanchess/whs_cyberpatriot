import React from 'react'
import './Registration.scss'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Competition1 from '../../Assets/Form_Gallery/Competition1.jpg'
import Outreach1 from '../../Assets/Form_Gallery/Outreach1.jpg'

const Registration = () => {

    

    return (
        <div class='content'>
            <h1>📢Who should join?</h1>
            <p>Thanks for checking out the registration page!</p>
            <p>Everyone attending Gretchen Whitney High School is free to join the club, no matter your experience in cybersecurity. We teach all of our cybersecurity lessons and concepts from ground up so everyone can get a full understanding and compete well in competitions such as CyberPatriot and CyberStart America!</p>
            <div class='image-container'>
                <div>
                    <img src={Competition1} />
                    <p>Cypress College [22-23] CyberPatriot State Round</p>
                </div>
                <div>
                    <img src={Outreach1} /> 
                    <p>Cerritos Elementary Outreach Program</p>
                </div>
            </div>
            <hr></hr>
            <h1>📋Form Information</h1>
            <p>Interested in signing up to the club and receiving updates on our mailing list about new events and opportunities? If so then fill out the form below! Besides competing in national cybersecurity competitions we also have a wide variety of activities for non-competition members such as cybersecurity workshops, guest speakers, and community service events!</p>
            <p>Note: By signing up, your email will automatically be added to the mailing list!</p>
            <div class='form-container'>
                <h1>🖥️ WHS CyberSecurity Club Member Signup Form</h1>
                <p>Please fill out all the categories to the best of your ability! If you need help please contact a cabinet member through email or talk to them at the club rush booth!</p>
                <hr></hr>
                <h2>First Name</h2>
                <textarea id='fName' placeholder='Ex. John'></textarea>
                <h2>Last Name</h2>
                <textarea id='lName' placeholder='Ex. Doe'></textarea>
                <h2>Preferred Email</h2>
                <textarea id='email' placeholder='Ex. whitneycyberpatriots@gmail.com'></textarea>
                <h2>Grade Level</h2>
                <RadioGroup
                    row
                    defaultValue="ms"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="ms" control={<Radio sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} label="Middle School" />
                    <FormControlLabel value="9th" control={<Radio sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} label="9th" />
                    <FormControlLabel value="10th" control={<Radio sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} label="10th" />
                    <FormControlLabel value="11th" control={<Radio sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} label="11th" />
                    <FormControlLabel value="12th" control={<Radio sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} label="12th" />
                </RadioGroup>
                <h2>Are you interested in joining our competition team?</h2>
                <p>(Note: No experience is required and no commitment is expected by checking "Yes" on this form. This question is just to gauge your interest.)</p>
                <RadioGroup
                    row
                    name="radio-buttons-group"
                    sx={{
                        color: 'white',
                    }}
                >
                    <FormControlLabel value="yes" 
                    control={<Radio 
                    sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} 
                    label="Yes" />

                    <FormControlLabel value="maybe" 
                    control={<Radio 
                    sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} 
                    label="Maybe" />

                    <FormControlLabel value="no" 
                    control={<Radio 
                    sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}/>} 
                    label="No" />
                </RadioGroup>
                <button id='register-submit'>Submit</button>
            </div>
        </div>
    )
}

export default Registration