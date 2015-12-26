const titleBarWithLinkButtonsAndIconsInstance = (
  <div>
    <NavBar>
      <NavButton left ratStyle="link" href="javascript:;">
        <Icon ratStyle="left-nav"/>
        Left
      </NavButton>
      <NavButton right ratStyle="link" href="javascript:;">
        Right
        <Icon ratStyle="right-nav"/>
      </NavButton>
      Title
    </NavBar>
  </div>
);

ReactDOM.render(titleBarWithLinkButtonsAndIconsInstance, mountNode);