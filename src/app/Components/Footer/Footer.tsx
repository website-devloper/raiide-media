import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { siteContact } from '../../lib/siteContact';

const Footer = () => {
    return (
        <footer className="agenko-footer footer-modern primary-black-bg pt-120">
            <div className="container">
                <div className="footer-modern-top">
                    <div className="footer-brand-block">
                        <Link className="footer-logo-link" href="/home2">
                            <Image
                                className="footer-logo-img"
                                src="/assets/images/creative-agency/logo/logo raide.png"
                                alt={siteContact.agencyName}
                                width={120}
                                height={120}
                            />
                        </Link>
                        <p>
                            We craft bold digital experiences through strategy, visual identity, content,
                            and performance marketing for brands that want to lead.
                        </p>
                        <p className="mb-20">{siteContact.divisions}</p>
                        <div className="footer-socials">
                            <a href={siteContact.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href={siteContact.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href={`mailto:${siteContact.email}`} aria-label="Email">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                            <a href={siteContact.mapLink} aria-label="Map" target="_blank" rel="noreferrer">
                                <i className="bi bi-geo-alt-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-link-group">
                        <h4>Main Pages</h4>
                        <ul>
                            <li>
                                <Link href="/home2">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/service">Services</Link>
                            </li>
                            <li>
                                <Link href="/project">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-link-group">
                        <h4>Services</h4>
                        <ul>
                            {siteContact.services.map((service) => (
                                <li key={service}>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact-block">
                        <h4>Get In Touch</h4>
                        <p>{siteContact.address}</p>
                        <p>
                            <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
                        </p>
                        <p>
                            <a href={`tel:${siteContact.phoneHref}`}>{siteContact.phoneDisplay}</a>
                        </p>
                        <p>
                            <a href={siteContact.mapLink} target="_blank" rel="noreferrer">
                                Open in Google Maps
                            </a>
                        </p>
                        <Link href="/contact" className="theme-btn style-two">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="footer-modern-bottom">
                    <p>&copy; 2026 {siteContact.agencyName}. All rights reserved.</p>
                    <ul>
                        <li>
                            <Link href="/terms">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
