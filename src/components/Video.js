import { motion, useScroll, useTransform } from "framer-motion";

export default function Video() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  return (
    <motion.div style={{
      opacity,
      height: "100vh",
      background: "#111",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px"
    }}>
      Video Section
    </motion.div>
  );
}
