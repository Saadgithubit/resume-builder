'use client'

import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint, UseReactToPrintOptions } from 'react-to-print';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope, faHeart, faLocationDot, faPhone, faShieldHalved, faTrophy, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import myImage from "@/image/my-image.jpeg"
import Link from "next/link";

config.autoAddCss = false
interface CustomPrintOptions extends UseReactToPrintOptions {
    content: () => HTMLDivElement;
}

export default function Resume() {
    const resumeRef = useRef<HTMLDivElement>(null); // Create a ref for the resume component

    const handlePrint = useReactToPrint({
        content: () => resumeRef.current!,
        documentTitle: "Saad_Ahmed_Resume",
        // onBeforeGetContent: () => {
        //     if (!resumeRef.current) {
        //         console.error("No content to print");
        //         return Promise.reject("No content to print");
        //     }
        //     return resumeRef.current;
        // }
    } as CustomPrintOptions);

    const frontEndSkill = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'Material UI', 'Redux']
    const backEndSkills = ['NodeJS', 'ExpressJS', 'TypeScript', 'NextJS', 'Restful API']
    const versionControls = ['Git', 'Github']
    return (
        <div>
            <div ref={resumeRef}>
                <div className="w-[50%] border-2 mx-auto">
                    <div className="bg-[#14324C] relative text-white font-bold py-6 px-10 flex justify-between">
                        <div>
                            <h1 className="text-4xl">SAAD AHMED</h1>
                            <h3 className="text-2xl">MERN STACK DEVELOPER</h3>
                            <div className="mt-2">
                                <ul className="text-sm space-y-1">
                                    <li><FontAwesomeIcon className="text-sm mr-2" icon={faPhone} />03111640243</li>
                                    <li><FontAwesomeIcon className="text-sm mr-2" icon={faLocationDot} />Liaquatabad Karachi</li>
                                    <li><FontAwesomeIcon className="text-sm mr-2" icon={faEnvelope} />saad45257@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <Image className="w-[120px] h-[130px] object-cover object-top aspect-square rounded-full" src={myImage} alt="Image" />
                    </div>
                    <div className="border-2 flex bg-[#DCDBE0]">
                        {/* left  */}
                        <div className="border-2 w-[60%] p-6 space-y-4">
                            {/* SUMMARY   */}
                            <div>
                                <h3 className="text-2xl text-[#2C567F] font-bold">SUMMARY</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <p className="text-sm mt-2">Highly skilled <b>MERN Stack Developer</b> with over a year of experience specializing in modern frontend technologies,
                                    including <b> ReactJS, Next.js, JavaScript</b>, and <b>TypeScript</b>. Proficient in building scalable, high-performance web applications
                                    with a focus on clean architecture and maintainability. Adept at integrating APIs, optimizing performance,
                                    and working within Agile environments. Seeking to leverage my expertise in <b>ReactJS, TypeScript</b>, and <b>Redux</b> in a challenging
                                    role as a <b>Frontend Developer</b>.</p>
                            </div>
                            {/* Experience   */}
                            <div className="experience">
                                <h3 className="text-2xl text-[#2C567F] font-bold">EXPERIENCE</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <div className="space-y-1 mt-2">
                                    <h4 className="text-xl text-[#2C567F] font-semi-bold">Mern Stack Developer</h4>
                                    <h6 className="font-bold">TheTaxTech</h6>
                                    <p className="text-sm"><FontAwesomeIcon className="text-sm mr-2 opacity-70" icon={faCalendarDays} />
                                        06/2024 - Present <FontAwesomeIcon className="text-sm mx-2 opacity-70" icon={faLocationDot} />Karachi Pakistan</p>
                                    <ul className="text-sm pl-4">
                                        <li className="list-[circle]">Designed and implemented client websites using Nextjs, Reactjs</li>
                                        <li className="list-[circle]">Integrated REST APIs with Json for smooth frontend-backend communication</li>
                                        <li className="list-[circle]">Applied best practices for frontend performance optimization, including lazy loading and code splitting</li>
                                        <li className="list-[circle]">Contribute to the development of scalable and robust web applications</li>
                                    </ul>
                                </div>
                                <div className="space-y-1 mt-2">
                                    <h4 className="text-xl text-[#2C567F] font-semi-bold">Remote Internship Of Front-End Developer</h4>
                                    <h6 className="font-bold">CODESOFT</h6>
                                    <p className="text-sm"><FontAwesomeIcon className="text-sm mr-2 opacity-70" icon={faCalendarDays} />
                                        01/2024 - 03/2024  <FontAwesomeIcon className="text-sm mx-2 opacity-70" icon={faLocationDot} />Mumbai India</p>
                                    <ul className="text-sm pl-4">
                                        <li className="list-[circle]">Designed and implemented client websites using HTML, CSS, and Javascript</li>
                                        <li className="list-[circle]">Developed front-end architecture that improved scalability and performance of the website</li>
                                        <li className="list-[circle]">Developed a secure, interactive web application with a modern front-end framework and an intuitive user interface</li>
                                        <li className="list-[circle]">Coordinated with front-of-house staff to ensure timely delivery of baked goods</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Education   */}
                            <div className="education">
                                <h3 className="text-2xl text-[#2C567F] font-bold">EDUCATION</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <div className="space-y-1 mt-2">
                                    <h4 className="text-xl text-[#2C567F] font-semi-bold">Inter In Commerce</h4>
                                    <h6 className="font-bold">Comprehensive College</h6>
                                    <p className="text-sm"><FontAwesomeIcon className="text-sm mr-2 opacity-70" icon={faCalendarDays} />
                                        2016 - 2018 <FontAwesomeIcon className="text-sm mx-2 opacity-70" icon={faLocationDot} />Karachi Pakistan</p>
                                    <ul className="text-sm pl-4">
                                        <li className="list-[circle]">Developed a solid foundation in commerce, finance, and business administration.</li>
                                        <li className="list-[circle]">Honed analytical and problem-solving skills applicable to project management and strategic decision-making.</li>
                                    </ul>
                                </div>
                                <div className="space-y-1 mt-2">
                                    <h4 className="text-xl text-[#2C567F] font-semi-bold">Matriculation In Computer Science</h4>
                                    <h6 className="font-bold">Pakistan Grammar Secondary School</h6>
                                    <p className="text-sm"><FontAwesomeIcon className="text-sm mr-2 opacity-70" icon={faCalendarDays} />
                                        2014 - 2016 <FontAwesomeIcon className="text-sm mx-2 opacity-70" icon={faLocationDot} />Karachi Pakistan</p>
                                    <ul className="text-sm pl-4">
                                        <li className="list-[circle]">Focused on core computer science principles.</li>
                                        <li className="list-[circle]">Excelled in IT and mathematics, which fueled a passion for innovative software solutions.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Languages   */}
                            <div className="language">
                                <h3 className="text-2xl text-[#2C567F] font-bold">LANGUAGES</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <h6 className="font-bold text-[#2C567F] mt-2">English</h6>
                                <p className="text-sm">Intermiadiate</p>
                                <h6 className="font-bold text-[#2C567F] mt-2">Urdu</h6>
                                <p className="text-sm">Native</p>
                            </div>
                        </div>
                        {/* right  */}
                        <div className="border-2 w-[40%] p-6 space-y-4">
                            {/* strength  */}
                            <div className="strength">
                                <h3 className="text-2xl text-[#2C567F] font-bold">STRENGTH</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <div className="flex justify-between items-center pt-1">
                                    <FontAwesomeIcon className="text-2xl text-[#2C567F]" icon={faTrophy} />
                                    <div className="space-y-1 mt-2 w-[90%]">
                                        <h6 className="text-[#2C567F] font-semibold text-xl">Problem-Solving</h6>
                                        <p className="text-sm">Proficient in debugging and resolving complex web application issues.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <FontAwesomeIcon className="text-2xl text-[#2C567F]" icon={faShieldHalved} />
                                    <div className="space-y-1 mt-2 w-[90%]">
                                        <h6 className="text-[#2C567F] font-semibold text-xl">Software Architecture</h6>
                                        <p className="text-sm">Strong understanding of object-oriented design, enabling the development of scalable and maintainable codebases.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <FontAwesomeIcon className="text-2xl text-[#2C567F]" icon={faHeart} />
                                    <div className="space-y-1 mt-2 w-[90%]">
                                        <h6 className="text-[#2C567F] font-semibold text-xl">Collaboration & Communication</h6>
                                        <p className="text-sm">Adept at working in cross-functional teams and effectively communicating technical details to non-technical stakeholders.</p>
                                    </div>
                                </div>
                            </div>
                            {/* skills  */}
                            <div className="skills">
                                <h3 className="text-2xl text-[#2C567F] font-bold">KEY SKILLS</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <div className="space-y-1 mt-2">
                                    <h6 className="text-[#2C567F] font-semibold text-xl">Front-End Technologies:</h6>
                                    <div className="text-sm flex flex-wrap gap-x-4 gap-y-2 font-semibold">
                                        {frontEndSkill.map((text, index) => {
                                            return (
                                                <button key={index}>{text}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="space-y-1 mt-2">
                                    <h6 className="text-[#2C567F] font-semibold text-xl">Back-End Technologies:</h6>
                                    <div className="text-sm flex flex-wrap gap-x-4 gap-y-2 font-semibold">
                                        {backEndSkills.map((text, index) => {
                                            return (
                                                <button key={index}>{text}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="space-y-1 mt-2">
                                    <h6 className="text-[#2C567F] font-semibold text-xl">Version Controls:</h6>
                                    <div className="text-sm flex flex-wrap gap-x-4 gap-y-2 font-semibold">
                                        {versionControls.map((text, index) => {
                                            return (
                                                <button key={index}>{text}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/* Certification  */}
                            <div className="certification">
                                <h3 className="text-2xl text-[#2C567F] font-bold">CERTIFICATION</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <div className="space-y-1 mt-2">
                                    <h4 className="text-xl text-[#2C567F] font-semi-bold">Web And Application Development - (SMIT)</h4>
                                    <p className="text-sm">An Onsite course provided by Udacity focusing on advanced Web Development Technologies</p>
                                </div>
                                <div className="space-y-1 mt-2">
                                    <h4 className="text-xl text-[#2C567F] font-semi-bold">Certificate in HTML5 CSS3 & javascript - (Open Weaver)</h4>
                                    <p className="text-sm">An in-depth course offered by Open Weaver covering all major aspects of Basic programming.</p>
                                </div>
                            </div>
                            {/* Portfolio  */}
                            <div className="contact">
                                <h3 className="text-2xl text-[#2C567F] font-bold">PORTFOLIO</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <div className="space-y-2 mt-3">
                                    <p className="text-sm">See My Portfolio & Projects here's link:</p>
                                    <h6 className="text-[#2C567F] font-bold"><FontAwesomeIcon className="text-xl" icon={faUserTie} />
                                        <Link className="font-normal underline ml-4 text-black" href={'http://saadahmedportfolio.netlify.app/'}>
                                            Porfolio</Link></h6>
                                </div>
                            </div>
                            {/* contacts  */}
                            <div className="contact">
                                <h3 className="text-2xl text-[#2C567F] font-bold">SOCIAL LINKS</h3>
                                <div className=" bg-[#2C567F] h-1"></div>
                                <div className="space-y-2 mt-3">
                                    <h6 className="text-[#2C567F] font-bold"><FontAwesomeIcon className="text-xl" icon={faGithub} />
                                        <Link className="font-normal underline ml-4 text-black" href={'https://github.com/Saadgithubit'}>
                                            Saadgithubit</Link></h6>
                                    <h6 className="text-[#2C567F] font-bold"><FontAwesomeIcon className="text-xl" icon={faFacebook} />
                                        <Link className="font-normal underline ml-4 text-black" href={'https://www.linkedin.com/in/saad-ahmed-linkdin/'}>
                                            Saad Ahmed</Link></h6>
                                    <h6 className="text-[#2C567F] font-bold"><FontAwesomeIcon className="text-xl" icon={faLinkedin} />
                                        <Link className="font-normal underline ml-4 text-black" href={'https://www.facebook.com/saad.sohail.7315'}>
                                            Saad Ahmed</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <button onClick={() => handlePrint()} className="bg-sky-400 text-white px-8 py-4">Download</button>
            </div>
        </div>
    )
}