import { MotionDiv } from '../lib/motion'

import { Github, Linkedin, Instagram, Facebook } from 'lucide-react'

export const socialData = [
  { link: 'https://github.com/Alsabribhuiyan0/', icon: <Github /> },
  { link: 'https://linkedin.com/in/Alsabribhuiyan/', icon: <Linkedin /> },
  { link: 'https://www.instagram.com/alsunny65/', icon: <Instagram /> },
  { link: 'https://www.facebook.com/alsabribhuiyan/', icon: <Facebook /> }
]

export const SocialLinks = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-10 flex flex-col items-center gap-y-4 md:hidden"
    >
      {socialData.map((social, index) => (
        <a
          key={index}
          className="transition hover:-translate-y-1 hover:text-target"
          target="_blank"
          href={social.link}
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
      <div className="mt-4 h-32 w-[2px] origin-bottom bg-target"></div>
    </MotionDiv>
  )
}
