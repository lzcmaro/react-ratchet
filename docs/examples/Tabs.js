const TabsExample = React.createClass({
    getInitialState(){
        return {
            activeTab:'首页'
        };
    },
    onSlide(e){
        let currSlideIndex = e.index;
        let tabName;
        if(currSlideIndex===0){
            tabName='首页';
        }else if(currSlideIndex===1){
            tabName='活动';
        }else if(currSlideIndex===2){
            tabName='我';
        }

        this.setState({
            activeTab:tabName
        })
    },
    goTab(index){
        this.refs.slider.slide(index);
    },
    render(){
        return (
            <div>
                <Slider onSlide={this.onSlide} ref="slider">
                    <SliderItem>
                        <List>
                            <List.Item>首页</List.Item>
                            <List.Item>item1</List.Item>
                            <List.Item>item2</List.Item>
                        </List>
                    </SliderItem>
                    <SliderItem>
                        <List>
                            <List.Item>活动</List.Item>
                            <List.Item>item3</List.Item>
                            <List.Item>item4</List.Item>
                        </List>
                    </SliderItem>
                    <SliderItem>
                        <List>
                            <List.Item>我</List.Item>
                            <List.Item>item5</List.Item>
                            <List.Item>item6</List.Item>
                        </List>
                    </SliderItem>
                </Slider>

                <TabBar>
                    <TabBar.Item active={this.state.activeTab=="首页"} onClick={this.goTab.bind(this,0)}>
                        首页
                    </TabBar.Item>
                    <TabBar.Item active={this.state.activeTab=="活动"} onClick={this.goTab.bind(this,1)}>
                        活动
                    </TabBar.Item>
                    <TabBar.Item active={this.state.activeTab=="我"} onClick={this.goTab.bind(this,2)}>
                        我
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
})

ReactDOM.render(<TabsExample/>, mountNode);