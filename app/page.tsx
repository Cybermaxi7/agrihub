import React from 'react'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroAbout from "@/components/HeroAbout";
import HeroNews from "@/components/HeroNews";
import WhatWeDo from "@/components/WhatWeDo";
import OurNumbers from "@/components/OurNumbers";
import ImageCarousel from "@/components/ImageCarousel";
import HeroCollaborate from "@/components/HeroCollaborate";
import HeroCommunity from "@/components/HeroCommunity";

const Home = () => {
    return (
        <main className="min-h-dvh w-full overflow-x-hidden flex flex-col gap-6">
            <Hero />
            <HeroAbout />
            {/*<HeroNews />*/}
            <WhatWeDo />
            <ImageCarousel />
            <HeroCollaborate />
            <HeroCommunity />
        </main>
    )
}
export default Home
