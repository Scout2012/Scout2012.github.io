import React, { Component } from 'react'
import FooterItem from './FooterItem'

export class Footer extends Component {


    getStyle = () => {
        return {
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            listStyleType: 'none'
        }
    }

    render() {
        return (
            <div>
                <ul style={ this.getStyle() }>
                    <FooterItem name='GitHub'/>
                    <FooterItem name='LinkedIn'/>
                </ul>
            </div>
        )
    }
}

export default Footer