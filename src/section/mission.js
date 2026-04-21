import Card from "@/components/card";
import { missionData } from "@/data/data";

export default function Mission() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">Mission</p> */}
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">My Areas of Focus</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            I'm passionate about serving communities and advancing spiritual growth through these key areas of ministry and impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {missionData.map((item) => (
            <Card
              key={item.id}
              icon={
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-8 w-8 object-contain"
                />
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

