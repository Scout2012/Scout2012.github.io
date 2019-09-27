import React, { Component } from 'react'

import profileImage from '../assets/images/me.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Profile extends Component {
    render() {
        return (
            <div className='profile-img-container'>
                <img src={ profileImage } className='profile-img' alt='Jacob Powell'/>
                <div>
                    <h1>Jacob Powell</h1>
                    <h2>Software Engineer</h2>
                    <h2 style={{textAlign: 'center'}}>Placentia, CA</h2>
                    <div className='icon-container'>
                        <a href='https://github.com/Scout2012/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } className='icon'/></a>
                        <a href='https://www.linkedin.com/in/jacob-powell-925571121/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } className='icon'/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
