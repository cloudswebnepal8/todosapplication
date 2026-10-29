
import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Our Todo App
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Stay Organized.
            <span className="text-blue-400"> Stay Focused.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A simple Todo app designed to help you organize your daily
            tasks, manage your priorities, and get things done.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">✓</div>

            <h2 className="text-xl font-semibold text-white">
              Add Tasks
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Quickly add your daily tasks and keep track of what needs
              to be done.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">🎯</div>

            <h2 className="text-xl font-semibold text-white">
              Stay Focused
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Keep your priorities clear and focus on completing your
              important tasks.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">⚡</div>

            <h2 className="text-xl font-semibold text-white">
              Get Things Done
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Complete your tasks and make your day more productive.
            </p>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            Plan it. Do it. Complete it. ✓
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
