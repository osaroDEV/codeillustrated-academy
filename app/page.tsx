import { HeroSection } from '@/components/hero-section';
import { CoursesSection } from '@/components/courses-section';
import { FeaturesSection } from '@/components/features-section';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <ContactForm />
    </main>
  );
}