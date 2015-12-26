import React from 'react';
import classNames from 'classnames';
import Input from './Input';
import List from './List';
import ActionSheet from './ActionSheet';

let Select = React.createClass ({
    PropTypes:{
        defaultValue: React.PropTypes.string,
        onChange: React.PropTypes.func
    },
    childContextTypes: {
         onClick: React.PropTypes.func
    },
    getChildContext:function(){
        let _this = this;
        return {
            onClick:function(value,text){
                _this._onChange(value,text)
            }
        };
    },
    _onChange:function(value,text){
        this.setState({
            text:text,
            value:value,
            showlist:false
        });
        this.props.onChange&&this.props.onChange(value,text);
    },
    _showActionSheet:function(){
        this.setState({showlist:true});
    },
    _hideActionSheet:function(){
        this.setState({showlist:false});
    },
    _getSelectOption:function(value){
        let selectOptions=[];
        if(value){
            React.Children.map(this.props.children,function(option){
                if(option.props.value === value){
                    selectOptions.push(option);
                }
            });
        }else{
            selectOptions.push(this.props.children[0]);
        }
        return selectOptions[0];
    },
    getInitialState:function(){
        let option = this._getSelectOption(this.props.defaultValue);
        return {
            text:option.props.text,
            value:option.props.value,
            showlist:false
        };
    },
    render() {
        let modalStyle = {position: 'absolute'};
        let backdropStyle = {position: 'absolute'};

        return (
            <div className="form-select">
                <Input type="text" value={this.state.text} onClick={this._showActionSheet} readOnly/>

                <ActionSheet 
                    show={this.state.showlist}
                    onHide={this._hideActionSheet}
                    style={modalStyle}
                    backdropStyle={backdropStyle}
                    container={this.props.container}>
                    <List>
                        {this.props.children}
                    </List>
                </ActionSheet>
            </div>
        )
    }
});

Select.option = React.createClass({
    propTypes:{
        value: React.PropTypes.string,
        text: React.PropTypes.string
    },
    contextTypes:{
        onClick: React.PropTypes.func
    },
    render:function(){
        var value = this.props.value,
            text= this.props.text;
        return (
            <List.Item value={value} onClick={this.context.onClick.bind(this,value,text)}>{text}</List.Item>
        )
    }
})

export default Select;