'use client';

import Image from 'next/image';
import React, { FormEvent, useState } from 'react';
import { siteContact } from '../../lib/siteContact';

type ContactFormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const initialFormState: ContactFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormState>(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleChange = (key: keyof ContactFormState, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${siteContact.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Contact from ${formData.name}`,
                    _captcha: 'false', // Optional: disable captcha
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.',
                });
                setFormData(initialFormState);
            } else {
                setStatus({
                    type: 'error',
                    message: result.message || 'Something went wrong. Please try again.',
                });
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please check your connection.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <section className="agenko-contact pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact-info-wrapper mb-50 pf_fadeup">
                                <div className="shape">
                                    <span>
                                        <Image src="/assets/images/pages/shape/world.png" alt="img" width={306} height={647} />
                                    </span>
                                </div>
                                <ul>
                                    <li>
                                        <div className="phone">
                                            <a href={`tel:${siteContact.phoneHref}`}>{siteContact.phoneDisplay}</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Address</h3>
                                                <p>{siteContact.address}</p>
                                                <p>
                                                    <a href={siteContact.mapLink} target="_blank" rel="noreferrer">
                                                        Open Google Maps
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Email</h3>
                                                <p>
                                                    <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
                                                </p>
                                                <p>{siteContact.divisions}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Core Services</h3>
                                                <p>{siteContact.services.join(' | ')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Follow</h3>
                                                <div className="social-link">
                                                    <a href={siteContact.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                                                        <i className="bi bi-facebook"></i>
                                                    </a>
                                                    <a href={siteContact.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                                                        <i className="bi bi-instagram"></i>
                                                    </a>
                                                    <a href={`mailto:${siteContact.email}`} aria-label="Email">
                                                        <i className="bi bi-envelope-fill"></i>
                                                    </a>
                                                    <a href={siteContact.mapLink} aria-label="Map" target="_blank" rel="noreferrer">
                                                        <i className="bi bi-geo-alt-fill"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-20">
                                    <span className="sub-title">Contact Us</span>
                                    <h2>Let&apos;s build your next digital project.</h2>
                                </div>
                                <p className="mb-20">
                                    We handle strategy, design, and execution from idea to launch.
                                </p>
                                <form className="agenko-contact-form style-one" id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form_control"
                                                    placeholder="Name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => handleChange('name', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form_control"
                                                    placeholder="Email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => handleChange('email', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form_control"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={(e) => handleChange('subject', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea
                                                className="form_control"
                                                rows={5}
                                                placeholder="Message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={(e) => handleChange('message', e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="theme-btn" type="submit" disabled={isSubmitting}>
                                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div
                                                className="form-message"
                                                style={{
                                                    color: status?.type === 'success' ? '#9CFE4F' : '#ff5c5c',
                                                    marginTop: '10px',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {status?.message}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="agenko-map">
                <div className="map-box" data-aos="fade-up" data-aos-duration="1300">
                    <iframe title="agency-location-map" src={siteContact.mapEmbed}></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
