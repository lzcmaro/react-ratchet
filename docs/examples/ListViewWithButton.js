const listViewWithButtonInstance = (
  <div>
    <List>
        <List.Item>item1 <Button>Button</Button></List.Item>
        <List.Item>item2 <Button ratStyle="primary">Button</Button></List.Item>
        <List.Item>item3 <Button ratStyle="positive">Button</Button></List.Item>
        <List.Item>item3 <Button ratStyle="negative">Button</Button></List.Item>
    </List>
  </div>
);

ReactDOM.render(listViewWithButtonInstance, mountNode);