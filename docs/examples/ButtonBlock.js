const buttonsBlockInstance = (
  <div>
    <Button block>Button</Button>
    <Button ratStyle="primary" block>Button</Button>
    <Button ratStyle="positive" block>Button</Button>
    <Button ratStyle="negative" block>Button</Button>

    <Button outlined block>Button</Button>
    <Button ratStyle="primary" outlined block>Button</Button>
    <Button ratStyle="positive" outlined block>Button</Button>
    <Button ratStyle="negative" outlined block>Button</Button>
  </div>
);

ReactDOM.render(buttonsBlockInstance, mountNode);