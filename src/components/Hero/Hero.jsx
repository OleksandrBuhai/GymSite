import React from 'react';
import "./Hero.css"
import Header from "../Header/Header";
import Heart from "../../assets/heart.png"
import heroImg from "../../assets/hero_image.png"
import heroImgBack from "../../assets/hero_image_back.png"
import calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const mobile = window.innerWidth <= 768 ? true : false
    const transition = {type: 'spring', duration: 3}
    return (
        <div className='hero' id='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
                <div className='the-best-ad'>
                    <motion.div
                        initial={{left: mobile ? '178px' : '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>


                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>YOur</span>
                    </div>
                    <div>
                    <span>
                        Ideal body
                    </span>
                    </div>
                    <div>
                    <span> In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                    </div>
                </div>
                <div className='figures'>
                    <div>
                        <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                        EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={978} start={100} delay='4' preFix="+"/></span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={58} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                <div className='hero-btn'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>


                <motion.div
                    initial={{right: '-4rem'}}
                    whileInView={{right: '4rem'}}
                    transition={transition}
                    className='heart-rate'>
                    <img src={Heart} alt=''/>
                    <span>Heart Rate</span>
                    <span>BPM</span>
                    <span>116 b</span>
                </motion.div>
                <img src={heroImg} alt="" className="hero-img"/>
                <motion.img
                    initial={{right: '11rem'}}
                    whileInView={{right: '20rem'}}
                    transition={transition}
                    src={heroImgBack} alt="" className="hero-img-back"/>

                <motion.div
                    initial={{right: '37rem'}}
                    whileInView={{right: '28rem'}}
                    transition={transition}
                    className='calories'>
                    <img src={calories} alt=''/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;