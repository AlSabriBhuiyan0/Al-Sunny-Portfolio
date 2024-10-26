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
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iI2YyYzgxMSIgZD0iTTM5IDQ2SDEzYy0yLjIxIDAtNC0xLjc5LTQtNFYxMGMwLTIuMjEgMS43OS00IDQtNGgyNmMyLjIxIDAgNCAxLjc5IDQgNHYzMmMwIDIuMjEtMS43OSA0LTQgNHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjYgMjRoOHY4aC04ek0yNiAzNmg4djRoLTh6TTI2IDE2aDh2NGgtOHpNMTQgMjRoOHYxNmgtOHoiLz48L3N2Zz4=',
    name: 'PowerBI'
  },
  {
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzVCOTBCRiIgZD0iTTQxIDEwSDI1djI4aDE2YzEuMSAwIDItMC45IDItMlYxMkM0MyAxMC45IDQyLjEgMTAgNDEgMTB6Ii8+PHBhdGggZmlsbD0iI0U1N0MwMCIgZD0iTTM0IDEwSDI1djI4aDljMS4xIDAgMi0wLjkgMi0yVjEyQzM2IDEwLjkgMzUuMSAxMCAzNCAxMHoiLz48cGF0aCBmaWxsPSIjNjM2MzYzIiBkPSJNMjcgMTBIMTFjLTEuMSAwLTIgMC45LTIgMnYyNGMwIDEuMSAwLjkgMiAyIDJoMTZWMTB6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2IDI4LjVjMC0wLjggMC43LTEuNSAxLjUtMS41UzE5IDI3LjcgMTkgMjguNVYzM2gtM1YyOC41ek0yMCAyNGMwLTAuOCAwLjctMS41IDEuNS0xLjVTMjMgMjMuMiAyMyAyNFYzM2gtM1YyNHpNMjQgMjEuNWMwLTAuOCAwLjctMS41IDEuNS0xLjVTMjcgMjAuNyAyNyAyMS41VjMzaC0zVjIxLjV6Ii8+PC9zdmc+',
    name: 'Tableau'
  },
  {
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTQxLDEwSDI1djI4aDE2YzEuMSwwLDItMC45LDItMlYxMkM0MywxMC45LDQyLjEsMTAsNDEsMTB6Ii8+PHBhdGggZmlsbD0iIzJlN2QzMiIgZD0iTTM0LDEwSDI1djI4aDljMS4xLDAsMi0wLjksMi0yVjEyQzM2LDEwLjksMzUuMSwxMCwzNCwxMHoiLz48cGF0aCBmaWxsPSIjODFjNzg0IiBkPSJNMjcsMTBIMTFjLTEuMSwwLTIsMC45LTIsMnYyNGMwLDEuMSwwLjksMiwyLDJoMTZWMTB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwLDI5Ljd2LTIuM2g0LjF2Mi4zSDIweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMCwyNS4ydi0yLjNoNC4xdjIuM0gyMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAsMjAuN3YtMi4zaDQuMXYyLjNIMjB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjUsMjkuN3YtMi4zaDQuMXYyLjNoLTQuMXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNSwyNS4ydi0yLjNoNC4xdjIuM2gtNC4xeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS41LDIwLjd2LTIuM2g0LjF2Mi4zaC00LjF6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0LjUsMjkuN3YtMi4zaDQuMXYyLjNoLTQuMXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQuNSwyNS4ydi0yLjNoNC4xdjIuM2gtNC4xeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNC41LDIwLjd2LTIuM2g0LjF2Mi4zaC00LjF6Ii8+PC9zdmc+',
    name: 'Excel'
  },
  {
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzI5QjZGNiIgZD0iTTQ0LDI0YzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwUzQsMTIuOTU0LDQsMjRzOC45NTQsMjAsMjAsMjBTNDQsMzUuMDQ2LDQ0LDI0eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMSwzMWgtMnYtNmgyVjMxeiBNMjUsMzNoLTJ2LThoMlYzM3ogTTI5LDI5aC0ydi00aDJWMjl6IE0zMywyN2gtMnYtMmgyVjI3eiIvPjwvc3ZnPg==',
    name: 'Deepnote'
  },
  {
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iI0ZGOTgwMCIgZD0iTTM3LDI0LjA2OGwtMTAuMzQtNS45NzJWNi4wODJsOC4wNzgsNC42NjZDMzYuMTksMTEuNzI1LDM3LDEyLjg3LDM3LDE0LjEzNVYyNC4wNjh6Ii8+PHBhdGggZmlsbD0iI0ZGQTcyNiIgZD0iTTM3LDI0LjA2OGwtMTAuMzQsNS45NzJ2MTEuODc4bDguMDc4LTQuNjY2QzM2LjE5LDM2LjI3NSwzNywzNS4xMywzNywzMy44NjVWMjQuMDY4eiIvPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0xMSwyNC4wNjhsMTAuMzQsNS45NzJ2MTEuODc4bC04LjA3OC00LjY2NkMxMS44MSwzNi4yNzUsMTEsMzUuMTMsMTEsMzMuODY1VjI0LjA2OHoiLz48cGF0aCBmaWxsPSIjRjU3QzAwIiBkPSJNMTEsMjQuMDY4bDEwLjM0LTUuOTcyVjYuMDgybC04LjA3OCw0LjY2NkMxMS44MSwxMS43MjUsMTEsMTIuODcsMTEsMTQuMTM1VjI0LjA2OHoiLz48cGF0aCBmaWxsPSIjRkZBNzI2IiBkPSJNMjYuNjYsMzAuMDRMMzcsMjQuMDY4djkuNzk3YzAsMS4yNjUtMC44MSwxLjQxLTIuMjYyLDIuMzg3TDI2LjY2LDQxLjk0NlYzMC4wNHoiLz48cGF0aCBmaWxsPSIjRkY2RDAwIiBkPSJNMjEuMzQsMzAuMDRMMTEsMjQuMDY4djkuNzk3YzAsMS4yNjUsMC44MSwxLjQxLDIuMjYyLDIuMzg3bDguMDc4LDQuNjY2VjMwLjA0eiIvPjxwYXRoIGZpbGw9IiNGRjk4MDAiIGQ9Ik0yMS4zNCwxNy45NkwxMSwyNC4wNjhWMTQuMjcxYzAtMS4yNjUsMC44MS0yLjQxLDIuMjYyLTMuMzg3bDguMDc4LTQuNjY2VjE3Ljk2eiIvPjxwYXRoIGZpbGw9IiNGRkE3MjYiIGQ9Ik0yNi42NiwxNy45NkwzNywyNC4wNjhWMTQuMjcxYzAtMS4yNjUtMC44MS0yLjQxLTIuMjYyLTMuMzg3bC04LjA3OC00LjY2NlYxNy45NnoiLz48L3N2Zz4=',
    name: 'Deep Learning'
  },
  {
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzAyNzdCRCIgZD0iTTI0LjA0NywyQzEzLjUzLDIsMiwxMi40NzUsMiwyMi45OTFjMCwxMC41MTYsMTEuNTMsMjAuOTkyLDIyLjA0NywyMC45OTJjMTAuNTE1LDAsMjIuMDQ2LTEwLjQ3NiwyMi4wNDYtMjAuOTkyQzQ2LjA5MywxMi40NzUsMzQuNTYyLDIsMjQuMDQ3LDJ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIzLjQyOCwzMS4zNTZjLTAuNzE4LDIuNjIzLTIuMTU0LDQuMDYtNC4yMTIsNC4wNmMtMi4wNTgsMC0zLjQ5NC0xLjQzNy00LjIxMi00LjA2bC0yLjU4OC05LjQ0OGMtMC43MTgtMi42MjMtMC4xNDQtNC4wNiwxLjcxNS00LjA2YzEuODU4LDAsMy40OTQsMS40MzcsNC4yMTIsNC4wNmwxLjQzNyw1LjI2OWwxLjQzNy01LjI2OWMwLjcxOC0yLjYyMywyLjE1NC00LjA2LDQuMjEyLTQuMDZjMS44NTgsMCwyLjQzMywxLjQzNywxLjcxNSw0LjA2TDIzLjQyOCwzMS4zNTZ6IE0zMi4wNzEsMzEuMzU2Yy0wLjcxOCwyLjYyMy0yLjE1NCw0LjA2LTQuMjEyLDQuMDZjLTIuMDU4LDAtMy40OTQtMS40MzctNC4yMTItNC4wNmwtMi41ODgtOS40NDhjLTAuNzE4LTIuNjIzLTAuMTQ0LTQuMDYsMS43MTUtNC4wNmMxLjg1OCwwLDMuNDk0LDEuNDM3LDQuMjEyLDQuMDZsMS40MzcsNS4yNjlsMS40MzctNS4yNjljMC43MTgtMi42MjMsMi4xNTQtNC4wNiw0LjIxMi00LjA2YzEuODU4LDAsMi40MzMsMS40MzcsMS43MTUsNC4wNkwzMi4wNzEsMzEuMzU2eiIvPjwvc3ZnPg==',
    name: 'Machine Learning'
  },
  {
    img: 'github/github-original.svg',
    name: 'GitHub'
  }
]
