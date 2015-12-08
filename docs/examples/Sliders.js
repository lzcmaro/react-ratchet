const SlidersExample = React.createClass({
    onSlide(e){
        let currSlideIndex = e.index;
    },
    render(){
        return (
            <Slider onSlide={this.onSlide}>
                <SliderItem><img src="../assets/slide-1.jpg" /></SliderItem>
                <SliderItem><img src="../assets/slide-2.jpg" /></SliderItem>
                <SliderItem><img src="../assets/slide-3.jpg" /></SliderItem>
            </Slider>
        )
    }
})

ReactDOM.render(<SlidersExample/>, mountNode);