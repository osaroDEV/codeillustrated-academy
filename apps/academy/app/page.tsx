import { HeroSection } from '@/components/hero-section';
import { CoursesSection } from '@/components/courses-section';
import { FeaturesSection } from '@/components/features-section';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <ContactForm />
    </main>
  );
}