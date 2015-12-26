const listViewWithBadgeAndChevronsInstance = (
  <div>
    <List>
        <List.Item navigate>item1 <Badge>4</Badge></List.Item>
        <List.Item navigate>item2 <Badge>5</Badge></List.Item>
        <List.Item navigate>item3 <Badge>6</Badge></List.Item>
    </List>
  </div>
);

ReactDOM.render(listViewWithBadgeAndChevronsInstance, mountNode);