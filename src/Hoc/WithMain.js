import React from 'react';

const WithMain = (WrapperComponent) => {
    class Main extends React.Component {
        render() { 
            return ( 
                <WrapperComponent {...this.props} />
             );
        }
    }
     
    return Main;
}
 
export default WithMain;
 