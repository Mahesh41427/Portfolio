import websiteimg1 from '../assets/Screenshot 2023-12-12 223223.png';
import websiteimg2 from '../assets/Screenshot 2024-06-22 091207.png';
import websiteimg3 from '../assets/Screenshot 2024-07-08 210841.png';
export default function Projects(){
    const config={
        project:[
            {
            image :websiteimg1,
            description:'A Students Attendance and Syllabus Tracker using MERN Stack.',
            link:'https://github.com/Mahesh41427'
            },
            {
                image :websiteimg2,
                description:' A Simple Calculator using HTML,CSS And JavaScript',
                link:'https://github.com/Mahesh41427'
                },
                {
                    image :websiteimg3,
                    description:'Weather Application using React and Tailwind CSS',
                    link:'https://github.com/Mahesh41427'
                    }
        ]
    }


    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full ">
        <div className="flex flex-col px-10 ">
          <h1 className='text-4xl border-b-4 border-secondary
           mb-5 w-[140px] font-bold'>Projects</h1></div>
        <p className='px-10 py-5'>These are Some of My Best Projects.Check them Out!!</p>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.project.map((project)=>(
                <div className='relative'>
                <img className='h-[200px] w-[500px]'src={project.image}></img>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>{project.description}</p>
                <div className='flex justify-center'>
                <a className='btn' target='_blank' href={project.link}>View project</a>
                </div>
                </div>
                
                </div>
                
            
            ))}
            {/* <div className='relative'>
            
            
            </div>
            <div className='relative'>
            <img className='h-[200px]' src={websiteimg2}></img></div>
            
            <div className='relative'>
            
            <div className='project-desc'>
                <p>
                    A Expense Tracker using JavaScript
                </p>
            </div>
            </div>
        </div>
             */}
        </div>
        </div>
    </section>
}