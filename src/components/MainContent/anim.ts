import { Variants } from "framer-motion";

export const slideUpAnimation: Variants = {
  open: (i) => {
    return { transition: { duration: 0.05 * i }, opacity: 1 };
  },
  closed: {
    opacity: 1,
    // color:'rgba(0,0,0,.25)'
  },
};

const opacityAnimation: Variants = {
  open: {},
  closed: {},
};
