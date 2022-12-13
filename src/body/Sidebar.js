import '../App.css';
import { useSpring, animated } from 'react-spring'
import React, { useEffect } from 'react';
import { SidebarLink } from './SidebarLink';
import { Smartphone } from '../graphics/icons/Smartphone';
import { Layout } from '../graphics/icons/Layout';
import { Folder } from '../graphics/icons/Folder';
import { Feather } from '../graphics/icons/Feather';
import { ContactBox } from './ContactBox'

export const Sidebar = (props) => {

    const inPosition = props.inPosition

    const whiteStyle = useSpring({
        marginTop: inPosition ? '2vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
        },
    })

    const gradStyle = useSpring({
        marginTop: inPosition ? '-2vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
        },
    })

    const dottedStyle = useSpring({
        marginTop: inPosition ? '-7vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
        },
    })

    const lineStyle = useSpring({
        marginTop: inPosition ? '7vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
        },
    })

    const sidebarStyle = useSpring({
        marginLeft: inPosition ? '0' : '-22vw',
        config: {
            tension: 30,
            friction: 10,
        }
    })

    useEffect(() => {
        if (!inPosition) {
            return
        }
    }, [inPosition, 100])

    return (
        <animated.div className="sidebar" style={sidebarStyle}>
            <div className="inner-box" style={sidebarStyle}>
                <animated.div className="grad-circle" style={gradStyle} />
                <animated.div className="white-circle" style={whiteStyle} />
                <animated.div className="dotted-circle" style={dottedStyle} />
                <animated.div className="line-circle" style={lineStyle} />
                <div className="sidebar-content-wrapper">
                    <div className="sidebar-title">Projects</div>
                    <div className="sidebar-links-wrapper">
                        <button style={{background: "transparent", border: 0}} onClick={props.linkOne}>
                            <SidebarLink text="Personas + Storyboarding" icon={<Smartphone />}/>
                        </button>
                        <button style={{background: "transparent", border: 0}} onClick={props.linkTwo}>
                            <SidebarLink text="Responsive Redesign" icon={<Layout />}/>
                        </button>
                        <button style={{background: "transparent", border: 0}} onClick={props.linkThree}>
                            <SidebarLink text="Development" icon={<Folder />}/>
                        </button>
                        <button style={{background: "transparent", border: 0}} onClick={props.linkFour}>
                            <SidebarLink text="Hypermedia Web App" icon={<Feather />}/>
                        </button>
                    </div>
                    <ContactBox />
                </div>
            </div>
        </animated.div>
    )
}
