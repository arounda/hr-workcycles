import Connect from '@/components/Pages/Homepage/Connect/Connect';
import Hero from '@/components/Pages/Homepage/Hero/Hero';
import News from '@/components/Pages/Homepage/News/News';
import Solutions from '@/components/Pages/Homepage/Solutions/Solutions';
import Testimonials from '@/components/Pages/Homepage/Testimonials/Testimonials';
import Tour from '@/components/Pages/Homepage/Tour/Tour';
import TrustedPartner from '@/components/Pages/Homepage/TrustedPartner/TrustedPartner';
import Mission from '@/components/Pages/Mission/Mission';

export default function Home() {
  return (
    <>
      <Hero />

      <TrustedPartner />

      <Solutions />

      <Tour />

      <Testimonials />

      <Connect />

      <News />

      {/* <Mission /> */}
    </>
  );
}
