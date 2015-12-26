const FormExample = React.createClass({
	onSubmit() {
		alert("text: " + this.refs.fullname.getValue());
		alert("select1: " + this.refs.select1.getValue());
	},
	getInitialState() {
	    return {
	      disabled: false,
	      checked: null,
	      r: 'a'
	    }
	},
	handleChange(e) {
	    this.setState({
	      r: e.target.value
	    })
	},
	toggle() {
	    this.setState({
	      disabled: !this.state.disabled
	    });
	},
	render() {
		return (
		    <Form onSubmit={this.onSubmit}>
		        <Input ref="text" type="text" placeholder="Text" icon="person" />
		        <Input ref="email" type="email" placeholder="Email" />
		        <Input ref="password" type="password" placeholder="Password" />
		        <Input ref="select1" type="select" dafaultValue="" placeholder="Select" onChange={this.onChange}>
		        	<option value="">select</option>
		        	<option value="1">item1</option>
		        	<option value="2">item2</option>
		        	<option value="3">item3</option>
		        	<option value="4">item4</option>
		        </Input>
		        <Input ref="select2" type="select" dafaultValue="" placeholder="Multiple Select" multiple>
		        	<option value="">select</option>
		        	<option value="1">item1</option>
		        	<option value="2">item2</option>
		        	<option value="3">item3</option>
		        	<option value="4">item4</option>
		        </Input>
		        <Input ref="textarea" type="textarea" placeholder="Textarea" />
		        <Input ref="file" type="file" label="File" />
		        <InputGroup>
		        	<Input ref="radio" name="radio" type="radio" label="radio" value="a" 
		        		checked={this.state.r === 'a'}
		        		onChange={this.handleChange} />
		        	<Input ref="radio" name="radio" type="radio" label="radio" value="b"
		        		checked={this.state.r === 'b'}
		        		onChange={this.handleChange} />
		        </InputGroup>
		        <Input ref="checkbox" type="checkbox" label="checkbox" />
		        <FormButton type="submit" ratStyle="positive" block>Submit</FormButton>
		    </Form>
		)
	}
})

ReactDOM.render(<FormExample/>, mountNode);