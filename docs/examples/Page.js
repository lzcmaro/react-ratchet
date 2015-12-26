const pageInstance = (
  <Page>
  	<Page.Header>
  	  <h1>Header</h1>
  	</Page.Header>

  	<Page.Content>
  	  <List>
  	    <List.Item>item1</List.Item>
  	    <List.Item>item2</List.Item>
  	    <List.Item>item3</List.Item>
  	    <List.Item>item4</List.Item>
  	    <List.Item>item5</List.Item>
  	  </List>

  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	  <p>Page content.</p>
  	</Page.Content>

  	<TabBar>
		<TabBar.Item active href="javascript:;">
			<Icon ratStyle="home"/>
			Home
		</TabBar.Item>
		<TabBar.Item href="javascript:;">
			<Badge ratStyle="negative">3</Badge>
			<Icon ratStyle="person"/>
			Profile
		</TabBar.Item>
		<TabBar.Item href="javascript:;">
			<Icon ratStyle="star-filled"/>
			Favorites
		</TabBar.Item>
		<TabBar.Item href="javascript:;">
			<Icon ratStyle="search"/>
			Search
		</TabBar.Item>
		<TabBar.Item href="javascript:;">
			<Icon ratStyle="gear"/>
			Settings
		</TabBar.Item>
  	</TabBar>
  </Page>
);

ReactDOM.render(pageInstance, mountNode);