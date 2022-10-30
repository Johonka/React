import React from 'react';
import Products from './Products';

const Product = (props) =>{
    return(
        <>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        </>
    );
}
export default Product

//<button onClick={()=> this.setState({show : !this.state.show})}>Johannes röv</button>
//{this.state.show && <p>Röv</p>}