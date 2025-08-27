import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { CoursesSection } from '@/components/courses-section';
import { FeaturesSection } from '@/components/features-section';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <ContactForm />
      <Footer />
    </main>
  );
}