import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {

  return (
    <Spinner animation="grow"  variant='info' style={{width:'100px', height:'100px', display:'block', margin:'auto'}}/>
  )
}

export default Loader;
