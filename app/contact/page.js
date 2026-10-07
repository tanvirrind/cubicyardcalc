import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact - Cubic Yard Calculator",
  description:
    "Contact Cubic Yard Calculator with questions, corrections, feedback or suggestions for the free cubic yard calculator website.",
  keywords: ["contact cubic yard calculator"],
  alternates: { canonical: "https://cubicyardcalculator.site/contact/" },
  openGraph: {
    title: "Contact - Cubic Yard Calculator | Cubic Yard Calculator",
    description:
      "Questions, corrections, feedback or suggestions for the free cubic yard calculator website.",
    url: "https://cubicyardcalculator.site/contact/",
  },
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Send a message</div>
        <h1 className="h2">Contact — Cubic Yard Calculator</h1>
        <p className="sub">
          Share feedback, report a calculation issue, or suggest a new
          material calculator.
        </p>
        <ContactForm />
        <div style={{ maxWidth: 720, marginTop: 36 }}>
          <h2>What to include</h2>
          <p style={{ color: "var(--muted)" }}>
            If you are reporting a calculator result, include the length,
            width, depth, units, and material you entered. For general
            questions, include the project type and the material you are
            estimating.
          </p>
        </div>
      </div>
    </section>
  );
}
