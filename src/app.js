const { useEffect, useMemo, useRef, useState } = React;
const h = React.createElement;

function Img(props) {
  return h("img", { loading: "lazy", decoding: "async", ...props });
}

const PRACTICE_BETTER_BOOKING_URL =
  "https://my.practicebetter.io/#/69f61f1b777ef99922b864f1/bookings";
const FORM_ENDPOINT = "https://formspree.io/f/xojrjjoz";

const doctorImage =
  "https://res.cloudinary.com/dx5pjuaqf/image/upload/q_auto/f_auto/v1775071330/WhatsApp_Image_2026-03-30_at_7.51.32_PM_n4buk1.jpg";

const images = {
  hero:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1400&q=80",
  consult:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  weight:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  womens:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  mental:
    "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&q=80",
  preventive:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  skin:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80",
  clinic:
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  journal:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  patient1:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
  patient2:
    "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=500&q=80",
  patient3:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80",
  patient4:
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80",
  support:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  tailored:
    "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=900&q=80",
};

const navItems = [
  ["Home", "#/"],
  ["About", "#/about"],
  ["Weight Loss", "#/weight-loss"],
  ["Women’s Health", "#/womens-health"],
  ["More Services", "#/services"],
  ["Blog", "#/blog"],
  ["Book Consultation", "#/book"],
];

const serviceGroups = [
  {
    title: "Weight Loss",
    image: images.weight,
    intro:
      "Private, medically guided care designed around your body, routine, and long-term wellbeing.",
    subs: ["Injectables", "Oral Tablets", "Lifestyle", "Maintenance Therapy"],
  },
  {
    title: "Women’s Health",
    image: images.womens,
    intro:
      "Sensitive support for hormonal changes, menopause, pelvic health, and bone health.",
    subs: ["Menopause (HRT)", "Bone Health", "Pelvic Health"],
  },
  {
    title: "Mental Health",
    image: images.mental,
    intro:
      "A calm, private approach to medication, counseling, and wellbeing support.",
    subs: ["Medication", "Counseling", "Wellbeing Sessions"],
  },
  {
    title: "Preventive Medicine",
    image: images.preventive,
    intro:
      "Forward-looking care that helps you understand risks and protect future health.",
    subs: [
      "Checkups",
      "Medicine Review",
      "Cardiovascular Risk",
      "Vaccines",
      "Cancer Screening",
      "Holistic Treatment",
    ],
  },
  {
    title: "Dermatology & Skin Care",
    image: images.skin,
    intro:
      "Doctor-led plans for skin concerns, aesthetic guidance, and treatment clarity.",
    subs: ["Skincare Plans", "Aesthetic Guidance", "Medications"],
  },
];

const moreServiceGroups = [
  {
    title: "Mental Health",
    image: images.mental,
    intro:
      "Private support for emotional wellbeing, treatment clarity, and ongoing mental health care.",
    subs: ["Medication", "Counseling", "Wellbeing Sessions"],
  },
  {
    title: "Preventive Medicine",
    image: images.preventive,
    intro:
      "Proactive care that helps you understand risks early and make informed health decisions.",
    subs: [
      "Annual Checkups",
      "Medicine Review",
      "Cardiovascular Risk Assessment",
      "Recommended Vaccines",
      "Cancer Screening",
      "Holistic Treatment",
    ],
  },
  {
    title: "Dermatology & Skin Care",
    image: images.skin,
    intro:
      "Doctor-led support for skin health, aesthetic confidence, and safe treatment planning.",
    subs: ["Personalized Skincare Plans", "Aesthetic Treatment Guidance", "Medications"],
  },
];

const detailCopy = {
  Injectables:
    "Doctor-led assessment for injectable treatment suitability, safe use, side effects, and progress monitoring.",
  "Oral Tablets":
    "A clear discussion of oral medication options, suitability, expectations, and follow-up support.",
  Lifestyle:
    "Practical lifestyle guidance shaped around appetite, routine, sleep, movement, and long-term consistency.",
  "Maintenance Therapy":
    "Support for keeping progress stable with a realistic plan after active weight loss.",
  "Menopause (including HRT)":
    "Private support for menopause symptoms, HRT suitability, benefits, risks, and ongoing review.",
  "Bone Health":
    "Guidance around bone strength, risk factors, screening conversations, and prevention-focused care.",
  "Pelvic Health":
    "Sensitive discussion of pelvic symptoms, intimate health, and next steps in a private setting.",
  Medication:
    "Thoughtful review of symptoms, current treatment, and medication options where clinically appropriate.",
  Counseling:
    "Supportive guidance for emotional concerns, stress patterns, and next steps for structured care.",
  "Wellbeing Sessions":
    "Focused sessions to support balance, resilience, and practical mental wellbeing strategies.",
  "Annual Checkups":
    "A structured review of your general health, risks, lifestyle, and preventive care priorities.",
  "Medicine Review":
    "A careful review of current medications to improve clarity, safety, and treatment confidence.",
  "Cardiovascular Risk Assessment":
    "Assessment of heart health risk factors with guidance tailored to your history and lifestyle.",
  "Recommended Vaccines":
    "Personalized vaccine guidance based on age, health history, travel, and risk profile.",
  "Cancer Screening":
    "Early detection through appropriate screening methods tailored to individual risk factors, helping identify potential issues before they become serious.",
  "Holistic Treatment":
    "Whole-person support that connects symptoms, lifestyle, prevention, and long-term wellbeing.",
  "Personalized Skincare Plans":
    "A doctor-led skin plan shaped around your skin type, concerns, treatment history, and goals.",
  "Aesthetic Treatment Guidance":
    "Clear guidance on aesthetic options, suitability, safety, and natural-looking treatment planning.",
  Medications:
    "Medical guidance on skin-related medications where appropriate, including safe use and follow-up.",
};

const blogPosts = [
  {
    title: "Why Weight Loss Feels Harder Than It Should",
    image: images.weight,
    excerpt:
      "A detailed guide to the biology, hormones, appetite signals, medication options, habits, sleep, and emotional patterns that can affect progress.",
    body: [
      "Many women arrive at a consultation after years of effort, discipline, and disappointment. They are not lacking willpower. Their bodies may be responding to stress, insulin resistance, hormonal change, medication side effects, sleep disruption, or appetite regulation that has shifted over time.",
      "A medical weight loss consultation looks beyond simple calorie advice. It considers your health history, current medicines, lifestyle, appetite patterns, emotional relationship with food, and any symptoms that may suggest hormonal or metabolic barriers.",
      "Treatment may include injectables, oral tablets, lifestyle structure, and maintenance therapy. The best plan is not the most aggressive one. It is the one you can live with, understand, and sustain safely.",
    ],
  },
  {
    title: "Menopause, Mood, Sleep, and the Body You No Longer Recognize",
    image: images.womens,
    excerpt:
      "A long-form look at menopause symptoms, HRT conversations, bone health, pelvic health, and the importance of being properly heard.",
    body: [
      "Menopause can affect sleep, mood, weight, energy, skin, joints, intimate health, and confidence. Many symptoms are dismissed as normal life stress, yet the right medical conversation can change the direction of care.",
      "HRT may be suitable for some women, while others need a different approach because of their history, risk profile, or personal preference. A thoughtful consultation gives space to discuss benefits, cautions, monitoring, and alternatives.",
      "Bone health and pelvic health are also central. The goal is not only symptom relief, but a long-term strategy that protects strength, independence, intimacy, and quality of life.",
    ],
  },
  {
    title: "Preventive Medicine: The Quiet Luxury of Knowing Early",
    image: images.preventive,
    excerpt:
      "An in-depth article on checkups, medicine reviews, cardiovascular risk, vaccines, cancer screening, and holistic treatment planning.",
    body: [
      "Preventive medicine is not about fear. It is about clarity. When you understand your risk factors early, you gain time, choices, and control over the next stage of health.",
      "A preventive consultation may include checkups, medicine review, cardiovascular risk assessment, vaccine planning, cancer screening discussions, and practical lifestyle decisions that match real life.",
      "The most valuable care often happens before a crisis. It is measured, calm, and personal, with enough time to connect the dots between symptoms, family history, tests, and future goals.",
    ],
  },
];

const weightLossFormConfig = {
  route: "/book-weight-loss",
  title: "Book Weight Loss",
  eyebrow: "Weight Loss Consultation",
  endpoint: FORM_ENDPOINT,
  service: "Weight Loss",
  intro: "This helps us personalize your consultation",
  steps: [
    {
      title: "Your goals",
      fields: ["mainGoal", "targetRange"],
    },
    {
      title: "Your history",
      fields: ["duration", "previousAttempts"],
    },
    {
      title: "Your routine",
      fields: ["lifestyleDescription", "mainChallenge"],
    },
    {
      title: "Your contact details",
      fields: ["name", "phone", "email"],
    },
  ],
};

const womensHealthFormConfig = {
  route: "/book-womens-health",
  title: "Book Women’s Health",
  eyebrow: "Women’s Health Consultation",
  endpoint: FORM_ENDPOINT,
  service: "Women’s Health",
  intro: "This helps us personalize your consultation",
  steps: [
    {
      title: "Your concern",
      fields: ["mainConcern", "duration"],
    },
    {
      title: "Your symptoms",
      fields: ["severity", "symptoms"],
    },
    {
      title: "Your treatment history",
      fields: ["previousTreatment", "mainGoal"],
    },
    {
      title: "Your contact details",
      fields: ["name", "phone", "email"],
    },
  ],
};

const aestheticsFormConfig = {
  route: "/book-aesthetics",
  title: "Book Aesthetics & Skin Care",
  eyebrow: "Aesthetics & Skin Care Consultation",
  endpoint: FORM_ENDPOINT,
  service: "Aesthetics & Skin Care",
  intro: "This helps us personalize your consultation",
  steps: [
    {
      title: "Your skin profile",
      fields: ["skinType", "routineLevel"],
    },
    {
      title: "Your focus areas",
      fields: ["skinConcerns", "mainGoal"],
    },
    {
      title: "Your skincare experience",
      fields: ["previousTreatments", "skinDescription"],
    },
    {
      title: "Your contact details",
      fields: ["name", "phone", "email"],
    },
  ],
};

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }),
      { threshold: 0.14 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [route]);

  const page = useMemo(() => {
    if (route === "/about") return h(AboutPage);
    if (route === "/services") return h(ServicesPage);
    if (route === "/weight-loss") return h(WeightLossPage);
    if (route === "/womens-health") return h(WomensHealthPage);
    if (route === "/blog") return h(BlogPage);
    if (route === weightLossFormConfig.route) return h(ServiceFormPage, { config: weightLossFormConfig });
    if (route === womensHealthFormConfig.route) return h(ServiceFormPage, { config: womensHealthFormConfig });
    if (route === aestheticsFormConfig.route) return h(ServiceFormPage, { config: aestheticsFormConfig });
    if (route === "/book") return h(BookPage);
    return h(HomePage);
  }, [route]);

  return h(
    React.Fragment,
    null,
    h(Header, { route }),
    page,
    h(Footer)
  );
}

function getRoute() {
  return (window.location.hash.replace("#", "") || "/").split("?")[0];
}

function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return h(
    "header",
    { className: "site-header" },
    h(
      "a",
      { className: "brand", href: "#/" },
      h("span", { className: "brand-mark" }, "AQ"),
      h("span", null, "Dr. Alia Qaisar")
    ),
    h(
      "button",
      {
        className: `menu-toggle ${menuOpen ? "is-open" : ""}`,
        type: "button",
        onClick: () => setMenuOpen((open) => !open),
        "aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
        "aria-expanded": menuOpen,
      },
      h("span", null),
      h("span", null),
      h("span", null)
    ),
    h(
      "nav",
      { className: `nav-links ${menuOpen ? "is-open" : ""}`, "aria-label": "Primary navigation" },
      navItems.map(([label, href]) =>
        h(
          "a",
          {
            key: label,
            href,
            onClick: () => setMenuOpen(false),
            className: `${route === href.replace("#", "") ? "active" : ""} ${
              label === "Book Consultation" ? "nav-cta" : ""
            }`,
          },
          label
        )
      )
    ),
    h("button", {
      className: `menu-scrim ${menuOpen ? "is-open" : ""}`,
      type: "button",
      onClick: () => setMenuOpen(false),
      "aria-label": "Close navigation menu",
      tabIndex: menuOpen ? 0 : -1,
    })
  );
}

function HomePage() {
  return h(
    "main",
    null,
    h(Hero),
    h(ValueSection),
    h(ProblemSection),
    h(ServiceSlider),
    h(HowItWorks),
    h(FocusSection, {
      label: "Weight Loss",
      title: "Medical weight loss that respects the life you actually live",
      text:
        "A personalized consultation helps uncover the reasons progress has felt difficult, then builds a plan around medication options, appetite patterns, lifestyle, and maintenance.",
      image: images.weight,
      cta: "Explore Weight Loss",
      href: "#/weight-loss",
    }),
    h(HomeDivider),
    h(FocusSection, {
      reverse: true,
      label: "Women’s Health",
      title: "Care for hormonal change, menopause, and feeling like yourself again",
      text:
        "Private, calm conversations around menopause symptoms, HRT, bone health, pelvic health, and long-term wellbeing.",
      image: images.womens,
      cta: "Explore Women’s Health",
      href: "#/womens-health",
    }),
    h(WhyChoose),
    h(Calculator),
    h(Testimonials),
    h(BlogPreview),
    h(FaqSection),
    h(FinalCta)
  );
}

function HomeDivider() {
  return h(
    "div",
    { className: "home-divider section-shell", "aria-hidden": "true" },
    h("span", null)
  );
}

function Hero() {
  return h(
    "section",
    { className: "hero section-shell" },
    h("div", { className: "gradient-drift" }),
    h(
      "div",
      { className: "hero-copy reveal" },
      h("p", { className: "eyebrow" }, "Private medical consultations"),
      h("h1", null, "Finally Fix What’s Been Holding Your Health Back"),
      h(
        "p",
        { className: "hero-sub" },
        "Personalized, private consultations for weight loss, women’s health, and long-term wellbeing — guided by a UK certified and Dubai experienced doctor."
      ),
      h(
        "div",
        { className: "hero-actions" },
        h("a", { className: "button primary", href: "#/book" }, "Book Your Consultation"),
        h(
          "div",
          { className: "cert-strip", "aria-label": "Certifications" },
          h("span", null, "UK Certified"),
          h("span", null, "Dubai Experienced")
        )
      )
    ),
    h(
      "div",
      { className: "hero-image-wrap reveal delay-1" },
      h(Img, { src: images.hero, alt: "Woman in a calm wellness consultation setting", loading: "eager" }),
      h(
        "div",
        { className: "hero-note" },
        h("strong", null, "Doctor-led care"),
        h("span", null, "Discreet, personal, and designed around real life.")
      )
    )
  );
}

function ValueSection() {
  const blocks = [
    {
      title: "Lose up to 22.5% of your body weight",
      text: "A doctor-led plan can help you understand what is realistic, safe, and sustainable for your body.",
      visual: h(
        "div",
        { className: "chart-visual", "aria-hidden": "true" },
        h("span", { style: { height: "38%" } }),
        h("span", { style: { height: "56%" } }),
        h("span", { style: { height: "74%" } }),
        h("span", { style: { height: "92%" } })
      ),
      note: "Individual results may vary",
    },
    {
      title: "Expert care every step of the way",
      text: "Continuous support and guidance help you move from confusion to a clear, medically informed path.",
      visual: h(
        "div",
        { className: "support-visual" },
        h(Img, { src: images.support, alt: "Private consultation and continuous support" })
      ),
    },
    {
      title: "Personalized plans that actually work",
      text: "Your consultation focuses on tailored care, not generic advice, so the plan fits your health and routine.",
      visual: h(
        "div",
        { className: "support-visual" },
        h(Img, { src: images.tailored, alt: "Personalized medical planning" })
      ),
    },
  ];

  return h(
    "section",
    { className: "value-section section-shell reveal" },
    h(
      "div",
      { className: "value-heading" },
      h("p", { className: "eyebrow" }, "Take control"),
      h("h2", null, "Don’t Let Your Health Hold You Back"),
      h(
        "p",
        null,
        "Take control of your weight, hormonal health, and overall wellbeing with private medical guidance designed around you."
      )
    ),
    h(
      "div",
      { className: "value-blocks" },
      blocks.map((block) =>
        h(
          "article",
          { className: "value-block", key: block.title },
          block.visual,
          h("div", null, h("h3", null, block.title), h("p", null, block.text), block.note && h("small", null, block.note))
        )
      )
    )
  );
}

function HowItWorks() {
  const timelineRef = useRef(null);
  const steps = [
    ["Fill a quick 5-minute form", "Tell us about your health, goals, and concerns."],
    ["Choose your plan", "Select the consultation or service that fits your needs."],
    ["Book at your preferred time", "Pick a time that works best for you."],
    ["Start your journey", "Get personalized guidance and begin solving your problem."],
  ];

  useEffect(() => {
    const element = timelineRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("timeline-active");
          observer.unobserve(element);
        }
      },
      { threshold: 0.28, rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return h(
    "section",
    { className: "how-section section-shell reveal", ref: timelineRef },
    h(
      "div",
      { className: "split-heading" },
      h("div", null, h("p", { className: "eyebrow" }, "Simple next steps"), h("h2", null, "How It Works"))
    ),
    h(
      "div",
      { className: "timeline" },
      h("span", { className: "timeline-line", "aria-hidden": "true" }, h("span", null)),
      steps.map(([title, text], index) =>
        h(
          "article",
          { className: "timeline-step", key: title },
          h("span", { className: `step-icon step-icon-${index + 1}`, "aria-hidden": "true" }),
          h("h3", null, title),
          h("p", null, text)
        )
      ),
      h("a", { className: "button primary timeline-cta", href: "#/book" }, "Get Started")
    )
  );
}

function ProblemSection() {
  const items = [
    "Not losing weight despite trying",
    "Hormonal issues or menopause symptoms",
    "Low energy / feeling out of balance",
    "Confusion about treatments",
  ];
  return h(
    "section",
    { className: "problem section-shell reveal" },
    h("div", null, h("p", { className: "eyebrow" }, "Start with clarity"), h("h2", null, "Struggling With Any of These?")),
    h(
      "div",
      { className: "problem-flow" },
      items.map((item, index) =>
        h(
          "div",
          { className: "problem-item", key: item },
          h(
            "span",
            { className: "problem-marker", "aria-hidden": "true" },
            h("span", { className: "problem-icon" }),
            h("span", { className: "soft-index" }, `0${index + 1}`)
          ),
          h("p", null, item)
        )
      )
    )
  );
}

function ServiceSlider() {
  const serviceHref = (title) => {
    if (title === "Weight Loss") return "#/weight-loss";
    if (title === "Women’s Health") return "#/womens-health";
    return "#/services";
  };

  return h(
    "section",
    { className: "service-preview reveal" },
    h(
      "div",
      { className: "section-shell split-heading" },
      h("div", null, h("p", { className: "eyebrow" }, "Consultation areas"), h("h2", null, "Personal care, beautifully structured")),
      h("p", null, "Swipe or scroll sideways to explore the areas of care available with Dr. Alia.")
    ),
    h(
      "div",
      { className: "service-rail", tabIndex: 0 },
      serviceGroups.map((service) =>
        h(
          "a",
          { className: "service-slide", href: serviceHref(service.title), key: service.title },
          h(Img, { src: service.image, alt: service.title }),
          h("span", null, service.title)
        )
      )
    )
  );
}

function FocusSection({ reverse, label, title, text, image, cta, href, subServices = [], extraContent = [], bookingHref = "" }) {
  const [modal, setModal] = useState(null);

  return h(
    "section",
    { className: `focus section-shell reveal ${reverse ? "reverse" : ""}` },
    h("div", { className: "focus-image" }, h(Img, { src: image, alt: title })),
    h(
      "div",
      { className: "focus-copy" },
      h("p", { className: "eyebrow" }, label),
      h("h2", null, title),
      h("p", null, text),
      extraContent.map((paragraph) => h("p", { key: paragraph }, paragraph)),
      h("a", { className: "text-link", href }, cta),
      subServices.length > 0 &&
        h(
          "div",
          { className: "inline-service-boxes" },
          subServices.map((item) =>
            h(
              "button",
              {
                type: "button",
                key: item,
                onClick: () => setModal({ sub: item, group: label, bookingHref }),
              },
              item
            )
          )
        )
    ),
    modal && h(ServiceModal, { modal, onClose: () => setModal(null) })
  );
}

function WhyChoose() {
  const points = [
    ["UK Certified", "International medical standards with a calm, private consultation style."],
    ["Dubai Experienced", "Trusted cross-region experience for patients who value discretion and clarity."],
    ["Personalized care", "No rushed scripts. Your plan is shaped around your body, history, and goals."],
  ];
  return h(
    "section",
    { className: "why section-shell reveal" },
    h("p", { className: "eyebrow" }, "Why Choose Dr. Alia"),
    h("h2", null, "A premium consultation experience built on trust, time, and medical judgment"),
    h(
      "div",
      { className: "why-lines" },
      points.map(([title, text]) =>
        h("div", { className: "why-line", key: title }, h("h3", null, title), h("p", null, text))
      )
    )
  );
}

function Calculator() {
  const [weight, setWeight] = useState(80);
  const loss = Math.round(weight * 0.225 * 10) / 10;
  return h(
    "section",
    { className: "calculator-band reveal" },
    h(
      "div",
      { className: "section-shell calculator" },
      h(
        "div",
        null,
        h("p", { className: "eyebrow" }, "Interactive guide"),
        h("h2", null, "How Much Weight Can You Lose with Dr. Alia?"),
        h("p", null, "Move the slider to see an approximate up to 22.5% weight loss estimate with a medically supported plan.")
      ),
      h(
        "div",
        { className: "calc-panel" },
        h("div", { className: "calc-value" }, h("span", null, `${weight}kg`), h("small", null, "Current weight")),
        h("input", {
          type: "range",
          min: "50",
          max: "150",
          value: weight,
          onChange: (event) => setWeight(Number(event.target.value)),
          "aria-label": "Select current weight",
        }),
        h(
          "div",
          { className: "loss-result" },
          h("span", null, `~${loss}kg`),
          h("p", null, "estimated potential weight loss")
        ),
        h("small", { className: "disclaimer" }, "Individual results may vary")
      )
    )
  );
}

function Testimonials() {
  const items = [
    [
      "⭐️⭐️⭐️⭐️⭐️",
      "“Dr. Alia is truly exceptional. Her depth of knowledge and precision in diagnosing even the most subtle concerns are remarkable. From the moment you meet her, you feel confident that you’re in expert hands. She combines medical excellence with genuine compassion and care — something that is incredibly rare to find today.”",
      "Patient Review",
    ],
    [
      "⭐️⭐️⭐️⭐️⭐️",
      "“Highly recommended — very empathetic yet professional. Dr. Alia takes the time to truly listen, understand concerns, and provide guidance that feels both reassuring and effective. Her calm and supportive approach makes every consultation comfortable and trustworthy.”",
      "Patient Review",
    ],
    [
      "⭐️⭐️⭐️⭐️⭐️",
      "“I would like to express my heartfelt appreciation for Dr. Alia Qaisar, who has consistently been a pillar of support for me and my family. Her ability to diagnose with clarity and accuracy has always given us confidence, even during difficult situations.\n\nWhat truly sets her apart is not only her medical expertise, but the thoughtfulness behind every treatment plan she recommends. Beyond her clinical excellence, she brings patience, kindness, and genuine care into every interaction. We feel incredibly fortunate to be under her care and would highly recommend her to anyone seeking true medical guidance and trust.”",
      "Patient Review",
    ],
    [
      "⭐️⭐️⭐️⭐️⭐️",
      "“Dr. Alia’s approach is both professional and deeply caring. She explains everything clearly, creates personalized treatment plans, and ensures you feel supported throughout the process. Her attention to detail and compassionate nature make a real difference.”",
      "Patient Review",
    ],
  ];
  return h(
    "section",
    { className: "testimonials section-shell reveal" },
    h("p", { className: "eyebrow" }, "Patient experiences"),
    h("h2", null, "Quiet confidence, real support"),
    h(
      "div",
      { className: "testimonial-row" },
      items.map(([stars, quote, author], index) =>
        h(
          "article",
          { className: "testimonial", key: quote },
          h("p", { className: "testimonial-stars" }, stars),
          h("p", { className: "testimonial-quote" }, quote),
          h("p", { className: "testimonial-author" }, `— ${author}`)
        )
      )
    )
  );
}

function BlogPreview() {
  return h(
    "section",
    { className: "blog-preview section-shell reveal" },
    h("div", { className: "split-heading" }, h("div", null, h("p", { className: "eyebrow" }, "From the journal"), h("h2", null, "Long-form guidance for better decisions")), h("a", { className: "text-link", href: "#/blog" }, "Read the Blog")),
    h(
      "div",
      { className: "blog-grid" },
      blogPosts.map((post) => h(BlogCard, { post, key: post.title }))
    )
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    [
      "How do online consultations work?",
      "Once you book your consultation, you will receive confirmation along with your scheduled time. The session is conducted privately online, where you can discuss your concerns in detail. After the consultation, you will receive personalized guidance and a structured plan based on your needs.",
    ],
    [
      "Is an online consultation as effective as visiting a clinic?",
      "Yes, for most concerns such as weight management, women’s health, lifestyle guidance, and follow-ups, online consultations are highly effective. They allow for focused, uninterrupted discussion and personalized advice without the need for travel or waiting times.",
    ],
    [
      "What makes this different from general online advice or diet plans?",
      "This is a personalized, medically guided approach. Instead of generic advice, your consultation is based on your medical history, lifestyle, and specific concerns, ensuring that the plan is tailored specifically to you.",
    ],
    [
      "Are the consultations private and confidential?",
      "Yes, all consultations are completely private and confidential. You can openly discuss sensitive concerns in a safe and professional environment.",
    ],
    [
      "Who are these services suitable for?",
      "These services are ideal for individuals looking for structured, professional guidance in areas such as weight loss, hormonal health, women’s health, and overall wellbeing — especially those who prefer privacy and convenience.",
    ],
    [
      "Will I receive a personalized plan after the consultation?",
      "Yes, each consultation is focused on understanding your situation in detail and providing a clear, personalized plan or next steps tailored specifically to you.",
    ],
    [
      "How many sessions will I need?",
      "This depends on your goals and condition. Some individuals benefit from a single consultation, while others may require follow-ups for ongoing support and better long-term results.",
    ],
    [
      "Can I get prescriptions or medications if needed?",
      "If appropriate and necessary, guidance regarding medications can be provided. Any prescriptions will be based on proper assessment and medical suitability.",
    ],
    [
      "Do I need any prior medical reports before booking?",
      "No, you can book a consultation without prior reports. However, if you have any previous test results or medical history, it can be helpful to share them during the session.",
    ],
    [
      "Is this suitable for weight loss even if I’ve tried everything before?",
      "Yes. Many individuals who struggle with weight loss often have underlying factors such as metabolism, hormones, or lifestyle patterns that need to be addressed. A structured, medically guided approach can help identify and manage these effectively.",
    ],
    [
      "What kind of women’s health issues can be discussed?",
      "You can discuss a wide range of concerns including menopause, hormonal imbalances, contraceptive guidance, and other sensitive health issues in a comfortable and private setting.",
    ],
    [
      "How do I book a consultation?",
      "You can book your consultation directly through the website by selecting a suitable time slot and completing the booking process.",
    ],
    [
      "What if I’m not sure which service I need?",
      "You can still book a consultation. During the session, your concerns will be discussed in detail and you will be guided toward the most appropriate approach or service.",
    ],
    [
      "Are results guaranteed?",
      "Every individual is different, and results depend on various factors including consistency and individual health conditions. The goal is to provide the most effective, evidence-based guidance to help you achieve the best possible outcome.",
    ],
  ];

  return h(
    "section",
    { className: "faq-section section-shell reveal" },
    h("div", { className: "faq-heading" }, h("p", { className: "eyebrow" }, "Questions"), h("h2", null, "Frequently Asked Questions")),
    h(
      "div",
      { className: "faq-list" },
      faqs.map(([question, answer], index) =>
        h(
          "article",
          { className: `faq-item ${openIndex === index ? "is-open" : ""}`, key: question },
          h(
            "button",
            {
              type: "button",
              onClick: () => setOpenIndex(openIndex === index ? -1 : index),
              "aria-expanded": openIndex === index,
            },
            h("span", null, question),
            h("span", { className: "faq-plus", "aria-hidden": "true" })
          ),
          h("div", { className: "faq-answer" }, h("p", null, answer))
        )
      )
    )
  );
}

function BlogCard({ post }) {
  return h(
    "article",
    { className: "blog-card" },
    h(Img, { src: post.image, alt: post.title }),
    h("div", null, h("h3", null, post.title), h("p", null, post.excerpt))
  );
}

function FinalCta() {
  return h(
    "section",
    { className: "final-cta reveal" },
    h(
      "div",
      { className: "section-shell" },
      h("p", { className: "eyebrow" }, "Private consultation"),
      h("h2", null, "Feel clear about your next health decision"),
      h("p", null, "Book a discreet consultation with Dr. Alia Qaisar and begin with a plan that feels personal, considered, and medically guided."),
      h("a", { className: "button light", href: "#/book" }, "Book Your Consultation")
    )
  );
}

function BookChoiceCard({ title, text, actionLabel, href, direct }) {
  return h(
    "article",
    { className: "booking-path" },
    h("h3", null, title),
    h("p", null, text),
    h(
      "a",
      direct
        ? { className: "button booking-button", href, rel: "noreferrer" }
        : { className: "button booking-button", href },
      actionLabel
    )
  );
}

function BookPage() {
  return h(
    "main",
    null,
    h(PageHero, {
      title: "Book Consultation",
      text:
        "Choose the consultation path that fits your needs. Weight Loss and Women’s Health include a short pre-booking form so your consultation can be personalized from the start.",
    }),
    h(
      "section",
      { className: "booking-hub section-shell reveal" },
      h(
        "div",
        { className: "booking-paths" },
        h(BookChoiceCard, {
          title: "Weight Loss",
          text: "Complete a short intake form, then continue to the booking calendar.",
          actionLabel: "Book Weight Loss",
          href: `#${weightLossFormConfig.route}`,
        }),
        h(BookChoiceCard, {
          title: "Women’s Health",
          text: "Share a few details so the consultation can focus on your main concern and symptoms.",
          actionLabel: "Book Women’s Health",
          href: `#${womensHealthFormConfig.route}`,
        }),
        h(BookChoiceCard, {
          title: "Aesthetics & Skin Care",
          text: "Tell us about your skin goals and previous routine before you continue to booking.",
          actionLabel: "Book Aesthetics",
          href: `#${aestheticsFormConfig.route}`,
        }),
        h(BookChoiceCard, {
          title: "Mental Health and Preventive Medicine",
          text: "Go straight to the booking calendar for all other services.",
          actionLabel: "Book Now",
          href: PRACTICE_BETTER_BOOKING_URL,
          direct: true,
        })
      )
    )
  );
}

function ServiceFormPage({ config }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(
    config.service === "Weight Loss"
      ? {
          mainGoal: "",
          targetRange: "",
          duration: "",
          previousAttempts: "",
          lifestyleDescription: "",
          mainChallenge: "",
          name: "",
          phone: "",
          email: "",
        }
      : config.service === "Women’s Health"
        ? {
          mainConcern: "",
          duration: "",
          severity: "",
          symptoms: [],
          previousTreatment: "",
          mainGoal: "",
          name: "",
          phone: "",
          email: "",
        }
        : {
          skinType: "",
          skinConcerns: [],
          routineLevel: "",
          mainGoal: "",
          previousTreatments: "",
          skinDescription: "",
          name: "",
          phone: "",
          email: "",
        }
  );

  const step = config.steps[stepIndex];
  const progress = ((stepIndex + 1) / config.steps.length) * 100;

  function updateField(field, value) {
    setData((current) => ({ ...current, [field]: value }));
  }

  function toggleMulti(field, value) {
    setData((current) => ({
      ...current,
      [field]: current[field].includes(value)
        ? current[field].filter((item) => item !== value)
        : [...current[field], value],
    }));
  }

  function validateStep() {
    const fields = step.fields;
    for (const field of fields) {
      const value = data[field];
      if (Array.isArray(value) && value.length === 0) return false;
      if (!Array.isArray(value) && !String(value || "").trim()) return false;
    }
    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateStep()) {
      setError("Please complete this step before continuing.");
      return;
    }
    setError("");
    if (stepIndex < config.steps.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          service: config.service,
          ...data,
          symptoms: Array.isArray(data.symptoms) ? data.symptoms.join(", ") : data.symptoms,
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      window.location.href = PRACTICE_BETTER_BOOKING_URL;
    } catch (submitError) {
      setSubmitting(false);
      setError("Something went wrong while submitting the form. Please try again.");
    }
  }

  return h(
    "main",
    null,
    h(PageHero, {
      title: config.title,
      text: config.intro,
    }),
    h(
      "section",
      { className: "booking-form-shell section-shell reveal" },
      h(
        "div",
        { className: "form-intro" },
        h("p", { className: "eyebrow" }, config.eyebrow),
        h("h2", null, "This helps us personalize your consultation"),
        h("p", null, `Step ${stepIndex + 1} of ${config.steps.length}`)
      ),
      h(
        "div",
        { className: "form-progress", "aria-hidden": "true" },
        h("span", { style: { width: `${progress}%` } })
      ),
      h(
        "form",
        { className: "service-intake-form", onSubmit: handleSubmit },
        h(
          "div",
          { className: "form-step-header" },
          h("h3", null, step.title),
          error && h("p", { className: "form-error" }, error)
        ),
        renderStepFields({
          config,
          stepIndex,
          data,
          updateField,
          toggleMulti,
        }),
        h(
          "div",
          { className: "form-actions" },
          stepIndex > 0 &&
            h(
              "button",
              {
                type: "button",
                className: "button form-secondary",
                onClick: () => {
                  setError("");
                  setStepIndex((current) => current - 1);
                },
              },
              "Back"
            ),
          h(
            "button",
            { type: "submit", className: "button booking-button", disabled: submitting },
            submitting ? "Submitting..." : stepIndex === config.steps.length - 1 ? "Continue to Booking" : "Next"
          )
        )
      )
    )
  );
}

function renderStepFields({ config, stepIndex, data, updateField, toggleMulti }) {
  if (config.service === "Weight Loss") {
    if (stepIndex === 0) {
      return h(
        "div",
        { className: "form-grid" },
        h(FieldBlock, {
          label: "Primary goal",
          content: h(ChoiceGrid, {
            options: ["Weight management", "Metabolic support", "Long-term maintenance", "Treatment guidance"],
            value: data.mainGoal,
            onChange: (value) => updateField("mainGoal", value),
          }),
        }),
        h(FieldBlock, {
          label: "Desired outcome",
          content: h(ChoiceGrid, {
            options: ["Up to 5kg", "5kg - 10kg", "10kg - 20kg", "20kg+"],
            value: data.targetRange,
            onChange: (value) => updateField("targetRange", value),
          }),
        })
      );
    }
    if (stepIndex === 1) {
      return h(
        "div",
        { className: "form-grid" },
        h(FieldBlock, {
          label: "Time working toward your goal",
          content: h("input", {
            type: "text",
            value: data.duration,
            onChange: (event) => updateField("duration", event.target.value),
            placeholder: "For example: 2 years",
          }),
        }),
        h(FieldBlock, {
          label: "Previous approaches",
          content: h("textarea", {
            rows: 5,
            value: data.previousAttempts,
            onChange: (event) => updateField("previousAttempts", event.target.value),
            placeholder: "Tell us what has already been part of your journey.",
          }),
        })
      );
    }
    if (stepIndex === 2) {
      return h(
        "div",
        { className: "form-grid" },
        h(FieldBlock, {
          label: "Lifestyle description",
          content: h("textarea", {
            rows: 5,
            value: data.lifestyleDescription,
            onChange: (event) => updateField("lifestyleDescription", event.target.value),
            placeholder: "Tell us a little about your current routine, energy, meals, and movement.",
          }),
        }),
        h(FieldBlock, {
          label: "Biggest challenge",
          content: h("textarea", {
            rows: 5,
            value: data.mainChallenge,
            onChange: (event) => updateField("mainChallenge", event.target.value),
            placeholder: "What would you most like support with right now?",
          }),
        })
      );
    }
    return h(
      "div",
      { className: "form-grid" },
      h(FieldBlock, {
        label: "Name",
        content: h("input", {
          type: "text",
          value: data.name,
          onChange: (event) => updateField("name", event.target.value),
          placeholder: "Your name",
        }),
      }),
      h(FieldBlock, {
        label: "Phone",
        content: h("input", {
          type: "tel",
          value: data.phone,
          onChange: (event) => updateField("phone", event.target.value),
          placeholder: "+971 or +44",
        }),
      }),
      h(FieldBlock, {
        label: "Email",
        full: true,
        content: h("input", {
          type: "email",
          value: data.email,
          onChange: (event) => updateField("email", event.target.value),
          placeholder: "you@example.com",
        }),
      })
    );
  }

  if (config.service === "Aesthetics & Skin Care") {
    if (stepIndex === 0) {
      return h(
        "div",
        { className: "form-grid" },
        h(FieldBlock, {
          label: "Skin type",
          content: h(ChoiceGrid, {
            options: ["Dry", "Oily", "Combination", "Sensitive"],
            value: data.skinType,
            onChange: (value) => updateField("skinType", value),
          }),
        }),
        h(FieldBlock, {
          label: "Skincare routine level",
          content: h(ChoiceGrid, {
            options: ["Simple", "Consistent", "Advanced", "Ready for guidance"],
            value: data.routineLevel,
            onChange: (value) => updateField("routineLevel", value),
          }),
        })
      );
    }

    if (stepIndex === 1) {
      return h(
        "div",
        { className: "form-grid" },
        h(FieldBlock, {
          label: "Skin concerns",
          content: h(MultiSelectGrid, {
            options: ["Acne", "Wrinkles", "Pigmentation", "Redness", "Dullness"],
            values: data.skinConcerns,
            onToggle: (value) => toggleMulti("skinConcerns", value),
          }),
        }),
        h(FieldBlock, {
          label: "Main improvement goal",
          content: h("textarea", {
            rows: 5,
            value: data.mainGoal,
            onChange: (event) => updateField("mainGoal", event.target.value),
            placeholder: "Tell us what you would most love to enhance or refresh.",
          }),
        })
      );
    }

    if (stepIndex === 2) {
      return h(
        "div",
        { className: "form-grid" },
        h(FieldBlock, {
          label: "Previous treatments",
          content: h("textarea", {
            rows: 5,
            value: data.previousTreatments,
            onChange: (event) => updateField("previousTreatments", event.target.value),
            placeholder: "Share any treatments or products you have already tried.",
          }),
        }),
        h(FieldBlock, {
          label: "Skin condition description",
          content: h("textarea", {
            rows: 5,
            value: data.skinDescription,
            onChange: (event) => updateField("skinDescription", event.target.value),
            placeholder: "Describe how your skin has been feeling lately.",
          }),
        })
      );
    }

    return h(
      "div",
      { className: "form-grid" },
      h(FieldBlock, {
        label: "Name",
        content: h("input", {
          type: "text",
          value: data.name,
          onChange: (event) => updateField("name", event.target.value),
          placeholder: "Your name",
        }),
      }),
      h(FieldBlock, {
        label: "Phone",
        content: h("input", {
          type: "tel",
          value: data.phone,
          onChange: (event) => updateField("phone", event.target.value),
          placeholder: "+971 or +44",
        }),
      }),
      h(FieldBlock, {
        label: "Email",
        full: true,
        content: h("input", {
          type: "email",
          value: data.email,
          onChange: (event) => updateField("email", event.target.value),
          placeholder: "you@example.com",
        }),
      })
    );
  }

  if (stepIndex === 0) {
    return h(
      "div",
      { className: "form-grid" },
        h(FieldBlock, {
          label: "What would you like support with",
          content: h(ChoiceGrid, {
            options: ["Menopause", "Hormonal imbalance", "Pelvic health", "General women’s health"],
            value: data.mainConcern,
          onChange: (value) => updateField("mainConcern", value),
        }),
      }),
        h(FieldBlock, {
          label: "How long has this been part of your experience",
          content: h("input", {
            type: "text",
            value: data.duration,
          onChange: (event) => updateField("duration", event.target.value),
          placeholder: "For example: 6 months",
        }),
      })
    );
  }

  if (stepIndex === 1) {
    return h(
      "div",
      { className: "form-grid" },
      h(FieldBlock, {
        label: "Symptom severity",
        content: h(ScaleField, {
          labels: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
          value: data.severity,
          onChange: (value) => updateField("severity", value),
        }),
      }),
        h(FieldBlock, {
          label: "Mood / energy / sleep / hormonal changes",
          content: h(MultiSelectGrid, {
            options: ["Mood swings", "Anxiety", "Fatigue", "Sleep issues", "Hot flushes", "Irregular periods"],
            values: data.symptoms,
          onToggle: (value) => toggleMulti("symptoms", value),
        }),
      })
    );
  }

  if (stepIndex === 2) {
    return h(
      "div",
      { className: "form-grid" },
      h(FieldBlock, {
        label: "Previous treatment",
        content: h(ChoiceGrid, {
          options: ["Yes", "No"],
          value: data.previousTreatment,
          onChange: (value) => updateField("previousTreatment", value),
        }),
      }),
        h(FieldBlock, {
          label: "Goal from consultation",
          content: h("textarea", {
            rows: 5,
            value: data.mainGoal,
          onChange: (event) => updateField("mainGoal", event.target.value),
          placeholder: "Tell us what you most want help with.",
        }),
      })
    );
  }

  return h(
    "div",
    { className: "form-grid" },
    h(FieldBlock, {
      label: "Name",
      content: h("input", {
        type: "text",
        value: data.name,
        onChange: (event) => updateField("name", event.target.value),
        placeholder: "Your name",
      }),
    }),
    h(FieldBlock, {
      label: "Phone",
      content: h("input", {
        type: "tel",
        value: data.phone,
        onChange: (event) => updateField("phone", event.target.value),
        placeholder: "+971 or +44",
      }),
    }),
    h(FieldBlock, {
      label: "Email",
      full: true,
      content: h("input", {
        type: "email",
        value: data.email,
        onChange: (event) => updateField("email", event.target.value),
        placeholder: "you@example.com",
      }),
    })
  );
}

function FieldBlock({ label, content, full }) {
  return h("label", { className: `field-block ${full ? "field-block-wide" : ""}` }, h("span", null, label), content);
}

function ChoiceGrid({ options, value, onChange }) {
  return h(
    "div",
    { className: "choice-grid" },
    options.map((option) =>
      h(
        "button",
        {
          type: "button",
          key: option,
          className: value === option ? "is-selected" : "",
          onClick: () => onChange(option),
        },
        option
      )
    )
  );
}

function MultiSelectGrid({ options, values, onToggle }) {
  return h(
    "div",
    { className: "choice-grid multi-grid" },
    options.map((option) =>
      h(
        "button",
        {
          type: "button",
          key: option,
          className: values.includes(option) ? "is-selected" : "",
          onClick: () => onToggle(option),
        },
        option
      )
    )
  );
}

function ScaleField({ labels, value, onChange }) {
  return h(
    "div",
    { className: "scale-grid" },
    labels.map((label, index) =>
      h(
        "button",
        {
          type: "button",
          key: label,
          className: value === label ? "is-selected" : "",
          onClick: () => onChange(label),
        },
        h("strong", null, `${index + 1}`),
        h("span", null, label)
      )
    )
  );
}

function AboutPage() {
  return h(
    "main",
    null,
    h(PageHero, {
      title: "Meet Dr. Alia Qaisar",
      text:
        "UK Certified and Dubai Experienced, Dr. Alia offers private, personalized medical consultations with a focus on trust, clarity, and long-term wellbeing.",
    }),
    h(
      "section",
      { className: "about-detail section-shell reveal" },
      h("div", { className: "portrait-frame" }, h(Img, { src: doctorImage, alt: "Dr. Alia Qaisar" })),
      h(
        "div",
        { className: "about-copy" },
        h("p", { className: "eyebrow" }, "Doctor-led, patient-first care"),
        h("h2", null, "Dr. Alia Qaisar – Family Medicine Consultant & Lifestyle Health Expert"),
        h(
          "p",
          null,
          "Dr. Alia Qaisar is a UK-based Family Medicine Consultant with more than 20 years of international experience helping patients achieve lasting health and wellbeing. Having worked extensively across Dubai and the UK, she brings a truly global perspective and a compassionate, personalised approach to healthcare."
        ),
        h(
          "p",
          null,
          "With a special interest in lifestyle medicine and holistic care, Dr. Qaisar focuses on addressing the root causes of illness and empowering her patients to make sustainable changes that transform their health. Her clinical expertise includes weight management and obesity treatment, women’s health and menopause care (including HRT), mental health and emotional wellbeing, preventive medicine, and advanced skincare."
        ),
        h(
          "p",
          null,
          "Dr. Qaisar holds specialist recognition from the Royal College in the UK and a Fellowship from the American Aesthetics Institute. She integrates evidence-based medicine with aesthetic wellness principles, offering comprehensive support that nurtures both physical vitality and self-confidence."
        ),
        h(
          "p",
          null,
          "As both a trusted family physician and lifestyle coach, Dr. Qaisar is passionate about helping her patients live healthier, happier, and more balanced lives—one positive change at a time."
        ),
        h(
          "div",
          { className: "credential-list" },
          h("span", null, "UK Certified"),
          h("span", null, "Dubai Experienced"),
          h("span", null, "Experience"),
          h("span", null, "Trust")
        )
      )
    ),
    h(FinalCta)
  );
}

function ServicesPage() {
  const [modal, setModal] = useState(null);

  return h(
    "main",
    null,
    h(PageHero, {
      title: "More Services Designed Around the Whole Patient",
      text:
        "Explore private consultations across mental health, preventive medicine, and dermatology.",
    }),
    h(
      "section",
      { className: "more-services section-shell" },
      moreServiceGroups.map((group, index) =>
        h(
          "article",
          { className: `more-service reveal ${index % 2 ? "reverse" : ""}`, key: group.title },
          h("div", { className: "more-service-image" }, h(Img, { src: group.image, alt: group.title })),
          h(
            "div",
            { className: "more-service-copy" },
            h("p", { className: "eyebrow" }, "More Services"),
            h("h2", null, group.title),
            h("p", null, group.intro),
            h(
              "a",
              group.title === "Dermatology & Skin Care"
                ? { className: "button booking-button service-direct-book", href: `#${aestheticsFormConfig.route}` }
                : { className: "button booking-button service-direct-book", href: PRACTICE_BETTER_BOOKING_URL, rel: "noreferrer" },
              "Book Now"
            ),
            h(
              "div",
              { className: "service-pills" },
              group.subs.map((sub) =>
                h(
                  "button",
                  {
                    type: "button",
                    key: sub,
                    onClick: () =>
                      setModal({
                        group: group.title,
                        sub,
                        bookingHref: group.title === "Dermatology & Skin Care" ? `#${aestheticsFormConfig.route}` : "",
                      }),
                  },
                  sub
                )
              )
            )
          )
        )
      )
    ),
    modal && h(ServiceModal, { modal, onClose: () => setModal(null) }),
    h(FinalCta)
  );
}

function ServiceModal({ modal, onClose }) {
  return h(
    "div",
    { className: "modal-backdrop", onClick: onClose },
    h(
      "div",
      { className: "modal", onClick: (event) => event.stopPropagation(), role: "dialog", "aria-modal": "true" },
      h("button", { className: "modal-close", onClick: onClose, "aria-label": "Close" }, "Close"),
      h("p", { className: "eyebrow" }, modal.group),
      h("h2", null, modal.sub),
      h(
        "p",
        null,
        detailCopy[modal.sub] ||
          "This consultation starts with your history, current concerns, goals, and medical suitability, then moves into a clear plan with careful follow-up guidance."
      ),
      h(
        "a",
        modal.bookingHref
          ? { className: "button primary", href: modal.bookingHref, onClick: onClose }
          : { className: "button primary", href: PRACTICE_BETTER_BOOKING_URL, onClick: onClose, rel: "noreferrer" },
        modal.bookingHref ? "Continue" : "Book Now"
      )
    )
  );
}

function WeightLossPackages() {
  const packages = [
    {
      name: "Silver",
      monthlyPrice: "34,999 PKR",
      initialCost: "44,999 PKR",
      tone: "silver",
      items: [
        "Initial consultation",
        "Follow-up at 3 months and 6 months",
        "Dietician consultation",
        "Comprehensive blood tests",
        "Monthly supply of injections as prescribed",
      ],
    },
    {
      name: "Gold",
      monthlyPrice: "39,999 PKR",
      initialCost: "49,999 PKR",
      badge: "Most Popular",
      featured: true,
      tone: "gold",
      items: [
        "Initial consultation",
        "Follow-up every 2 months",
        "Dietitian consultation and review",
        "Comprehensive blood tests (including minerals & electrolytes)",
        "Repeat blood tests",
        "Monthly supply of injections as prescribed",
      ],
    },
    {
      name: "Platinum",
      monthlyPrice: "49,999 PKR",
      initialCost: "69,999 PKR",
      tone: "platinum",
      items: [
        "Initial consultation",
        "Monthly consultations",
        "Dietitian monthly review",
        "Physiotherapy consultation and follow-up",
        "Clinical psychologist specialized in weight loss",
        "Abdomino-pelvic ultrasound scan",
        "Comprehensive blood tests (including vitamins, minerals, and hormone studies)",
        "Monthly supply of injections as prescribed",
      ],
    },
  ];

  return h(
    "section",
    { className: "weight-packages section-shell reveal" },
    h(
      "div",
      { className: "packages-heading" },
      h("p", { className: "eyebrow" }, "Packages"),
      h("h2", null, "Choose the level of support that fits your journey")
    ),
    h(
      "div",
      { className: "packages-grid" },
      packages.map((plan) =>
        h(
          "article",
          { className: `package-card package-${plan.tone} ${plan.featured ? "is-featured" : ""}`, key: plan.name },
          plan.badge && h("span", { className: "package-badge" }, plan.badge),
          h("h3", null, plan.name),
          h(
            "div",
            { className: "package-pricing" },
            h(
              "p",
              { className: "package-price" },
              h("span", null, plan.monthlyPrice),
              h("small", null, "/month")
            ),
            h("p", { className: "package-initial" }, `Initial setup: ${plan.initialCost}`)
          ),
          h(
            "ul",
            { className: "package-list" },
            plan.items.map((item) => h("li", { key: item }, item))
          ),
          h("a", { className: "button booking-button", href: "#/book-weight-loss" }, "Book Now")
        )
      )
    ),
    h(
      "article",
      { className: "referral-card" },
      h("span", { className: "referral-icon", "aria-hidden": "true" }),
      h(
        "div",
        null,
        h("h3", null, "Refer a Friend & Save on Your Plan"),
        h(
          "p",
          null,
          "If you refer someone to our weight management program, you will receive an exclusive discount on your package or future monthly payments once their consultation is confirmed."
        ),
        h(
          "p",
          null,
          "Our goal is to build a supportive community where healthy progress is shared and encouraged."
        )
      )
    )
  );
}

function ExpandableTreatmentList({ eyebrow, title, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return h(
    "section",
    { className: "treatment-list section-shell reveal" },
    h(
      "div",
      { className: "treatment-heading" },
      h("p", { className: "eyebrow" }, eyebrow),
      h("h2", null, title)
    ),
    h(
      "div",
      { className: "treatment-accordion" },
      items.map((item, index) =>
        h(
          "article",
          { className: `treatment-item ${openIndex === index ? "is-open" : ""}`, key: item },
          h(
            "button",
            {
              type: "button",
              onClick: () => setOpenIndex(openIndex === index ? -1 : index),
              "aria-expanded": openIndex === index,
            },
            h("span", null, item),
            h("span", { className: "faq-plus", "aria-hidden": "true" })
          ),
          h("div", { className: "treatment-answer" }, h("p", null, detailCopy[item]))
        )
      )
    )
  );
}

function WeightLossPage() {
  return h(
    "main",
    null,
    h(PageHero, {
      title: "Weight Loss",
      text:
        "Private, medically guided support for weight loss, injectables, oral tablets, lifestyle, and maintenance therapy.",
    }),
    h(FocusSection, {
      label: "Medical support",
      title: "A plan that goes beyond willpower",
      text:
        "Your consultation considers health history, appetite, hormones, lifestyle, medication suitability, and realistic maintenance, so progress is guided by more than generic advice.",
      extraContent: [
        "Our approach to weight management may include medically guided treatments such as GLP-1 based therapies (e.g., Ozempic and Mounjaro), where appropriate. These treatments can help regulate appetite, improve metabolic balance, and support sustainable weight loss when combined with personalized lifestyle guidance.",
        "All treatment plans are carefully assessed and tailored to each individual to ensure safety, suitability, and long-term effectiveness.",
      ],
      image: images.weight,
      cta: "Book Weight Loss",
      href: "#/book-weight-loss",
      bookingHref: "#/book-weight-loss",
      subServices: ["Injectables", "Oral Tablets", "Lifestyle", "Maintenance Therapy"],
    }),
    h(WeightLossPackages),
    h(Calculator),
    h(FinalCta)
  );
}

function WomensHealthPage() {
  return h(
    "main",
    null,
    h(PageHero, {
      title: "Women’s Health",
      text:
        "Sensitive, private consultations for menopause (HRT), bone health, pelvic health, and long-term wellbeing.",
    }),
    h(FocusSection, {
      reverse: true,
      label: "Women’s Health",
      title: "Care that gives symptoms the attention they deserve",
      text:
        "Discuss hormonal issues, menopause symptoms, HRT, bone health, and pelvic health in a calm consultation designed to create clarity and trust.",
      image: images.womens,
      cta: "Book Women’s Health",
      href: "#/book-womens-health",
      bookingHref: "#/book-womens-health",
      subServices: ["Menopause (including HRT)", "Bone Health", "Pelvic Health"],
    }),
    h(FinalCta)
  );
}

function BlogPage() {
  return h(
    "main",
    null,
    h(PageHero, {
      title: "The Journal",
      text:
        "Long-form articles for women making thoughtful decisions about weight loss, hormones, preventive care, and wellbeing.",
    }),
    h(
      "section",
      { className: "long-blog section-shell reveal" },
      blogPosts.map((post) =>
        h(
          "article",
          { className: "article-block", key: post.title },
          h(Img, { src: post.image, alt: post.title }),
          h(
            "div",
            null,
            h("p", { className: "eyebrow" }, "Long-form guide"),
            h("h2", null, post.title),
            h("p", { className: "article-excerpt" }, post.excerpt),
            post.body.map((paragraph) => h("p", { key: paragraph }, paragraph))
          )
        )
      )
    )
  );
}

function PageHero({ title, text }) {
  return h(
    "section",
    { className: "page-hero section-shell reveal" },
    h("p", { className: "eyebrow" }, "Dr. Alia Qaisar"),
    h("h1", null, title),
    h("p", null, text)
  );
}

function Footer() {
  return h(
    "footer",
    { className: "footer section-shell" },
    h("div", null, h("h2", null, "Dr. Alia Qaisar"), h("p", null, "UK Certified. Dubai Experienced. Personalized private care.")),
    h(
      "div",
      { className: "footer-links" },
      navItems.map(([label, href]) => h("a", { href, key: label }, label))
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
