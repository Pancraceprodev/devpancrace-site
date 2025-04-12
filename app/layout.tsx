import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  description: "Full Stack Developer Website",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "HTML",
    "CSS",
    "Sass",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Chakra UI",
    "Ant Design",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Firebase",
    "Heroku",
    "Vercel",
    "Netlify",
    "DigitalOcean",
    "Linode",
    "Web Hosting",
    "Domain Registration",
    "SSL Certificate",
    "SEO",
    "Web Performance",
    "Web Accessibility",
    "Web Security",
    "Web Standards",
    "Web Development",
    "Web Design",
    "Responsive Design",
    "User Experience",
    "User Interface",
    "UI/UX Design",
    "Graphic Design",
    "Logo Design",
    "Branding",  ]         
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
