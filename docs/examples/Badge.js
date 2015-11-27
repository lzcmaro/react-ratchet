const badgeInstance = (
  <div>
      <Badge>1</Badge>
      <Badge className="badge-primary">2</Badge>
      <Badge className="badge-positive">3</Badge>
      <Badge className="badge-negative">4</Badge>
      
      <Badge className="badge-inverted">1</Badge>
      <Badge className="badge-primary badge-inverted">2</Badge>
      <Badge className="badge-positive badge-inverted">3</Badge>
      <Badge className="badge-negative badge-inverted">4</Badge>
  </div>
);

ReactDOM.render(badgeInstance, mountNode);