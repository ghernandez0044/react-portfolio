import LineGradient from "../LineGradient";
import { useForm } from 'react-hook-form'
import { motion } from "framer-motion";

function Contact(){
    const { register, trigger, formState: {errors} } = useForm()

    const onSubmit = async (e) => {
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
    }

    return (
        <section id='contact' className="py-48">
            {/* HEADINGS */}
            <motion.div className="basis-1/2 flex justify-center" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                <div>
                    <p className="uppercase font-subheading font-semibold text-4xl">
                        <span className="text-tiffany-blue">Contact Me</span>
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="mx-auto w-2/4" />
                    </div>
                </div>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div className="basis-1/2 mt-10 md:mt-0" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="contact" />
                </motion.div>
                <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <form target="_blank" onSubmit={onSubmit} action="" method="POST">
                        
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
