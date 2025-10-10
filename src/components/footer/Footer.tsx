"use client";

const Footer = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <footer className="w-full bg-secondary/50 text-foreground py-6 mt-auto h-fit rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative group text-lg transition-all hover:text-primary hover:scale-105"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        © {new Date().getFullYear()} Ai Trip Planner. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
