import useMediaQuery from "../../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

function LandingPage({ setSelectedPage }){

    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    return (
        <section id='home' className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">


            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-tiffany-blue before:z-[-1]">
                        <img className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]" alt='profile-picture' src='https://i.pinimg.com/564x/07/b5/60/07b560873c8d287c51f0eefc2604603d.jpg' />
                    </div>
                ) : (
                    <img className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]" alt='profile-picture' src='https://i.pinimg.com/564x/07/b5/60/07b560873c8d287c51f0eefc2604603d.jpg' />
                )}
                </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9 }} variants={{ hidden: { opacity: 0, x: -50 },
                       visible: { opacity: 1, x: 0 } }}>
                        <p className="text-6xl font-heading z-10 text-center md:text-start">
                            Guillermo <br></br>
                            <span className="xs:relative xs:text-pale-purple xs:font-semibold z-20 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">Hernandez-Lopez</span> {/* add xs:before:content-brush */}
                        </p>
                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            I am an enthusiastic and highly motivated Full Stack Software Engineer
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
                    <motion.div className="flex mt-5 justify-center md:justify-start" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -50 },
                       visible: { opacity: 1, x: 0 } }}>
                        <AnchorLink className="bg-gradient-rainbow text-white rounded-sm py-3 px-7 font-semibold hover:text-pale-purple transition duration-700 w-[160px] h-[50px] text-center uppercase" onClick={() => setSelectedPage('contact')} href="#contact">
                            Contact Me
                        </AnchorLink>
                        <AnchorLink className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5 w-[160px] h-[50px] text-center uppercase" onClick={() => setSelectedPage('contact')} href="#contact">
                            <div className="bg-space-blue hover:text-pale-purple transition duration-700 w-full h-full flex items-center justify-center font-subheading">
                                Let's talk.
                            </div>
                        </AnchorLink>
                    </motion.div>
                    <motion.div className="flex mt-5 justify-center md:justify-start" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, delay: 0.4 }} variants={{ hidden: { opacity: 0, x: -50 },
                       visible: { opacity: 1, x: 0 } }}>
                        
                    </motion.div>
                </div>
        </section>
    )
}

export default LandingPage