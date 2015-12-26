const ScrollExample = React.createClass({
    getDefaultProps(){
        return {
            pageSize:20,
            total:50
        };
    },
    getInitialState(){
        return {
            page:1,
            data:this.getData(1),
        };
    },
    getData(page=1){
        let pageSize=this.props.pageSize;
        let len = page*pageSize>this.props.total ? this.props.total : page*pageSize;
        let nextlist=[];

        for(let i=(page-1)*pageSize; i<len; i++){
            nextlist.push('item'+i)
        }
        return nextlist;
    },
    onInfinite(){
        let page = this.state.page + 1;
        let nextData = this.getData(page);
        this.setState({
            data:this.state.data.concat(nextData),
            page:page
        });
    },
    render(){
        let wrapStyle={
            position: 'absolute',
            zIndex: '1',
            top: '0',
            bottom: '45px',
            left: '0',
            overflow: 'hidden',
            height: '569px',
            width: '100%'
        };

        return (
            <div style={wrapStyle}>
                <Scroll infinite={this.state.data.length<this.props.total} onInfinite={this.onInfinite}>
                    <List>
                        {this.state.data.map(function(item,index){
                            return <List.Item key={'item'+index}>{item}</List.Item>
                        })}
                    </List>
                </Scroll>
            </div>
        )
    }
})

ReactDOM.render(<ScrollExample/>, mountNode);