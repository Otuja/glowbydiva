import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import GalleryPreview from '@/components/home/GalleryPreview';
import Testimonials from '@/components/home/Testimonials';
import ProcessSection from '@/components/home/ProcessSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ServicesPreview />
      <ProcessSection />
      <GalleryPreview />
      <Testimonials />
    </main>
  );
}
