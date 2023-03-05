import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode
}

const Scroll: FC<Props> = ({ children }) => {
  return (
    <div className="scroll bb bw2">
      {children}
    </div>
  );
};

export default Scroll;
