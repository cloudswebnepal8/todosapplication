import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90')",
            }}
        >
            <div className="flex min-h-screen items-center bg-slate-950/80 px-6">

                <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">

                    <div className="text-center lg:text-left">

                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                            Simple. Focused. Productive.
                        </span>

                        <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                            Organize Your
                            <span className="block text-blue-400">
                                Day Better.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 lg:mx-0 sm:text-lg">
                            Manage your daily tasks, stay focused on your goals, and
                            accomplish more with a clean and simple productivity
                            experience.
                        </p>

                        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

                            <Link to='/signup'>
                                <button className="rounded-sm bg-blue-600 p-10 h-10 w-30 font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500">
                                    Get Started →
                                </button>

                            </Link>


                            <Link to='/about'>


                                <button className="rounded-sm border border-white/20 bg-white/10 p-10 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
                                    Learn More
                                </button>

                            </Link>

                        </div>

                        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300 lg:justify-start">
                            <span>✓ Easy to use</span>
                            <span>✓ Stay organized</span>
                            <span>✓ Boost productivity</span>
                        </div>
                    </div>

                    <div className="relative flex justify-center">

                        <div className="absolute h-80 w-80 rounded-full bg-blue-500/30 blur-[100px]"></div>

                        <div className="relative flex h-80 w-80 items-center justify-center rounded-[3rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl transition duration-500 hover:scale-105 md:h-96 md:w-96">

                            <div className="absolute h-64 w-64 rounded-full border border-blue-400/20"></div>

                            <div className="relative flex flex-col items-center">

                                <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-blue-600 shadow-2xl shadow-blue-600/40">
                                    <div className="text-7xl font-black text-white">
                                        ✓
                                    </div>
                                </div>

                                <h2 className="mt-7 text-3xl font-bold tracking-wide text-white">
                                    TODO
                                </h2>

                                <p className="mt-2 text-sm text-slate-400">
                                    Plan • Focus • Achieve
                                </p>

                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 shadow-xl backdrop-blur-xl sm:left-4">
                            <p className="text-xs text-slate-400">
                                Your productivity
                            </p>
                            <p className="font-semibold text-white">
                                Starts Today ✨
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Hero
