
import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";



const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    
    return (
        promiseInProgress && 
    <h1> Loading Data... </h1>
      );  
    }


export default LoadingIndicator;