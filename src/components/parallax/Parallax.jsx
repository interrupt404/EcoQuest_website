import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <div className="cont">
        <motion.h1 className="head" style={{ y: yText }}>
          What we do?
        </motion.h1>
        <motion.h2 className="texti" style={{ y: yText }}>
          {type === "services"
            ? "Our gaming website provides an immersive experience focused on environmental awareness and action. Through interactive gameplay, users learn about environmental challenges like climate change and pollution. By making informed choices, they can work towards preserving and restoring the environment. Our platform aims to bridge the gap between knowledge and action, inspiring collective efforts towards sustainability.?"
            : "What We Did?"}
        </motion.h2>
      </div>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
