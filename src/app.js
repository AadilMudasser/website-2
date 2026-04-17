const { useEffect, useMemo, useState } = React;
const h = React.createElement;

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
};

const navItems = [
  ["Home", "#/"],
  ["About", "#/about"],
  ["Weight Loss", "#/weight-loss"],
  ["Women’s Health", "#/womens-health"],
  ["Services", "#/services"],
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

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      "nav",
      { className: "nav-links", "aria-label": "Primary navigation" },
      navItems.map(([label, href]) =>
        h(
          "a",
          {
            key: label,
            href,
            className: route === href.replace("#", "") ? "active" : "",
          },
          label
        )
      )
    )
  );
}

function HomePage() {
  return h(
    "main",
    null,
    h(Hero),
    h(ProblemSection),
    h(ServiceSlider),
    h(FocusSection, {
      label: "Weight Loss",
      title: "Medical weight loss that respects the life you actually live",
      text:
        "A personalized consultation helps uncover the reasons progress has felt difficult, then builds a plan around medication options, appetite patterns, lifestyle, and maintenance.",
      image: images.weight,
      cta: "Explore Weight Loss",
      href: "#/weight-loss",
    }),
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
    h(FinalCta)
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
        "Personalized, private consultations for weight loss, women’s health, and long-term wellbeing — guided by a UK & Dubai certified doctor."
      ),
      h(
        "div",
        { className: "hero-actions" },
        h("a", { className: "button primary", href: "#/book" }, "Book Your Consultation"),
        h(
          "div",
          { className: "cert-strip", "aria-label": "Certifications" },
          h("span", null, "UK Certified"),
          h("span", null, "Dubai Certified")
        )
      )
    ),
    h(
      "div",
      { className: "hero-image-wrap reveal delay-1" },
      h("img", { src: images.hero, alt: "Woman in a calm wellness consultation setting" }),
      h(
        "div",
        { className: "hero-note" },
        h("strong", null, "Doctor-led care"),
        h("span", null, "Discreet, personal, and designed around real life.")
      )
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
          { className: "service-slide", href: "#/services", key: service.title },
          h("img", { src: service.image, alt: service.title }),
          h("span", null, service.title)
        )
      )
    )
  );
}

function FocusSection({ reverse, label, title, text, image, cta, href }) {
  return h(
    "section",
    { className: `focus section-shell reveal ${reverse ? "reverse" : ""}` },
    h("div", { className: "focus-image" }, h("img", { src: image, alt: title })),
    h(
      "div",
      { className: "focus-copy" },
      h("p", { className: "eyebrow" }, label),
      h("h2", null, title),
      h("p", null, text),
      h("a", { className: "text-link", href }, cta)
    )
  );
}

function WhyChoose() {
  const points = [
    ["UK Certified", "International medical standards with a calm, private consultation style."],
    ["Dubai Certified", "Trusted cross-region experience for patients who value discretion and clarity."],
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
  const loss = Math.round(weight * 0.2 * 10) / 10;
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
        h("p", null, "Move the slider to see an approximate 20% weight loss estimate with a medically supported plan.")
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
    [images.patient1, "I felt listened to for the first time. The plan was calm, realistic, and private."],
    [images.patient2, "The menopause conversation was respectful and detailed. I finally understood my options."],
    [images.patient3, "The weight loss support felt medical, personal, and never judgmental."],
  ];
  return h(
    "section",
    { className: "testimonials section-shell reveal" },
    h("p", { className: "eyebrow" }, "Patient experiences"),
    h("h2", null, "Quiet confidence, real support"),
    h(
      "div",
      { className: "testimonial-row" },
      items.map(([image, quote], index) =>
        h(
          "article",
          { className: "testimonial", key: quote },
          h("img", { src: image, alt: `Patient story ${index + 1}` }),
          h("p", null, quote)
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

function BlogCard({ post }) {
  return h(
    "article",
    { className: "blog-card" },
    h("img", { src: post.image, alt: post.title }),
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

function AboutPage() {
  return h(
    "main",
    null,
    h(PageHero, {
      title: "Meet Dr. Alia Qaisar",
      text:
        "UK Certified and Dubai Certified, Dr. Alia offers private, personalized medical consultations with a focus on trust, clarity, and long-term wellbeing.",
    }),
    h(
      "section",
      { className: "about-detail section-shell reveal" },
      h("div", { className: "portrait-frame" }, h("img", { src: doctorImage, alt: "Dr. Alia Qaisar" })),
      h(
        "div",
        { className: "about-copy" },
        h("p", { className: "eyebrow" }, "Doctor-led, patient-first care"),
        h("h2", null, "Professional medical support with a softer, more personal experience"),
        h(
          "p",
          null,
          "Dr. Alia Qaisar brings together UK Certified and Dubai Certified expertise with a consultation style designed around privacy, listening, and clear next steps."
        ),
        h(
          "p",
          null,
          "Her work focuses on weight loss, women’s health, preventive medicine, mental wellbeing, and skin care, helping patients feel informed and supported rather than rushed or overwhelmed."
        ),
        h(
          "div",
          { className: "credential-list" },
          h("span", null, "UK Certified"),
          h("span", null, "Dubai Certified"),
          h("span", null, "Experience"),
          h("span", null, "Trust")
        )
      )
    ),
    h(FinalCta)
  );
}

function ServicesPage() {
  const [open, setOpen] = useState("Weight Loss");
  const [modal, setModal] = useState(null);
  return h(
    "main",
    null,
    h(PageHero, {
      title: "Services Designed Around the Whole Patient",
      text:
        "Explore private consultations across weight loss, women’s health, mental health, preventive medicine, and dermatology.",
    }),
    h(
      "section",
      { className: "services-system section-shell reveal" },
      h(
        "div",
        { className: "service-tabs" },
        serviceGroups.map((group) =>
          h(
            "button",
            {
              key: group.title,
              className: open === group.title ? "active" : "",
              onClick: () => setOpen(group.title),
            },
            group.title
          )
        )
      ),
      h(
        "div",
        { className: "service-expanded" },
        serviceGroups
          .filter((group) => group.title === open)
          .map((group) =>
            h(
              "div",
              { className: "expanded-inner", key: group.title },
              h("img", { src: group.image, alt: group.title }),
              h(
                "div",
                null,
                h("p", { className: "eyebrow" }, "Main service"),
                h("h2", null, group.title),
                h("p", null, group.intro),
                h(
                  "div",
                  { className: "subservice-list" },
                  group.subs.map((sub) =>
                    h(
                      "button",
                      { key: sub, onClick: () => setModal({ group: group.title, sub }) },
                      sub
                    )
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
        "This consultation starts with your history, current concerns, goals, and medical suitability, then moves into a clear plan with careful follow-up guidance."
      ),
      h("a", { className: "button primary", href: "#/book", onClick: onClose }, "Book Your Consultation")
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
      image: images.weight,
      cta: "Book Weight Loss Consultation",
      href: "#/book",
    }),
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
      cta: "Book Women’s Health Consultation",
      href: "#/book",
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
          h("img", { src: post.image, alt: post.title }),
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

function BookPage() {
  return h(
    "main",
    null,
    h(PageHero, {
      title: "Book Consultation",
      text:
        "Share a few details and the clinic team can guide you toward the right private consultation.",
    }),
    h(
      "section",
      { className: "booking section-shell reveal" },
      h(
        "form",
        { className: "booking-form" },
        h("label", null, "Full name", h("input", { type: "text", placeholder: "Your name" })),
        h("label", null, "Email address", h("input", { type: "email", placeholder: "you@example.com" })),
        h("label", null, "Phone number", h("input", { type: "tel", placeholder: "+971 or +44" })),
        h(
          "label",
          null,
          "Consultation area",
          h(
            "select",
            { defaultValue: "" },
            h("option", { value: "", disabled: true }, "Choose a service"),
            serviceGroups.map((group) => h("option", { key: group.title }, group.title))
          )
        ),
        h("label", { className: "wide" }, "What would you like help with?", h("textarea", { rows: 6, placeholder: "Tell Dr. Alia what has been happening and what you want to improve." })),
        h("button", { className: "button primary", type: "button" }, "Request Consultation")
      ),
      h(
        "aside",
        { className: "booking-aside" },
        h("img", { src: images.consult, alt: "Private medical consultation room" }),
        h("h2", null, "Private, calm, and structured"),
        h("p", null, "Your consultation is designed to help you feel heard, informed, and clear about next steps.")
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
    h("div", null, h("h2", null, "Dr. Alia Qaisar"), h("p", null, "UK Certified. Dubai Certified. Personalized private care.")),
    h(
      "div",
      { className: "footer-links" },
      navItems.map(([label, href]) => h("a", { href, key: label }, label))
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
