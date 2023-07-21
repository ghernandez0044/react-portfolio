import LineGradient from "../LineGradient"
import { motion } from "framer-motion"
import Project from "../Project"

function Projects(){

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <section id='projects' className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div className="md:w-2/5 mx-auto text-center" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: -50 },
                       visible: { opacity: 1, y: 0 } }}>
                <div>
                    <p className="font-subheading font-semibold text-4xl uppercase">
                        My <span className="text-pale-purple">Pro</span>jects
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    A list of projects showcasing my proficiency in using my listed skills and technologies
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div className="sm:grid sm:grid-cols-3" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} variants={container}>
                    <div className="flex justify-center text-center items-center p-10 bg-firengine-red max-w-[400px] max-h-[400px] text-2xl font-subheading font-semibold">
                        Beautiful User Interfaces
                    </div>
                    <Project title='infinityx' projectVariant={projectVariant} source='https://github.com/ghernandez0044/infinityx-capstone/assets/100185260/06046d4a-5b71-43ea-bde5-c3b33a5917d7' />
                    <Project title='spotsbnb' projectVariant={projectVariant} source='https://github.com/ghernandez0044/spotsbnb/assets/100185260/4092006f-452c-471c-9d72-15661f909592' />

                    {/* ROW 2 */}
                    <Project title='tinterest' projectVariant={projectVariant} />
                    <Project title='tinterest' projectVariant={projectVariant} />
                    <Project title='tinterest' projectVariant={projectVariant} />

                    {/* ROW 3 */}
                    <Project title='tinterest' projectVariant={projectVariant} />
                    <Project title='tinterest' projectVariant={projectVariant} />

                    <div className="flex justify-center text-center items-center p-10 bg-pale-purple max-w-[400px] max-h-[400px] text-2xl font-subheading font-semibold">
                        Smooth User Experience
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default Projects