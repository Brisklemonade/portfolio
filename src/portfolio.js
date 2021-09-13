const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: '{KP}',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kamell Perry',
  role: 'Software Developer',
  description:
    "I'm a self-taught software developer and UI designer living in Dallas TX. I love taking Ideas and turning them into web & native applications! I don't just spend all of my time coding though. I love to play games with my friends, cook, create videos for tik tok and many other things. Anyways, check out some of my projects and skills below",
  resume:
    'https://drive.google.com/file/d/14KfE1lBO9xrKLRqrSzcY0-yveuNMvYvH/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kamell-perry-749952219',
    github: 'https://github.com/Brisklemonade/Brisklemonade.git',
    instagram: 'https://instagram.com/uxtitan_',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio Site',
    description:
      'This portfolio was created to showcase my work as well as a bit of who I am and my personality. This is just the beginning, it will continue to be updated!',
    stack: ['React', 'React Hooks', 'Context', 'API', 'Material UI'],
    sourceCode: 'https://github.com/Brisklemonade/portfolio.git',
    livePreview: '/',
  },
  {
    name: 'Quote Generator',
    description:
      "A website made with react that generates random quotes & inspiration. You never know what you're going to get, but I'm sure you'll be amused.",
    stack: ['React', 'Axios', 'React Hooks'],
    sourceCode: 'https://github.com/Brisklemonade/quote-generator.git',
    livePreview: 'https://brisklemonade.github.io/quote-generator/',
  },
  {
    name: 'Crypto Tracking App',
    description:
      'A cryptocurrency price tracker that uses React Native to retrieve the 20 most popular cryptocurrencies and display them in a list with charts.',
    stack: ['React Native', 'Expo CLI', 'Reanimated', 'Bottomsheet'],
    sourceCode: 'https://github.com/Brisklemonade/crypto-pricetracker-app.git',
    livePreview: 'https://vimeo.com/600758369',
  },
  {
    name: 'NextJs Podex',
    description:
      'A Pokedex made with NextJs that uses the PokeAPI to retrieve the pokemon data.',
    stack: ['NextJs', 'Tailwind CSS', 'PokeAPI'],
    sourceCode: 'https://github.com/Brisklemonade/pokedex-with-next.git',
    livePreview: 'https://pokedex-with-next.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Nextjs',
  'SASS',
  'Material UI',
  'Git',
  'GitHub',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kamellperry33@gmail.com',
}

export { header, about, projects, skills, contact }
