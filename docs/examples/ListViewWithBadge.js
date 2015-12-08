const listViewWithBadgeInstance = (
  <div>
    <List>
        <ListItem>item1 <Badge>4</Badge></ListItem>
        <ListItem>item2 <Badge>5</Badge></ListItem>
        <ListItem>item3 <Badge>6</Badge></ListItem>
    </List>
  </div>
);

ReactDOM.render(listViewWithBadgeInstance, mountNode);