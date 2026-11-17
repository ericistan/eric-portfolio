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
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";
import raincityBoxingHeroImage from "../../assets/case-study_raincity-boxing-hero.webp";

const header = {
  heading: "Raincity Boxing",
  description:
    "A website for a Richmond, BC boxing gym and wellness studio. It has clear pricing, member testimonials, and a short path to booking a free trial.",
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
    src: raincityBoxingHeroImage,
    alt: "Raincity Boxing website hero",
  },
};

const resultsItems = [
  {
    icon: <Ticket className="size-6" />,
    title: "Free Trial Sign-Up",
    description:
      "A path from first visit to a booked trial class, integrated with Zenplanner.",
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
      "Eight-plus membership tiers with cancellation, freeze, and penalty terms stated upfront.",
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
      "Member testimonials with photos and a direct link to Google reviews.",
  },
  {
    icon: <MapPin className="size-6" />,
    title: "Practical Info at a Glance",
    description:
      "Hours, address, and social links are easy to find before visitors walk in.",
  },
];

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          Raincity Boxing & Fitness needed a website that gets a curious
          visitor to a booked trial without a phone call in between. I
          designed and built it solo.
        </p>
        <h3>About Raincity Boxing</h3>
        <p>
          Raincity Boxing & Fitness is a boxing gym and wellness studio in
          Richmond, BC. It offers boxing training, open gym access, massage
          therapy, and physiotherapy under one roof, for members of every
          experience level. The site covers the following.
        </p>
        <ul>
          <li>
            <strong>Program Pages.</strong> General boxing, youth & teens,
            private training, and the competitive Fighter's Club each have
            their own page.
          </li>
          <li>
            <strong>Transparent Pricing.</strong> Eight-plus membership
            tiers with cancellation and freeze terms stated upfront.
          </li>
          <li>
            <strong>Integrated Booking.</strong> Free trial sign-up via
            Zenplanner, wellness appointments via Jane App.
          </li>
          <li>
            <strong>Social Proof.</strong> Member testimonials and a direct
            link to Google reviews.
          </li>
        </ul>
        <h3>Problem</h3>
        <p>
          Local gym sites often hide pricing, leave cancellation terms
          unclear, and send booking through a phone call. Raincity needed a
          site that answers those questions upfront. A curious visitor can
          book a free trial without speaking to the front desk first.
        </p>
      </>
    ),
  },
  {
    id: "design",
    label: "Design",
    content: (
      <p>
        The brand uses the line "evolve through the power of movement", dark
        tones with energetic accent colours, and action photography of real
        training sessions. The look aims to be aspirational. The same visual
        system has to hold two promises. It has to be serious enough for
        competitive Fighter's Club boxers. It also has to suit a first-time
        visitor bringing their teenager to a beginner class.
      </p>
    ),
  },
  {
    id: "build",
    label: "Build",
    content: (
      <>
        <p>
          I structured the site around who's visiting. A first-time visitor,
          a competitive boxer, and an existing member booking a massage each
          need a different fast path, so each gets their own.
        </p>
        <h3>Key Decisions</h3>
        <ul>
          <li>
            <strong>Intent-based structure.</strong> Program pages are
            split by audience: general, youth & teens, Fighter's Club, and
            private training. Each page speaks to one group.
          </li>
          <li>
            <strong>Two booking systems, one flow.</strong>{" "}
            Zenplanner handles gym trials and classes. Jane App handles
            wellness appointments. Each one appears on the page where it's
            relevant.
          </li>
          <li>
            <strong>Pricing stated upfront.</strong> Membership tiers,
            cancellation notice, and freeze policy are all on the page.
            Visitors shouldn't have to ask for rates.
          </li>
        </ul>

        <h3>What I'd Do Differently</h3>
        <p>A few things I'd still change.</p>
        <ul>
          <li>
            <strong>Booking still spans two separate tools.</strong>{" "}
            Zenplanner and Jane App aren't unified. A member has to know
            which system to use for which kind of appointment.
          </li>
          <li>
            <strong>No combined schedule view.</strong> Browsing class
            times means leaving the pricing and signup flow.
          </li>
          <li>
            <strong>Testimonials are maintained by hand.</strong> A live
            feed of Google reviews would keep the page current.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "Outcomes",
    label: "What I Built",
    content: (
      <div className="flex justify-center">
        <BentoHighlights items={resultsItems} />
      </div>
    ),
  },
];

const RaincityBoxing = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <CaseStudyLayout
        header={header}
        sections={sections}
        liveUrl="https://www.raincityboxing.com/"
      />
      <Footer />
    </div>
  );
};

export default RaincityBoxing;
