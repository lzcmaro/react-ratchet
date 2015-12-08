const badgeInstance = (
  <div>
      <Badge>1</Badge>
      <Badge ratStyle="primary">2</Badge>
      <Badge ratStyle="positive">3</Badge>
      <Badge ratStyle="negative">4</Badge>
      
      <Badge inverted>1</Badge>
      <Badge ratStyle="primary" inverted>2</Badge>
      <Badge ratStyle="positive" inverted>3</Badge>
      <Badge ratStyle="negative" inverted>4</Badge>
  </div>
);

ReactDOM.render(badgeInstance, mountNode);