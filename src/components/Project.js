import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import projectImage from '../assets/images/bananas.jpeg'


export class Project extends Component {
    render() {

        return (
            <div className='project-fragment'>
                {/* we need a title */}
                <h1 className='project-title'>{ this.props.title }</h1>
                {/* image */}
                {/* <img src={ projectImage } className='project-img' alt={this.title + ' image'}/> */}
                {/* description */}
                <p className='project-description'>{ this.props.desc }</p>

                {/* tech used */}

                <p className='project-tech'>{this.props.tech.join(', ')}</p>

                {/* github link */}
                <a href={ this.props.link } target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } className='icon'/></a>
            </div>
        )
    }
}

export default Project
