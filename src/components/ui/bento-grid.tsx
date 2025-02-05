import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-[90rem] mx-auto relative",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-10 opacity-40" />
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transition duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] bg-white border-2 border-black justify-between flex flex-col space-y-4 p-10",
        className
      )}
    >
      <div className="h-72 w-full relative overflow-hidden rounded-lg">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex items-center gap-3">
          <div className="p-3 w-12 h-12 rounded-lg border-2 border-black flex items-center justify-center bg-[#faf9f6]">
            {icon}
          </div>
          <div className="font-bold text-2xl text-black mb-2 mt-2">
            {title}
          </div>
        </div>
        <div className="font-medium text-neutral-600 text-base mt-4 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
