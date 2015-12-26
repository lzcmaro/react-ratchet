const ScrollRefreshExample = React.createClass({
    getInitialState(){
        return {
            data:this.getData(),
        };
    },
    getData(item='item'){
        let nextlist=[];
        for(let i=0; i<20; i++){
            nextlist.push(item+i)
        }
        return nextlist;
    },
    onPullRefresh(callback){
        let _this = this;
        let newData = this.getData('newItem');
        
        setTimeout(function(){
            _this.setState({
                data: newData
            });
            callback();
        },1000);     
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
                <Scroll refresh={true} onPullRefresh={this.onPullRefresh}>
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

ReactDOM.render(<ScrollRefreshExample/>, mountNode);