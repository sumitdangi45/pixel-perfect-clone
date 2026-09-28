import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, ChartNoAxesCombined, Code2, Database, Menu, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import officeAsset from "@/assets/anni-office-hero.jpg.asset.json";
import customAsset from "@/assets/anni-custom-service.jpg.asset.json";
import saasAsset from "@/assets/anni-saas-service.jpg.asset.json";
import aiAsset from "@/assets/anni-ai-service.jpg.asset.json";
import growthAsset from "@/assets/anni-growth-service.jpg.asset.json";
import topNote from "@/assets/anni-note-top.png.asset.json";
import bottomNote from "@/assets/anni-note-bottom-clean.png.asset.json";

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

const navigation = ["Home", "About", "Services", "Projects", "Why Us", "Blog", "Contact"];
const stats = [
  ["50+", "Projects Delivered"],
  ["30+", "Happy Clients"],
  ["5+", "Industries Served"],
  ["100%", "Client Satisfaction"],
];
const brands = ["TATA", "Reliance", "Infosys", "Flipkart", "OYO", "PhonePe", "Swiggy", "Microsoft"];
const offerings = [
  { number: "01", tag: "TAILOR-MADE", title: "Custom Development", description: "Websites, web applications and custom software crafted exactly to your business goals.", action: "Explore Custom Solutions", image: customAsset.url, icon: Code2 },
  { number: "02", tag: "READY TO LAUNCH", title: "SaaS Solutions", description: "Scalable SaaS platforms and ready-made solutions to help businesses launch faster.", action: "Explore SaaS Solutions", image: saasAsset.url, icon: Database },
  { number: "03", tag: "INTELLIGENT SYSTEMS", title: "AI & Automation", description: "AI agents, workflow automation and intelligent systems that reduce repetitive work and improve productivity.", action: "Explore AI Solutions", image: aiAsset.url, icon: BrainCircuit },
  { number: "04", tag: "GROWTH & REACH", title: "Digital Growth", description: "SEO, social media, performance marketing and digital strategies to help businesses get discovered and grow online.", action: "Grow Your Business", image: growthAsset.url, icon: ChartNoAxesCombined },
];

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

function Offerings() {
  return (
    <section id="offerings" className="offerings-page" aria-labelledby="offerings-title">
      <header className="offerings-header">
        <Logo />
        <nav className="offerings-nav" aria-label="Offerings navigation">
          {navigation.map((item) => <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`} className={item === "Home" ? "active" : ""}>{item}</a>)}
        </nav>
        <Button asChild className="offerings-quote shadow-none"><a href="#contact">Get a Free Quote <ArrowRight size={16} /></a></Button>
      </header>
      <div className="offerings-inner">
        <div className="offerings-intro">
          <p className="offerings-eyebrow">OUR OFFERINGS <span /></p>
          <h2 id="offerings-title">Solutions That Help <span>Your Business Grow</span></h2>
          <p>From custom software to AI-powered automation, we build practical digital solutions<br className="offerings-desktop-break" /> around your business needs.</p>
          <img className="offerings-note" src={topNote.url} alt="Ideas Build Better Businesses" />
        </div>
        <div className="offerings-cards">
          {offerings.map(({ number, tag, title, description, action, image, icon: Icon }) => (
            <article className="offering-card" key={number}>
              <span className="offering-icon"><Icon size={23} strokeWidth={1.8} /></span>
              <span className="offering-number">{number}</span>
              <img className="offering-photo" src={image} alt={title} />
              <div className="offering-details">
                <span className="offering-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact">{action} <ArrowRight size={17} /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="offerings-cta">
          <div className="offerings-cta-copy">
            <p>LET’S BUILD TOGETHER <span /></p>
            <h2>Not Sure What You Need?</h2>
            <span>Talk to our experts and we’ll help you choose the right solution<br className="offerings-desktop-break" /> for your business goals.</span>
          </div>
          <div className="offerings-cta-actions">
            <Button asChild className="offerings-consult shadow-none"><a href="#contact">Get a Free Consultation <ArrowRight size={16} /></a></Button>
            <Button asChild variant="outline" className="offerings-chat shadow-none"><a href="#contact"><MessageCircle size={16} /> Chat with Us</a></Button>
          </div>
          <img src={bottomNote.url} className="offerings-bottom-note" alt="Same Team Bigger Goals" />
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Users, title: "Client First Approach", text: "Your goals are our priority. We focus on solutions that create real value." },
  { icon: Lightbulb, title: "Creative & Modern Design", text: "We design clean, modern and user-friendly interfaces that make an impact." },
  { icon: Code2, title: "Quality Development", text: "Clean code, scalable solutions and the latest technologies for long-term success." },
  { icon: ChartColumnIncreasing, title: "Ongoing Support", text: "We’re with you even after launch, with continuous support and improvements." },
];
const whyStats = [["50+", "Projects Delivered"], ["30+", "Happy Clients"], ["5+", "Industries Served"], ["100%", "Client Satisfaction"]];
const values = [
  { icon: ShieldCheck, title: "Trust", text: "We keep our promises." },
  { icon: UsersRound, title: "Collaboration", text: "We work as your extended team." },
  { icon: Target, title: "Results", text: "We focus on measurable growth." },
  { icon: Heart, title: "People", text: "We value lasting relationships." },
];

function WhyUs() {
  return (
    <section id="why-us" className="why-page" aria-labelledby="why-title">
      <div className="why-inner">
        <div className="why-hero">
          <div className="why-copy">
            <p className="offerings-eyebrow">WHY CHOOSE US <span /></p>
            <h2 id="why-title">More Than Just Development, <span>A True Partner.</span></h2>
            <p>We don’t just build websites or apps, we work closely with you to understand your goals, solve real problems, and help your business grow with the right technology.</p>
            <div className="why-actions">
              <Button asChild className="why-primary shadow-none"><a href="#contact">Let’s Work Together <ArrowRight size={16} /></a></Button>
              <a href="#story" className="why-story"><span><Play size={14} fill="currentColor" /></span><strong>Our Story<small>2 min watch</small></strong></a>
            </div>
          </div>
          <img className="why-photo" src={whyAsset.url} alt="Anni team working together" />
        </div>
        <div className="why-cards">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article key={title}><span className="why-icon"><Icon size={22} /></span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
        <div className="why-stats">
          {whyStats.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
          <blockquote><b>“</b><p>“Great team to work with. They understood our needs and delivered beyond expectations.”<cite>— A Happy Client</cite></p></blockquote>
        </div>
        <div className="why-values">
          <div className="why-values-head">
            <div><p className="offerings-eyebrow">OUR VALUES <span /></p><h2>What Drives Us</h2></div>
            <p>We believe in building long-term relationships through transparency, quality, and a genuine passion for technology.</p>
          </div>
          <div className="why-values-list">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title}><Icon size={38} strokeWidth={1.5} /><div><h3>{title}</h3><p>{text}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Index() {
  return (
    <main id="home" className="home-page min-h-screen overflow-hidden bg-background text-foreground">
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
      <Offerings />
      <div id="about" /><div id="projects" /><div id="why-us" /><div id="contact" />
    </main>
  );
}