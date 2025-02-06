"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Add these styles to your global CSS or create a new style block
const styles = `
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

export function FeaturesBento() {
  return (
    <div className="relative z-20 py-24 max-w-[90rem] mx-auto px-6">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-5xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
          Study Smarter with AI
        </h2>
        <p className="text-xl text-neutral-600 font-medium leading-relaxed">
          Our AI-powered features help you learn more effectively and retain information better.
        </p>
      </div>
      <BentoGrid className="max-w-[85rem] mx-auto md:auto-rows-[24rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-col space-y-4"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border-2 border-black p-4 items-center space-x-4 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
      >
        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-neutral-100 h-4 rounded-lg" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-lg border-2 border-black p-4 items-center space-x-4 w-3/4 ml-auto bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
      >
        <div className="w-full bg-neutral-100 h-4 rounded-lg" />
        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(4).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-col space-y-4"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="h-8 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className="relative w-full h-full min-h-[6rem] perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d duration-500 cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.1 }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-lg border-2 border-black bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] flex items-center justify-center"
        >
          <div className="text-white text-xl font-bold">Flash Cards</div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-lg border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] rotate-y-180 flex flex-col items-center justify-center p-6"
        >
          <h3 className="text-lg font-bold mb-2">Interactive Learning</h3>
          <p className="text-sm text-center text-neutral-600">
            Create and study with AI-powered flashcards. Perfect for memorization and quick reviews.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-row space-x-4"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-lg bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center"
      >
        <div className="rounded-lg h-12 w-12 bg-gradient-to-r from-violet-500 to-pink-500" />
        <p className="text-sm font-bold text-black mt-4">
          Who is Tyler Durden?
        </p>
        <p className="border-2 border-green-500 bg-green-100 text-green-600 text-xs rounded-lg px-2 py-1 mt-4 font-medium">
          Correct
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-lg bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center">
        <div className="rounded-lg h-12 w-12 bg-gradient-to-r from-blue-500 to-cyan-500" />
        <p className="text-sm font-bold text-black mt-4">
          What's the first rule?
        </p>
        <p className="border-2 border-blue-500 bg-blue-100 text-blue-600 text-xs rounded-lg px-2 py-1 mt-4 font-medium">
          ***** ****
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-lg bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center"
      >
        <div className="rounded-lg h-12 w-12 bg-gradient-to-r from-orange-500 to-yellow-500" />
        <p className="text-sm font-bold text-black mt-4">
          What is Freedom?
        </p>
        <p className="border-2 border-orange-500 bg-orange-100 text-orange-600 text-xs rounded-lg px-2 py-1 mt-4 font-medium">
          Losing all hope
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-col space-y-4"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border-2 border-black p-6 items-start space-x-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
      >
        <div className="rounded-lg h-12 w-12 bg-gradient-to-r from-purple-500 to-indigo-500 flex-shrink-0" />
        <p className="text-sm font-medium text-neutral-600">
        The first rule of Fight Club is you do not talk about Fight Club...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-lg border-2 border-black p-4 items-center justify-end space-x-4 w-3/4 ml-auto bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
      >
        <p className="text-sm font-medium text-neutral-600">You're not allowed to talk about Fight Club.</p>
        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Chat with PDF",
    description: (
      <span className="text-sm">
        Upload your PDFs and let AI extract key concepts and have a chat with it.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-5 w-5 text-neutral-700" />,
  },
  {
    title: "Smart Notes",
    description: (
      <span className="text-sm">
        AI generates notes for you to dive deep into the concepts without being forced to test your understanding.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-5 w-5 text-neutral-700" />,
  },
  {
    title: "Flash Cards",
    description: (
      <span className="text-sm">
        Engage with your study materials through AI-powered flashcards.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-5 w-5 text-neutral-700" />,
  },
  {
    title: "Quiz Yourself and Exam it",
    description: (
      <span className="text-sm">
        Quiz yourself on your study materials and test your understanding, (don't worry if you don't know the answer, we will give you the hint.)
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-5 w-5 text-neutral-700" />,
  },
  {
    title: "Cram Your Notes",
    description: (
      <span className="text-sm">
        Late for your exam? Cram your notes with AI.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-5 w-5 text-neutral-700" />,
  },
];
