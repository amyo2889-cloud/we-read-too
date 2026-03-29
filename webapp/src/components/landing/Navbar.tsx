import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group">
            <BookOpen className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <span className="font-fraunces text-lg md:text-xl font-bold text-foreground">
              We Read Too™
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Books", id: "books" },
              { label: "Bundles", id: "bundles" },
              { label: "About", id: "about" },
              { label: "Events", id: "events" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollTo("books")} size="sm" className="rounded-full px-6">
              Shop Books
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {[
              { label: "Books", id: "books" },
              { label: "Bundles", id: "bundles" },
              { label: "About", id: "about" },
              { label: "Events", id: "events" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollTo("books")} className="w-full rounded-full mt-2">
              Shop Books
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
