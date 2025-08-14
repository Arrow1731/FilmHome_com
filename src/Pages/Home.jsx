import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <h1 className='text-center text-3xl font-bold'>Home Page</h1> */}
        <div className="container font-Manrope max-w-[1096px] w-full">
          <h1 className='text-center text-[58px] font-bold text-[#fff]'>The Best Streaming Experience</h1>
          <p className='text-center text-[18px] font-regular text-[#999999]'>StreamVibe is the best streaming experience for watching your favorite movies and shows on
            demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies,
            popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch. <br />
            <button className='bg-[#E50000] py-[18px] px-[24px] rounded-[10px] text-[18px] font-Manrope font-semibold text-[#fff] mt-[50px]'><a href="#">Start Watching Now</a></button>
          </p>
        </div>

        {/* Cards Div */}

        <main className='container mt-[150px]'>
          <section>
            <div>
              {/* <h2 className='font-Manrope font-bold text-[38px] text-[#fff]'>We Provide you streaming experience across various devices.</h2> */}   
              <p className='font-Manrope font-regular text-[18px] text-[#999999]'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>
            <div className=''>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[80px]'>
                <div className='fff_eee'>
                  <h3 className='font-Monrope font-semibold text-[24px] text-[#fff]'>Smartphones</h3>
                  <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[30px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
                <div className='fff_eee'>
                  <h3 className='font-Monrope font-semibold text-[24px] text-[#fff]'>Tablet</h3>
                  <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[30px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
                <div className='fff_eee'>
                  <h3 className='font-Monrope font-semibold text-[24px] text-[#fff]'>Smart TV</h3>
                  <p className='text-[#999999] font-Manrope font-regular text-[18px] pt-[30px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
              </div>
            </div>
          </section>

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
        </main>
      </div>
    )
  }
}
