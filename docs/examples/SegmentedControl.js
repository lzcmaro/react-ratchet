const buttonsInstance = (
  <div>
    <SegmentedControl>
      <SegmentedControl.Control active href="javascript:;">
        Thing one
      </SegmentedControl.Control>
      <SegmentedControl.Control href="javascript:;">
        Thing two
      </SegmentedControl.Control>
      <SegmentedControl.Control href="javascript:;">
        Thing three
      </SegmentedControl.Control>
    </SegmentedControl>
  </div>
);

ReactDOM.render(buttonsInstance, mountNode);