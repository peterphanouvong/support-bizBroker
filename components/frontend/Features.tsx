import { CloudRain } from "lucide-react";

const features = [
  {
    name: "Create your blog in minutes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nobis voluptates quis suscipit hic ad delectus sunt consequatur quaerat totam voluptate, nostrum error quas? Dolore dicta mollitia ipsum! Culpa, sit.",
    icon: CloudRain,
  },
  {
    name: "Super Secure with Kinde",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nobis voluptates quis suscipit hic ad delectus sunt consequatur quaerat totam voluptate, nostrum error quas? Dolore dicta mollitia ipsum! Culpa, sit.",
    icon: CloudRain,
  },
  {
    name: "Easy to use",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nobis voluptates quis suscipit hic ad delectus sunt consequatur quaerat totam voluptate, nostrum error quas? Dolore dicta mollitia ipsum! Culpa, sit.",
    icon: CloudRain,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Blog Faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get your blog up and running in minutes
        </h1>
        <p className="mt-6 text-base leading-snug text-gray-600">
          Create your blog in minutes right here! It is easy because we stripped
          away all the hassle.
        </p>
      </div>
      <div className="mx-auto nmt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16 pt-6">
              <div className="absolute top-6 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <feature.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="text-base font-semibold leading-7 text-gray-900">
                {feature.name}
              </div>
              <p className="mt-2 text-sm leading-normal text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
