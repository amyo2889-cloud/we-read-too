import { BookOpen, Users, Sparkles } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    step: "Step 1",
    title: "Choose your books",
    description: "Pick from our engaging sight word stories.",
  },
  {
    icon: Users,
    step: "Step 2",
    title: "Read together",
    description: "Share the stories as a family experience.",
  },
  {
    icon: Sparkles,
    step: "Step 3",
    title: "Build confidence",
    description: "Watch your child grow into a confident reader.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-foreground">
            Start Your Child's Reading Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, i) => (
            <div key={item.step} className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-fraunces font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
