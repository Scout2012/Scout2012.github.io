import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'

export class Navigation extends Component {

    getStyle = () => {
        return {
            color: 'black',
            display: 'flex',
            justifyContent: 'space-evenly',
            listStyleType: 'none',
        }
    }

    render() {
        return (
            <div>
                <ul style={ this.getStyle() }>
                    {this.props.endpoints.map((endpoint) => {
                        return <NavItem key={ endpoint.id } state={ endpoint }/>
                    })}
                </ul>
            </div>
        )
    }
}

//Restricting the property types
Navigation.propTypes = {
    endpoints: PropTypes.array.isRequired
}

export default Navigation
