const formWithInputGruopAndLabelsInstance = (
    <Form ratStyle="listview">
        <Input type="text" placeholder="Mister Ratchet" label="Full name" />
        <Input type="email" placeholder="ratchetframework@gmail.com" label="Email"/>
        <Input type="text" placeholder="ratchet" label="Username" />
    </Form>
);

ReactDOM.render(formWithInputGruopAndLabelsInstance, mountNode);