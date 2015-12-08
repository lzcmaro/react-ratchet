const listViewWithImgMediaInstance = (
    <List>
        <ListItem>
            <ListNav right>
                <Media src="http://placehold.it/42x42">item1</Media>
            </ListNav>
        </ListItem>
        <ListItem>
            <ListNav right>
                <Media src="http://placehold.it/42x42">item2</Media>
            </ListNav>
        </ListItem>
        <ListItem>
            <ListNav right>
                <Media src="http://placehold.it/42x42">item3</Media>
            </ListNav>
        </ListItem>
    </List>
);

ReactDOM.render(listViewWithImgMediaInstance, mountNode);