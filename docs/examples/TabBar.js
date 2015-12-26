const tabbarInstance = (
  <div>
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
  </div>
);

ReactDOM.render(tabbarInstance, mountNode);