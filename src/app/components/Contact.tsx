import { MotionDiv } from '../lib/motion'
import ContactForm from './ContactForm'
import { EmailBtn } from './EmailBtn'
import { CVBtn } from './CVBtn'
import { SectionContainer } from './SectionContainer'

export const Contact = () => {
  return (
    <SectionContainer id="contact" title="Contact">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <p className="max-w-2xl text-center text-lg">
          Feel free to send me an email. If you have any questions or just want
          to say hello,
        </p>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex items-center gap-4 sm:flex-col sm:gap-3"
        >
          <EmailBtn />
          <CVBtn />
        </MotionDiv>
      </MotionDiv>
      <ContactForm />
    </SectionContainer>
  )
}
