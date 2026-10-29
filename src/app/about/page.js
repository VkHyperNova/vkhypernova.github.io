// src/app/about/page.js
import Link from "next/link";
import { skills } from "./skills";
import ButtonLink from "../buttons";

export const metadata = {
  title: "About Me",
  description: "Junior software developer with frontend, backend, Go, and WordPress experience",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-5xl">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Junior software developer focused on writing clear, maintainable code
          and understanding how systems work under the hood.
        </p>
      </header>

      {/* Main content */}
      <div className="grid gap-12">
        {/* Background */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I’m a junior software developer with approximately 5–10 years of
              on-and-off coding experience. I’m mostly self-taught and have learned
              programming through personal projects, online courses, and consistent
              hands-on experimentation.
            </p>

            <p>
              Alongside self-study, I have formal education from{" "}
              <span className="font-medium">Kutsehariduskeskus</span> and practical
              industry experience through internships at two software companies.
              These experiences helped me understand how real software is built,
              reviewed, and maintained in a team environment.
            </p>
          </div>
        </section>

        {/* Current focus */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              My current focus is <span className="font-medium">Go (Golang)</span>,
              where I build small programs and tools for personal use. I enjoy
              writing clear, maintainable code and understanding how programs work
              under the hood.
            </p>

            <p>
              I’m comfortable working on both frontend and backend. On the frontend,
              I build clean and responsive user interfaces. On the backend, I focus
              on APIs, data flow, and basic system design. I also have experience
              working with <span className="font-medium">WordPress</span> for content
              management and simple dynamic websites.
            </p>
          </div>
        </section>

        {/* Engineering mindset */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Engineering Mindset</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            I don’t rely on “vibe coding” or blindly copying solutions. I prefer to
            understand how things work and write my own code. I do use AI as a helper
            for learning, debugging, and exploring ideas—but the final code is
            something I fully understand and can explain.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"
              >
                <Icon size={18} style={{ color }} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-6">
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/projects" variant="solid">View Projects →</ButtonLink>

            <ButtonLink href="/contact">Contact Me</ButtonLink>
          </div>
        </section>
      </div>
    </section>
  );
}
