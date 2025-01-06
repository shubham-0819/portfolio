'use client'

import Nav from '@/components/nav'
import HeroSection from '@/components/hero-section'
import ExperienceSection from '@/components/experience-section'
import AnimatedBackground from '@/components/animated-background'
import {Analytics} from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Nav />
      <HeroSection />
      <ExperienceSection />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}

