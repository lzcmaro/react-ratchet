const buttonsInstance = (
  <div>
    <SegmentedControl>
      <SegmentedControl.Control active href="#">
        Thing one
      </SegmentedControl.Control>
      <SegmentedControl.Control href="#">
        Thing two
      </SegmentedControl.Control>
      <SegmentedControl.Control href="#">
        Thing three
      </SegmentedControl.Control>
    </SegmentedControl>
  </div>
);

ReactDOM.render(buttonsInstance, mountNode);