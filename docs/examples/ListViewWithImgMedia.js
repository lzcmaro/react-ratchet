const listViewWithImgMediaInstance = (
    <List>
        <List.Item navigate>
            <Media src="http://placehold.it/42x42">item1</Media>
        </List.Item>
        <List.Item navigate>
            <Media src="http://placehold.it/42x42">item2</Media>
        </List.Item>
        <List.Item navigate>
            <Media src="http://placehold.it/42x42">item3</Media>
        </List.Item>
    </List>
);

ReactDOM.render(listViewWithImgMediaInstance, mountNode);