import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';



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
            <div className='flex '>

                <Link to={`/update_Marathon/${marathon._id}`}>
                    <TbEdit />
                </Link>

                <MdDeleteForever />
            </div>
        </div>
    );
};

export default MyMarathonList;