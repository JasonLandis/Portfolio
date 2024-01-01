import React, { useEffect, useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Links.css'


// Handles link elements.
const Links = () => {
    const { count, linksArray } = useContext(CountContext)

    const [about, aboutApi] = useSpring(() => ({ from: { top: '-100px' } }))
    const [contact, contactApi] = useSpring(() => ({ from: { top: '-100px' } }))
    const [projects, projectsApi] = useSpring(() => ({ from: { top: '-100px' } }))
    const [games, gamesApi] = useSpring(() => ({ from: { top: '-100px' } }))
    const [skills, skillsApi] = useSpring(() => ({ from: { top: '-100px' } }))

    useEffect(() => {
        if (count === linksArray[0]) {            
            projectsApi.start({ top: '0px' })
        }
        else if (count === linksArray[1]) {
            gamesApi.start({ top: '0px' })
        }
        else if (count === linksArray[2]) {
            skillsApi.start({ top: '0px' })
        }
        else if (count === linksArray[3]) {
            aboutApi.start({ top: '0px' })
        }
        else if (count === linksArray[4]) {
            contactApi.start({ top: '0px' })
        }
    }, [count])

    return (
        <div className="links">
            <animated.div style={{...projects}}><a href='#'>Projects</a></animated.div>
            <animated.div style={{...games}}><a href='#'>Games</a></animated.div>
            <animated.div style={{...skills}}><a href='#'>Skills</a></animated.div>
            <animated.div style={{...about}}><a href='#'>About</a></animated.div>
            <animated.div style={{...contact}}><a href='#'>Contact</a></animated.div>
        </div>
    )
}

export default Links