const formWithInputGroupInstance = (
    <Form ratStyle="listview">
        <Input type="text" placeholder="Full name" icon="person" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Address" />
    </Form>
);

ReactDOM.render(formWithInputGroupInstance, mountNode);