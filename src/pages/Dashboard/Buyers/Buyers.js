import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Buyers = () => {
    // Load all users from backend
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch(`https://pcparts-server.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    })
    // Find all buyers from all users
    const buyers = allUsers.filter(users => users.category === 'buyer');
    // Delete Buyer function
    const handleDeletebuyer = id => {
        fetch(`https://pcparts-server.vercel.app/users/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // console.log(data);
                    toast.success('Buyer Deleted')
                    refetch();

                }
            })
    }

    return (
        <>
            {buyers.length ?
                <div>
                    <div className="overflow-x-auto my-10">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyers.map((buyer, i) =>
                                        <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td className='uppercase'>{buyer.name}</td>
                                            <td>{buyer.email}</td>
                                            <td className='uppercase'>{buyer.category}</td>
                                            <td><button className='py-2 px-5 rounded-md hover:bg-red-600 border-0' onClick={() => handleDeletebuyer(buyer._id)}>Delete</button></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                :
                <h3 className='text-center text-2xl font-semibold'>No Buyers Available</h3>

            }
        </>
    );
};

export default Buyers;