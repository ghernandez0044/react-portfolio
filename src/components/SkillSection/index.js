import LineGradient from "../LineGradient"
import useMediaQuery from "../../hooks/useMediaQuery"
import { motion } from "framer-motion"

function SkillSection(){
    const isAboveLarge = useMediaQuery('(min-width: 1060px)')

    return (
        <section id='skills' className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div className="md:w-1/3" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9 }} variants={{ hidden: { opacity: 0, x: -50 },
                       visible: { opacity: 1, x: 0 } }}>
                        <p className="font-subheading font-semibold text-4xl mb:-5">
                            My <span className="text-pale-purple">Skills</span>
                        </p>
                        <LineGradient width="w-1/3" />
                        <p className="mt-10 mb-7">
                            A list of programming languages and frameworks I have experience building projects with
                        </p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-tiffany-blue before:z-[-1]">
                            <img className="z-10 h-[350px]" alt='skills' src='https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                        </div>
                    ) : (
                        <img className="z-10 h-[350px]" alt='skills' src='https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />   
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* FRONTEND */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                                    }}
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                            <p className="font-subheading font-semibold text-3xl mt-3 uppercase text-pale-purple">
                                Frontend
                                         </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-tiffany-blue absolute right-0 top-0 z-[-1]" />
                        </div>
                        <ul>
                            <li className="font-content">HTML</li>
                            <li className="font-content">CSS</li>
                            <li className="font-content">JavaScript</li>
                            <li className="font-content">React</li>
                            <li className="font-content">Redux</li>
                            <li className="font-content">TailwindCSS</li>
                            <li className="font-content">FramerMotion</li>
                        </ul>
                     </motion.div>

        {/* BACKEND */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3 uppercase">
                Backend
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-pale-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <ul>
            <li className="font-content">JavaScript</li>
            <li className="font-content">Express</li>
            <li className="font-content">SQL</li>
            <li className="font-content">Sequelize</li>
            <li className="font-content">Python</li>
            <li className="font-content">Flask</li>
            <li className="font-content">SQLAlchemy</li>
            <li className="font-content">Alembic</li>
          </ul>
        </motion.div>
        {/* DESIGN */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3 uppercase">
                Tools
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-firengine-red absolute right-0 top-0 z-[-1]" />
          </div>
          <ul>
            <li>Figma</li>
            <li>Git Version Control</li>
          </ul>
        </motion.div>
            </div>
        </section>
    )
}

export default SkillSection