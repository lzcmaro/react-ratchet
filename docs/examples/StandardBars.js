const standardBarsInstance = (
  <div>
    <StandardBar>
        <SegmentedControl>
	      <SegmentedControl.Control active href="javascript:;">One</SegmentedControl.Control>
	      <SegmentedControl.Control href="javascript:;">Two</SegmentedControl.Control>
	      <SegmentedControl.Control href="javascript:;">Three</SegmentedControl.Control>
	    </SegmentedControl>
    </StandardBar>

    <StandardBar className="bar-footer">
        <Link left icon="left-nav" href="javascript:;"/>
        <Link right icon="gear" href="javascript:;"/>
    </StandardBar>
  </div>
);

ReactDOM.render(standardBarsInstance, mountNode);