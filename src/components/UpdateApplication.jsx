import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateApplication = () => {
    const { id } = useParams();
    console.log(id)





    const navigate = useNavigate()


    const [updateApplication, setUpdateApplication] = useState({})



    useEffect(() => {
        fetch(`http://localhost:5000/myApplyList/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdateApplication(data)
                // console.log(data)
            })

    }, [])

    console.log(updateApplication)
   


















    //Application Update functionality


    const handleUpdateApplication = async (e) => {

        console.log('Update Application')
        e.preventDefault();
        const form = e.target;

        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const contact_number = form.contact_number.value;
        const runner_age = form.runner_age.value;
        const location = form.location.value;
        const email = form.email.value;
        const title = form.title.value;
        const marathon_Date = form.marathon_Date.value;;

        console.log({
            first_name,
            last_name,
            contact_number,
            runner_age,
            location,
            email,
            title,
            marathon_Date,
        });

        const formData = {
            first_name,
            last_name,
            contact_number,
            runner_age,
            location,
            email,
            title,
            marathon_Date,

        };

        console.log(formData);



        fetch(`  /updateMarathon/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(marathonData)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Application Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank You'
                    })
                }
                navigate('/my_apply_List')

            })



    }


    return (
        <div>



        </div>
    );
};

export default UpdateApplication;