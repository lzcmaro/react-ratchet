const listViewWithIconMediaInstance = (
    <List>
        <List.Item navigate>
            <Media icon="trash">item1</Media>
        </List.Item>
        <List.Item navigate>
            <Media icon="gear">item2</Media>
        </List.Item>
        <List.Item navigate>
            <Media icon="pages">item3</Media>
        </List.Item>
    </List>
);

ReactDOM.render(listViewWithIconMediaInstance, mountNode);