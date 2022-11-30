import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const Seller = () => {
    const url = 'https://pcparts-server.vercel.app/users';
    // Load all users from backend
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch(`${url}`);
            const data = await res.json();
            return data;
        }
    })
    // Find all sellers from all users
    const sellers = allUsers.filter(users => users.category === 'seller');

    // Delete seller function
    const handleDeleteSeller = id => {
        fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // console.log(data);
                    toast.success('Seller Deleted')
                    refetch();

                }
            })
    }
    // Verify Seller Function
    const handleVerifySeller = id => {
        fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User Verified')
                    refetch();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <>
            {
                sellers.length ?
                    <div className="overflow-x-auto my-10">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Verify</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    sellers.map((buyer, i) =>
                                        <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td>{buyer.name}</td>
                                            <td>{buyer.email}</td>
                                            <td>{buyer.category}</td>
                                            <td><button className='py-2 px-5 rounded-md hover:bg-green-600 border-0' onClick={() => handleVerifySeller(buyer._id)}>{buyer.userVerified ? 'Verfied' : 'Verify'}</button></td>
                                            <td><button className='py-2 px-5 rounded-md hover:bg-red-600 border-0' onClick={() => handleDeleteSeller(buyer._id)}>Delete</button></td>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                    :
                    <h3 className='text-center text-2xl font-semibold'>No Sellers Available</h3>
            }
        </>
    );
};

export default Seller;