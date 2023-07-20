import LineGradient from "../LineGradient"
import { motion } from "framer-motion"

function Projects(){

    return (
        <section id='projects' className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div className="md:w-2/5 mx-auto text-center" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9 }} variants={{ hidden: { opacity: 0, y: -50 },
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
                    A list of programming languages and frameworks I have experience building projects with
                </p>
            </motion.div>
        </section>
    )
}

export default Projects