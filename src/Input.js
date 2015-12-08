import React from 'react';
import classnames from 'classnames';
import {classesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';


const Input = React.createClass({

    propTypes: {
      label: React.PropTypes.node,
      help: React.PropTypes.node,
      disabled: React.PropTypes.bool,
      readOnly: React.PropTypes.bool,
      multiple: React.PropTypes.bool,
      labelClassName: React.PropTypes.string
    },
    getDefaultProps() {
      return {
        ratClass: 'form-input',
        disabled: false,
        readOnly: false,
        multiple: false
      }
    },

    renderLabel(children) {
      let classes = {
        'form-label': true
      };

      classes[this.props.labelClassName] = this.props.labelClassName;

      return this.props.label ? (
        <label htmlFor={this.props.id} className={ classnames(classes) } key="label">
          { children }
          { this.props.label }
        </label>
      ) : children
    },
    renderInput() {
      let classes = ratchetUtils.getClassSet( this.props );

        return ( 
          <input 
            { ...this.props }
            className={ classnames(classes, this.props.className) } ref="input" key="input" />
        )
    },
    renderChildren() {
      return [
        this.renderLabel(),
        this.renderInput()
      ]
    },
    renderWapper(children) {
      return (
        <div className='input-group'>
          { children }
        </div> 
      )
    },
    render() {	
      
      return this.props.label ? (
        this.renderWapper( this.renderChildren() )
      ) : this.renderInput()

    }
});

export default Input;