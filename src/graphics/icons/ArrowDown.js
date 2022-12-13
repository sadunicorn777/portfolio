import '../../App.css';
import { useSpring, animated } from 'react-spring'
import React, { useEffect } from 'react';

export const ArrowDown = (props) => {

    const arrowTriggered = props.arrowTriggered

    const arrowStyle = useSpring({
        transform: arrowTriggered ? 'translate(0px, 4px)' : 'translate(0px, 0px)',
        config: {
            tension: 300,
            friction: 1,
        },
    })

    useEffect(() => {
        if (!arrowTriggered) {
            return
        }
    }, [arrowTriggered])

    return (
        <animated.div className="scroll-indicator" style={arrowStyle}>
            Scroll
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
        </animated.div>
    )
}
