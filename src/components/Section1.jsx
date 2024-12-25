import React from 'react'

const Section1 = () => {
    const videoProps = {
        controls: false,
        autoPlay: true,
        loop: true,
        muted: true,

    };

return (
    <> 
        <section className='h-screen w-full flex flex-col md:h-[180vh] md:flex-row'>
            <div className='h-[50%] w-full relative md:h-full md:w-[50vw]'>
                <video className='h-full w-full object-cover' src="https://thetalentburo.com.au/wp-content/themes/ttb/video/Final_Edit_Model_Video.webm" {...videoProps}></video>

                <a href="#" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-[5vw]'>MODLELS</a>
            </div>

            <div className='h-[50%] w-full relative md:h-full md:w-[50vw]'>
                <video className='h-[100%] w-full object-cover' type="video/mp4" src="https://thetalentburo.com.au/wp-content/themes/ttb/video/Final_Edit_Influencer.webm" {...videoProps}></video>

                <a href="#" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-[5vw]'>INFLUENCE</a>
            </div>
        </section>

        <section className='min-h-[10vh] w-full flex flex-col p-10 '>
                <p className='pt-[10vh] py-3 text-[10px] w-[80%] flex items-start justify-start md:w-[60%] md:text-[14px] xl:w-[40%]'>The Talent Büro (TTB) is a boutique agency specialising in Model and Talent management in Australia. TTB offers bespoke all-female model management where we work to achieve our models long-term goals and success. Through our extensive client network TTB provides strategic and personalised career planning to build the profiles of our models and talent in the fashion, beauty, lifestyle, consumer and many more sectors. TTB actively procures opportunities for our models in the photographic, creative and TV industries as well as social media partnerships, PR and brand endorsements. The Talent Büro, founded in 2017 is propelled by a team of highly skilled, experienced Talent Managers, and is pioneered by strategic vision and commitment to diversity, inclusivity and adaptability within the industry.</p>
        </section>
        
        <footer className=' pt-[10vh] px-4 min-h-[40vh] w-full flex flex-col items-center justify-evenly md:flex-row '>

                <div className='w-full px-3 flex flex-col'>
                    <h6 className='text-[12px]'>Subscribe to TTB</h6>
                    <input className='border-b-[1px] border-black text-[12px]  h-[30px] text-left' type="email" placeholder='Email Address' />
                    <button className='w-fit text-[12px] py-3'>Submit</button>
                </div>

                <div className='w-full px-3 flex flex-col md:flex-row gap-2'>
                    <div>
                        <p className='text-[12px] md:w-[40%]'>Office 3, 17 Izett Street Prahran VIC 3181 felicity@thetalentburo.com.au 0422 361 771</p>
                    </div>

                    <div>
                        <h6 >
                            <a className='text-[12px]' href="#">@THETALENTBURO</a>
                        </h6>
                        <h6>
                            <a className='text-[12px]' href="#">@TTBIFLUENCE</a>
                        </h6>
                    </div>

                </div>

                <div className='w-full px-3 flex flex-col md:flex-row gap-2 '>
                    <h6 className='text-[12px] text-left w-full md:text-center'>PRIVACY POLICY</h6>
                </div>

        </footer>

    </>

)}

export default Section1