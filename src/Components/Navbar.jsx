import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Image en cercle avec object-cover pour bien l'adapter */}
        <img 
          className="mx-2 h-20 w-20 rounded-full object-cover" 
          src="./Logo2.jpg" 
          alt="logo" 
        />
      </div> 
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/ouissal-ben-zahi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Ouisal-ben-zahi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <FaGithub/>
        </a>
        {/* Exemple d'ajout des autres réseaux */}
        {/* <a href="#" className="text-gray-700 hover:text-black transition-colors">
          <FaSquareXTwitter />
        </a>
        <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
          <FaInstagram />
        </a> */}
      </div>
    </nav>
  )
}

export default Navbar