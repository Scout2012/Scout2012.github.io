import React, { Component } from 'react'
import Layer from './Layer'
import PropTypes from 'prop-types'

export class Content extends Component {
    render() {
        return (
            this.props.fragments.map((fragment)=>(
                <Layer key= { fragment.id } fragment={ fragment }/>
            ))
        )
    }
}

//Restricting the property types
Content.propTypes = {
    fragments: PropTypes.array.isRequired
}

export default Content
