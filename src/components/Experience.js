import React, { Component } from 'react'
// import projectImage from '../assets/images/bananas.jpeg'


export class Experience extends Component {
    render() {
        return (
            <div className='project-fragment'>
                {/* we need a title */}
                <h1 className='project-title'>{ this.props.title }</h1>
                {/* image */}
                {/* <img src={ projectImage } className='project-img' alt={this.title + ' image'}/> */}
                {/* description */}
                <p className='project-description'>{ this.props.desc }</p>
            </div>
        )
    }
}

export default Experience
