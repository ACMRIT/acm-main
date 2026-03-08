"use client";
import React, { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../app/globals.css";
const WHATSAPP_LINK = "https://chat.whatsapp.com/IGY09dDzxXk6wE1h1yCxMa";

const Joinus = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        usn: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/joinrequest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
                setFormData({ name: "", email: "", mobile: "", usn: "", message: "" });
            } else {
                toast.error(data.message || "Submission failed. Please try again.");
            }
        } catch {
            toast.error("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative mt-[50px] overflow-hidden h-auto" id="joinus">
            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
                <h1 className="text-black font-extrabold text-2xl sm:text-3xl md:text-4xl font-titillium leading-[1.2] text-center">
                    Join Us
                </h1>
                <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
                <div className="w-full min-h-[520px] flex justify-between bg-deepBlue rounded-md relative p-10 md:p-10 py-12 border flex-col lg:flex-row">
                    <div className="flex flex-col justify-evenly w-full lg:w-1/2 m-5">
                        <h1 className="text-white mb-5 font-extrabold text-2xl sm:text-3xl md:text-5xl font-titillium leading-[1.2]">
                            Welcome to
                            <br />
                            <span className="text-red-600">RIT</span>
                            <span className="text-lightBlue300">- STUDENT CHAPTER</span>
                        </h1>
                        <p className="font-titillium text-[18px] leading-7 text-white opacity-70">
                            Whether you are a beginner looking to dive into computing or an advanced student seeking a
                            challenging environment, the RIT ACM Student Chapter offers something for everyone. Join us
                            in our mission to shape the future of technology—right here at Ramaiah Institute of Technology.
                        </p>
                    </div>
                    <div className="flex flex-col justify-evenly w-full lg:w-1/2 m-2">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center text-center space-y-6 py-8">
                                <div className="text-5xl">🎉</div>
                                <h2 className="text-white font-extrabold text-2xl font-titillium">You&apos;re in!</h2>
                                <p className="text-white/70 font-titillium text-lg">
                                    Thank you for joining! Join our WhatsApp community to stay updated on all ACM events and announcements.
                                </p>
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-green-500/30 text-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    Join WhatsApp Community
                                </a>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-white/40 hover:text-white/70 text-sm underline transition-colors"
                                >
                                    Submit another response
                                </button>
                            </div>
                        ) : (
                        <form className="flex flex-col space-y-4 w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <input
                                    suppressHydrationWarning
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                                <input
                                    suppressHydrationWarning
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    placeholder="Your Mobile"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                                <input
                                    suppressHydrationWarning
                                    type="text"
                                    id="usn"
                                    name="usn"
                                    value={formData.usn}
                                    onChange={handleInputChange}
                                    placeholder="Your USN"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                                <textarea
                                    suppressHydrationWarning
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
                                    required
                                ></textarea>
                            </div>
                                <button
                                    suppressHydrationWarning
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-500 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                        </form>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </section>
    );
};

export default Joinus;