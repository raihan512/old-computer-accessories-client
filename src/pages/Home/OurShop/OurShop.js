import React from 'react';

const OurShop = () => {
    return (
        <section className='max-w-[1200px] mx-auto mb-5'>
            <div>
                <h2 className='text-center text-xl md:text-2xl text-black uppercase font-bold my-5 md:my-10'>Our Branch</h2>
            </div>
            {/* Branch Container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Branch */}
                <div className='border p-5 transition-all hover:shadow-md hover:border-accent'>
                    <h4 className='text-xl font-bold'>IDB BHABAN</h4>
                    <p>123/5 BCS Computer City, Agargaon Dhaka.</p>
                    <p>Tel: +8809604442121(Sales), 01755513935 (Service)</p>
                </div>
                {/* Branch */}
                <div className='border p-5 transition-all hover:shadow-md hover:border-accent'>
                    <h4 className='text-xl font-bold'>BANANI</h4>
                    <p>41 Kamal Ataturk Avenue, Dhaka.</p>
                    <p>Tel: +8809604442121(Sales), 01755513935 (Service)</p>
                </div>
                {/* Branch */}
                <div className='border p-5 transition-all hover:shadow-md hover:border-accent'>
                    <h4 className='text-xl font-bold'>UTTARA-1</h4>
                    <p>36 Sonargaon, Sector 9, Uttara, Dhaka.</p>
                    <p>Tel: +8809604442121(Sales), 01755513935 (Service)</p>
                </div>
                {/* Branch */}
                <div className='border p-5 transition-all hover:shadow-md hover:border-accent'>
                    <h4 className='text-xl font-bold'>UTTARA-2</h4>
                    <p>123/5 BCS Computer City, Agargaon Dhaka.</p>
                    <p>Tel: +8809604442121(Sales), 01755513935 (Service)</p>
                </div>
                {/* Branch */}
                <div className='border p-5 transition-all hover:shadow-md hover:border-accent'>
                    <h4 className='text-xl font-bold'>MULTIPLAN CENTRE</h4>
                    <p>123/5 BCS Computer City, Agargaon Dhaka.</p>
                    <p>Tel: +8809604442121(Sales), 01755513935 (Service)</p>
                </div>
                {/* Branch */}
                <div className='border p-5 transition-all hover:shadow-md hover:border-accent'>
                    <h4 className='text-xl font-bold'>RAJSHAHI</h4>
                    <p>3/7 Jamal Super Market, 97 Shaheb Bazar.</p>
                    <p>Tel: +8809604442121(Sales), 01755513935 (Service)</p>
                </div>
            </div>
        </section>
    );
};

export default OurShop;