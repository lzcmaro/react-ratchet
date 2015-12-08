const buttonsInstance = (
  <div>
    <NavBar>
      <NavButton left ratStyle="link" href="#">
        <Icon ratStyle="left-nav"/>
        Left
      </NavButton>
      <NavButton right ratStyle="link" href="#">
        Right
        <Icon ratStyle="right-nav"/>
      </NavButton>
      Title
    </NavBar>
  </div>
);

ReactDOM.render(buttonsInstance, mountNode);