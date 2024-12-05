import { PropsWithChildren } from "react";
import { Arrow } from "@/assets/svg";
import clsx from 'clsx';

type Porps = PropsWithChildren<{
  className?: string;
}>;

export const ArrowButton: React.FC<Porps> = ({ children, className }) => {
  return (
    <button className={clsx("flex items-center gap-2 py-2", className)}>
      {children}
      {<Arrow />}
    </button>
  );
};
