import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-gray-300 px-8 py-4 mx-auto divide-y'>
            <div className='md:grid  md:grid-cols-5 my-5 mx-auto text-center'>
            <div>
                <h2 className='text-3xl font-bold'> JobHive</h2>
                <p className='md:w-3/4 '>
                There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                </p>
                <img  className='my-3'  src="../../assets/Icons/Group 9969.png" alt="" />
            </div>
            <div>
                <h3 className='h3'>Company</h3>
                <p >About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>
            </div>
            <div>
                <h3 className='h3'>Product</h3>
                <p>Prototype</p>
                <p>Plans & Pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div>
                <h3 className='h3'>Support</h3>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a Partner</p>
                <p>Developers</p>
            </div>
            <div>
                <h3 className='h3'>Contact</h3>
                <p>524 Broadway , NYC</p>
                <p>+1 777 - 978 - 5570</p>
            </div>

        </div>
        
        <div className='flex justify-between  items-center divide-white'>
            <div>
            @2023 CareerHub. All Rights Reserved
            </div>
            <div>
            Powered by CareerHub
            </div>
        </div>
        </div>
    );
};

export default Footer;