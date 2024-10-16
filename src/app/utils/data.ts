export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  Skills: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Naureen Food and Beverage Limited',
    repo: 'https://github.com/masrufjaman/Naureen-Food-and-Bevarage-Limited.git',
    url: 'https://www.naureenfoods.com',
    image: '/Naureen.png',
    description:
      'A websites for Naureen Food & Bevarage Limited. Built using the Normal htm ,Css and javascript',
    Skills: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    name: 'LaTeX-Based Cv Builder',
    repo: 'https://github.com/AlSabriBhuiyan0/Letex-Cv-Builder.git',
    url: 'https://latex-cv-builder-f0e1b10b4d69.herokuapp.com/',
    image: '/Latex-editor.png', // You can replace this with the actual image path
    description:
      'A web-based resume builder that allows users to create and customize resumes using LaTeX templates. Features live preview and PDF generation, built with React, TypeScript, and styled-components. Integrated Axios for API communication.',
    Skills: ['React', 'TypeScript', 'styled-components', 'Axios', 'API']
  },
  {
    name: 'Portfolio',
    repo: 'https://github.com/AlSabriBhuiyan0/AlsunnyPortfolio',
    url: 'https://alsunny.live/',
    image: '/Portfolio.png', // Replace with the actual image path
    description:
      'A personal portfolio website showcasing my skills, projects, and experiences as a Webdeveloper and Data Scientist. The site features a clean and modern design, making it easy for visitors to navigate and view my work.',
    Skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
  }
]

export const skillsData = [
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'c/c-original.svg',
    name: 'C'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'mariadb/mariadb-original.svg',
    name: 'MariaDB'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'tensorflow/tensorflow-original.svg',
    name: 'TensorFlow'
  },
  {
    img: 'scikitlearn/scikitlearn-original.svg',
    name: 'scikit-learn'
  },
  {
    img: 'keras/keras-original.svg',
    name: 'Keras'
  },
  {
    img: 'pytorch/pytorch-original.svg',
    name: 'PyTorch'
  },
  {
    img: 'selenium/selenium-original.svg',
    name: 'Selenium'
  },
  {
    img: 'powerbi/powerbi-original.svg',
    name: 'PowerBI'
  },
  {
    img: 'tableau/tableau-original.svg',
    name: 'Tableau'
  },
  {
    img: 'mysql/mysql-original.svg',
    name: 'MySQL'
  },
  {
    img: 'excel/excel-original.svg',
    name: 'Excel'
  },
  {
    img: 'deepnote/deepnote-original.svg',
    name: 'Deepnote'
  },
  {
    img: 'deeplearning/deeplearning-original.svg',
    name: 'Deep Learning'
  },
  {
    img: 'github/github-original.svg',
    name: 'GitHub'
  },
  {
    img: 'machinelearning/machinelearning-original.svg',
    name: 'Machine Learning'
  }
]
