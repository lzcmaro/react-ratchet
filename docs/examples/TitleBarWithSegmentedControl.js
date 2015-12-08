const buttonsInstance = (
  <div>
    <NavBar>
	    <NavButton left>Left</NavButton>
	    <NavButton right>Right</NavButton>

	    <SegmentedControl>
	      <SegmentedControl.Control active href="#">One</SegmentedControl.Control>
	      <SegmentedControl.Control href="#">Two</SegmentedControl.Control>
	      <SegmentedControl.Control href="#">Three</SegmentedControl.Control>
	    </SegmentedControl>
    </NavBar>
  </div>
);

ReactDOM.render(buttonsInstance, mountNode);