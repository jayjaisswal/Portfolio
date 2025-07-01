import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../animations/Variants";
import fadeImage from '../assets/left.png'
const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        // console.log("form data ", updatedData); // Log the updated data,


    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage({ type: '', text: '' });

        const service_id = 'service_e12gpzn'
        const template_id = 'template_4bouicn'
        const public_key = '0TUSsSzldTIljHy97'

        // Replace these with your actual EmailJS credentials
        emailjs.sendForm(
            service_id,
            template_id,
            form.current,
            public_key
        )
            .then((result) => {
                console.log("Success:", result.text);
                setSubmitMessage({
                    type: 'success',
                    text: 'Message sent successfully!'
                });
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false)
            }, (error) => {
                console.error("Error:", error.text);
                setSubmitMessage({
                    type: 'error',
                    text: 'Failed to send message. Please try again.'
                });
            })
    };

    return (
        <section id="contact" className="bg-[#000111] py-20 w-full overflow-hidden">
            
            <div className="max-w-6xl mx-auto px-4">
                <motion.div className="text-center mb-20" variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible">
                    <h2 className="sm:text-2xl text-[18px] font-bold text-white text-[#a993ff">MY CONTACT</h2>
                    <h1 className='sm:text-6xl text-4xl  text-white font-bold '>Contact<span className='text-[#84AB91]'> Me Here</span></h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Side - Contact Info */}
                    <motion.div variants={fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible">
                        <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-300 mb-8">
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision. Feel free to reach out using the
                            form or through my contact information.
                        </p>

                        {/* Contact Information Cards */}
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="bg-[#111218] rounded-xl p-5 flex items-center space-x-4">
                                <div className="bg-[#0E0E14] p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7EF9A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#7EF9A5]">Email</h4>
                                    <p className="text-gray-300">senayush920@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-[#111218] rounded-xl p-5 flex items-center space-x-4">
                                <div className="bg-[#0E0E14] p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7EF9A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#7EF9A5]">Phone</h4>
                                    <p className="text-gray-300">+91 8319377879</p>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-[#111218] rounded-xl p-5 flex items-center space-x-4">
                                <div className="bg-[#0E0E14] p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7EF9A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#7EF9A5]">Location</h4>
                                    <p className="text-gray-300">Bhopal, Madhya Pradesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div className="bg-[#111218] rounded-xl p-8" variants={fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible">
                        <h3 className="text-3xl font-bold text-white mb-6">Send a Message</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full p-3 bg-[#1E1E24] text-gray-200 rounded-lg border border-[#2A2A36] focus:outline-none focus:border-[#7EF9A5]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    className="w-full p-3 bg-[#1E1E24] text-gray-200 rounded-lg border border-[#2A2A36] focus:outline-none focus:border-[#7EF9A5]"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    rows="5"
                                    className="w-full p-3 bg-[#1E1E24] text-gray-200 rounded-lg border border-[#2A2A36] focus:outline-none focus:border-[#7EF9A5]"
                                    required
                                ></textarea>
                            </div>

                            {submitMessage.text && (
                                <div className={`mb-4 p-3 rounded ${submitMessage.type === 'success' ? 'bg-green-900/20 text-green-300' : 'bg-red-900/20 text-red-300'
                                    }`}>
                                    {submitMessage.text}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 px-6 bg-[#1E1E24] hover:bg-[#2A2A36] cursor:pointer text-white font-medium rounded-lg flex items-center justify-center transition-colors duration-300"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;