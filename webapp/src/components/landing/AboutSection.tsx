import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary via-light-sage/30 to-soft-peach/50 relative">
              <img
                src={`${import.meta.env.BASE_URL}dr-amy-salter.png`}
                alt="Dr. Amy Salter"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card border border-border rounded-2xl p-4 md:p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-fraunces font-bold text-sm text-foreground">10+ Years</p>
                  <p className="text-xs text-muted-foreground">in Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-foreground mb-8">
              Meet Dr. Amy Salter
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Dr. Amy Salter is an educator, researcher, and mom passionate about helping children become confident readers.
              </p>
              <p>
                With over a decade of experience in education and technology, she created the <strong className="text-foreground">We Read Too™</strong> series to make early literacy engaging, accessible, and affirming for all children.
              </p>
              <p>
                Her work centers on building strong reading foundations through simple, joyful, and meaningful learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
