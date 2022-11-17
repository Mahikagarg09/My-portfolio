import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <div className=' 	flex flex-wrap items-center text-base justify-center mt-6 text-2xl'>
            <a href='https://www.linkedin.com/in/mahika-garg-7358b0228/' className='mr-5'><BsLinkedin /></a>
            <a href='https://github.com/Mahikagarg09' className='mr-5'><FaGithub /></a>
            <a href='https://twitter.com/MaHikA_GarG_23' className='mr-5'><FaTwitter /></a>
            <a href="https://www.instagram.com/_mahika_garg_/" className='mr-5'><FaInstagram /></a>
        </div>
    )
}

export default SocialLinks;
