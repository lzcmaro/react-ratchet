const ActionSheetExample = React.createClass({
    getInitialState:function() {
        return {
            show:false
        };
    },
    _hide:function(){
        this.setState({ show: false});
    },
    render(){
        let modalStyle = {position: 'absolute'};
        let backdropStyle = {position: 'absolute'};
        return (
            <div>
                <Button onClick={() => this.setState({ show: true})}>弹出</Button>
                <ActionSheet 
                    show={this.state.show}
                    onHide={this._hide}
                    style={modalStyle}
                    backdropStyle={backdropStyle}
                    container={this}>

                    {/*弹出的内容示例*/}
                    <div style={{margin:'10px'}}>
                        <Button ratStyle="primary" block>分享</Button>
                        <Button ratStyle="primary" block>删除</Button>
                        <Button block onClick={this._hide}>取消</Button>
                    </div>
                </ActionSheet>
            </div>
        )
    }
})

ReactDOM.render(<ActionSheetExample/>, mountNode);