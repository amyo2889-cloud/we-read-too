import { Star, Gift, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const BundlesSection = () => {
  return (
    <section id="bundles" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-foreground">
            Better Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* 1 Book */}
          <div className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow">
            <Package className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              1 Book
            </p>
            <p className="text-4xl font-fraunces font-bold text-foreground">$15</p>
          </div>

          {/* 2 Books */}
          <div className="bg-card rounded-2xl border border-border p-8 text-center relative hover:shadow-lg transition-shadow">
            <Gift className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              2 Books
            </p>
            <p className="text-4xl font-fraunces font-bold text-foreground mb-6">$28</p>
            <Button className="w-full rounded-full gap-2" asChild>
              <a href="https://square.link/u/OOyKuDL3?src=sheet" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-4 w-4" />
                Buy Now
              </a>
            </Button>
          </div>

          {/* 3 Books */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center relative shadow-lg shadow-primary/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
              <Star className="h-3 w-3" fill="currentColor" />
              Best Value
            </div>
            <Gift className="h-8 w-8 mx-auto mb-4 opacity-90" />
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider mb-1">
              3 Books
            </p>
            <p className="text-4xl font-fraunces font-bold mb-1">$42</p>
            <p className="text-sm opacity-70 mb-6">Buy 2, get the 3rd for $12</p>
            <Button variant="secondary" className="w-full rounded-full gap-2" asChild>
              <a href="https://square.link/u/m9HlafmR?src=sheet" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-4 w-4" />
                Buy Now
              </a>
            </Button>
          </div>
        </div>

        {/* Learning Kit Add-ons */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-fraunces font-bold text-foreground mb-2">
            Make it a Learning Kit
          </h3>
          <p className="text-sm text-muted-foreground mb-8">In-Person Events Only</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-secondary rounded-xl px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-warm-gold/20 flex items-center justify-center">
                <span className="text-lg">🃏</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Add Flashcards</p>
                <p className="text-sm text-muted-foreground">+$3</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-secondary rounded-xl px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-light-sage/50 flex items-center justify-center">
                <span className="text-lg">🧺</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Add Kids Basket</p>
                <p className="text-sm text-muted-foreground">+$5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
