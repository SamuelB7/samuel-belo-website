import React from 'react'

function About() {
  return (
    <div id='about' className='w-full p-7 flex justify-center items-center'>
      <div className='max-w-7xl flex flex-col'>
        <div className='flex flex-col items-center justify-center text-justify'>
          <h2 className='py-2'>ABOUT ME</h2>
          <p className='py-2'>
            In 2016 I graduated in Business Administration from PUC-PR and was working in a relatively stable job, however, 
            I didn't feel professionally fulfilled, and honestly, I didn't like my job. Around 2019 I started to research other areas
            where I could fit in better and give myself the feeling of professional fulfillment I was looking for so much,
            that's when I saw in programming an opportunity to change careers. I've always been a very technical person,
            I really like to 'tweak' things, and use lines of code to solve problems, and be able to do this not only as a hobby but also as a
            job and build a career on top of it, that's what attracted me to the world of software engineering. I started my studies on my own
            through online courses, and in July 2021 I got my first job as a developer.
          </p>

          <p className='py-2'>
            I've been working as a full-stack developer for a little over a year and I'm, again, at the beginning of my professional journey,
            but the difference is that now I work with something that makes me happy. I'll keep moving forward, always looking for
            continuous improvement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About