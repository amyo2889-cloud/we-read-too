import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShopCTA = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-primary-foreground mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Give your child the tools to grow as a confident reader.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollTo("books")}
            size="lg"
            variant="secondary"
            className="rounded-full px-8 text-base gap-2 group"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={() => scrollTo("bundles")}
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-base gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Gift className="h-4 w-4" />
            Build a Bundle
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopCTA;
