"use client";

import TimeDisplay from "./components/TimeDisplay";
import Card from "./components/Card";

export default function Home() {
  const entertainmentLinks = [
    { name: "YouTube Music", url: "https://music.youtube.com" },
    { name: "HiAnime", url: "https://hianime.com" },
    { name: "YouTube", url: "https://youtube.com" },
  ];

  const workLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "GitLab", url: "https://gitlab.com" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "Telegram", url: "https://telegram.org" },
    { name: "WhatsApp", url: "https://web.whatsapp.com/" },
  ];

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ backgroundColor: "#1D2021" }}
    >
      <TimeDisplay />

      <h1 className="text-4xl font-bold mt-10">Sic mundus Creatus est</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          heading="Entertainment"
          links={entertainmentLinks}
          titleColor="cyan"
        />
        <Card heading="Work" links={workLinks} titleColor="yellow" />
        <Card heading="Social" links={socialLinks} titleColor="purple" />
      </div>
    </main>
  );
}
