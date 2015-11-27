const buttonsWithIconsInstance = (
  <div>
    <Button icon="icon-search">Button</Button>
    <Button className="btn-primary" icon="icon-search">Button</Button>
    <Button className="btn-positive" icon="icon-search">Button</Button>
    <Button className="btn-negative" icon="icon-search">Button</Button>
    <Button className="btn-link" icon="icon-left">Button</Button>
  </div>
);

ReactDOM.render(buttonsWithIconsInstance, mountNode);