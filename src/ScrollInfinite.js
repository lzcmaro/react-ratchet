import React from 'react';

let ScrollInfinite = React.createClass({
    render(){
        let wrapStyle={
            display:'none',
            textAlign:'center',
            fontSize:'12px',
            height:'20px',
            lineHeight:'20px'
        };

        return (
            <div style={wrapStyle}>
                上滑加载更多...
            </div>
        )
    }
});

export default ScrollInfinite;