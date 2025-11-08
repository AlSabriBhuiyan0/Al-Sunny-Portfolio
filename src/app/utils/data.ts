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
    image: '/Portfolio.png',
    description:
      'A personal portfolio website showcasing my skills, projects, and experiences as a Webdeveloper and Data Scientist. The site features a clean and modern design, making it easy for visitors to navigate and view my work.',
    Skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    name: 'Weather App',
    repo: 'https://github.com/AlSabriBhuiyan0/WeatherAppbyAlsunny.git',
    url: 'https://weatherappbyalsunny-9f57ab4d7d89.herokuapp.com/',
    image: '/Weatherappbyalsunny.PNG',
    description:
      'WeatherAppbyAlsunny is a responsive web application built with React that allows users to view the weather forecast for a specific location. The app fetches weather data from the [WeatherAPI.com](https://www.weatherapi.com/) and presents it in a user-friendly interface. The app is styled using Bootstrap and custom CSS for a clean and modern design.',
    Skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    name: 'Carbon Credit Stock Crypto Tracker',
    repo: 'https://github.com/AlSabriBhuiyan0/Carbon-credit-stock-crypto-tracker.git',
    url: false,
    image: '/Ai forcrast result overview .png',
    description:
      'A comprehensive full-stack analytics platform for tracking and visualizing stock market data, crypto assets, and carbon credit transactions with AI-powered forecasting capabilities. Features Prophet and ARIMA models for predictions, real-time data integration from Yahoo Finance and UNFCCC, and a complete dashboard with portfolio management.',
    Skills: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Python',
      'Prophet',
      'ARIMA',
      'Machine Learning',
      'WebSocket'
    ]
  },
  {
    name: 'Treat Well Hospital Management System',
    repo: 'https://github.com/AlSabriBhuiyan0/Cse311lproject.git',
    url: false,
    image: '/Treat Well Hospital Management System.png',
    description:
      'A comprehensive course project for CSE311L, demonstrating advanced software engineering principles and database management concepts. The project showcases practical implementation of database systems and application development.',
    Skills: ['Java', 'Database', 'Software Engineering', 'SQL']
  },
  {
    name: 'Blockchain-based Token Project',
    repo: 'https://github.com/AlSabriBhuiyan0/BrickToken-Local-version-updated.git',
    url: false,
    image: '/bricktoken.png',
    description:
      'A blockchain-based token project with local version implementation. Features token creation, smart contract functionality, and decentralized application capabilities for digital asset management.',
    Skills: [
      'Blockchain',
      'Solidity',
      'Web3',
      'Smart Contracts',
      'JavaScript',
      'Ethereum'
    ]
  },
  {
    name: 'AI-powered Chatbot',
    repo: 'https://github.com/AlSabriBhuiyan0/LLM-Android-app-project-.git',
    url: false,
    image: '/android.png',
    description:
      'An Android mobile application integrating Large Language Model (LLM) capabilities. The app provides AI-powered features and natural language processing on mobile devices, enabling intelligent interactions and AI-driven functionality.',
    Skills: [
      'Android',
      'Kotlin',
      'Java',
      'LLM',
      'Machine Learning',
      'Python',
      'API Integration'
    ]
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
    img: '/images/skills/powerbi.svg',
    name: 'PowerBI'
  },
  {
    img: '/images/skills/tableau.svg',
    name: 'Tableau'
  },
  {
    img: '/images/skills/excel.svg',
    name: 'Excel'
  },
  {
    img: '/images/skills/deepnote.svg',
    name: 'Deepnote'
  },
  {
    img: '/images/skills/deep-learning.svg',
    name: 'Deep Learning'
  },
  {
    img: '/images/skills/machine-learning.svg',
    name: 'Machine Learning'
  },
  {
    img: 'github/github-original.svg',
    name: 'GitHub'
  }
]
