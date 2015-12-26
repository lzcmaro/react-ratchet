import React from 'react';
// import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';

// import Ajax from './utils/ajax';
// import getContainer from './utils/getContainer';
// import ownerDocument from './utils/ownerDocument';
// import {transform} from 'babel-core';
// import presetEs2015 from 'babel-preset-es2015';
// import presetReact from 'babel-preset-react';


let Link = React.createClass ({
	propTypes: {
        href: React.PropTypes.string,
        icon: React.PropTypes.string,
        left: React.PropTypes.bool,
        right: React.PropTypes.bool
	},
	getDefaultProps() {
		return{
			ratClass: 'link',
			left: false,
			right: false
		};
	},

    render() {

        let classes = ratchetUtils.getClassSet( this.props ),
        	iconProps = {ratClass: 'icon', ratStyle: this.props.icon},
        	iconClasses = this.props.icon ? ratchetUtils.getClassSet( iconProps ) : {},
        	leftClass = 'pull-left',
        	rightClass = 'pull-right',
        	href = this.props.href || 'javascript:;';

        Object.assign( classes, iconClasses );

        classes = {
            ...classes,
            [leftClass]: this.props.left,
            [rightClass]: this.props.right
        };

        return (
            <a
                { ...this.props }
                href = { href }
                className = { classNames(classes, this.props.className) }
                onTouchEnd={this.handleTouch}>
                { this.props.children }
            </a>
        )
    },

    handleTouch(event) {
        
        let push = this.props.push;
        if( !push || !push.href ){
            this.props.onTouchEnd && this.props.onTouchEnd()
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        this.onPush( push )

    },

    onPush(options) {
        
        // Ajax.ajax({
        //   url: options.href,
        //   dataType: 'html',
        //   success: (...args) => this.renderPage(options, ...args)
        // });

    },

    renderPage(options, html) {

        // const React = require('react');
        // const ReactDOM = require('react-dom');
        // const ReactDOMServer = require('react-dom/server');

        // //components
        // const NavBar = require('./NavBar').default;
        // const NavButton = require('./NavButton').default;
        // const TabBar = require('./TabBar').default;
        // const StandardBar = require('./StandardBar').default;
        // const SegmentedControl = require('./SegmentedControl').default;
        // // const Link = require('./Link').default;
        // const Form = require('./Form').default;
        // const FormButton = require('./FormButton').default;
        // const Input = require('./Input').default;
        // const List = require('./List').default;
        // const ListItem = require('./ListItem').default;
        // const Card = require('./Card').default;
        // const Media = require('./Media').default;
        // const Button = require('./Button').default;
        // const Toggle = require('./Toggle').default;
        // const Badge = require('./Badge').default;
        // const Icon = require('./Icon').default;
        // const NavPopover = require('./NavPopover').default;
        // const Modal = require('./Modal').default;
        // const Slider = require('./Slider').default;
        // const SliderItem = require('./SliderItem').default;

        // let doc = ownerDocument(this);
        // let container = getContainer(options.container, doc.body);
        

        // //普通html页面，直接append
        // if (/<html/i.test(html)) {
        //     this.appendTo( html, container );
        //     return;
        // }

        // // For the initial render, we can hijack React.render to intercept the
        // // example element and render it normally. This is safe because it's code
        // // that we supply, so we can ensure ahead of time that it won't throw an
        // // exception while rendering.
        // const originalRender = ReactDOM.render;
        
        // try {
        //     const compiledCode = transform( html,{
        //             presets: [presetReact]
        //         }).code;

        //     //获取要render的element
        //     ReactDOM.render = (element) => this._element = element;
        //     eval(compiledCode);

        //     //不直接渲染到container，这样会使原来的节点被删除 
        //     // let div = doc.createElement('div');
        //     // div = doc.body.appendChild( div );
        //     //ReactDOM.render( this._element, div );
        //     // div.innerHTML = ReactDOMServer.renderToString( this._element );
        //     // this.appendTo( div.childNodes[0], container );
            

        // } catch(e){
        //     throw e;
        // } finally {
        //     ReactDOM.render = originalRender;
        // }

        // let div = doc.createElement('div');
        // // 
        // // ReactDOM.unstable_renderSubtreeIntoContainer( this, this._element, div );
        // //无法删除该节点
        // //React.unmountComponentAtNode( container );
        
        // ReactDOM.render( this._element, div );
        // //container在外面传过来的时候，可能直接使用了this，这样会导致它指向了前面创建的div，在render时，层级会越来越多
        // container.insertBefore( div, container.childNodes[0] );
        // this.removeChildNodes( container );

    },

    appendTo(dom, container){

        let doc = ownerDocument(this);      
        container.insertBefore( dom, container.childNodes[0] );
        this.removeChildNodes( container );

    },

    removeChildNodes(container) {
        let first = container.childNodes[0];
        
        while (first.nextSibling !== null) {
            container.removeChild( first.nextSibling );
        }
    }
});

export default Link;