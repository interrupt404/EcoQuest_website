import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Choose Your Path",
    img: 'img/1.jpg',
    desc: "Embark on your environmental journey as you enter our gaming platform. Will you choose the path of destruction in Degradation Mode or the path of preservation in Preservation Mode? The choice is yours to make",
  },
  {
    id: 2,
    title: "Consequences Unveiled",
    img: 'img/2.jpg',
    desc: "In Degradation Mode, engage in activities that harm the environment. Witness firsthand the consequences of your actions as environmental degradation unfolds before your eyes. Gain a deeper understanding of the negative impacts of human activities on our plane",
  },
  {
    id: 3,
    title: "Embrace Positive Change",
    img: "img/3.jpg",
    desc: "Feeling the weight of your choices, you're prompted to switch to Preservation Mode. Here, engage in activities aimed at preserving and restoring the environment. Learn about the positive impact of your actions as you witness environmental improvements",
  },
  {
    id: 4,
    title: "Empowered for Change",
    img: "img/4.jpg",
    desc: "As you complete Preservation Mode, you're not just a gamer but an agent of change. Encouraged to continue your positive actions in real life, you carry the lessons learned from the game into the world beyond. With each loop back to mode selection, you're empowered to make a difference in the fight for a sustainable future",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://codepen.io/interrupt404/full/xxeEGvj"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Pathways of Change: Storyline</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
