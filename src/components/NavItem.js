import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavItem extends Component {

    getStyle = () => {
        return {
            padding: '1em 0 1em 1em',
        }
    }

    render() {
        return (
            <li style={ this.getStyle() } key={ this.props.state.id }><a href={ '#' + this.props.state.title.toLowerCase()}>{ this.props.state.title }</a></li>
        )
    }
}

NavItem.propTypes = {
    state: PropTypes.object.isRequired
}

export default NavItem
