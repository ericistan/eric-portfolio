import React from "react";
import {
  Ticket,
  Heartbeat,
  Tag,
  Trophy,
  Star,
  MapPin,
  Buildings,
  CalendarBlank,
  IdentificationBadge,
  Globe,
} from "@phosphor-icons/react";
import Navbar from "../../components/Navbar.jsx";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";

const header = {
  heading: "Raincity Boxing",
  description:
    "A website for a Richmond, BC boxing gym and wellness studio, built to turn curious visitors into trial sign-ups with clear pricing, real member stories, and a fast path to booking.",
  tags: [
    { label: "Web Design" },
    { label: "Branding" },
    { label: "UI/UX" },
    { label: "Local Business" },
    { label: "Solo Project" },
  ],
  details: [
    {
      label: "Client",
      description: "Raincity Boxing & Fitness",
      icon: <Buildings className="size-5" />,
    },
    {
      label: "Date",
      description: "2026",
      icon: <CalendarBlank className="size-5" />,
    },
    {
      label: "Role",
      description: "Solo Designer & Developer",
      icon: <IdentificationBadge className="size-5" />,
    },
    {
      label: "Website",
      description: "raincityboxing.com",
      icon: <Globe className="size-5" />,
      url: "https://www.raincityboxing.com/",
    },
  ],
  image: {
    src: "https://placehold.co/1600x900?text=Raincity+Boxing",
    alt: "Raincity Boxing hero placeholder image",
  },
};

const resultsItems = [
  {
    icon: <Ticket className="size-6" />,
    title: "Free Trial Sign-Up",
    description:
      "A direct path from curious visitor to booked trial class, integrated with Zenplanner instead of ending in a phone call.",
  },
  {
    icon: <Heartbeat className="size-6" />,
    title: "Wellness Booking",
    description:
      "Massage therapy and physiotherapy appointments booked through Jane App, alongside the gym's own class booking.",
  },
  {
    icon: <Tag className="size-6" />,
    title: "Transparent Pricing",
    description:
      "Eight-plus membership tiers with cancellation, freeze, and penalty terms stated upfront, not hidden behind a contact form.",
  },
  {
    icon: <Trophy className="size-6" />,
    title: "Program Pages for Every Audience",
    description:
      "Separate pages for general boxing, youth & teens, private training, and the competitive Fighter's Club program.",
  },
  {
    icon: <Star className="size-6" />,
    title: "Social Proof",
    description:
      "Member testimonials with photos and a direct link out to Google reviews, built to reduce hesitation before signing up.",
  },
  {
    icon: <MapPin className="size-6" />,
    title: "Practical Info at a Glance",
    description:
      "Hours, address, and social links surfaced clearly, so visitors aren't hunting for basics before they walk in.",
  },
];

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          Raincity Boxing & Fitness needed a website that could do more than
          list services, it needed to turn a curious visitor into a booked
          trial, without a phone call in between.
        </p>
        <h3>About Raincity Boxing</h3>
        <p>
          Raincity Boxing & Fitness is a boxing gym and wellness studio in
          Richmond, BC, combining boxing training, open gym access, massage
          therapy, and physiotherapy under one roof for members of every
          experience level. The site covers:
        </p>
        <ul>
          <li>
            <strong>Program Pages</strong>: general boxing, youth & teens,
            private training, and the competitive Fighter's Club, each with
            its own page.
          </li>
          <li>
            <strong>Transparent Pricing</strong>: eight-plus membership
            tiers with cancellation and freeze terms stated upfront.
          </li>
          <li>
            <strong>Integrated Booking</strong>: free trial sign-up via
            Zenplanner, wellness appointments via Jane App.
          </li>
          <li>
            <strong>Social Proof</strong>: member testimonials and a direct
            link to Google reviews.
          </li>
        </ul>
        <img
          src="https://placehold.co/800x500?text=Raincity+Boxing"
          alt="Raincity Boxing placeholder image"
        />
        <p className="text-sm italic">
          * Placeholder caption: swap in a real site screenshot here.
        </p>
        <h3>Problem</h3>
        <p>
          Local gyms often lose potential members to friction: hidden
          pricing, unclear cancellation terms, and booking flows that
          dead-end in a phone call instead of a signup. Raincity needed a
          site that answered those questions upfront and got a curious
          visitor into a free trial without needing to speak to the front
          desk first.
        </p>
      </>
    ),
  },
  {
    id: "design",
    label: "Design",
    content: (
      <p>
        The brand leans into "evolve through the power of movement", dark
        tones with energetic accent colours, and action photography of real
        training sessions, aiming for aspirational rather than
        intimidating. The same visual system has to hold two different
        promises at once: serious enough for competitive Fighter's Club
        boxers, approachable enough for a first-time visitor bringing their
        teenager to a beginner class.
      </p>
    ),
  },
  {
    id: "build",
    label: "Build",
    content: (
      <>
        <p>
          The site is structured around who's visiting, not a generic
          About/Services/Contact template. A first-time visitor, a
          competitive boxer, and an existing member booking a massage all
          need a different fast path, so each gets its own.
        </p>
        <h3>Key Decisions</h3>
        <ul>
          <li>
            <strong>Intent-based structure.</strong> Program pages are
            split by audience (general, youth & teens, Fighter's Club,
            private training) instead of one page trying to serve everyone
            at once.
          </li>
          <li>
            <strong>Two booking systems, one coherent flow.</strong>{" "}
            Zenplanner handles gym trials and classes, Jane App handles
            wellness appointments, both surfaced directly where they're
            relevant instead of dumping every visitor onto the same
            generic "book now" link.
          </li>
          <li>
            <strong>Pricing stated upfront.</strong> Membership tiers,
            cancellation notice, and freeze policy are all on the page,
            not behind a "contact us for rates" wall, since hidden pricing
            is one of the biggest reasons people bounce before signing up.
          </li>
        </ul>

        <h3>What I'd Do Differently</h3>
        <p>A few things worth naming honestly:</p>
        <ul>
          <li>
            <strong>Booking still spans two separate tools.</strong>{" "}
            Zenplanner and Jane App aren't unified, a member has to know
            which system to use for which kind of appointment.
          </li>
          <li>
            <strong>No combined schedule view.</strong> Browsing class
            times still means leaving the pricing/signup flow rather than
            seeing both in one place.
          </li>
          <li>
            <strong>Testimonials are maintained by hand.</strong> A live
            feed pulling in fresh Google reviews automatically would keep
            the page current without manual updates.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "Outcomes",
    label: "Outcomes",
    content: (
      <div className="flex justify-center">
        <BentoHighlights items={resultsItems} />
      </div>
    ),
  },
];

const relatedProjects = {
  tagline: "Portfolio",
  heading: "More case studies",
  description: "Take a look at some of my other work.",
  projects: [
    {
      title: "Formjo",
      description:
        "A platform for coaches to assign structured training, review athlete video submissions, and deliver personalised feedback.",
      image: {
        src: "https://placehold.co/800x500?text=Formjo",
        alt: "Formjo placeholder image",
      },
      url: "/case-study/formjo",
      tags: ["React", "Flask", "PostgreSQL"],
    },
  ],
  button: {
    title: "View all",
    url: "/",
  },
};

const RaincityBoxing = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CaseStudyLayout header={header} sections={sections} relatedProjects={relatedProjects} />
      <Footer />
    </div>
  );
};

export default RaincityBoxing;
