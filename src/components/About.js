import AboutImg from '../assets/about.png';
export default function About(){
    const config={
        line1:'Hello!! Myself Mahesh I am Persuing my masters in Computer Applications at kongu Engineering College ',
        line2:'I am Proficient in Frontend and developed the projects and deployed in the git hub',
        line3:'I have worked on various backends like node js ,mongoDB and so on<'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}