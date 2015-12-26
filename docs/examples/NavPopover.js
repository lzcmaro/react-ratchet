const PopoverExample = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render() {
    let popoverStyle = {position: 'absolute'};
    let backdropStyle = {position: 'absolute'}

    return (
        <div>
          <NavBar>
            <Link onClick={() => this.setState({ show: true})}>
              <NavBar.Title icon="caret">
                Title
              </NavBar.Title>   
            </Link>
          </NavBar>

          <NavPopover 
            show={this.state.show} 
            onHide={() => this.setState({ show: false})}
            style={popoverStyle}
            backdropStyle={backdropStyle}
            container={this}
          >
            <NavBar>Popover title</NavBar>
            <List>
              <List.Item>Item1</List.Item>
              <List.Item>Item2</List.Item>
              <List.Item>Item3</List.Item>
              <List.Item>Item4</List.Item>
              <List.Item>Item5</List.Item>
            </List>
          </NavPopover>
        </div>
    )
  }
});

ReactDOM.render(<PopoverExample />, mountNode);