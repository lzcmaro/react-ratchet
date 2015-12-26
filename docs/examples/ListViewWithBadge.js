const listViewWithBadgeInstance = (
  <div>
    <List>
        <List.Item>item1 <Badge>4</Badge></List.Item>
        <List.Item>item2 <Badge>5</Badge></List.Item>
        <List.Item>item3 <Badge>6</Badge></List.Item>
    </List>
  </div>
);

ReactDOM.render(listViewWithBadgeInstance, mountNode);