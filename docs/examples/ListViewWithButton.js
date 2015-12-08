const listViewWithButtonInstance = (
  <div>
    <List>
        <ListItem>item1 <Button>Button</Button></ListItem>
        <ListItem>item2 <Button ratStyle="primary">Button</Button></ListItem>
        <ListItem>item3 <Button ratStyle="positive">Button</Button></ListItem>
        <ListItem>item3 <Button ratStyle="negative">Button</Button></ListItem>
    </List>
  </div>
);

ReactDOM.render(listViewWithButtonInstance, mountNode);