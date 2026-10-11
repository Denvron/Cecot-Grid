import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import instagram from '../assets/images/icons8-instagram-48.png'
import facebook from '../assets/images/icons8-facebook-48.png'
import twitter from '../assets/images/icons8-twitter-48.png'
import youtube from '../assets/images/icons8-youtube-48.png'
import LogoNew from '../assets/images/Logo New.jpeg'



const Footer = ({onOpenPrivacy, onOpenTerms}) => {
  return (
    <footer id="footer" className="bg-[#060B16] border-t border-slate-900 py-16 px-6 md:px-12 lg:px-24 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-xs text-slate-500 mb-12">
        <div>
          {/* <div className="h-40 w-48"> */}
            {/* <div className="w-7 h-7 rounded bg-gradient-to-tr from-amber-500 to-slate-200 p-[1.2px] flex items-center justify-center">
              <div className="bg-[#060B16] w-full h-full rounded flex items-center justify-center font-black text-amber-400 text-xs">D</div>
            </div>
            <span className="text-white font-extrabold tracking-wider">DENVRON</span> */}
            <img src={LogoNew} alt="" className='mb-4'/>
          {/* </div> */}
          {/* <p className="text-slate-400 leading-relaxed">Sculpting immersive rhythmic journeys where progressive electronic precision meets organic percussive warmth.</p> */}
            <div className='flex gap-3'>
              <a href="https://www.facebook.com/cecotgrid" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 ml-12.5 md:ml-10">
                {/* <FaFacebook className="w-6 h-6 mt-1" /> */}
                <img src={facebook} alt="" className='w-8 h-8' />
              </a>
              <a href="https://www.instagram.com/cecotgrid/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500">
                {/* <FaInstagramSquare className="w-6 h-6" /> */}
                <img src={instagram} alt="" className='w-8 h-8' />
              </a>
              <a href="https://twitter.com/cecotgrid" target="_blank" rel="noopener noreferrer" className="text-blue-600  hover:text-blue-500">
                {/* <FaTwitter className="w-6 h-6" /> */}
                <img src={twitter} alt="" className='w-8 h-8' />
              </a>
              <a href="https://www.youtube.com/@cecotgrid" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-red-700">
                {/* <FaYoutube className="w-6 h-6" />  */}
                <img src={youtube} alt="" className='w-8 h-8' />
              </a>
              <a href="https://www.youtube.com/@cecotgrid" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
                <FaSpotify className="w-6 h-6 mt-1" /> 
              </a>
            </div>
        </div>

        <div>
          <h4 className="text-slate-300 font-bold tracking-widest uppercase mb-4">Specialized In</h4>
          <ul className="space-y-2.5 text-slate-400">
            <li><a href="#services" className="hover:text-amber-400">Progressive House</a></li>
            <li><a href="#services" className="hover:text-amber-400">Afro House</a></li>
            <li><a href="#services" className="hover:text-amber-400">Organic House</a></li>
            <li><a href="#services" className="hover:text-amber-400">Melodic House</a></li>
            <li><a href="#services" className="hover:text-amber-400">Club Hits</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-300 font-bold tracking-widest uppercase mb-4">Company</h4>
          <ul className="space-y-2.5 text-slate-400">
            <li><a href="#about" className="hover:text-amber-400">About Us</a></li>
            <li><a href="#sounds" className="hover:text-amber-400">Audio Vault</a></li>
            <li><a href="#gallery" className="hover:text-amber-400">Visual Archive</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-300 font-bold tracking-widest uppercase mb-4">Contact</h4>
          <ul className="space-y-2.5 text-slate-400">
            <li>✉️ cecotgrid@gmail.com</li>
            <li>📞 +94 776 462 433</li>
            <li>📍 Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 mb-12">
        <p>© 2026 CECOT GRID. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0 mb-2 md:mb-0">
          {/* <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span> */}

          <button 
            onClick={onOpenPrivacy} 
            className="hover:text-[#f2a93b] transition-colors uppercase"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button 
            onClick={onOpenTerms} 
            className="hover:text-[#f2a93b] transition-colors uppercase"
          >
            Terms of Service
          </button>
        </div>
        <div>designed & developed by - <a href="https://denvron.vercel.app/" className="hover:text-slate-300 cursor-pointer">denvron</a></div>
      </div>
    </footer>
  )
}

export default Footer