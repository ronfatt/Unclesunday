"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import {
  Baby,
  BookHeart,
  CalendarHeart,
  Church,
  Cloud,
  ExternalLink,
  Globe2,
  HandHeart,
  Heart,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Music2,
  PartyPopper,
  Phone,
  Rainbow,
  School,
  Send,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#roadshow", label: "Roadshow" },
  { href: "#impact", label: "Impact" },
  { href: "#gallery", label: "Gallery" },
  { href: "#invite", label: "Invite" },
  { href: "#contact", label: "Contact" },
];

const badges = ["Churches", "Schools", "Kids Camps", "Sunday School", "Family Days"];

const heroProof = [
  { label: "Fun", detail: "Joyful stage energy", icon: Smile, color: "bg-[#FFD93D]" },
  { label: "Safe & meaningful", detail: "Faith and character", icon: ShieldCheck, color: "bg-[#4ADE80]" },
  { label: "Invite-ready", detail: "Churches and schools", icon: HandHeart, color: "bg-[#F72525]" },
  { label: "Global vision", detail: "Cross-cultural vision", icon: Globe2, color: "bg-[#38BDF8]" },
];

const heroSlides = [
  {
    title: "Jom Bah! Ketawa Bersama",
    eyebrow: "Featured Roadshow",
    text: "17 Jun 2026 · Bataras Hypermarket Tawau · 11.00 AM - 1.00 PM",
    image: "/hero-roadshow-banner.jpg",
  },
];

const journeySteps = [
  {
    title: "Plan the Event",
    text: "Share your church, school, camp, or family day needs.",
    icon: CalendarHeart,
    color: "bg-[#38BDF8]",
  },
  {
    title: "Shape the Program",
    text: "Choose a joyful mix of stories, games, gospel moments, and interaction.",
    icon: BookHeart,
    color: "bg-[#9B5DE5]",
  },
  {
    title: "Create the Joy",
    text: "Children experience laughter, faith, teamwork, and memorable character lessons.",
    icon: Sparkles,
    color: "bg-[#FFD93D]",
  },
];

const features = [
  {
    title: "Joyful Ministry",
    description: "Creating safe, happy, and meaningful moments where children can learn, laugh, and grow.",
    icon: Heart,
    color: "bg-[#FF66B3]",
  },
  {
    title: "Faith-Based Storytelling",
    description: "Bringing Bible stories and values to life through creative interaction and memorable experiences.",
    icon: BookHeart,
    color: "bg-[#9B5DE5]",
  },
  {
    title: "International Vision",
    description: "Serving churches, schools, and communities with programs that can connect across cultures.",
    icon: Globe2,
    color: "bg-[#38BDF8]",
  },
];

const programs = [
  {
    title: "Kids Camps",
    description:
      "Themed children's camps with Bible stories, group games, stage moments, worship, creative characters, and team activities.",
    icon: Baby,
    accent: "#FFD93D",
  },
  {
    title: "Church Children's Events",
    description: "Special children's services, Sunday School events, holiday programs, family days, and church celebrations.",
    icon: Church,
    accent: "#F72525",
  },
  {
    title: "School & Community Programs",
    description:
      "Positive value-based programs for schools and communities, focusing on joy, character, teamwork, kindness, and confidence.",
    icon: School,
    accent: "#4ADE80",
  },
  {
    title: "Creative Gospel Shows",
    description: "Fun, interactive, faith-filled shows using storytelling, comedy, music, movement, and visual engagement.",
    icon: Mic2,
    accent: "#9B5DE5",
  },
  {
    title: "Teacher & Volunteer Training",
    description:
      "Practical training for children's workers, teachers, volunteers, and youth leaders in creative children's ministry.",
    icon: Users,
    accent: "#38BDF8",
  },
  {
    title: "Family Events",
    description: "Joyful programs that bring children, parents, and communities together through fun and meaningful interaction.",
    icon: CalendarHeart,
    accent: "#FF66B3",
  },
];

const roadshowStops = [
  {
    date: "17 Jun 2026",
    time: "11:00 AM - 1:00 PM",
    title: "Bataras Roadshow",
    detail: "Local clowns, magic moments, and public roadshow energy.",
    color: "bg-[#FFD93D]",
  },
  {
    date: "21 Jun 2026",
    time: "9:00 AM",
    title: "Father's Day Sunday Service",
    detail: "A meaningful Sunday gathering with family-friendly joy.",
    color: "bg-[#4ADE80]",
  },
  {
    date: "21 Jun 2026",
    time: "3:30 PM",
    title: "Tawau Hills Park",
    detail: "Roadshow stop with Sam Tee, Donny, and the travelling team.",
    color: "bg-[#38BDF8]",
  },
  {
    date: "23 Jun 2026",
    time: "10:30 AM - 11:30 AM",
    title: "SK Kalabakan Primary School",
    detail: "School program for children and the local community.",
    color: "bg-[#FF66B3]",
  },
];

const stats = [
  { value: "20+", label: "Years of Joyful Ministry" },
  { value: "100+", label: "Events & Programs" },
  { value: "10,000+", label: "Children Reached" },
  { value: "Global", label: "Churches, Schools & Communities Served" },
];

const gallery = [
  { label: "Kids Camp", caption: "Theme days, games, and faith-filled group moments.", colors: "from-[#FFD93D] via-[#FF66B3] to-[#F72525]", icon: Rainbow },
  { label: "Stage Interaction", caption: "Big reactions, clear messages, and guided participation.", colors: "from-[#38BDF8] via-[#9B5DE5] to-[#FF66B3]", icon: Mic2 },
  { label: "Creative Show", caption: "Comedy, music, stories, movement, and visual surprises.", colors: "from-[#4ADE80] via-[#FFD93D] to-[#38BDF8]", icon: Sparkles },
  { label: "Team Activity", caption: "Children learn kindness, confidence, and teamwork together.", colors: "from-[#F72525] via-[#FFD93D] to-[#4ADE80]", icon: Users },
  { label: "Family Day", caption: "Warm programs that parents and children can enjoy together.", colors: "from-[#FF66B3] via-[#FFD93D] to-[#38BDF8]", icon: Heart },
  { label: "Children's Worship", caption: "Joyful worship spaces that feel meaningful and child-friendly.", colors: "from-[#9B5DE5] via-[#38BDF8] to-[#4ADE80]", icon: Music2 },
];

const testimonials = [
  {
    quote: "Uncle Sunday brings joy, order, and meaningful impact to children. The program is fun, clear, and unforgettable.",
    name: "Church Leader",
  },
  {
    quote: "The children were fully engaged from beginning to end. It was more than entertainment - it carried a message.",
    name: "Children's Ministry Teacher",
  },
  {
    quote: "A wonderful experience for families, children, and the whole community.",
    name: "Event Organizer",
  },
];

const formFields = [
  "Name",
  "Organization / Church / School",
  "Country / City",
  "Event Type",
  "Expected Date",
  "Number of Children",
  "Email / WhatsApp",
];

const whatsappUrl = "https://wa.me/601110589679";

function LogoMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid size-14 shrink-0 place-items-center rounded-full border-[3px] border-[#F72525] bg-white ring-4 ring-white sticker-shadow">
        <Image
          src="/logo.png"
          alt="Uncle Sunday Logo"
          width={56}
          height={56}
          className="rounded-full object-contain"
        />
      </div>
      <div>
        <p className={`font-display text-lg font-black leading-none ${inverted ? "text-white" : "text-[#1E293B]"}`}>
          Uncle Sunday
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F72525]">Happy Sunday</p>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between lg:h-20">
        <a href="#home" aria-label="Uncle Sunday home">
          <LogoMark />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-extrabold text-slate-700 transition hover:bg-[#FFF7E6] hover:text-[#F72525]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-600">
            EN / 中文 / BM
          </div>
          <a
            href="#invite"
            className="whitespace-nowrap rounded-full bg-[#F72525] px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-[#dc1d1d]"
          >
            Invite Now
          </a>
        </div>

        <button
          className="grid size-11 place-items-center rounded-full bg-[#FFD93D] text-slate-900 lg:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="section-shell grid gap-2 py-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-[#FFF7E6] px-4 py-3 font-extrabold text-slate-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#invite"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#F72525] px-4 py-3 text-center font-black text-white"
            >
              Invite Uncle Sunday
            </a>
            <div className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-600">
              EN / 中文 / BM
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileActionBar() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 rounded-[1.35rem] border border-white/80 bg-white/92 p-2 shadow-2xl shadow-slate-950/15 backdrop-blur-xl md:hidden" aria-label="Quick actions">
      <div className="grid grid-cols-3 gap-2">
        <a href="#roadshow" className="grid place-items-center rounded-2xl bg-[#FFD93D] px-2 py-2 text-center text-[11px] font-black leading-tight text-slate-950">
          <CalendarHeart size={18} />
          Roadshow
        </a>
        <a href={whatsappUrl} className="grid place-items-center rounded-2xl bg-[#4ADE80] px-2 py-2 text-center text-[11px] font-black leading-tight text-slate-950">
          <Phone size={18} />
          WhatsApp
        </a>
        <a href="#invite" className="grid place-items-center rounded-2xl bg-[#F72525] px-2 py-2 text-center text-[11px] font-black leading-tight text-white">
          <Send size={18} />
          Invite
        </a>
      </div>
    </nav>
  );
}

function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#F72525] sticker-shadow">
        {kicker}
      </p>
      <h2 className="font-display text-4xl font-black leading-tight text-slate-900 sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-700">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden pb-24 md:pb-0">
      <Header />
      <MobileActionBar />

      <section id="home" className="relative min-h-screen pt-20 lg:pt-24">
        <div className="absolute inset-0 doodle-grid opacity-70" />
        <div className="absolute -left-28 top-32 size-48 rounded-full bg-[#FFD93D]/55 blur-2xl" />
        <div className="absolute -right-24 top-24 size-48 rounded-full bg-[#FF66B3]/25 blur-2xl" />
        <div className="rainbow-band absolute inset-x-0 top-16 h-2 lg:top-20" />
        <div className="float-doodle absolute left-[7%] top-32 hidden rounded-full bg-white p-3 text-[#F72525] sticker-shadow md:grid" style={{ "--doodle-rotate": "-8deg" } as CSSProperties}>
          <Heart size={18} fill="currentColor" />
        </div>
        <div className="float-doodle-delay absolute right-[8%] top-36 hidden rounded-3xl bg-white p-3 text-[#9B5DE5] sticker-shadow md:grid" style={{ "--doodle-rotate": "10deg" } as CSSProperties}>
          <Sparkles size={20} />
        </div>
        <div className="section-shell relative grid items-center gap-8 py-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-12">
          <div className="order-2 lg:order-1">
            <div className="comic-label mb-4 inline-flex -rotate-1 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#9B5DE5] sm:text-sm lg:mb-6">
              <Sparkles size={18} className="text-[#FFD93D]" />
              Joyful gospel moments for children
            </div>
            <h1 className="font-display text-4xl font-black leading-[0.96] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Making Every Day a <span className="text-[#F72525]">Happy Sunday</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-700 sm:text-lg lg:mt-5 lg:text-xl lg:leading-9">
              A colorful clown ministry experience with stories, games, laughter, and faith-filled messages for
              churches, schools, families, and international partners.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {heroProof.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex min-h-12 items-center gap-2 rounded-full border border-white bg-white/88 px-3 py-2 sticker-shadow backdrop-blur">
                    <div className={`grid size-8 shrink-0 place-items-center rounded-full ${item.color} text-slate-950 ring-2 ring-white`}>
                      <Icon size={16} />
                    </div>
                    <p className="font-display text-sm font-black leading-tight text-slate-950">{item.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-7">
              <a
                href="#invite"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#a90f0f] bg-[#F72525] px-7 py-4 font-black text-white shadow-xl shadow-red-500/25 transition hover:-translate-y-1"
              >
                <Send size={20} />
                Invite Uncle Sunday
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-900 bg-white px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-[#FFD93D]"
              >
                <PartyPopper size={20} />
                Explore Programs
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 lg:mt-8 lg:gap-3">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white bg-white/90 px-4 py-2 text-sm font-black text-slate-700 sticker-shadow">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 relative mx-auto grid w-full max-w-[620px] place-items-center lg:order-2">
            <div className="absolute -inset-2 rounded-[1.8rem] bg-[#FFD93D] lg:-inset-5 lg:rounded-[2.4rem]" />
            <div className="absolute -right-6 -top-6 size-28 rounded-full bg-[#FF66B3]/70 blur-xl" />
            <div className="absolute -bottom-6 -left-6 size-28 rounded-full bg-[#38BDF8]/60 blur-xl" />
            <div className="float-doodle absolute -left-2 top-4 z-10 hidden rounded-3xl bg-white p-4 sticker-shadow red-sticker-border sm:grid" style={{ "--doodle-rotate": "-12deg" } as CSSProperties}>
              <Star className="text-[#FFD93D]" fill="#FFD93D" />
            </div>
            <div className="float-doodle-delay absolute -right-2 top-16 z-10 hidden rounded-full bg-[#FF66B3] p-4 text-white sticker-shadow sm:grid" style={{ "--doodle-rotate": "12deg" } as CSSProperties}>
              <Heart fill="currentColor" />
            </div>
            <div className="float-doodle-delay absolute -bottom-2 left-8 z-10 hidden rounded-3xl bg-[#4ADE80] p-4 text-white sticker-shadow sm:grid" style={{ "--doodle-rotate": "10deg" } as CSSProperties}>
              <Rainbow />
            </div>
            <div className="absolute bottom-10 right-4 z-10 hidden rotate-[8deg] rounded-3xl bg-[#9B5DE5] p-4 text-white sticker-shadow sm:grid">
              <Cloud />
            </div>
            <div className="relative w-full overflow-hidden rounded-[1.6rem] border-4 border-white bg-white p-2 sticker-shadow red-sticker-border lg:rounded-[2rem] lg:border-8 lg:p-3">
              <div className="relative aspect-video overflow-hidden rounded-[1.1rem] bg-[#FFF7E6] lg:rounded-[1.35rem]">
                <Image
                  src={heroSlides[0].image}
                  alt="Jom Bah Ketawa Bersama roadshow banner featuring Uncle Sunday and performers"
                  fill
                  priority
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-2 top-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#F72525] shadow-lg sm:left-3 sm:top-3 sm:px-4 sm:py-2 sm:text-xs">
                  {heroSlides[0].eyebrow}
                </div>
              </div>
              <div className="grid gap-3 px-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center lg:gap-4 lg:py-4">
                <div>
                  <h2 className="font-display text-xl font-black leading-tight text-slate-950 sm:text-2xl lg:text-3xl">
                    {heroSlides[0].title}
                  </h2>
                  <p className="mt-1 text-sm font-extrabold text-slate-600">{heroSlides[0].text}</p>
                </div>
                <a
                  href="#roadshow"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F72525] px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20"
                >
                  View Roadshow
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 pb-1">
                <span className="size-2.5 rounded-full bg-[#F72525]" />
                <span className="size-2.5 rounded-full bg-slate-200" />
                <span className="size-2.5 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 pb-14">
        <div className="section-shell">
          <div className="soft-card grid gap-4 rounded-[2rem] p-4 md:grid-cols-3 md:p-5">
            {journeySteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex gap-4 rounded-[1.5rem] bg-[#FFF7E6] p-5">
                  <div className={`grid size-12 shrink-0 place-items-center rounded-full border-4 border-white ${step.color} text-slate-950`}>
                    <Icon size={23} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-black leading-tight text-slate-950">{step.title}</h2>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{step.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-white section-pad">
        <div className="rainbow-band absolute inset-x-0 top-0 h-1.5" />
        <div className="section-shell">
          <SectionHeading
            kicker="About"
            title="Who Is Uncle Sunday?"
            text="Uncle Sunday is a joyful children's ministry personality dedicated to reaching the next generation through creativity, storytelling, laughter, music, games, and faith-based messages. Through interactive programs and meaningful experiences, Uncle Sunday helps children discover joy, hope, character, and God's love."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="relative overflow-hidden rounded-[1.75rem] border-2 border-[#F72525]/15 bg-[#FFF7E6] p-6 sticker-shadow">
                  <div className="absolute -right-8 -top-8 size-24 rounded-full bg-[#FFD93D]/45" />
                  <div className={`relative mb-5 grid size-14 place-items-center rounded-full border-4 border-white ${feature.color} text-white`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="relative font-display text-2xl font-black text-slate-950">{feature.title}</h3>
                  <p className="relative mt-3 leading-7 text-slate-700">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="programs" className="relative section-pad">
        <div className="absolute left-4 top-10 hidden rounded-full bg-[#FFD93D] p-3 text-slate-950 sticker-shadow lg:block">
          <Smile size={24} />
        </div>
        <div className="absolute right-6 top-20 hidden rounded-3xl bg-[#FF66B3] p-3 text-white sticker-shadow lg:block">
          <Star size={22} fill="currentColor" />
        </div>
        <div className="section-shell">
          <SectionHeading kicker="Programs" title="Programs We Bring" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <article key={program.title} className="group rounded-[1.75rem] border border-white bg-white/92 p-6 sticker-shadow transition hover:-translate-y-1 hover:border-[#F72525]/25">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid size-14 place-items-center rounded-full border-4 border-[#FFF7E6] text-white" style={{ backgroundColor: program.accent }}>
                      <Icon size={28} />
                    </div>
                    <span className="comic-label rotate-3 rounded-full bg-[#FFD93D] px-3 py-1 font-display text-base font-black text-[#F72525] transition group-hover:-rotate-3">
                      go
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-950">{program.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{program.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="roadshow" className="relative bg-white section-pad">
        <div className="rainbow-band absolute inset-x-0 top-0 h-2" />
        <div className="section-shell">
          <SectionHeading
            kicker="Roadshow"
            title="Follow the Uncle Button Tawau Road Show"
            text="Upcoming Malaysia roadshow highlights from 16-24 June 2026. Fans can follow public stops, school programs, Sunday service, and family-friendly moments as the team moves through Tawau."
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
            <div className="grid gap-4">
              {roadshowStops.map((stop) => (
                <article key={`${stop.date}-${stop.title}`} className="flex gap-4 rounded-[1.75rem] border border-[#F72525]/10 bg-[#FFF7E6] p-5 sticker-shadow">
                  <div className={`grid size-16 shrink-0 place-items-center rounded-full border-4 border-white ${stop.color} text-center font-display text-sm font-black leading-tight text-slate-950`}>
                    <CalendarHeart size={24} />
                  </div>
                  <div>
                    <p className="font-black text-[#F72525]">{stop.date} · {stop.time}</p>
                    <h3 className="font-display text-2xl font-black text-slate-950">{stop.title}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{stop.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="rounded-[2rem] border border-[#F72525]/20 bg-white p-4 sticker-shadow">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="comic-label rounded-full bg-[#FFD93D] px-4 py-2 font-display text-lg font-black text-[#F72525]">
                  Full itinerary
                </p>
                <a href="#contact" className="rounded-full bg-[#F72525] px-4 py-2 text-sm font-black text-white">
                  Follow Updates
                </a>
              </div>
              <Image
                src="/roadshow-schedule.jpg"
                alt="Uncle Button Tawau Road Show Itinerary Schedule, 16-24 June 2026"
                width={720}
                height={1280}
                className="max-h-[520px] w-full rounded-[1.25rem] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-[#1E293B] section-pad text-white">
        <div className="section-shell">
          <SectionHeading
            kicker="Impact"
            title="Joy That Reaches Hearts"
            text="Every smile matters. Every child matters. Every program is designed to plant seeds of faith, hope, joy, and strong character."
          />
          <div className="rainbow-divider mb-8" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
                <p className="font-display text-4xl font-black text-[#FFD93D]">{stat.value}</p>
                <p className="mt-3 font-bold leading-7 text-white/85">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white section-pad">
        <div className="section-shell">
          <SectionHeading kicker="Gallery" title="Moments of Joy" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border-[5px] border-white bg-gradient-to-br ${item.colors} p-5 sticker-shadow`}>
                  <div className="absolute inset-0 doodle-grid opacity-35" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="grid size-16 place-items-center rounded-full bg-white/90 text-slate-900">
                      <Icon size={34} />
                    </div>
                    <div>
                      <p className="font-display text-3xl font-black text-white drop-shadow">{item.label}</p>
                      <p className="mt-2 max-w-xs rounded-2xl bg-white/92 px-4 py-2 text-sm font-black leading-5 text-slate-800">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <SectionHeading kicker="Testimonials" title="What People Say" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[1.75rem] border border-[#FFD93D]/70 bg-white p-6 sticker-shadow">
                <div className="mb-5 flex gap-1 text-[#FFD93D]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="leading-8 text-slate-700">"{testimonial.quote}"</p>
                <p className="mt-5 font-display text-xl font-black text-[#F72525]">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="invite" className="bg-white section-pad">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#FFF7E6] px-4 py-2 text-sm font-black text-[#F72525] sticker-shadow">
              Invite Us
            </p>
            <h2 className="font-display text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Invite Uncle Sunday to Your Church, School or Community
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Planning a children's camp, church event, school program, family day, or creative gospel show? Let's
              create a joyful and meaningful experience together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F72525] px-6 py-4 font-black text-white">
                <Send size={20} />
                Send Invitation Request
              </a>
              <a href={whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4ADE80] px-6 py-4 font-black text-slate-950">
                <Phone size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] border border-[#F72525]/25 bg-[#FFF7E6] p-5 sticker-shadow sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {formFields.map((field) => (
                <label key={field} className="grid gap-2 text-sm font-black text-slate-700">
                  {field}
                  <input
                    className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold outline-none transition focus:border-[#38BDF8] focus:ring-4 focus:ring-sky-200"
                    placeholder={field}
                  />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-black text-slate-700 sm:col-span-2">
                Message
                <textarea
                  className="min-h-32 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold outline-none transition focus:border-[#38BDF8] focus:ring-4 focus:ring-sky-200"
                  placeholder="Tell us about your event"
                />
              </label>
            </div>
            {/* Connect this form to an API route or server action when backend submission is ready. */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4ADE80] px-6 py-4 font-black text-slate-950"
              >
                <Phone size={20} />
                Confirm on WhatsApp
              </a>
              <a
                href="mailto:hello@unclesunday.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-slate-900 ring-2 ring-slate-900"
              >
                <Mail size={20} />
                Email Details
              </a>
            </div>
          </form>
        </div>
      </section>

      <section id="contact" className="bg-[#FFD93D] section-pad">
        <div className="section-shell">
          <div className="grid gap-8 rounded-[2rem] bg-white p-7 sticker-shadow lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-[#FFF7E6] px-4 py-2 text-sm font-black text-[#F72525]">
                Contact
              </p>
              <h2 className="font-display text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Let's Make Every Day a Happy Sunday
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Reach out for invitations, partnerships, children's ministry programs, training, and international
                collaboration.
              </p>
            </div>
            <div className="grid content-center gap-4">
              <a className="flex items-center gap-3 rounded-2xl bg-[#FFF7E6] p-4 font-black text-slate-800" href="mailto:hello@unclesunday.com">
                <Mail className="text-[#F72525]" />
                hello@unclesunday.com
              </a>
              <a className="flex items-center gap-3 rounded-2xl bg-[#FFF7E6] p-4 font-black text-slate-800" href={whatsappUrl}>
                <Phone className="text-[#4ADE80]" />
                +60 11-1058 9679
              </a>
              <a className="flex items-center gap-3 rounded-2xl bg-[#FFF7E6] p-4 font-black text-slate-800" href="https://www.facebook.com/unclesunday" target="_blank" rel="noreferrer">
                <ExternalLink className="text-[#9B5DE5]" />
                facebook.com/unclesunday
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-[#FFF7E6] p-4 font-black text-slate-800">
                <MapPin className="text-[#38BDF8]" />
                Based in Tawau, available for local and international invitations
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-white">
        <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <LogoMark inverted />
          <p className="text-sm font-bold text-white/70">© 2026 Uncle Sunday. Making Everyday A Happy Sunday.</p>
        </div>
      </footer>
    </main>
  );
}
