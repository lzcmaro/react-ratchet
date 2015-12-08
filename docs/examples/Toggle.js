const ToggleExample = React.createClass({
    getInitialState(){
        return {
            active: true
        }
    },
    onToggleClick(){
        this.setState({
            active: !this.state.active
        })
    },
    render(){
        return (
            <div>
                <Toggle onClick={this.onToggleClick} active={this.state.active}/>
            </div>
        )
    }
})

ReactDOM.render(<ToggleExample/>, mountNode);