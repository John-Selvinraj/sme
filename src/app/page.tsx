import React from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { PrimaryNavigationMenu } from "./components/PrimaryNavigationMenu";
import Logo from "./components/Logo";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-2 md:py-6">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>

        <nav className="hidden md:flex flex-1 justify-center">
          <PrimaryNavigationMenu />
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </header>

      <main className="px-2 md:px-4">
        {/* Hero Section */}
        <section className="text-center py-10 md:py-20 border-b">
          <h1 className="text-4xl md:text-5xl font-bold py-2 leading-tight md:leading-snug">
            B2B Marketing Examples <br /> For Time Strapped Experts
          </h1>

          <div className="mx-auto max-w-screen-lg">
            <p className="text-lg md:text-xl leading-normal md:leading-relaxed py-2 text-muted-foreground">
              No-nonsense B2B marketing tactics for busy teams who want to save
              time and drive measurable results. Discover hand-curated examples
              of ads, blogs, landing pages, and more.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button>Find Inspirations</Button>
            <Button variant="outline">Pricing</Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
