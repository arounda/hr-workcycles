import Hero from '@/components/Pages/Homepage/Hero/Hero';
import Solutions from '@/components/Pages/Homepage/Solutions/Solutions';
import TrustedPartner from '@/components/Pages/Homepage/TrustedPartner/TrustedPartner';
import Tour from '@/components/Pages/Homepage/Tour/Tour';
import Testimonials from '@/components/Pages/Homepage/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />

      <TrustedPartner />

      <Solutions />

      <Tour />

      <Testimonials />
    </>
  );
}
