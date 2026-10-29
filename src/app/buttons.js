import Link from "next/link";

export default function ButtonLink({ href, children, variant = "outline" }) {
  const base =
    "px-6 py-3 rounded-md border border-accent transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "solid"
      ? "bg-accent text-white hover:bg-accent-dark"
      : "text-accent hover:bg-accent hover:text-white dark:text-accent-light dark:border-accent-light dark:hover:bg-accent dark:hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}