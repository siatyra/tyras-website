export interface TransitionProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

export interface SpinningDiamondProps {
  size: string;
  rotate: number;
}

export interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}
