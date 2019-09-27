import React, { Component } from 'react'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export class FooterItem extends Component {

    getStyle = () => {
        return {
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            marginRight: '35em'
        }
    }

    render() {

        if(this.props.name.toLowerCase() === 'github'){
            return (
                <li className='icon-container'>
                    <a href='https://github.com/Scout2012/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } className='icon footer-item'/></a>
                </li>
            )            
        } else if(this.props.name.toLowerCase() === 'linkedin') {
            return (
            <li className='icon-container footer-item'>
                <a href='https://www.linkedin.com/in/jacob-powell-925571121/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } className='icon footer-item'/></a>
            </li>)

        }
    }
}

export default FooterItem
