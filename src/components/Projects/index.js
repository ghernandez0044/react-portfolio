import LineGradient from "../LineGradient"
import { motion } from "framer-motion"

function Projects(){

    return (
        <section id='projects' className="pt-48 pb-48">
            {/* HEADINGS */}
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
        </section>
    )
}

export default Projects