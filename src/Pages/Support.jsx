import React, { Component } from 'react'
import Support_cont_img from '../assets/Support_cont_img.png';

export default class Support extends Component {
  render() {
    return (
      <div className='container'>
        <div className="support_header flex justify-between items-center mt-[115px] rounded-[12px]">
          <div>
            <h2 className='text-[48px] text-[#fff] font-Manrope font-bold'>Welcome to our <br /> support page!</h2>
            <p className='text-[18px] text-[#999999] font-Manrope font-regular'>We're here to help you with any problems you may be having with <br /> our product.</p>
            <img className='pt-[50px]' src={Support_cont_img} alt="" />
          </div>
          <div>
            <div className='bg-[#000] w-[796px] rounded-[12px] p-[30px]'>
              <form action="#">
                <div className='flex flex-col gap-[20px] p-[30px]'>
                  <label className='text-[#fff] font-Manrope font-semibold text-[24px]' htmlFor="name">Full Name</label>
                  <input className='bg-[#1F1F1F] text-[#fff] rounded-[10px] px-[20px] py-[10px]' type="text" id="name" name="name" placeholder='Enter your full name' required />

                  <label className='text-[#fff] font-Manrope font-semibold text-[24px]' htmlFor="email">Email</label>
                  <input className='bg-[#1F1F1F] text-[#fff] rounded-[10px] px-[20px] py-[10px]' type="email" id="email" name="email" placeholder='Enter your email' required />

                  <label className='text-[#fff] font-Manrope font-semibold text-[24px]' htmlFor="message">Message</label>
                  <textarea className='bg-[#1F1F1F] text-[#fff] rounded-[10px] px-[20px] py-[10px]' id="message" name="message" rows="5" placeholder='Type your message here' required></textarea>

                  <div className='flex justify-between items-center mt-[30px]'>
                    <div className='flex items-center gap-[10px]'>
                      <input className='' type="checkbox" />
                      <p className='text-[#fff]'><a href="#">I agree with Terms of Use and Privacy Policy</a></p>
                    </div>
                    <button className='bg-[#E50000] py-[18px] px-[24px] rounded-[10px] text-[18px] font-Manrope font-semibold text-[#fff] mt-[50px]'><a href="#">Submit</a></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Questions Section */}

        <section className='mt-[150px]'>
          <div>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='font-Manrope font-bold text-[38px] text-[#fff]'>Frequently Asked Questions</h3>
                <p className='text-[#999999] font-Manrope font-regular text-[18px]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
              </div>
              <button className='bg-[#E50000] py-[18px] px-[24px] rounded-[10px] text-[18px] font-Manrope font-semibold text-[#fff] mt-[50px]'><a href="#">Ask a Question</a></button>
            </div>

            <div>
              <div className='flex justify-between items-center mt-[80px]'>
                <div className='details_ask'>
                  <details>
                    <summary className='font-Manrope font-medium text-[22px] text-[#fff] mt-[30px]'>What is StreamVibe?</summary>
                    <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[20px]'>StreamVibe is a streaming platform that allows you to watch movies and TV shows on demand, anytime, anywhere.</p>
                  </details> <hr />
                  <details>
                    <summary className='font-Manrope font-semibold text-[24px] text-[#fff] mt-[30px]'>How much does StreamVibe cost?</summary>
                    <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[10px]'>StreamVibe is a streaming platform that allows you to watch movies and TV shows on demand, anytime, anywhere.</p>
                  </details> <hr />
                  <details>
                    <summary className='font-Manrope font-semibold text-[24px] text-[#fff] mt-[30px]'>What content is available on StreamVibe?</summary>
                    <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[10px]'>StreamVibe is a streaming platform that allows you to watch movies and TV shows on demand, anytime, anywhere.</p>
                  </details> <hr />
                </div>
                <div className='details_ask'>
                  <details>
                    <summary className='font-Manrope font-semibold text-[24px] text-[#fff] mt-[30px]'>How can I watch StreamVibe?</summary>
                    <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[10px]'>StreamVibe is a streaming platform that allows you to watch movies and TV shows on demand, anytime, anywhere.</p>
                  </details> <hr />
                  <details>
                    <summary className='font-Manrope font-semibold text-[24px] text-[#fff] mt-[30px]'>How do I sign up for StreamVibe?</summary>
                    <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[10px]'>StreamVibe is a streaming platform that allows you to watch movies and TV shows on demand, anytime, anywhere.</p>
                  </details> <hr />
                  <details>
                    <summary className='font-Manrope font-semibold text-[24px] text-[#fff] mt-[30px]'>What is the StreamVibe free trial?</summary>
                    <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[10px]'>StreamVibe is a streaming platform that allows you to watch movies and TV shows on demand, anytime, anywhere.</p>
                  </details> <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
