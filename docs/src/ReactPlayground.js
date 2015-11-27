const React = require('react');
const ReactDOM = require('react-dom');

//components
const NavBar = require('../../src/NavBar');
const Button = require('../../src/Button');
const Badge = require('../../src/Badge');
const Icon = require('../../src/Icon');

import babel from 'babel-core/browser';

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
        		return babel.transform(code).code;
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

	    	//console.log( compiledCode );

	    	eval(compiledCode);

	    } finally {
	    	ReactDOM.render = originalRender;
	    }
	},

	render() {
		return (
			
			<article id={this.props.domId} className="component">
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