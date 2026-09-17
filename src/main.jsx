import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Code2,
  Megaphone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import "./index.css";

const green = "#45e0a0";

function SEO({ title, description, canonical, schema }) {
  useEffect(() => {
    document.title = title;
    const set = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    set("description", description);
    set("robots", "index,follow,max-image-preview:large");
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
    let ld = document.getElementById("page-schema");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "page-schema";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(schema);
  }, [title, description, canonical, schema]);
  return null;
}

function Nav() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07131f]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/teen"
          className="flex items-center gap-2 font-black tracking-tight text-xl"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#45e0a0] text-[#07131f]">
            F
          </span>
          funngro<span className="text-[#45e0a0]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
          <Link
            className={
              location.pathname === "/teen" ? "text-white" : "hover:text-white"
            }
            to="/teen"
          >
            For Teens
          </Link>
          <Link
            className={
              location.pathname === "/brands"
                ? "text-white"
                : "hover:text-white"
            }
            to="/brands"
          >
            For Brands
          </Link>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
        </nav>
        <Link
          to={
            location.pathname === "/brands" ? "/brands#contact" : "/teen#start"
          }
          className="rounded-full bg-[#45e0a0] px-4 py-2.5 text-sm font-extrabold text-[#07131f] transition hover:scale-[1.02]"
        >
          {location.pathname === "/brands"
            ? "Start a campaign"
            : "Start earning"}{" "}
          <ArrowRight className="ml-1 inline h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs font-medium text-slate-400">{label}</div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-[#45e0a0]/20 bg-[#45e0a0]/8 px-3 py-1 text-xs font-bold text-[#8df0c2]">
      {children}
    </span>
  );
}

function WorkCard({ icon: Icon, title, text, tag }) {
  return (
    <div className="glass rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#45e0a0]/25">
      <div className="mb-5 flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5">
          <Icon className="h-5 w-5 text-[#45e0a0]" />
        </div>
        <Pill>{tag}</Pill>
      </div>
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <details className="group border-b border-white/8 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-100">
        <span>{q}</span>
        <ChevronDown className="h-5 w-5 text-slate-500 transition group-open:rotate-180" />
      </summary>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{a}</p>
    </details>
  );
}

function Teen() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Funngro for Teens",
    description:
      "Flexible online earning opportunities for young Indians through brand campaigns, content, referrals, surveys and sampling.",
    url: "http://localhost:5173/teen",
  };
  return (
    <div>
      <SEO
        title="Online Jobs for Students in India | Funngro"
        description="Discover flexible online jobs for students and young Indians. Find brand campaigns, content, referrals, surveys and other paid opportunities on Funngro."
        canonical="http://localhost:5173/teen"
        schema={schema}
      />
      <section className="grid-bg relative overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#45e0a0]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pt-28">
          <div className="relative">
            <div className="mb-6 flex flex-wrap gap-2">
              <Pill>FREE TO JOIN</Pill>
              <Pill>UPI PAYOUTS</Pill>
              <Pill>REAL BRANDS</Pill>
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.04em] md:text-7xl">
              Your time can become your{" "}
              <span className="text-[#45e0a0]">first income.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Discover flexible online work, complete real brand tasks, build
              useful skills and get paid for work you actually finish.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                id="start"
                href="https://www.funngro.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#45e0a0] px-6 py-4 text-center font-black text-[#07131f]"
              >
                Start earning <ArrowRight className="ml-1 inline h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center font-black"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-9">
              <Stat value="70L+" label="young Indians" />
              <Stat value="5,000+" label="brand partners" />
              <Stat value="1,000+" label="live projects" />
            </div>
          </div>
          <div className="glow relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/10 bg-[#0d1c2a] p-4 shadow-2xl">
              <div className="rounded-[1.5rem] bg-[#132536] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">YOUR TASKS</p>
                    <p className="mt-1 text-xl font-black">
                      Today's brand drops
                    </p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#45e0a0]/10">
                    <Zap className="h-5 w-5 text-[#45e0a0]" />
                  </div>
                </div>
                {[
                  "Complete a survey",
                  "Create a short reel",
                  "Share a referral",
                ].map((x, i) => (
                  <div
                    key={x}
                    className="mt-4 flex items-center justify-between rounded-2xl border border-white/5 bg-[#0c1a27] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-xs font-black">
                        0{i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{x}</p>
                        <p className="text-xs text-slate-500">
                          Real brand campaign
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[#45e0a0]">
                      ₹{[250, 900, 500][i]}
                    </span>
                  </div>
                ))}
                <div className="mt-4 rounded-2xl bg-[#45e0a0] p-4 text-[#07131f]">
                  <div className="flex justify-between text-sm font-bold">
                    <span>Wallet</span>
                    <span>UPI ready</span>
                  </div>
                  <div className="mt-2 text-3xl font-black">₹2,140</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >
        <div className="max-w-2xl">
          <Pill>HOW IT WORKS</Pill>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            From first task to bigger opportunities.
          </h2>
          <p className="mt-4 text-slate-400">
            A simple flow designed for students and young people who want
            flexible online work.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            [
              "01",
              "Sign up",
              "Create your profile with OTP verification and get ready to explore projects.",
            ],
            [
              "02",
              "Pick a project",
              "Choose brand promotion, content, referrals, surveys, sampling or app-testing work.",
            ],
            [
              "03",
              "Complete & get paid",
              "Submit quality work, pass verification and receive your payout through supported payment methods.",
            ],
          ].map(([n, t, d]) => (
            <div key={n} className="glass rounded-3xl p-7">
              <span className="text-sm font-black text-[#45e0a0]">{n}</span>
              <h3 className="mt-5 text-xl font-black">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a1926] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Pill>WORK TYPES</Pill>
              <h2 className="mt-4 text-4xl font-black">
                Pick work that fits you.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              The current Funngro platform highlights brand promotion, content,
              referrals, sampling, surveys and app testing.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <WorkCard
              icon={Megaphone}
              title="Brand promotion"
              text="Share brands through social posts and authentic recommendations."
              tag="SOCIAL"
            />
            <WorkCard
              icon={Sparkles}
              title="Content creation"
              text="Create reels, photos, posts or other content from campaign briefs."
              tag="CREATE"
            />
            <WorkCard
              icon={Users}
              title="Referrals"
              text="Invite people to relevant products and services through referral campaigns."
              tag="GROW"
            />
            <WorkCard
              icon={Search}
              title="Surveys & micro tasks"
              text="Give feedback, sample products, test apps and complete short tasks."
              tag="FLEXIBLE"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Pill>WHY FUNNGRO</Pill>
            <h2 className="mt-4 text-4xl font-black">
              Build skills while you earn.
            </h2>
            <div className="mt-7 space-y-4">
              {[
                "Real-world brand experience",
                "Flexible work around your schedule",
                "A portfolio of completed projects",
                "Progress toward higher-value opportunities",
              ].map((x) => (
                <div key={x} className="flex gap-3">
                  <div className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#45e0a0]/15">
                    <Check className="h-4 w-4 text-[#45e0a0]" />
                  </div>
                  <p className="text-slate-300">{x}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-8">
            <CircleDollarSign className="h-8 w-8 text-[#45e0a0]" />
            <h3 className="mt-6 text-2xl font-black">
              Start small. Grow with your skills.
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              Use projects to practise communication, creativity, research and
              leadership while building experience with real brands.
            </p>
            <a
              href="https://www.funngro.com/teen"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center font-bold text-[#45e0a0]"
            >
              Explore the current flow <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1926] py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Pill>FAQ</Pill>
          <h2 className="mt-4 text-4xl font-black">Questions, answered.</h2>
          <div className="mt-8">
            <FAQ
              q="Do I have to pay to join?"
              a="Funngro's current teen page describes sign-up as free and says there is no joining or registration fee."
            />
            <FAQ
              q="What kind of work is available?"
              a="The current site lists brand promotion, content, referrals, surveys, sampling, app testing and other micro tasks."
            />
            <FAQ
              q="How are payouts handled?"
              a="Funngro currently describes UPI and bank-transfer payouts, subject to its verification process."
            />
            <FAQ
              q="Can students work flexibly?"
              a="The platform is positioned around flexible online opportunities that can be completed around a young person's schedule."
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row lg:px-8">
          <span>© 2026 Funngro concept redesign · Assignment demo</span>
          <Link className="text-[#45e0a0]" to="/brands">
            For brands →
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Brands() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Funngro for Brands",
    description:
      "Youth marketing and campaign execution through a verified pool of young Indians.",
    url: "http://localhost:5173/brands",
  };
  return (
    <div>
      <SEO
        title="Youth Marketing Platform India | Funngro for Brands"
        description="Reach young Indians through brand promotion, sampling, content, surveys, referrals, app testing and campaign execution with Funngro."
        canonical="http://localhost:5173/brands"
        schema={schema}
      />
      <section className="grid-bg relative overflow-hidden">
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-[#45e0a0]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-2">
              <Pill>FOR MARKETING TEAMS</Pill>
              <Pill>YOUTH 14–25</Pill>
              <Pill>CAMPAIGN EXECUTION</Pill>
            </div>
            <h1 className="text-5xl font-black leading-[1.03] tracking-[-.04em] md:text-7xl">
              Turn youth <span className="text-[#45e0a0]">attention</span> into
              action.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Launch measurable campaigns with a verified pool of young Indians
              for promotion, sampling, content, surveys, referrals, app testing
              and ideation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                id="contact"
                href="https://www.funngro.com/for-brands"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#45e0a0] px-6 py-4 text-center font-black text-[#07131f]"
              >
                Start a campaign <ArrowRight className="ml-1 inline h-5 w-5" />
              </a>
              <a
                href="#campaigns"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center font-black"
              >
                Explore campaign types
              </a>
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            <div className="glass rounded-3xl p-6">
              <Users className="h-6 w-6 text-[#45e0a0]" />
              <div className="mt-6 text-3xl font-black">70L+</div>
              <p className="mt-1 text-sm text-slate-400">young Indians</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <BriefcaseBusiness className="h-6 w-6 text-[#45e0a0]" />
              <div className="mt-6 text-3xl font-black">5,000+</div>
              <p className="mt-1 text-sm text-slate-400">brand partners</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <Zap className="h-6 w-6 text-[#45e0a0]" />
              <div className="mt-6 text-3xl font-black">1,000+</div>
              <p className="mt-1 text-sm text-slate-400">live projects</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <ShieldCheck className="h-6 w-6 text-[#45e0a0]" />
              <div className="mt-6 text-3xl font-black">Verified</div>
              <p className="mt-1 text-sm text-slate-400">campaign ecosystem</p>
            </div>
          </div>
        </div>
      </section>
      <section id="campaigns" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <Pill>CAMPAIGN TYPES</Pill>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            One youth audience. Many ways to activate it.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <WorkCard
            icon={Megaphone}
            title="Promotion"
            text="Distribute a campaign through young people's social channels and communities."
            tag="AWARENESS"
          />
          <WorkCard
            icon={Smartphone}
            title="App testing"
            text="Get practical feedback from young users before or after a product launch."
            tag="PRODUCT"
          />
          <WorkCard
            icon={Sparkles}
            title="Content & creator briefs"
            text="Turn a clear brief into short-form content made for youth audiences."
            tag="CONTENT"
          />
          <WorkCard
            icon={Search}
            title="Surveys & research"
            text="Collect opinions, product feedback and audience insights at scale."
            tag="INSIGHTS"
          />
          <WorkCard
            icon={CircleDollarSign}
            title="Sampling"
            text="Put products into the hands of relevant young consumers and capture feedback."
            tag="TRIAL"
          />
          <WorkCard
            icon={Users}
            title="Referrals & sales support"
            text="Use network effects and tracked actions to drive sign-ups or conversions."
            tag="ACTION"
          />
        </div>
      </section>
      <section className="bg-[#0a1926] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Pill>THE WORKFLOW</Pill>
            <h2 className="mt-4 text-4xl font-black">
              Brief → activate → measure.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              A clear campaign flow makes the assignment easy to understand and
              gives marketing teams a repeatable process.
            </p>
          </div>
          <div className="space-y-3">
            {[
              [
                "01",
                "Share the objective",
                "Tell us the audience, action and campaign requirements.",
              ],
              [
                "02",
                "Launch the brief",
                "The campaign is packaged into clear tasks for the right participants.",
              ],
              [
                "03",
                "Review submissions",
                "Track responses, content and completed actions against the brief.",
              ],
              [
                "04",
                "Learn & scale",
                "Use campaign data and audience feedback to improve the next activation.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="glass rounded-3xl p-6">
                <div className="flex gap-5">
                  <span className="text-sm font-black text-[#45e0a0]">{n}</span>
                  <div>
                    <h3 className="font-black">{t}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Pill>READY TO TEST A CAMPAIGN?</Pill>
              <h2 className="mt-4 text-4xl font-black">
                Give your next youth campaign a clear action.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Use this concept page to demonstrate campaign architecture, UX,
                content hierarchy and SEO thinking.
              </p>
            </div>
            <a
              href="https://www.funngro.com/for-brands"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[#45e0a0] px-6 py-4 text-center font-black text-[#07131f]"
            >
              Talk to Funngro <ArrowRight className="ml-1 inline h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row lg:px-8">
          <span>© 2026 Funngro concept redesign · Assignment demo</span>
          <Link className="text-[#45e0a0]" to="/teen">
            For teens →
          </Link>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const path = window.location.pathname;
  return (
    <>
      <Nav />
      {path === "/brands" ? <Brands /> : <Teen />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
