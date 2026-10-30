import Link from "next/link";
import { contacts } from "./contact/contacts";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function ContactIcon({ name }) {
  const n = name.toLowerCase();
  if (n.includes("mail")) {
    return (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }
  if (n.includes("github")) {
    return (
      <svg {...iconProps}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    );
  }
  if (n.includes("linkedin")) {
    return (
      <svg {...iconProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  return <span className="text-sm">{name}</span>;
}

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 mt-10 py-8">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Closing line */}
          <p className="text-sm">
            Open to junior developer roles. Get in touch!
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {contacts.map((contact) => {
              const external = !contact.url.startsWith("mailto:");
              return (
                <Link
                  key={contact.name}
                  href={contact.url}
                  aria-label={contact.name}
                  title={contact.name}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <ContactIcon name={contact.name} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Veikko Kiis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}