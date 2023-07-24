import { motion } from "framer-motion"

function Project({ title, projectVariant, source }){

    const projectTitle = title.split(" ").join("-").toLowerCase()
    const overlayStyles = 'absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-pale-purple z-30 flex flex-col justify-center items-center text-center p-16 text-space-blue cursor-pointer'

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-3xl font-subheading font-semibold">{title}</p>
                <p className="mt-7"> 
                </p>
            </div>
            <img src={source ? source : `../assets/${projectTitle}.png`} alt={projectTitle} />
        </motion.div>
    )
}

export default Project