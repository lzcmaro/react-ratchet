const buttonsInstance = (
  <div>
    <Button icon="icon-search">Default</Button>
    <Button type="submit">SubmitButton</Button>
    <Button type="reset" disabled>ResetButton</Button>
    <Button className="btn-primary">primary</Button>
    <Button className="btn-positive">positive</Button>
    <Button className="btn-negative">negative</Button>
    <Button className="btn-link">link</Button>
    <Button className="btn-outlined">outlined</Button>
    <Button href="http://www.mysoft.com.cn">链接</Button>
    <Button href="">空链接</Button>
  </div>
);

ReactDOM.render(buttonsInstance, mountNode);