const listViewWithCardInstance = (
  <Page>
    <Page.Content>
	    <List>
	        <List.Item>item1</List.Item>
	        <List.Item>item2</List.Item>
	        <List.Item divider>Divider</List.Item>
	        <List.Item>item3</List.Item>
	        <List.Item>item4</List.Item>
	    </List>
	</Page.Content>
  </Page>
);

ReactDOM.render(listViewWithCardInstance, mountNode);