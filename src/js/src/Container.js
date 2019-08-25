import React from 'react';
const Container = props => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div style = {{width: '1400px', margin: '0 auto', textAlign: 'center'}}>
        {props.children}
    </div>
);

export default Container;
    
