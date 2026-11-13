import { createFileRoute, redirect } from "@tanstack/react-router";

// O site real é feito em HTML/CSS/JS puro, na pasta public/site/
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "site/index.html", reloadDocument: true });
  },
  head: () => ({
    meta: [
      { title: "Eletrodinâmica e Eletromagnetismo" },
      { name: "description", content: "História, aplicações, fórmulas e cientistas do eletromagnetismo." },
      { property: "og:title", content: "Eletrodinâmica e Eletromagnetismo" },
      { property: "og:description", content: "História, aplicações, fórmulas e cientistas do eletromagnetismo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
