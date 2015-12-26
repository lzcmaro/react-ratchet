const PushExample = React.createClass({

	render() {
		let pushProps = {href: "/assets/two.html", container: this};
		return (
			<Page>
			    <NavBar>Push</NavBar>
			    <Page.Content>
					<List>
				        <List.Item navigate push={pushProps}>
				        	Load new page with push
				        </List.Item>
				    </List>
				</Page.Content>
			</Page>
		)
	}
});

ReactDOM.render(<PushExample/>, mountNode);