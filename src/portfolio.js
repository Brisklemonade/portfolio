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
    tiktok: 'https://tiktok.com/@uxtitan',
  },
}

const projects = [
  // projects can be added and removed
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
    name: 'Svelte Kit Pokedex',
    description:
      'A Pokedex made with Svelte Kit that uses the PokeAPI to retrieve various pokemon data.',
    stack: ['Svelte', 'PokedexAPI', 'TailwindCSS'],
    sourceCode: 'https://github.com/Brisklemonade/sveltekit-pokedex.git',
    livePreview: 'https://sveltekit-pokedex-chi.vercel.app/',
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
    name: 'Generator Dashboard',
    description:
      'A web application dashboard that contains many generators with API calls. It also has form validation along with user authentication, and more features. *The site is currently down due to issues that will be resolved as soon as possible*',
    stack: ['React', 'NextJs', 'TailwindCSS, Axios'],
    sourceCode: '/',
    livePreview: '/',
  },
  // {
  //   name: 'NextJs Pokedex',
  //   description:
  //     'A Pokedex made with NextJs that uses the PokeAPI to retrieve the pokemon data.',
  //   stack: ['NextJs', 'Tailwind CSS', 'PokeAPI'],
  //   sourceCode: 'https://github.com/Brisklemonade/pokedex-nextjs.git',
  //   livePreview: 'https://pokedex-nextjs-ecru.vercel.app/',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SASS',
  'Bootstrap',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Nextjs',
  'Svelte',
  'Node Js',
  'Material UI',
  'Git',
  'GitHub',
  'Mocha',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kamellperry33@gmail.com',
}

export { header, about, projects, skills, contact }
