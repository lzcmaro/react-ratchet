const React = require('react');
const ReactDOM = require('react-dom');

//components
const Page = require('../../src/Page').default;
const NavBar = require('../../src/NavBar').default;
const NavButton = require('../../src/NavButton').default;
const TabBar = require('../../src/TabBar').default;
const SegmentedControl = require('../../src/SegmentedControl').default;
const Link = require('../../src/Link').default;
const Form = require('../../src/Form').default;
const FormButton = require('../../src/FormButton').default;
const Select = require('../../src/Select').default;
const ActionSheet = require('../../src/ActionSheet').default;
const Scroll = require('../../src/Scroll').default;
const Input = require('../../src/Input').default;
const InputGroup = require('../../src/InputGroup').default;
const List = require('../../src/List').default;
const ListItem = require('../../src/ListItem').default;
const Card = require('../../src/Card').default;
const Media = require('../../src/Media').default;
const Button = require('../../src/Button').default;
const Toggle = require('../../src/Toggle').default;
const Badge = require('../../src/Badge').default;
const Icon = require('../../src/Icon').default;
const NavPopover = require('../../src/NavPopover').default;
const Modal = require('../../src/Modal').default;
const Slider = require('../../src/Slider').default;
const SliderItem = require('../../src/SliderItem').default;


import {transform} from 'babel-core';
import presetEs2015 from 'babel-preset-es2015';
import presetReact from 'babel-preset-react';


const ReactPlayground = React.createClass ({

	propTypes: {
		domId: React.PropTypes.string,
		title: React.PropTypes.string.isRequired,
		desc: React.PropTypes.string,
		codeText: React.PropTypes.string.isRequired,
		transformer: React.PropTypes.func
	},

	getDefaultProps() {
	    return {
    		transformer(code) {
        		return transform(code,{
                    presets: [presetEs2015,presetReact]
                }).code;
    		}
		}
	},

	componentWillMount() {
	    // For the initial render, we can hijack React.render to intercept the
	    // example element and render it normally. This is safe because it's code
	    // that we supply, so we can ensure ahead of time that it won't throw an
	    // exception while rendering.
	    const originalRender = ReactDOM.render;
	    ReactDOM.render = (element) => this._initialExample = element;
	    //ReactDOM.render = function(element){ this._initialExample = element };

	    // Stub out mountNode for the example code.
    	const mountNode = null;

	    try {

	    	const compiledCode = this.props.transformer(this.props.codeText);

	    	// console.log( compiledCode );

	    	eval(compiledCode);

	    } finally {
	    	ReactDOM.render = originalRender;
	    }
	},

	render() {
		return (
			
			<article 
				{ ...this.props }
				className="component">
                <h3 className="component-title">{this.props.title}</h3>
                <p className="component-description">{this.props.desc}</p>
                <div className="component-example component-example-fullbleed">
                    {this._initialExample}
                </div>
                <figure className="highlight">
                	<pre>
                		<code data-lang="html" className="language-html">
                			{this.props.codeText}
                		</code>
                	</pre>
                </figure>
            </article>
		)
	}


});

export default ReactPlayground;