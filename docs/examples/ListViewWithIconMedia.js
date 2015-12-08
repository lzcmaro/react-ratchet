const listViewWithIconMediaInstance = (
    <List>
        <ListItem>
            <ListNav right>
                <Media icon="trash">item1</Media>
            </ListNav>
        </ListItem>
        <ListItem>
            <ListNav right>
                <Media icon="gear">item2</Media>
            </ListNav>
        </ListItem>
        <ListItem>
            <ListNav right>
                <Media icon="pages">item3</Media>
            </ListNav>
        </ListItem>
    </List>
);

ReactDOM.render(listViewWithIconMediaInstance, mountNode);