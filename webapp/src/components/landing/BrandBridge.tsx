import { Heart } from "lucide-react";

const BrandBridge = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-6">
          <Heart className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-foreground mb-6">
          We Read Too is Just the Beginning
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We Read Too is part of <strong className="text-foreground">DiscoveryGate Publishing</strong>, a growing platform dedicated to creating inclusive, engaging, and educational content for young learners.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Our mission is simple: to help every child build confidence, joy, and identity through reading.
        </p>
      </div>
    </section>
  );
};

export default BrandBridge;
