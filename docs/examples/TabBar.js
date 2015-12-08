const buttonsInstance = (
  <div>
    <TabBar>
        <TabBar.Item active href="#">
        	<Icon ratStyle="home"/>
        	Home
        </TabBar.Item>
        <TabBar.Item href="#">
        	<Badge ratStyle="negative">3</Badge>
        	<Icon ratStyle="person"/>
        	Profile
        </TabBar.Item>
        <TabBar.Item href="#">
        	<Icon ratStyle="star-filled"/>
        	Favorites
        </TabBar.Item>
        <TabBar.Item href="#">
        	<Icon ratStyle="search"/>
        	Search
        </TabBar.Item>
        <TabBar.Item href="#">
        	<Icon ratStyle="gear"/>
        	Settings
        </TabBar.Item>
    </TabBar>
  </div>
);

ReactDOM.render(buttonsInstance, mountNode);