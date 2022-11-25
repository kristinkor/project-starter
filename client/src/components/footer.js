import React from 'react'


export default function Footer() {
  return (
    <footer className="bg-primary-400 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-gray-400">
      <div> 
        <div className="logo-footer">iWardrobe</div>
        <div className="social-icons"></div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Address</h3>
          <p>123 Some Rd,</p>
          <p>Triple Bay 1234</p>
          <p>New York, USA</p>
          <button>find on Map</button>
        </div>
        <div className="col">
          <h3>SiteMap</h3>
          <ul>
            <li>Home</li>
            <li>Feed</li>
            <li>Help</li>
          </ul>
        </div>
        <div  className="col">>   
          <h3>Contact</h3>
          <p>P: 1234 213 301</p>
          <p>E: contact@iwardrobe.com</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex flex-wrap py-10 lg:justify-between">
          {/* <NavLinks className="mb-6 inline-flex w-full flex-none justify-center lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end" />
          <SocialLinks className="mb-6 inline-flex w-full flex-none justify-center lg:flex lg:justify-end" /> */}
          <div className="mb-6 inline-flex w-full flex-none justify-center lg:w-1/2 lg:justify-start">
            &copy; 2022 iWardrobe, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}