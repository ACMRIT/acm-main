"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Code, ExternalLink } from 'lucide-react';

const UpcomingDesc = () => {
    return (
        <div id="upcoming" className="w-full mt-5 py-10">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans mb-4">
                Upcoming Events
            </h2>
            <hr className="border-gray-600 border-t my-4" />

            {/* CodeGolf 2.0 Card */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/60 via-[#02042a] to-black overflow-hidden"
                >
                    {/* Top accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

                    <div className="p-8 md:p-10">
                        {/* Header row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
                                    <Code className="w-3 h-3" /> Competitive Programming
                                </span>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white font-titillium">
                                    Code<span className="text-cyan-400">Golf</span> 2.0
                                </h3>
                                <p className="text-white/60 mt-1 text-sm">Think smarter. Code shorter. Win faster.</p>
                            </div>
                            <Link href="https://code-golf2-0.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-300 whitespace-nowrap"
                                >
                                    Register Now <ExternalLink className="w-4 h-4" />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Info chips */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 text-white/70 text-sm">
                                <Calendar className="w-4 h-4 text-cyan-400" />
                                March 12, 2026 · Full Day
                            </div>
                            <div className="flex items-center gap-2 text-white/70 text-sm">
                                <MapPin className="w-4 h-4 text-cyan-400" />
                                ESB Seminar Hall 1, MSRIT
                            </div>
                            <div className="flex items-center gap-2 text-white/70 text-sm">
                                <Users className="w-4 h-4 text-cyan-400" />
                                Pair programming · All students eligible
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/60 mb-8 leading-relaxed max-w-3xl">
                            CodeGolf 2.0 is a competitive programming event where you solve algorithmic challenges using the most concise code possible. Two rounds — an Individual DSA round on HackerRank followed by a mystery Surprise Round. Fewer characters = higher rank.
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Prize Pool', value: '₹10,000', icon: Trophy, color: 'from-yellow-500/20 to-orange-500/10 border-yellow-500/30 text-yellow-300' },
                                { label: 'Rounds', value: '2', icon: Code, color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-300' },
                                { label: 'Problems', value: '6', icon: Code, color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300' },
                                { label: '1st Prize', value: '₹5,000', icon: Trophy, color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300' },
                            ].map(({ label, value, icon: Icon, color }) => (
                                <div key={label} className={`rounded-xl border bg-gradient-to-br ${color} p-4 text-center`}>
                                    <Icon className="w-5 h-5 mx-auto mb-1 opacity-70" />
                                    <div className="text-xl font-extrabold">{value}</div>
                                    <div className="text-xs text-white/50 mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default UpcomingDesc;
