import { SpinningDiamond } from "../animations/spinningDiamond";

export const Sparkles = (): JSX.Element => {
  return (
    <>
      <div className="flex align-center h-[0px] justify-center p-20px">
        <SpinningDiamond size="100px" rotate={360} />
        <div className="flex justify-end">
          <SpinningDiamond size="30px" rotate={-360} />
        </div>
      </div>
      <div className="w-[250px] h-[0px] justify-start">
        <div className="flex justify-end align-bottom">
          <SpinningDiamond size="30px" rotate={-360} />
        </div>
        <SpinningDiamond size="200px" rotate={-360} />
        <SpinningDiamond size="30px" rotate={-360} />
      </div>
      <div className="flex justify-end">
        <SpinningDiamond size="150px" rotate={360} />
        <SpinningDiamond size="30px" rotate={-360} />
      </div>
      <div className="flex justify-around align-center">
        <SpinningDiamond size="150px" rotate={360} />
        <SpinningDiamond size="50px" rotate={-360} />
      </div>
    </>
  );
};
