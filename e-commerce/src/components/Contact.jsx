import React from 'react';

// import components
import NewsletterForm from '../components/NewsletterForm';

const Newsletter = () => {
  return (
    <section className='py-[40px] lg:py-[88px] bg-newsletter bg-cover'>
      <div className='container mx-auto'>
        <div
          className='flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#551A8B] to-blue-500 p-12 rounded-2xl  lg:h-[216px]'
        
        >
          {/* text */}
          <div className='flex-1 w-full'>
            <h3 className='h3 mb-4'>Get Update from Us</h3>
            <p className='max-w-[348px] mb-8'>
              Join now with CRYPTEX to get the latest news
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
