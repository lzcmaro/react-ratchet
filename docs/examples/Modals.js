var App = React.createClass({

  getInitialState: function() {
    return { isOpen: false };
  },

  render: function() {
    let modalStyle = {position: 'absolute'};
    let backdropStyle = {position: 'absolute'};

    return (
      <div>
        <Button onClick={() => this.setState({isOpen: true})}>Open Modal</Button>
        <Modal
          show={this.state.isOpen}
          onHide={() => this.setState({isOpen: false})}
          modalStyle={modalStyle}
          backdropStyle={backdropStyle}
          container={this}
          transitionTimeout={3000}>

          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            The contents of my modal go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Modal.Body>

        </Modal>
      </div>
    );
  }
});

ReactDOM.render(<App/>, mountNode);