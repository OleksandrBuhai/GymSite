import React from 'react';
import "./Hero.css"
import Header from "../Header/Header";
import Heart from "../../assets/heart.png"
import heroImg from "../../assets/hero_image.png"
import heroImgBack from "../../assets/hero_image_back.png"
import calories from "../../assets/calories.png"


const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header/>
                <div className='the-best-ad'>
                    <div></div>
                    <span>the best fitness club</span>
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
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 50</span>
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

                <div className='heart-rate'>
                    <img src={Heart} alt=''/>
                    <span>Heart Rate</span>
                    <span>BPM</span>
                </div>
                <img src={heroImg} alt="" className="hero-img"/>
                <img src={heroImgBack} alt="" className="hero-img-back"/>

                <div className='calories'>
                    <img src={calories} alt=''/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;