import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Empower change, reshape the climate
          <br /> Play to revolutionize perspectives on our planet's future.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <motion.h2 variants={textVariants}>About Us</motion.h2>
        </div>
        <div className="title">
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="img/boy1.png" alt="Chan" />
          <p>
           FrontEnd Developer
          </p>
          <button>Rajat</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="img/boy3.png" alt="Chan" />
          <p>
            Game Developer
          </p>
          
          <button>Chandan</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="img/boy2.png" alt="Chan" />
          <p>
            FrontEnd Developer
          </p>
          <button>Gaurav</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="img/boy4.png" alt="Chan" />
          <p>
           Game Developer
          </p>
          <button>Manish</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="img/girl1.png" alt="Chan" />
          <p>
           UI/UX Designer
          </p>
          <button>Anjali</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="img/girl2.png" alt="Chan" />
          <p>
            UI/UX Designer
          </p>
          <button>Samya</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
