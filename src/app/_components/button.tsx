import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  blue?: boolean;
  white?: boolean;
  className?: string;
}>;

export const Button: React.FC<Props> = ({
  children,
  blue,
  white,
  className,
}) => {
  return (
    <button
      className={clsx(
        "rounded px-7 py-4 text-lg",
        {
          "bg-blue-dark text-white": blue,
          "bg-white text-blue-dark": white,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
