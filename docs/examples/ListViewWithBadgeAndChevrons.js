const listViewWithBadgeAndChevronsInstance = (
  <div>
    <List>
        <ListItem>
            <ListNav right>
                <Badge>4</Badge>
                item1
            </ListNav>
        </ListItem>
        <ListItem>
            <ListNav right>
                <Badge>5</Badge>
                item2
            </ListNav>
        </ListItem>
        <ListItem>
            <ListNav right>
                <Badge>6</Badge>
                item3
            </ListNav>
        </ListItem>
    </List>
  </div>
);

ReactDOM.render(listViewWithBadgeAndChevronsInstance, mountNode);