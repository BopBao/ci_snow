import { Variants } from "framer-motion";

export const carousel_variants: Variants = {
  show: {
    display: "flex",
    opacity: 1,
    transition: {
      delay: 0.4,
      ease: "easeIn",
      duration: 0.2,
      type: "tween"
    }
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    },
    transitionEnd: {
      display: "none"
    }
  },
  initial: {
    opacity: 0,
  }
}
