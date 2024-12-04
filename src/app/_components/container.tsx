import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-[1270px] mx-auto">{children}</div>;
};
