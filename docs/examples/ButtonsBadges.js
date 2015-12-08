const buttonsBadgesInstance = (
  <div>
    <Button>Button <Badge>1</Badge></Button>
    <Button ratStyle="primary">Button <Badge ratStyle="primary">1</Badge></Button>
    <Button ratStyle="positive">Button <Badge ratStyle="positive">1</Badge></Button>
    <Button ratStyle="negative">Button <Badge ratStyle="negative">1</Badge></Button>

    <Button outlined>Button <Badge inverted>1</Badge></Button>
    <Button ratStyle="primary" outlined>Button <Badge ratStyle="primary" inverted>1</Badge></Button>
    <Button ratStyle="positive" outlined>Button <Badge ratStyle="positive" inverted>1</Badge></Button>
    <Button ratStyle="negative" outlined>Button <Badge ratStyle="negative" inverted>1</Badge></Button>
  </div>
);

ReactDOM.render(buttonsBadgesInstance, mountNode);