import Connect from '@/components/SitePages/Homepage/Connect/Connect';
import Hero from '@/components/SitePages/Homepage/Hero/Hero';
import Solutions from '@/components/SitePages/Homepage/Solutions/Solutions';
import Testimonials from '@/components/SitePages/Homepage/Testimonials/Testimonials';
import Tour from '@/components/SitePages/Homepage/Tour/Tour';
import TrustedPartner from '@/components/SitePages/Homepage/TrustedPartner/TrustedPartner';

export default function Home() {
  return (
    <>
      <Hero />

      <TrustedPartner />

      <Solutions />

      <Tour />

      <Testimonials />

      <Connect />
    </>
  );
}
