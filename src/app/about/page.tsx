import { Watch, Target, Heart, Users, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const team = [
  { name: "Alex Rivera", role: "Founder & CEO", bio: "Former hardware engineer at leading tech firms with a passion for wearable technology." },
  { name: "Dr. Sarah Chen", role: "Chief AI Officer", bio: "PhD in Machine Learning, specializing in health data analysis and predictive algorithms." },
  { name: "Marcus Thompson", role: "Head of Design", bio: "Award-winning industrial designer with 15 years of experience in consumer electronics." },
  { name: "Priya Sharma", role: "VP of Engineering", bio: "Full-stack architect who has built scalable platforms serving millions of users." },
];

const values = [
  { icon: Target, title: "Innovation First", description: "We push the boundaries of wearable technology, integrating AI, AR, and advanced sensors to create watches that truly improve lives." },
  { icon: Heart, title: "Health & Wellness", description: "Every feature we build starts with a simple question: how can this help our customers live healthier, more connected lives?" },
  { icon: Users, title: "Community Driven", description: "Our community of watch enthusiasts and health-conscious individuals shapes every product decision we make." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Watch className="h-6 w-6 text-accent-blue" />
              <span className="text-sm font-ui text-accent-blue">Our Story</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Pioneering the Future of Wearable Technology
            </h1>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              Founded in 2024, ChronoTech was born from a simple belief: smartwatches should be smarter. We combine cutting-edge AI with premium craftsmanship to create watches that don&apos;t just tell time &mdash; they help you live better.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "8", label: "Watch Models" },
              { value: "15+", label: "AI Features" },
              { value: "99.9%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent-blue">{stat.value}</p>
                <p className="mt-1 text-sm text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary-dark">Our Mission & Values</h2>
            <p className="mt-2 text-secondary max-w-2xl mx-auto">
              We&apos;re on a mission to make advanced health and fitness technology accessible to everyone through intelligent, beautifully designed smartwatches.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-gray-50 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary-dark">{value.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary-dark">Meet the Team</h2>
            <p className="mt-2 text-secondary">The people behind ChronoTech&apos;s innovative smartwatches.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white p-6 text-center shadow-[0_4px_12px_var(--card-shadow)] border border-card-border">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-dark text-white">
                  <span className="font-heading text-2xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-primary-dark">{member.name}</h3>
                <p className="text-sm text-accent-blue font-medium">{member.role}</p>
                <p className="mt-2 text-xs text-secondary leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Careers CTA */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary-dark text-white p-12 text-center">
            <Briefcase className="mx-auto h-10 w-10 text-accent-blue mb-4" />
            <h2 className="font-heading text-3xl font-bold">Join Our Team</h2>
            <p className="mt-2 text-white/60 max-w-lg mx-auto">
              We&apos;re always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <Link
              href="/support"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-heading text-sm font-semibold hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]"
            >
              View Open Positions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
