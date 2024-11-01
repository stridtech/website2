import Image from "next/image";
import HeroKeyBridge from "@/public/images/hero-key-bridge.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

import features_data from "@/data/features.json";

function icon_path_to_path(
  icon_path: string | { opacity: string; path: string }[]
) {
  if (typeof icon_path === "string") {
    return <path d={icon_path} />;
  } else {
    return icon_path.map((ip) => (
      <>
        <path opacity={ip.opacity} d={ip.path} />
      </>
    ));
  }
}

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Key Features
            </h2>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            {features_data.map((feature) => (
              <article id={feature.title}>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    {icon_path_to_path(feature.icon_path)}
                  </svg>
                  <span>{feature.title}</span>
                </h3>
                <p className="text-[15px] text-gray-400">{feature.content}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
