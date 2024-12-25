import React from 'react'

const Menu = () => {
  return (
    <>
    <section className='w-full h-full z-50 absolute top-[-80%] bg-red-50 flex flex-col'>
    <nav className='bg-transparent w-full z-50'>
        <h1 id='menu-up' className='text-center w-full font-light h-[10vw] text-[3vw] flex items-center justify-center md:text-[2.1vw]'>THE TALENT BURO</h1>
    </nav>
    <section className='h-screen w-full flex flex-col py-10'>
        <h3 className='text-[4vh] px-3'>MODELS</h3>
        <h3 className='text-[4vh] px-3'>INFULENCE</h3>
        <h3 className='text-[4vh] px-3'>SHORTLIST</h3>
        <h3 className='text-[4vh] px-3'>ABOUT</h3>
        <h3 className='text-[4vh] px-3'>JOIN US</h3>
        <h3 className='text-[4vh] px-3'>ENQUIRE</h3>
    </section>
    </section>
    
    </>
  )
}

export default Menu