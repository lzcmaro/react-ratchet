import React from 'react';
import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';
import Control from './Control';


const SegmentedControl = React.createClass({

    getDefaultProps() {
        return {
            ratClass: 'segmented-control'
        }
    },

    render() {
        let classes = ratchetUtils.getClassSet( this.props );  

        return ( 
            <div 
              { ...this.props }
              className = { classnames(classes, this.props.className) }>
              { this.props.children }
            </div>
        )
    }
});

SegmentedControl.Control = Control;

export default SegmentedControl;