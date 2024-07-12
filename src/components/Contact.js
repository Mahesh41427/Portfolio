export default function Contact(){
    const config={
        email:'maheshc.23mca@kongu.edu',
        phone:'9342226038',
    }


    return <section id='contact' className='flex flex-col bg-primary px-5 py-32  text-white'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 border-secondary mb-3 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5 '>If You want to Discuss more in detail,Please contact me!!</p>
            <p className='py-2'><span className='font-bold'>Email:</span>{config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone:</span>{config.phone}</p>
            </div>
    </section>
}