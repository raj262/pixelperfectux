'use client';

import React, { useState } from 'react';
import { contactData } from '@/lib/siteData';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <>
            <h1 id="get-in-touch" className="display-2 fw-medium mb-4">Get in Touch</h1>
            <div className="row g-5">
                <div className="col-12 col-lg-5 order-lg-2">
                    <div className="bg-theme-secondary p-4 p-md-5 border-radius box-shadow">
                        <h5 id="phone-1" className="fw-medium mb-0">Phone:</h5>
                        {contactData.phoneNumbers.map((phone, index) => (
                            <p key={index}>{phone}</p>
                        ))}
                        <div className="mt-4">
                            <h5 id="email-1" className="fw-medium mb-0">Email:</h5>
                            {contactData.emails.map((email, index) => (
                                <p key={index}>{email}</p>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h5 id="address" className="fw-medium mb-0">Address:</h5>
                            {contactData.address.map((address, index) => (
                                <p key={index}>{address}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-7 order-lg-1">
                    {/* Contact Form */}
                    <div className="contact-form">
                        <form id="contactform" onSubmit={handleSubmit}>
                            <div className="row gx-3 gy-0">
                                <div className="col-12 col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-Mail"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                disabled={status === 'loading'}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={status === 'loading'}
                            ></textarea>
                            <button
                                className="button button-lg button-rounded"
                                type="submit"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                            <div className="submit-result">
                                {status === 'success' && <p id="success" className="show-result">Thank you! Your Message has been sent.</p>}
                                {status === 'error' && <p id="error" className="show-result">Something went wrong, Please try again!</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};