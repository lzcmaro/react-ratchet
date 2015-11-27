const buttonsBadgesInstance = (
  <div>
    <Button badgeText="1">Button</Button>
    <Button className="btn-primary" badge="badge-primary" badgeText="1">Button</Button>
    <Button className="btn-positive" badge="badge-positive" badgeText="1">Button</Button>
    <Button className="btn-negative" badge="badge-negative" badgeText="1">Button</Button>

    <Button className="btn-outlined" badge="badge-inverted" badgeText="1">Button</Button>
    <Button className="btn-primary btn-outlined" badge="badge-primary badge-inverted" badgeText="1">Button</Button>
    <Button className="btn-positive btn-outlined" badge="badge-positive badge-inverted" badgeText="1">Button</Button>
    <Button className="btn-negative btn-outlined" badge="badge-negative badge-inverted" badgeText="1">Button</Button>
  </div>
);

ReactDOM.render(buttonsBadgesInstance, mountNode);