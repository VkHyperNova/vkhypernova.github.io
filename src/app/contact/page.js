import Link from "next/link";
import { contacts } from "./contacts"; // adjust path as needed
import ButtonLink from "../buttons";

export const metadata = {
  title: "Contact | Developer Portfolio",
  description:
    "Get in touch with a junior software developer for opportunities, questions, or collaboration.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-5xl">
      <div className="space-y-20">
        {/* ================= HEADER ================= */}
        <section className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            If you’d like to discuss a project, opportunity, or just have a
            technical question, feel free to reach out. I’m open to internships,
            junior roles, and learning-focused collaborations.
          </p>
        </section>

        {/* ================= CONTACT OPTIONS ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Ways to reach me</h2>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className="rounded-lg border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{contact.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {contact.description}
                </p>
                <Link
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent dark:text-accent-light hover:underline"
                >
                  {contact.label}
                </Link>
              </div>
            ))}

            {/* Location / Availability — kept separate since it's not a link */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Open to remote opportunities and on-site roles depending on
                location. Actively looking for junior developer positions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="max-w-3xl">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            If you’re reviewing my portfolio for a role or internship, feel free
            to reach out with any questions. I’m always happy to talk about my
            projects, learning process, and how I approach software development.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/projects" variant="solid">View Projects →</ButtonLink>

            <ButtonLink href="/about">About Me</ButtonLink>
          </div>
        </section>
      </div>
    </main>
  );
}