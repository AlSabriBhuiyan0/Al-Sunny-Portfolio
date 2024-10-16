import Link from 'next/link'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="flex items-center justify-between md:justify-center">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-2xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            Hello, my name is{' '}
            <span className="font-bold text-target">
              Al Sabri Bhuiyan(Sunny)
            </span>
            . I’m a
            <span className="font-bold text-target"> Data Scincetist </span>
            professional passion for turning complex data into actionable
            insights and building user-friendly With 3 years of experience in
            this fields, I bring a unique combination of analytical thinking and
            technical expertise. My goal is to create value by leveraging data
            and technology to solve real-world problems. And I am also a{' '}
            <span className="font-bold text-target"> Web Developer</span> with
            experience in both front-end and back-end technologies. I have
            worked with tools like React, Next.js, Node.js, and I enjoy solving
            complex challenges to build dynamic, user-friendly web applications.
            I’m constantly exploring new tech and staying up-to-date with the
            latest trends in the field.
          </p>
          <p>
            My portfolio includes projects like real-time collaborative tools,
            resume builders. I’m always looking for new opportunities to grow
            and collaborate with others in the tech space. Feel free to reach
            out!
          </p>
          <MotionDiv className="flex justify-start md:justify-center">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
            >
              Contact me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-end pl-8 md:hidden"
        >
          <div className="w-80 pb-10">
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
              <span className="h-3 w-48 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
