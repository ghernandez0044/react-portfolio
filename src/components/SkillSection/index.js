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
                            <img className="z-10" alt='skills' src='https://avatars.githubusercontent.com/u/100185260?s=400&u=23abf72a8939f9a0908abd7e969d60d2c55b7f76&v=4' />
                        </div>
                    ) : (
                        <img className="z-10" alt='skills' src='https://avatars.githubusercontent.com/u/100185260?s=400&u=23abf72a8939f9a0908abd7e969d60d2c55b7f76&v=4' />   
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:flex-wrap md:w-screen md:justify-between mt-16 gap-32 border-2 border-red-600">
                {/* EXPERIENCE 1 */}
                <motion.div className="md:w-1/3 mt-10 border-2 border-white flex flex-col justify-center items-center" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32 border-2 border-gray-700">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">01</p> */}
                                <img className="w-[75px] h-[75px] mx-auto" alt='logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
                                <p className="font-subheading font-semibold text-3xl text-pale-purple mt-3">JavaScript</p>
                            </div>
                        </div>
                </motion.div>
                {/* EXPERIENCE 2 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">02</p> */}
                                <img className="w-[75px] h-[75px]" alt='express logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">Express</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 3 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.4 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">03</p> */}
                                <img className="w-[75px] h-[75px]" alt='sequelize logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">Sequelize</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 4 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.6 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">04</p> */}
                                <img className="w-[75px] h-[75px]" alt='python logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">Python</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 5 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.8 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">05</p> */}
                                <img className="w-[75px] h-[75px]" alt='flask logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">Flask</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 6 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">06</p> */}
                                <img className="w-[75px] h-[75px]" alt='sqlalchemy logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">SQLAlchemy</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 7 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">07</p> */}
                                <img className="w-[75px] h-[75px]" alt='react logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">React</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 8 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">08</p> */}
                                <img className="w-[75px] h-[75px]" alt='redux logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">Redux</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 9 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">09</p> */}
                                <img className="w-[75px] h-[75px]" alt='html logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">HTML</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 10 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">10</p> */}
                                <img className="w-[75px] h-[75px]" alt='css logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">CSS</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 11 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">11</p> */}
                                <img className="w-[75px] h-[75px]" alt='css logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">TailwindCSS</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 12 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">12</p> */}
                                <p className="font-subheading font-semibold text-3xl mt-3">FramerMotion</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 13 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">13</p> */}
                                <p className="font-subheading font-semibold text-3xl mt-3">SQL</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 14 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">14</p> */}
                                <img className="w-[75px] h-[75px]" alt='postgresql logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">PostgreSQL</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 15 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">15</p> */}
                                <img className="w-[75px] h-[75px]" alt='sqlite logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">SQLite</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-pale-purple right-0 top-0 z-[-1]" />
                        </div>
                </motion.div>
                {/* EXPERIENCE 16 */}
                <motion.div className="md:w-1/3 mt-10" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 },
                       visible: { opacity: 1, y: 0 } }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                {/* <p className="font-subheading font-semibold text-5xl">16</p> */}
                                <img className="w-[75px] h-[75px]" alt='git logo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg' />
                                <p className="font-subheading font-semibold text-3xl mt-3">Git</p>
                            </div>
                            {/* <div className="w-1/2 md:w-3/4 h-32 bg-pale-purple absolute right-0 top-0 z-[-1]" /> */}
                        </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SkillSection