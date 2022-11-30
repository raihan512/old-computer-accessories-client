import React, { useContext } from 'react';
import { AuthProvider } from '../../../../Contexts/Authprovider/AuthContext';

const BookingModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthProvider);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;

        const productName = form.productname.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const resalePrice = form.resalePrice.value;
        const buyerPhone = form.buyerPhone.value;
        const meetingLocation = form.meetingLocation.value;
        const bookingDetails = { productName, buyerName, buyerEmail, resalePrice, buyerPhone, meetingLocation }
        console.log(bookingDetails);
        setBooking(null);
    }
    return (
        <div>
            <input type="checkbox" id="book-now-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-now-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-xl font-bold mb-3 text-center'>Book Now</h3>
                    <form className='flex flex-col' onSubmit={handleBooking}>
                        <input type="text" name='productname' defaultValue={booking.productname} disabled className="input input-md input-bordered w-full mb-2" />
                        <input type="text" name='buyerName' defaultValue={user.displayName} disabled className="input input-md input-bordered w-full mb-2" />
                        <input type="text" name='buyerEmail' defaultValue={user.email} disabled className="input input-md input-bordered w-full mb-2" />
                        <input type="text" name='resalePrice' defaultValue={booking.resalePrice} disabled className="input input-md input-bordered w-full mb-2" />
                        <input type="text" name='buyerPhone' placeholder="Give Your Phone Number" required className="input input-md input-bordered w-full mb-2" />
                        <input type="text" name='meetingLocation' placeholder="Set a meeting Location" required className="input input-md input-bordered w-full mb-2" />
                        <input type="submit" value="Submit" className='bg-accent rounded-md py-2 text-white font-smibold text-lg cursor-pointer' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;