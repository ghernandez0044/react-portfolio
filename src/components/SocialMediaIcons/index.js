function SocialMediaIcons(){


    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-700 font-heading uppercase hover:text-pale-purple" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                {/* <i className="fa-brands fa-linkedin" /> */}
                LinkedIn
            </a>
            <a className="hover:opacity-50 transition duration-700 font-heading uppercase hover:text-pale-purple" href="https://www.github.com" target="_blank" rel="noreferrer">
                {/* <i className="fa-brands fa-github" /> */}
                GitHub
            </a>
            <a className="hover:opacity-50 transition duration-700 font-heading uppercase hover:text-pale-purple" href="https://www.angellist.com" target="_blank" rel="noreferrer">
                {/* <i className="fa-brands fa-angellist" /> */}
                AngelList
            </a>
        </div>
    )
}

export default SocialMediaIcons