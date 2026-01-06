import Image from "next/image";

// 1. Separate data from UI
const RESOURCES = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    label: "Deploy Now",
    icon: "/vercel.svg",
    primary: true,
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    label: "Documentation",
    primary: false,
  },
];

// 2. Reusable Component for Links
const ActionButton = ({ 
  href, 
  label, 
  icon, 
  primary 
}: { 
  href: string; 
  label: string; 
  icon?: string; 
  primary?: boolean 
}) => (
  <a
    className={`flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-[158px] ${
      primary
        ? "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
        : "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
    }`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon && (
      <Image
        className="dark:invert"
        src={icon}
        alt=""
        width={16}
        height={16}
      />
    )}
    {label}
  </a>
);

export default function Home() {
  return (
    // Removed redundant outer div; simplified wrapper
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 py-32 px-4 dark:bg-black sm:px-16">
      <div className="flex w-full max-w-3xl flex-col items-center gap-12 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point? Check out our{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium text-zinc-950 underline decoration-zinc-500/30 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-50"
            >
              Templates
            </a>.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 sm:flex-row">
          {RESOURCES.map((resource) => (
            <ActionButton key={resource.label} {...resource} />
          ))}
        </div>
      </div>
    </main>
  );
}
