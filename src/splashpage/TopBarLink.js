import '../App.css';
import React, { useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring'

export const TopBarLink = (props) => {
    const [hovered, setHovered] = useState(false)

    const style = useSpring({
        lineHeight: 4.5,
        fontFamily: 'Trebuchet MS',
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        filter: hovered ?  'drop-shadow(0px 0px 2px rgba(250,250,250,0.9))' : 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
        paddingRight: 10,
        paddingLeft: 10,
        height: 67,
        borderBottom: hovered ? '3px solid white' : '3px solid transparent', 
        config: {
            tension: 30,
            friction: 5,
        },
    })

    const decStyle = useSpring({
        lineHeight: hovered ? 2.5 : 1.9,
        fontSize: hovered ? 18 : 15,
        fontFamily: 'Trebuchet MS',
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        background: 'rgb(214,201,222)',
        background: 'linear-gradient(90deg, rgba(214,201,222,1) 0%, rgba(145,189,199,1) 100%)',
        filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
        paddingRight: hovered ? 20 : 10,
        paddingLeft: hovered ? 20 : 10,
        height: hovered ? 45 : 30,
        borderRadius: hovered ? 0 : 25,
        border: '2px solid white', 
        config: {
            tension: 300,
            friction: 10,
        },
    })

    useEffect(() => {
        if (!hovered) {
            return
        }
    }, [hovered, 100])


    if (props.dec) {
        return (
            <div className="topbar-link-dec-wrapper">
                <animated.div 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    style={decStyle}>{props.text}
                </animated.div>
            </div>
        )
    } else {
        return (
            <animated.div 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                style={style}>{props.text}
            </animated.div>
        )
    }
}
