import { Users, Code, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 pt-5 pb-10 md:pt-5 md:pb-15">
      <div className="container relative mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Hiring for Pandy AI
        </div>

        {/* Hero Copy */}
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Exceptional Engineering Talent
        </h1>
        <p className="mb-10 max-w-2xl text-gray-600 text-lg sm:text-xl">
          HireFlow connects you with vetted frontend engineers, ready to build
          scalable UI systems and premium web experiences.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            to="#candidates"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Hire Candidates
          </Link>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl w-full border-t  pt-8 text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Vetted Profiles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg">
              <Code className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">Top Skills</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                React & TypeScript
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">MENA</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Top Locations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
