import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../shared/ProductCard/ProductCard';
import BookingModal from '../../Category/BookingModal/BookingModal';

const RecentlyAddedProducts = () => {
    const [booking, setBooking] = useState(null);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 20

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 20

        }
    };

    const { data: allProducts = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = fetch('https://pcparts-server.vercel.app/products');
            const data = (await res).json();
            return data;
        }
    })

    return (
        <section className='mb-5'>
            <h2 className='text-center text-xl md:text-2xl text-black uppercase font-bold my-5 md:my-10'>Recently Added</h2>
            <div className='mx-5'>
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisible
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >

                    {
                        allProducts.map(product =>
                            <ProductCard
                                booking={booking}
                                setBooking={setBooking}
                                key={product._id}
                                product={product}
                            ></ProductCard>
                        )
                    }
                </Carousel>
            </div>
            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </section>
    );
};

export default RecentlyAddedProducts;