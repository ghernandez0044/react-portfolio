import useMediaQuery from "../../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import SocialMediaIcons from "../SocialMediaIcons"

const LandingPage = ({ setSelectedPage }) => {
    const isAboveLargeScreens = useMediaQuery("(min-width: 1060px)");
    return (
      <section
        id="home"
        className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      >
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          {isAboveLargeScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
              before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-tiffany-blue before:z-[-1]"
            >
              <img
                alt="profile-picture"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                src="https://avatars.githubusercontent.com/u/100185260?s=400&u=23abf72a8939f9a0908abd7e969d60d2c55b7f76&v=4"
              />
            </div>
          ) : (
            <img
              alt="profile-picture"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="https://avatars.githubusercontent.com/u/100185260?s=400&u=23abf72a8939f9a0908abd7e969d60d2c55b7f76&v=4"
            />
          )}
        </div>
  
        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-heading z-10 text-center md:text-start">
              Guillermo {""}
              <span
                className="xs:relative xs:text-pale-purple xs:font-semibold z-20
                before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
                Hernandez-Lopez
              </span> {/* add xs:before:content-brush */}
            </p>
  
            <p className="mt-10 mb-7 text-sm text-center md:text-start">
              I am a full stack software engineer
            </p>
          </motion.div>
  
          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="bg-gradient-rainbow text-white rounded-sm py-3 px-7 font-semibold hover:text-pale-purple transition duration-700 w-[160px] h-[50px] text-center uppercase"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
              className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5 w-[160px] h-[50px] text-center uppercase"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className="bg-space-blue hover:text-pale-purple transition duration-700 w-full h-full flex items-center justify-center font-subheading">
                Let's talk.
              </div>
            </AnchorLink>
          </motion.div>
  
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default LandingPage;