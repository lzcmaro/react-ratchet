const SelectExample = React.createClass({
    onHandle:function(value,text){
        //alert(text)
    },
    render(){
        return (
            <Select defaultValue="" onChange={this.onHandle} container={this}>
                <Select.option value=""  text="请选择公司" />
                <Select.option value="1" text="云服务" />
                <Select.option value="2" text="云客" />
                <Select.option value="3" text="云采购" />
                <Select.option value="4" text="云会员" />
                <Select.option value="5" text="云客服" />
                <Select.option value="6" text="移动验房" />
            </Select>
        )
    }
})

ReactDOM.render(<SelectExample/>, mountNode);