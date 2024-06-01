import React from "react";

const SearchBanner = () => {
  return (
    <>
      {/* banner-section start */}
      <section className="searchBanner-section relative after:absolute after:content-[''] after:h-[100%] after:w-[100%] after-bg-gradient after:-z-[1] after:top-[0px] after:left-[0px] bg-cover py-[120px] z-[1] sm:bg-center" style={{ backgroundImage: 'url(%PUBLIC_URL%/img/banner.png)' }}>
        <div className="container md:max-w-[800px]">
          <div className="row">
            <div className="content px-[15px]">
              <div className="main-heading text-center text-[55px] leading-[66px] xs:text-[26px] sm:leading-[50px] md:text-[48px] ss:text-[22px]">
                <h2 className="font-bold text-white sm:text-[36px] ss:text-[26px]">Are You a Supplier?</h2>
                <span className="text-white capitalize sm:text-[36px] ss:text-[26px]">explore matching oppotunities.</span>
              </div>
              <form action="" className="flex flex-wrap gap-[12px] items-center justify-center py-[40px] sm:py-[20px]">
                <div className="inputbox flex items-center bg-[white] w-[30%] px-[20px] rounded-[5px] xs:w-[100%] sm-670:w-[100%] md:w-[49%]">
                  <div className="icon pr-[18px]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_126)">
                        <path d="M13.125 5.6875C12.642 5.6875 12.25 5.2955 12.25 4.8125V3.5H8.75V4.8125C8.75 5.2955 8.358 5.6875 7.875 5.6875C7.392 5.6875 7 5.2955 7 4.8125V3.5C7 2.53487 7.78488 1.75 8.75 1.75H12.25C13.2151 1.75 14 2.53487 14 3.5V4.8125C14 5.2955 13.608 5.6875 13.125 5.6875Z" fill="#E7760D" />
                        <path d="M11.1213 13.4575C10.9637 13.5187 10.7362 13.5625 10.5 13.5625C10.2638 13.5625 10.0362 13.5187 9.82625 13.44L0 10.1675V16.8437C0 18.1737 1.07625 19.25 2.40625 19.25H18.5938C19.9237 19.25 21 18.1737 21 16.8437V10.1675L11.1213 13.4575Z" fill="#E7760D" />
                        <path d="M21 6.78125V8.785L10.71 12.215C10.64 12.2413 10.57 12.25 10.5 12.25C10.43 12.25 10.36 12.2413 10.29 12.215L0 8.785V6.78125C0 5.45125 1.07625 4.375 2.40625 4.375H18.5938C19.9237 4.375 21 5.45125 21 6.78125Z" fill="#E7760D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_126">
                          <rect width="21" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                  <input type="text" className="focus:outline-none rounded py-[16px] w-[100%] sm:py-[12px]" placeholder="Search your required service here" />
                </div>
                <div className="inputbox flex items-center bg-[white] w-[30%] px-[20px] xs:w-[100%] rounded-[5px] sm-670:w-[100%] md:w-[49%]">
                  <div className="icon pr-[18px]">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0C7.03917 0 3.41406 3.6252 3.41406 8.08594C3.41406 9.59531 3.83193 11.0643 4.627 12.3311L10.9519 22.6817C11.0598 22.8569 11.2215 22.9648 11.4102 22.9917C11.6662 23.0321 11.9493 22.9244 12.0975 22.6683L18.4405 12.2232C19.1951 10.9834 19.5859 9.54145 19.5859 8.08594C19.5859 3.6252 15.9608 0 11.5 0ZM11.5 12.1289C9.23603 12.1289 7.45703 10.2961 7.45703 8.08594C7.45703 5.86226 9.27632 4.04297 11.5 4.04297C13.7237 4.04297 15.543 5.86226 15.543 8.08594C15.543 10.2826 13.791 12.1289 11.5 12.1289Z" fill="#E7760D" />
                      <path d="M11 0V4.04297C13.2237 4.04297 15.043 5.86226 15.043 8.08594C15.043 10.2826 13.291 12.1289 11 12.1289V22.9996C11.23 23.0049 11.4664 22.8947 11.5975 22.6683L17.9404 12.2232C18.6951 10.9834 19.0859 9.54145 19.0859 8.08594C19.0859 3.62519 15.4608 0 11 0Z" fill="#E7770D" />
                    </svg>
                  </div>
                  <input type="text" className="focus:outline-none rounded py-[16px] w-[100%] sm:py-[12px]" placeholder="Search your desired location here" />
                </div>
                <div className="btn">
                  <a href="" className="block font-bold text-white px-[35px] py-[16px] bg-[#00732F] rounded  sm:py-[12px] md:px-[45px]">Search</a>
                </div>
              </form>
              <div className="addition-link flex flex-wrap gap-[8px] justify-center ss:gap-[2px]">
                <p className="text-white font-bold">Are you a buyer?</p>
                <a href="" className="text-white border-b-2 border-white-500">Click here if you are looking to post a requirements</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}
    </>
  )
}

export default SearchBanner;