const titleBarWithIconsInstance = (
  <div>
    <NavBar>
        <Link left icon="left-nav" href="javascript:;" />
        <Link right icon="compose" href="javascript:;" />
        Title
    </NavBar>
  </div>
);

ReactDOM.render(titleBarWithIconsInstance, mountNode);