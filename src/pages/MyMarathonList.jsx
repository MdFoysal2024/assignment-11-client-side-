import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyMarathonList = () => {
    const [marathon, setMarathon] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myMarathonList?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMarathon(data)
            })
    }, [user.email])
    console.log(marathon)




    return (
        <div>
            My Marathons List here({marathon.length})
        </div>
    );
};

export default MyMarathonList;