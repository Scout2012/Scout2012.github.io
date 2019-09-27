import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import projectImage from '../assets/images/bananas.jpeg'


export class Contact extends Component {
    render() {

        let method_icon;

        console.log(this.props.title)

        if(this.props.title.toLowerCase() === 'email'){
            // console.log('email')
            method_icon = faEnvelope
        } else {
            // console.log('link')
            method_icon = faLinkedin
        }

        console.log(method_icon)

        return (
            <div className='project-fragment'>
                {/* we need a title */}
                <h1 className='project-title'>{ this.props.title }</h1>
                {/* image */}
                {/* <img src={ projectImage } className='project-img' alt={this.title + ' image'}/> */}
                {/* description */}
                <p className='project-description'>{ this.props.desc }</p>

                {/* Email link */}
                <a href={ this.props.link } target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon= {method_icon}  className='icon'/></a>
                {/* LinkedIn link */}
                
            </div>
        )
    }
}

export default Contact
