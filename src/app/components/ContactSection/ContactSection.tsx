'use client';

import React, { useState } from 'react';
import { BiSolidCopy } from 'react-icons/bi';
import { IoMdSend } from 'react-icons/io';
import { MdEmail, MdHub } from 'react-icons/md';
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsTerminalFill } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';
import Link from 'next/link';

const ContactSection = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [copied, setCopied] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('loading');

        setTimeout(() => {
            setFormStatus('success');
            (e.target as HTMLFormElement).reset();

            setTimeout(() => {
                setFormStatus('idle');
            }, 3000);
        }, 1500);
    };

    const copyToClipboard = (text: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section id="contact" className="relative max-w-container-max mx-auto py-20">

            <div className="flex flex-col items-center text-center md:items-start md:text-left mb-8">
                <p className="font-label text-sm text-primary mb-3">
                    --- CONNECT WITH ME
                </p>
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-on-surface mb-2">
                    Let&apos;s Build Something <span className="text-primary">Great Together</span>.
                </h1>
                <p className="text-base font-body text-secondary mt-4">
                    Currently open to senior-level opportunities in Fintech, SaaS, and Cloud Infrastructure.
                    Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
                </p>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left - Main Content */}
                {/* Form */}
                <div className="lg:col-span-7">
                    <div className="glass-card p-[--spacing-card-padding] rounded-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-label text-primary uppercase tracking-widest ml-1" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none input-glow transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label text-primary uppercase tracking-widest ml-1" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none input-glow transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-label  text-primary uppercase tracking-widest ml-1" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Senior Backend Opportunity"
                                    className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none input-glow transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-label text-primary uppercase tracking-widest ml-1" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project or vision..."
                                    className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none input-glow transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className="w-full md:w-auto bg-primary text-neutral px-8 py-4 rounded-lg font-body-md font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-75"
                            >
                                {formStatus === 'loading' && (
                                    <div className="flex flex-row items-center gap-2">
                                        <span className="animate-spin  text-xl text-white"><AiOutlineLoading3Quarters />
                                        </span>
                                        <span>Processing...</span>
                                    </div>
                                )}
                                {formStatus === 'success' && (
                                    <div className="flex flex-row items-center gap-2">
                                        <span className="text-white text-2xl"><AiOutlineCheckCircle /></span>
                                        <span>Message Sent!</span>
                                    </div>
                                )}
                                {formStatus === 'idle' && (
                                    <div className="flex flex-row items-center gap-2">
                                        <span className="font-label">Send Message</span>
                                        <span className="text-xl"><IoMdSend /></span>
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-5 flex flex-col gap-6">

                    {/* Email Card */}
                    <div className="glass-card p-[--spacing-card-padding] rounded-xl flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-border-subtle group-hover:border-primary transition-colors">
                                <span className="text-primary text-2xl"><MdEmail /></span>
                            </div>
                            <div>
                                <p className="font-label text-text-muted mb-1">EMAIL</p>
                                <p className="font-body font-bold text-on-surface text-xs md:text-base">zehadkazi88@gmail.com</p>
                            </div>
                        </div>
                        <button
                            onClick={(e) => copyToClipboard('zehadkazi88@gmail.com', e)}
                            className="p-2 rounded-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2 text-primary"
                        >
                            <span className={`text-xl ${copied ? 'text-tertiary' : 'text-primary'}`}>{copied ? <IoCheckmarkCircle /> : <BiSolidCopy />}</span>
                            <span className={`font-label uppercase hidden group-hover:inline ${copied ? 'text-tertiary inline' : 'text-primary '}  `}>{
                                copied ? 'Copied!' : 'Copy'
                            }</span>
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <Link href="https://github.com/Muzahidul-Islam-Zehad" target="_blank" className="glass-card p-[--spacing-card-padding] rounded-xl flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-border-subtle group-hover:border-secondary transition-colors">
                                <span className="text-secondary text-xl"><BsTerminalFill /></span>
                            </div>
                            <div>
                                <p className="font-label text-text-muted mb-1">GITHUB</p>
                                <p className="font-body font-bold text-on-surface text-xs md:text-base">https://github.com/Muzahidul-Islam-Zehad</p>
                            </div>
                        </Link>

                        <Link href="https://www.linkedin.com/in/kmiz" target="_blank" className="glass-card p-[--spacing-card-padding] rounded-xl flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-border-subtle group-hover:border-primary transition-colors ">
                                <span className="text-xl text-primary"><MdHub /></span>
                            </div>
                            <div>
                                <p className="font-label text-text-muted mb-1">LINKEDIN</p>
                                <p className="font-body font-bold text-on-surface text-xs md:text-base">https://www.linkedin.com/in/kmiz</p>
                            </div>
                        </Link>

                        <Link href="https://twitter.com" target="_blank " className="glass-card p-[--spacing-card-padding] rounded-xl flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-border-subtle group-hover:border-tertiary transition-colors">
                                <span className="text-xl text-tertiary"><FaShareAlt /></span>
                            </div>
                            <div>
                                <p className="font-label text-text-muted mb-1">TWITTER / X</p>
                                <p className="font-body font-bold text-on-surface text-xs md:text-base">https://twitter.com</p>
                            </div>
                        </Link>
                    </div>

                    {/* Availability */}
                    <div className="mt-4 p-5 rounded-xl bg-surface-container-low border border-border-subtle flex items-center gap-3">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary" />
                        </div>
                        <span className="font-body text-on-surface">
                            Available for freelance and full-time opportunities
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;