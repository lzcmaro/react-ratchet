import React from 'react';
import classnames from 'classnames';
import {classesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';
import Icon from './Icon';


const Input = React.createClass({

    propTypes: {
      icon: React.PropTypes.string,
      label: React.PropTypes.node,
      checked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
      defaultChecked: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
      disabled: React.PropTypes.bool,
      multiple: React.PropTypes.bool,
      labelClassName: React.PropTypes.string,
      onChange: React.PropTypes.func
    },
    getDefaultProps() {
      return {
        ratClass: 'form-input',
        // checked: 0,
        defaultChecked: 0, //这里使用数字，以便和它的样式关联
        disabled: false,
        multiple: false,
        onChange: () => {}
      }
    },
    getInitialState() {
      let checked = false, props = this.props;
      if ('checked' in props) {
        checked = props.checked;
      } else {
        checked = props.defaultChecked;
      }
      return {
        checked: checked
      }
    },
    componentWillReceiveProps(nextProps) {
      if (this.isCheckboxOrRadio() && 'checked' in nextProps) {
        this.setState({
          checked: nextProps.checked,
        });
      }
    },
    handleChange(e) {
      const checked = e.target.checked;
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked ? 1 : 0,
        });
      }
      this.props.onChange(e, !!this.state.checked);
    },
    /**
     * 提供对外的获取input.value的方法
     * @return {[type]} [description]
     */
    getValue() {
      if (this.props.type) {
        if (this.props.type === 'select' && this.props.multiple) {
          return this.getSelectedOptions();
        }
        return this.getInputDOMNode().value;
      }
      throw new Error('Cannot use getValue without specifying input type.');
    },
    getSelectedOptions() {
      let values = [];

      Array.prototype.forEach.call(
        this.getInputDOMNode().getElementsByTagName('option'),
        (option) => {
          if (option.selected) {
            let value = option.getAttribute('value') || option.innerHtml;
            values.push(value);
          }
        });

      return values;
    },
    getChecked() {
      return this.getInputDOMNode().checked;
    },
    getInputDOMNode() {
      return this.refs.input
    },
    isCheckboxOrRadio() {
      return this.props.type === 'checkbox' || this.props.type === 'radio'
    },
    isFile() {
      return this.props.type === 'file'
    },
    hasLabel() {
      return !!this.props.label
    },
    renderLabel(children) {
      let classes = {
        'input-label': true
      };

      classes[this.props.labelClassName] = this.props.labelClassName;

      return this.hasLabel() ? (
        <label htmlFor={this.props.id} className={ classnames(classes) } key="label">
          { children }
          { this.props.label }
        </label>
      ) : children
    },
    renderInput() {
      
      if (!this.props.type) {
        return this.props.children;
      }

      let classes = ratchetUtils.getClassSet( this.props );

      //为input添加has-icon样式，以便它适应有icon的情况
      this.props.icon && ( classes['has-icon'] = true );

      switch (this.props.type) {
      case 'select':
        return (
          <select {...this.props} className={classnames(classes, this.props.className)} ref="input" key="input">
            {this.props.children}
          </select>
        );
      case 'textarea':
        return <textarea {...this.props} className={classnames(classes, this.props.className)} ref="input" key="input" />;
      case 'file':
        return (
          <a href="javascript:;" className="input-upload" key="input-upload">
            <input {...this.props} className={classnames(classes, this.props.className)} ref="input" key="input" />
            选择文件...
          </a>
        )
      case 'radio':
      case 'checkbox':
        const props = this.props;
        const prefixCls = 'rc-' + props.type;
        let checked = this.state.checked;

        if (typeof checked === 'boolean') {
          checked = checked ? 1 : 0;
        }

        const classes = classnames({
          [prefixCls]: true,
          [`${prefixCls}-checked`]: !!checked,
          [`${prefixCls}-checked-${checked}`]: !!checked,
          [`${prefixCls}-disabled`]: props.disabled,
        });

        return (
          <span className={classnames(classes, props.className)}>
            <span className={`${prefixCls}-inner`}></span>
            <input 
              {...props}
              ref="input"
              key="input"
              defaultChecked={!!props.defaultChecked}
              className={`${prefixCls}-input`}
              checked={!!checked}
              onChange={this.handleChange}/>
          </span>
        )
      default:
        // const className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
        return <input {...this.props} className={classnames(classes, this.props.className)} ref="input" key="input" />;
      }

    },
    renderIcon() {
      return this.props.icon ? (
        <Icon ratStyle={this.props.icon} key="icon" />
      ) : null
    },
    renderChildren() {
      //如果input型为radio或checkbox，用label把input包起来，且不处理icon
      return this.isCheckboxOrRadio() ? (
          this.renderLabel( this.renderInput() )
        ) : [
        this.renderLabel(),
        this.renderInput(),
        this.renderIcon()
      ]
    },
    renderWapper(children) {
      let classes = {'input-wapper': true};
      this.hasLabel() && ( classes['input-label-wapper'] = true );
      this.isFile() && ( classes['input-file-wapper'] = true );
      this.isCheckboxOrRadio() && ( classes['radioandcheckbox-wapper'] = true );

      return (
        <div className={classnames(classes)} key="wapper">
          { children }
        </div> 
      )
    },
    render() {	
      
      return this.renderWapper( this.renderChildren() )

    }
});

export default Input;