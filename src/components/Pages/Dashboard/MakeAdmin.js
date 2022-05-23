import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserTable from './UserTable';

const MakeAdmin = () => {

    const { data:users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Barer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>make admin</th>
                        <th>remove admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user,index)=><UserTable
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                        >

                        </UserTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;