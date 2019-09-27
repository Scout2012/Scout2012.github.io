import React, { Component } from 'react'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'

export class Fragment extends Component {
    render() {
        // let content;
        // if(this.props.title.toLowerCase() === 'tech stack'){
        //     content = <div className='tech-stack'>
        //         <ul>
        //             <li className='tech-item'>C++</li>
        //             <li className='tech-item'>JavaScript</li>
        //             <li className='tech-item'>Node</li>
        //             <li className='tech-item'>React</li>
        //         </ul>
        //     </div>
        // } else if(this.props.title.toLowerCase() === 'interests'){
        //     content = <div className='interests'>
        //         <ul>
        //             <li className='interest'>ur mom</li>
        //             <li className='interest'>ur mom</li>
        //             <li className='interest'>ur mom</li>
        //         </ul>
        //     </div>
        // }
        let list_of_projects = [
            {
                title: 'Titan Card Scanner',
                desc: <div>Locally based Python application that utilizes OpenCV to recognize and process a student ID, and SQLite3 to store the data into a local database.</div>,
                link: 'https://github.com/CSUF-ACM/titancard-scanner',
                tech: ['Python', 'SQLite3']
            },
            {
                title: 'Lingua Franca',
                desc: <div>Web Application built during HackUCI Hackathon 2019 that utilizes the GitHub API to generate common languages between up to 4 inputted GitHub users.</div>,
                link: 'https://github.com/Scout2012/lingua-franca',
                tech: ['JavaScript', 'GitHub API', 'HTML', 'CSS']
            },
            {
                title: 'MTG Tracker',
                desc: <div>Integrated Google’s Tesseract Object Character Recognition Engine into a Java based phone application in order to read, categorize, and track price history of users Magic the Gathering cards.</div>,
                link: 'https://github.com/Scout2012/MTGTracker',
                tech: ['Java', 'Tesseract']
            }
        ]

        let list_of_experience = [
            {
                title: 'Quantum Automation',
                desc: <div>Design, build, test, and ship software solutions at an industrial scale that solve client issues in a fast, cost-effective and scalable manner by using C# and Python.</div>,
            },
            {
                title: 'TF2Glass',
                desc: <div>Contracted to design and program third-party API communication capabilities using NodeJS for a large-scale website which had over 17,000 users and handled over 100 requests per day in order to dynamically create selling listings and boost revenue by 30%.</div>,
            }
        ]

        let list_of_contact = [
            {
                title: 'Email',
                desc: <div>Locally based Python application that utilizes OpenCV to recognize and process a student ID, and SQLite3 to store the data into a local database.</div>,
                link: 'mailto:jcbpowell12@gmail.com',
            },
            {
                title: 'LinkedIn',
                desc: <div>Web Application built during HackUCI Hackathon 2019 that utilizes the GitHub API to generate common languages between up to 4 inputted GitHub users.</div>,
                link: 'https://www.linkedin.com/in/jacob-powell-925571121/',
            }
        ]

        let about;
        let projects;
        let experience;
        let contact;

        switch(this.props.id){
            //about
            case 1:
                about = <div className='fragment-content'>
                    <p>I'm a Full Stack Software Engineer graduating May 2021 from California State University, Fullerton with a B.S. in Computer Science.</p>
                    <p>Although I'm in my third year of College, I have been programming and developing software solutions for 7+ years.</p>
                    <br/>
                    <p>I enjoy working with many different languages. Some of the more notable languages/frameworks include
                        <span className='code'> C++</span>,
                        <span className='code'> JavaScript</span>,
                        <span className='code'> Python</span>,
                        <span className='code'> C#</span>,
                        <span className='code'> Ruby on Rails</span>, and
                        <span className='code'> Java</span>
                    </p>
                    <p>Along with workinh with many different languages, I also work with many different tools/technologies. Some of my favorites are 
                        <span className='code'> React</span>,
                        <span className='code'> Node.js</span>,
                        <span className='code'> Git</span>, and
                        <span className='code'> Visual Studio Code </span>
                    </p>
                </div>
                break;
            //projects
            case 2:
                projects = <div className='fragment-content'>
                    <div className='project-container'>
                        {list_of_projects.map((project)=>{
                            return <Project key={ project.id } title={ project.title } desc={ project.desc } link={ project.link } tech={ project.tech }/>
                        })}
                    </div>
                </div>
                break;
            //experience
            case 3:
                experience = <div className='fragment-content'>
                    <div className='project-container'>
                        {list_of_experience.map((experience)=>{
                            return <Experience key={ experience.id } title={ experience.title } desc={ experience.desc } link={ experience.link }/>
                        })}
                    </div>
                </div>
                break;
            //contact
            case 4:
                contact = <div className='fragment-content'>
                    <div className='project-container'>
                        {list_of_contact.map((contact)=>{
                            return <Contact key={ contact.id } title={ contact.title } desc={ contact.desc } link={ contact.link }/>
                        })}
                    </div>
                </div>
                break;

            default:
                break
        }

        return (
            <div className='fragment-wrapper'>
                <h1>{ this.props.title }</h1>
                { about }
                { projects }
                { experience }
                { contact }
            </div>
        )
    }
}

export default Fragment
