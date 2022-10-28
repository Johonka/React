import React from 'react';

class Johannes extends React.Component{
    constructor(){
        super();
        this.state = {show:false}
    }

    render(
    ){
        return (<> 
                    <button onClick={()=> this.setState({show : !this.state.show})}>Johannes röv</button>
                    {this.state.show && <p>Röv</p>}
                </>)
    }
}

export default Johannes;