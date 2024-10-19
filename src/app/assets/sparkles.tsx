import { useState, useEffect } from "react";
import { SpinningDiamond } from "../animations/spinningDiamond";

export const Sparkles = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  // Listen for window resize events and update the state accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the Tailwind `md` breakpoint
    };

    handleResize(); // Set initial value on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-center p-4 md:p-8">
        <SpinningDiamond size="100px" rotate={360} />
        <div className="flex justify-end">
          <SpinningDiamond size="30px" rotate={-360} />
        </div>
      </div>


        <div className="w-full md:w-[250px] h-[0px] flex flex-col items-start space-y-4 md:space-y-2">
          <div className="flex justify-end items-end">
            <SpinningDiamond size="30px" rotate={-360} />
          </div>
          <SpinningDiamond size="200px" rotate={-360} />
          <SpinningDiamond size="30px" rotate={-360} />
        </div>


      {!isMobile && (
        <>
        <div className="flex justify-end items-center p-4 md:p-8">
          <SpinningDiamond size="150px" rotate={360} />
          {!isMobile && <SpinningDiamond size="30px" rotate={-360} />}
        </div>

        <div className="flex justify-around items-center p-4 md:p-8">
          <SpinningDiamond size="150px" rotate={360} />
          {!isMobile && <SpinningDiamond size="50px" rotate={-360} />}
        </div>
        </>
        )}
    </>
  );
};