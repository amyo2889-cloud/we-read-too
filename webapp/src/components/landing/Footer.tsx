import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-fraunces text-lg font-bold text-foreground">We Read Too™</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A DiscoveryGate Publishing Brand
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Helping children build confidence through reading.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-fraunces font-bold text-foreground mb-4">Follow Us</h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.instagram.com/wereadtoobooks"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                @wereadtoobooks
              </a>
              <a
                href="https://www.instagram.com/thegoalcoach"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                @thegoalcoach
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-fraunces font-bold text-foreground mb-4">Contact</h4>
            <a
              href="mailto:thegoalcoachllc@outlook.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              thegoalcoachllc@outlook.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 DiscoveryGate Publishing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
