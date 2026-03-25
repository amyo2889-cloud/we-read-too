import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-soft-peach/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-light-sage/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-warm-gold/20 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="h-4 w-4" />
            Created by educator and researcher Dr. Amy Salter
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold leading-[1.1] tracking-tight text-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Helping Children Learn to Read with{" "}
            <span className="text-gradient-warm">Confidence</span>
          </h1>

          <p
            className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Engaging sight word stories designed for beginning readers and the families who support them.
          </p>

          <div
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              onClick={() => scrollTo("books")}
              size="lg"
              className="rounded-full px-8 text-base gap-2 group"
            >
              Shop Books
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollTo("about")}
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base"
            >
              Meet the Author
            </Button>
          </div>

          <p
            className="mt-12 text-sm italic text-muted-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            Every child deserves to see themselves as a reader.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
