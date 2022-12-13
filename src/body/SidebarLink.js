import '../App.css';
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

export const SidebarLink = (props) => {
    const [hovered, setHovered] = useState(false)

    const linkStyle = useSpring({
        width: hovered ? '10vw' : '0',
        opacity: hovered ? 0.8 : 0,
        config: {
            tension: 60,
            friction: 10,
        },
    })

    useEffect(() => {
        if (!hovered) {
            return
        }
    }, [hovered, 50])

    return (
        <>
        <animated.div className="sidebar-link-hovered-bg" style={linkStyle} />
        <div className="sidebar-link">
            {props.icon}
            <div className="sidebar-link-text" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{props.text}</div>
        </div>
        </>
    )
}
