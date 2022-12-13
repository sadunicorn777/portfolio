import '../App.css';
import { Tag } from '../graphics/icons/Tag'
import React from 'react';

export const Post = (props) => {

    const current = props.current
    const tags = current == 0 ? ["User research", "Storyboarding", "Conceptual models"] : current == 1 ? ["Figma", "Prototyping", "React"] : current == 2 ? ["React", "Aggregation", "List interfaces"] : current == 3 ? ["React", "TypeScript", "Prototyping"] : []
    const title = current == 0 ? "Personas + Storyboarding" : current == 1 ? "Responsive Redesign" : current == 2 ? "Development" : current == 3 ? "Hypermedia Web App" : ""
    const date = current == 0 ? "September 2022" : current == 1 ? "October 2022" : current == 2 ? "November 2022" : current == 3 ? "May 2021" : ""
    const imgPath = current == 0 ? "Personas" : current == 1 ? "RR" : current == 2 ? "Dev" : current == 3 ? "Dash" : ""


    const fileStyle = {
        marginLeft: '0px',
        opacity: 1,
        position: 'absolute',
        width: '100%',
        height: '65vh',
        marginTop: '5vh',
        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.25))',
    }

    const imgStyle = {
        marginLeft: '7%',
        opacity: 1,
    }

    const postDateStyle = {
        marginTop: '7vh'
    }

    const postTitleWrapperStyle = {
        marginTop: '15vh',
    }


    const postStyle = {
        height: '70vh', 
        width: '53.2vw',
        marginLeft: '18.5vw',
    }

    return (
        <div className="post" style={postStyle}>
            <div className="post-tags-wrapper">
                <Tag />
                <div className="post-tags-text-wrapper">
                {tags?.map((tag, index) => {
                    return (
                        <span 
                            key={index}
                            className="post-tags-text">
                        <bold>✘</bold> {tag}
                        </span>
                    )
                })}
                </div>
            </div>
            <img src={require('../graphics/images/File.png')} alt="" style={fileStyle}/>
            <div className="post-title-wrapper" style={postTitleWrapperStyle}>
                <div className="post-title-icon" />
                <div className="post-title-text" style={{color: '#909090'}}>{title}</div>
            </div>
            <div className="post-date-wrapper" style={postDateStyle}>
                <div className="post-date-icon" style={{background: 'rgba(145,189,199,1)'}} />
                <div className="post-date-text">Created in <date style={{color: 'rgba(145,189,199,1'}}>{date}</date></div>
            </div>
                <div className="post-image-wrapper" style={imgStyle}>
                    <img src={require('../graphics/images/' + imgPath + '.png')} alt="" style={{width: '70%', height: '45%', marginTop: '5vh', borderRadius: "1vw", filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.25))'}} />
                    <a style={{textDecorationLine: "none"}} href={current == 0 ? "http://sadunicorn777.github.io/personas-and-storyboarding" : current == 1 ? "http://sadunicorn777.github.io/rr" : current == 2 ? "http://sadunicorn777.github.io/dev" : current == 3 ? "https://hdalton.myportfolio.com/dash-hypermedia-web-application" : ""}>
                    <div style={{color: "rgba(145,189,199,1)", fontStyle: "italic", fontSize: "1.3vw", paddingTop: "1vh", fontFamily: "Trebuchet MS"}}>✏️ Click to view the project ~</div></a>
                </div>
                <div style={{color: '#909090', overflow: "scroll", fontFamily: "Trebuchet MS", position: "absolute", marginLeft: "32vw", width: "20vw", height: "48vh", marginTop: "20vh"}}>
                    <div style={{color: "rgba(145,189,199,1)", fontSize: "1.5vw"}}>Project Overview:</div>
                    {current == 0 ? "In this project, I was encouraged to step into a user’s shoes. I observed real users interacting with a chosen interface, interviewed these individuals about their experiences, created personas based on these users, and illustrated a storyboard for one of these personas." 
                    : 
                    current == 1 ? "In this project I redesigned a simple website. I analyzed and identified flaws in an existing interface, created low-fidelity and high-fidelity prototypes for various screen sizes, and built a responsive website based on those prototypes." 
                    :  
                    current == 2 ? "In this project I developed an interactive list interface in React, used interface components, and tied the components to an internal data state. Essentially, this is an interface for users to select items out of a list, which then aggregates them." 
                    : 
                    current == 3 ? "In this project I was challenged to code my own version of DASH using TypeScript, React, and SCSS, which I had no prior familiarity with. I used this challenge as an opportunity to propose some suggestions for a hypothetical redesign of the existing web app." 
                    : ""
                    }
                    <div style={{color: "rgba(145,189,199,1)", fontSize: "1.5vw"}}>Takeaways:</div>
                    {current == 0 ? "I learned that while there are a myriad of questions to ask a user about their experience with an interface, all user problems tend to fall into some overarching categories, which can be assessed with a few simple questions. If too many specific questions are asked, it can be difficult to assess commonalities." 
                    : 
                    current == 1 ? 'I learned from this project that certain organizations or corporations may deliberately incorporate poor innavigable UI into their web presence. Examples include the website of Yale School of Art, the website of retail company Zara, and several more. This poses an interesting question to think about what good UI really means, and if "bad" UI can be used to make good UI because it is intriguing.' 
                    : 
                    current == 2 ? "I learned that sorts are an effective means of engaging users with a list-based interface. Sorts allow the viewer to customize the way that information is presented to them, which offers a sense of control and security. If the list-based interface happens to be a shopping site, this sense of security created for the user will likely cause them to purchase more." 
                    : 
                    current == 3 ? "I learned that it is worthwhile to take initiative to improve upon an initial prototype developed by a figure or company that you admire, or would like to investigate. If nothing else, doing so will not only improve your prototyping and development skills but also offer a point of contact with said organization or figure, which may be useful in a future job search or other situation."
                    : ""
                    }
                    
                </div>
        </div>
    )
}
