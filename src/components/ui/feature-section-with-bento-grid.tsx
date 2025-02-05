"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    // {
    //   title: "Track issues effectively",
    //   description:
    //     "Track and manage your project issues with ease using our intuitive interface.",
    //   skeleton: <SkeletonOne />,
    //   className:
    //     "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r dark:border-neutral-800",
    // },
    // {
    //   title: "Capture pictures with AI",
    //   description:
    //     "Capture stunning photos effortlessly using our advanced AI technology.",
    //   skeleton: <SkeletonTwo />,
    //   className: "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
    // },
    {
      title: "Watch our Story on YouTube",
      description:
        "Whether its you or Tyler Durden, you can get to know about our journey on YouTube",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "Know Kenesis",
      description:
        "Kenesis: We don’t just move fast—we automate the future. 🚀",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-black">
          Who are we and what do we do?
        </h4>

        {/* <p className="text-base lg:text-lg max-w-2xl my-4 mx-auto text-neutral-600 text-center font-normal">
        From chatting with your PDFs to generating smart notes, Study Sensei has everything you need to study smarter. Quiz yourself, create question papers, and master any topic effortlessly.
        </p> */}
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 gap-4 px-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        `p-4 sm:p-8 relative overflow-hidden bg-white border-2 border-black transform transition-transform hover:translate-x-1 hover:translate-y-1 rounded-xl`, 
        className
      )}
      style={{
        boxShadow: '4px 4px 0 0 #000',
      }}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-xl md:text-2xl font-bold text-black mb-2">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-base text-neutral-600 mb-4">
      {children}
    </p>
  );
};

// export const SkeletonOne = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full mx-auto bg-white border-2 border-black h-full transform transition-transform hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '4px 4px 0 0 #000' }}>
//         <div className="flex flex-1 w-full h-full flex-col space-y-2">
//           <Image
//             src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1920&q=75"
//             alt="header"
//             width={800}
//             height={800}
//             className="h-full w-full aspect-square object-cover object-left-top"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export const SkeletonThree = () => {
  return (
    <Link
      href="https://youtu.be/C05egU-FcUc?si=rX6H5ImeeZeUE0Ia"
      target="__blank"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-white border-2 border-black h-full transform transition-transform hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '4px 4px 0 0 #000' }}>
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <Image
            src="https://img.youtube.com/vi/C05egU-FcUc/maxresdefault.jpg"
            alt="YouTube video thumbnail"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center group-hover/image:blur-sm transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

// export const SkeletonTwo = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const rotations = [-4, -2, 3, -5, 2];
//   const rotations2 = [2, -3, 4, -2, 5];

//   const imageVariants = {
//     whileHover: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//     whileTap: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//   };
//   return (
//     <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
//       <div className="flex flex-row -ml-20">
//         {images.map((image, idx) => (
//           <motion.div
//             variants={imageVariants}
//             key={"images-first" + idx}
//             style={{
//               rotate: rotations[idx],
//               boxShadow: '4px 4px 0 0 #000'
//             }}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-none -mr-4 mt-4 p-1 bg-white border-2 border-black flex-shrink-0 overflow-hidden transform transition-transform hover:translate-x-1 hover:translate-y-1 rounded-xl"
//           >
//             <Image
//               src={image}
//               alt="bali images"
//               width="500"
//               height="500"
//               className="h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className="flex flex-row">
//         {images.map((image, idx) => (
//           <motion.div
//             key={"images-second" + idx}
//             style={{
//               rotate: rotations2[idx],
//               boxShadow: '4px 4px 0 0 #000'
//             }}
//             variants={imageVariants}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-none -mr-4 mt-4 p-1 bg-white border-2 border-black flex-shrink-0 overflow-hidden transform transition-transform hover:translate-x-1 hover:translate-y-1 rounded-xl"
//           >
//             <Image
//               src={image}
//               alt="bali images"
//               width="500"
//               height="500"
//               className="h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

export const SkeletonFour = () => {
  return (
    <a 
      href="https://kenesis.in" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative flex py-8 px-2 gap-10 h-full cursor-pointer transition-transform hover:scale-105"
    >
      <div className="w-full mx-auto bg-white h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="/logo.png"
            alt="Kenesis Logo"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-contain p-8"
          />
        </div>
      </div>
    </a>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
