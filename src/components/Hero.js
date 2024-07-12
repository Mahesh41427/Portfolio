import HeroImg from '../assets/hero.png'
import { PiLinkedinLogoBold,PiGithubLogoBold } from "react-icons/pi";

export default function Hero(){
    const config={
        subtitle:'Im a Full-Stack developer',
        social:{
            linkedin:'https://www.linkedin.com/in/mahesh-c-5119b22b1/',
            github:'https://github.com/Mahesh41427',
        }
    }
    return<section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center '>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>Hi,<br/> Im <span className='text-black'>C</span> Mahesh
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-7 pl-14' >
            <a href={config.social.linkedin} className='pr-4 hover:text-white'><PiLinkedinLogoBold size={30}/></a>
            <a href={config.social.github} className='hover:text-white'><PiGithubLogoBold  size={30}/></a>
       </div>
       </div>
       <img className='md:w-1/3 ' src={HeroImg}></img>  
    </section>
}