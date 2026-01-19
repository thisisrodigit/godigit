import Hero from "../components/Hero";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Hero />

      <Section title="Services">
        Web platforms · SaaS · Automation · Digital systems
      </Section>

      <Section title="Process">
        Strategy → Design → Development → Deployment
      </Section>

      <Section title="Why GoDigit">
        Execution speed. Scalable architecture. Clean design.
      </Section>

      <Section title="Projects">
        Custom systems built for startups and operators.
      </Section>

      <Section title="Let’s build">
        <span className="blue">Digital products that actually convert.</span>
      </Section>
    </>
  );
}
