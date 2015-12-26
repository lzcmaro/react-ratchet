const titleBarWithSegmentedControlInstance = (
  <div>
    <NavBar>
	    <NavButton left>Left</NavButton>
	    <NavButton right>Right</NavButton>

	    <SegmentedControl>
	      <SegmentedControl.Control active href="javascript:;">One</SegmentedControl.Control>
	      <SegmentedControl.Control href="javascript:;">Two</SegmentedControl.Control>
	      <SegmentedControl.Control href="javascript:;">Three</SegmentedControl.Control>
	    </SegmentedControl>
    </NavBar>
  </div>
);

ReactDOM.render(titleBarWithSegmentedControlInstance, mountNode);