const Trigger = React.createClass({
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
            popoverStyle={popoverStyle}
            backdropStyle={backdropStyle}
            container={this}
          >
            <NavBar>Popover title</NavBar>
            <List>
              <ListItem>Item1</ListItem>
              <ListItem>Item2</ListItem>
              <ListItem>Item3</ListItem>
              <ListItem>Item4</ListItem>
              <ListItem>Item5</ListItem>
            </List>
          </NavPopover>
        </div>
    )
  }
});

ReactDOM.render(<Trigger />, mountNode);