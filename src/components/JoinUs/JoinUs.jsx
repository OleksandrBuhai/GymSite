import React, {useRef} from 'react';
import './JoinUs.css'
import emailjs from '@emailjs/browser'

const JoinUs = () => {

    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h44wvlb', 'template_q8kt26h', form.current, 'Hc34q67_kNB4O02CX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr/>
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>
            <div className='right-j'>
                <form ref={form} action='' className='email-container' onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter your Email adress to join us"/>
                    <button className="btn btn-j">Join now</button>
                </form>
            </div>
        </div>
    );
};

export default JoinUs;