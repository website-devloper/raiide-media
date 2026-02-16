"use client";

import Image from "next/image";
import Link from "next/link";

const BreadCumb = ({ Title, content }: any) => {
    return (
        <section className="premium-breadcrumb">
            <div className="breadcrumb-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="breadcrumb-content">
                            <nav aria-label="breadcrumb" className="breadcrumb-nav-wrapper mb-3">
                                <ul className="breadcrumb-nav justify-content-center">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="separator"><i className="bi bi-chevron-right"></i></li>
                                    <li className="active">{Title}</li>
                                </ul>
                            </nav>

                            <div className="title-area mb-3">
                                <h1 className="breadcrumb-title m-0">
                                    {Title}
                                    <span className="accent-dot"></span>
                                </h1>
                            </div>

                            {content && (
                                <div className="content-area">
                                    <p className="breadcrumb-description mx-auto">{content}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .premium-breadcrumb {
                    padding: 150px 0 80px;
                    background: #000;
                    position: relative;
                    overflow: hidden;
                    border-bottom: 1px solid #111;
                }
                .breadcrumb-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 50% -20%, rgba(123, 97, 255, 0.08) 0%, transparent 70%);
                    pointer-events: none;
                }
                .breadcrumb-nav-wrapper {
                    position: relative;
                    z-index: 2;
                }
                .breadcrumb-nav {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 500;
                }
                .breadcrumb-nav li a {
                    color: #555;
                    transition: all 0.3s ease;
                }
                .breadcrumb-nav li a:hover {
                    color: #fff;
                }
                .breadcrumb-nav li.separator {
                    color: #222;
                    font-size: 10px;
                }
                .breadcrumb-nav li.active {
                    color: #fff;
                    font-weight: 700;
                }
                .breadcrumb-title {
                    font-size: 48px;
                    font-weight: 900;
                    color: #fff;
                    letter-spacing: -1px;
                    position: relative;
                    display: inline-block;
                }
                .accent-dot {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    background: #7b61ff;
                    border-radius: 50%;
                    margin-left: 10px;
                    box-shadow: 0 0 15px rgba(123, 97, 255, 0.5);
                }
                .breadcrumb-description {
                    color: #666;
                    font-size: 15px;
                    max-width: 600px;
                    line-height: 1.6;
                    font-weight: 400;
                }
                @media (max-width: 767px) {
                    .premium-breadcrumb { padding: 80px 0 50px; }
                    .breadcrumb-title { font-size: 34px; }
                    .breadcrumb-description { font-size: 14px; }
                }
            `}</style>
        </section>
    );
};

export default BreadCumb;
