import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="h-10 w-10 text-primary/30 mx-auto mb-6 rotate-180" />
        <blockquote className="text-2xl md:text-3xl font-fraunces font-medium text-foreground leading-relaxed italic">
          "My child is more excited about reading than ever before."
        </blockquote>
        <div className="mt-6 w-12 h-0.5 bg-primary/30 mx-auto" />
      </div>
    </section>
  );
};

export default Testimonial;
