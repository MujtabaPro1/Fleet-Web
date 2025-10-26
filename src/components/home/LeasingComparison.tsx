import React from "react";

const LeasingComparison = (props: any) => {
  return (
    <>
      <div className="section LeasingComparison py-10 px-4">

        <div className="flex flex-col items-center justify-center mx-auto gap-4 w-[1104px] max-w-full p-0 relative overflow-visible">
          <div className="relative w-auto h-auto flex-none">


            {/* Container for heading and paragraph */}
            <div className="mb-[40px] flex flex-col items-center justify-center gap-2 w-full max-w-[900px] p-0 relative overflow-visible">
              <div className="animate-slide-up-fade mb-5 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#126dfb] bg-[#e1eaf8]">
                <p className="mx-auto text-[#126dfb] text-sm font-medium leading-tight tracking-tight xfont-[Geist]">
                  Why choose us?
                </p>
              </div>
              <h2
                className="
              font-sans font-normal text-black 
              text-[48px] leading-[1.1em] tracking-[-0.03em] capitalize
              max-w-full
              md:text-[38px]
              sm:text-[28px]
              m-0 p-0
              bg-transparent rounded-none
              "
                style={{
                  fontFeatureSettings: "normal",
                  textDecoration: "none",
                  textTransform: "capitalize",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {/* Heading text here */}
                {props.sectionTitle}
              </h2>
              <p
                className="
              font-sans font-medium text-center text-gray-600 
              text-[16px] leading-[1.4em] tracking-[-0.03em]
              max-w-[425px]
              m-0 p-0
              bg-transparent rounded-none
              "
                style={{
                  fontFeatureSettings: "normal",
                  textDecoration: "none",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {/* Paragraph text here */}
                {props.sectionDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="relative xcontainer xmx-auto max-w-4xl mx-auto bg-white rounded-[30px] shadow-[0_1px_20px_rgba(0,0,0,0.03)] p-3">





          <div className="flex flex-row items-start justify-center gap-5  ">
            {/* Other Companies Section */}
            <div className="flex flex-col gap-5 p-5 bg-white rounded-xl w-full">
              <h4 className="text-xl font-medium text-black">Other companies</h4>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2">
                  {/* Close icon */}
                  <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-gray-100 border border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-3.5 h-3.5 fill-gray-600"
                    >
                      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm -tracking-[0.03em]">
                    One-size-fits-all leasing, limited flexibility
                  </p>
                </div>
              </div>
            </div>

            {/* Fleet Leasing Australia Section */}
            <div className="flex flex-col gap-5 p-5 bg-white rounded-[20px] w-full border-[4px] border-[#184273]">
              <div className="flex items-center gap-2">
                {/* Logo */}
                <div className="flex items-center justify-center p-[4.5px] bg-[#184172] rounded-md xw-min xh-min">
                  <img
                    src="https://framerusercontent.com/images/TtJLp5JftH0lEgqLQ7Ym13LsNr8.png?width=176&height=146"
                    alt="Fleet Leasing Australia Logo"
                    className="w-[26px] h-[22px] object-contain"
                  />
                </div>
                <h4 className="text-xl font-medium text-black">Fleet Leasing Australia</h4>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2">
                  {/* Check icon */}
                  <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#184273] border border-[#e1eaf8]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-3.5 h-3.5 fill-white"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm -tracking-[0.03em]">
                    Fully customized fleet plans to fit your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default LeasingComparison;
