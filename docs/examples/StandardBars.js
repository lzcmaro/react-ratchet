const buttonsInstance = (
  <div>
    <StandardBar>
        <SegmentedControl>
	      <SegmentedControl.Control active href="#">One</SegmentedControl.Control>
	      <SegmentedControl.Control href="#">Two</SegmentedControl.Control>
	      <SegmentedControl.Control href="#">Three</SegmentedControl.Control>
	    </SegmentedControl>
    </StandardBar>


    <StandardBar className="bar-header-secondary">
        <Button block>Block level button</Button>
    </StandardBar>


    
    <StandardBar className="bar-footer-secondary">
        <Button block>Block level button</Button>
    </StandardBar>



    <StandardBar className="bar-footer">
        <Link left icon="left-nav" href="#"/>
        <Link right icon="gear" href="#"/>
    </StandardBar>
  </div>
);

ReactDOM.render(buttonsInstance, mountNode);