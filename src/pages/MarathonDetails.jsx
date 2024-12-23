import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MarathonDetails = () => {
const marathonData = useLoaderData()
console.log(marathonData);

const { _id, 

    
 } = marathonData || {};


    return (
        <div>
           Marathon Details page 
        </div>
    );
};

export default MarathonDetails;