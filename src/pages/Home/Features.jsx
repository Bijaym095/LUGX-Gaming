import FeatureCard from "@/components/FeatureCard";
import { features } from "@/data";

const Features = () => {

  return (
    <section className="container py-8 md:py-14">
      <div className="flex flex-wrap justify-center gap-y-6 -mx-3">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-3">
            <FeatureCard icon={feature.icon} title={feature.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
