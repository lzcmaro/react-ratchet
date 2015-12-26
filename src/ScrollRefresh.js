import React from 'react';

let ScrollRefresh = React.createClass({
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
                下拉刷新...
            </div>
        )
    }
});

export default ScrollRefresh;