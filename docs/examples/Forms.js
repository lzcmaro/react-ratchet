const buttonsInstance = (
    <Form>
        <Input type="text" placeholder="Full name" />
        <Input type="search" placeholder="Search" />
        <Input type="email" placeholder="Email" />
        <FormButton type="submit" ratStyle="positive" block>Submit</FormButton>
    </Form>
);

ReactDOM.render(buttonsInstance, mountNode);