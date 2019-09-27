import React from 'react';
import PropTypes from 'prop-types'
import Fragment from './Fragment'

class Layer extends React.Component {

    getStyle = () => {
        return {
            backgroundColor: this.props.fragment.color,
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5em',
            // height: '100vh',
            flex: '1'
        }
    }
    
    //lifecycle component
    //returns JSX
    render(){
    const { id, title } = this.props.fragment;
    
    //profile layer
    if(id === 1){
        return (
            <div className='layer-container'  id={ title.toLowerCase() }>
                <div style={ this.getStyle() }>
                    <h1 key={ id }>{ title }</h1>
                    <div className='fragment-collection'>
                        <Fragment id={ id }/>
                    </div>
                </div>
                
            </div>
        )
    }
      return (
        <div style={ this.getStyle() }  id={ title.toLowerCase() }>
            <h1 key={ id }>{ title }</h1>
            <Fragment id={ id } key={ id+1 }/>
        </div>
    );
  }
}

//Restricting the property types
Layer.propTypes = {
    fragment: PropTypes.object.isRequired
}


export default Layer;
