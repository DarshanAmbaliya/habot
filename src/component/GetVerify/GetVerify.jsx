import React from "react";

const GetVerify = () => {
  return (
    <>
      {/* verify-section start */}
      <section className="verify-section bg-[#E8FBFF] px-[15px]">
        <div className="container md:max-w-[800px]">
          <div className="row">
            <div className="box flex flex-wrap justify-between font-bold capitalize items-center py-[95px] px-[80px] md:px-[15px] xs:px-[0px] xs:py-[60px] ss:justify-center ss:text-center">
              <h3 className="text-[37px] md:text-[28px] ss:w-[100%]">let supplier <span className="border-b-[3px] border-[#EB7150] ss:border-none">find you</span></h3>
              <div className="btn ss:pt-[8px]">
                <a href="" className="block px-[60px] py-[14px] bg-[#EB7150] text-[18px] text-white rounded text-[14px] md:px-[40px] xs:py-[10px] ss:text-[16px]">get verfied</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* verify-section end */}
    </>
  )
}

export default GetVerify;