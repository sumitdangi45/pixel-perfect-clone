import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import officeAsset from "@/assets/anni-office-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anni Web Solutions | Digital Solutions for Real Businesses" },
      {
        name: "description",
        content: "High-performing websites, web applications and custom software built for real business growth.",
      },
      { property: "og:title", content: "Anni Web Solutions | Digital Solutions for Real Businesses" },
      {
        property: "og:description",
        content: "Websites, web apps and custom software that help businesses grow faster and work smarter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = ["Home", "About", "Services", "Projects", "Why Us", "Contact"];
const stats = [
  ["50+", "Projects Delivered"],
  ["30+", "Happy Clients"],
  ["5+", "Industries Served"],
  ["100%", "Client Satisfaction"],
];
const brands = ["TATA", "Reliance", "Infosys", "Flipkart", "OYO", "PhonePe", "Swiggy", "Microsoft"];

function Logo() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Anni home">
      <span className="anni-mark" aria-hidden="true"><i /><b /></span>
      <span className="leading-none">
        <strong className="block text-[2rem] font-extrabold tracking-normal">Anni</strong>
        <small className="mt-1 block text-[0.43rem] font-bold tracking-[0.2em]">WEB SOLUTIONS PVT. LTD.</small>
      </span>
    </a>
  );
}

function ProjectButton({ className = "" }: { className?: string }) {
  return (
    <Button asChild className={`h-14 rounded-xl px-8 text-[0.92rem] font-medium shadow-none ${className}`}>
      <a href="#contact">Start Your Project <ArrowRight /></a>
    </Button>
  );
}

function Index() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="hidden h-10 items-center justify-between bg-ink px-[4.5%] text-xs text-paper lg:flex">
        <p>🚀&nbsp; Helping businesses grow with modern websites, web apps and custom software.</p>
        <p>◉&nbsp; Based in India &nbsp; | &nbsp; Working with clients worldwide</p>
      </div>

      <header className="grid h-[92px] grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border/50 px-5 lg:h-[118px] lg:grid-cols-[auto_1fr_auto] lg:px-[4.5%]">
        <Logo />
        <nav className="hidden items-center justify-center gap-11 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`}
              className={`relative py-3 text-sm font-semibold transition-colors hover:text-brand ${item === "Home" ? "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-brand" : ""}`}
            >
              {item}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden h-14 rounded-full px-7 shadow-none lg:inline-flex">
          <a href="#contact">Get a Free Quote <ArrowRight /></a>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-11 w-11 justify-self-end lg:hidden" aria-label="Open menu">
              <Menu className="size-7" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[82%] pt-16">
            <SheetTitle className="text-left text-2xl">Anni</SheetTitle>
            <SheetDescription className="sr-only">Main navigation</SheetDescription>
            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="border-b border-border py-4 text-lg font-semibold">{item}</a>)}
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">IDEAS&nbsp; • &nbsp;WEBSITES&nbsp; • &nbsp;WEB APPS&nbsp; • &nbsp;GROWTH</p>
          <h1>Digital Solutions<br /><span>for Real Businesses.</span></h1>
          <p className="hero-description">At Anni Web Solutions Pvt. Ltd., we design, develop and deliver high-performing websites, web applications and custom software that help businesses grow faster and work smarter.</p>
          <div className="mt-8 grid gap-3 sm:flex">
            <ProjectButton />
            <Button asChild variant="outline" className="h-14 rounded-xl border-foreground/60 px-8 text-[0.92rem] shadow-none">
              <a href="#story"><span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"><Play className="size-3.5 fill-current" /></span>Watch Our Story</a>
            </Button>
          </div>
          <div className="stats-grid">
            {stats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
          </div>
        </div>

        <div className="hero-visual" id="story">
          <img src={officeAsset.url} alt="Modern Anni office workspace with plants and a laptop" />
          <div className="service-list" aria-label="Services"><span>Strategy</span><span>Design</span><span>Development</span><span>Support</span><span>Growth</span></div>
        </div>
      </section>

      <section className="trust-band" aria-label="Trusted clients">
        <p>TRUSTED BY BUSINESSES &amp; STARTUPS</p>
        <div className="brand-row">
          {brands.map((brand, index) => <span key={brand} className={index > 2 ? "hidden-brand" : ""}>{brand}</span>)}
        </div>
        <div className="brand-dots" aria-hidden="true"><i /><i /><i /></div>
        <Button asChild className="mobile-quote h-14 w-full rounded-full shadow-none">
          <a href="#contact">Get a Free Quote <ArrowRight /></a>
        </Button>
      </section>

      <section id="services" className="what-we-do">
        <div><p className="eyebrow">WHAT WE DO</p><h2>Everything You Need<br />to <span>Build and Grow Online.</span></h2></div>
        <p>From modern websites to AI-powered solutions, we help businesses create digital products that make an impact.</p>
      </section>
      <div id="about" /><div id="projects" /><div id="why-us" /><div id="contact" />
    </main>
  );
}