import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Comment } from "./components/Comment"
import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leckliss.png',
      name: 'Erick',
      role: 'Dev Full-Stack',
    },
    content: [
      {type: 'paragraph', content: 'Hey visitante! 👋'},

      {type: 'paragraph', content: 'Sou um entusiasta de tecnologia e dev fullstack, estou começando na área e já utilizei diversas tecnologias! Ficou curioso ou gostaria de entrar em contato?'},
      {type: 'paragraph', content: 'Acesse meu LinkedIn e Github para saber mais...'},

      {type: 'github', content: 'GitHub', link: 'https://github.com/leckliss'},
      {type: 'linkedin', content: 'LinkedIn', link: 'https://br.linkedin.com/in/erick-caique-091264221'}, 
    ],
    // link: {
    //   linkedin: 'https://br.linkedin.com/in/erick-caique-091264221',
    //   github: 'https://github.com/leckliss',
    // },
    publishedAt: new Date('2024-01-24 14:55:38'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thomasdevsp.png',
      name: 'Thomas',
      role: 'Dev Front-End',
    },
    content: [
      {type: 'paragraph', content: 'Fala Dev! 👋'},

      {type: 'paragraph', content: `Estou começando minha carreira como dev, se puder recomendar meu linkedin \n para a empresa que você trabalha eu ficaria muito grato`},

      {type: 'github', content: 'GitHub', link: 'https://github.com/thomasdevsp'},
      {type: 'linkedin', content: 'LinkedIn', link: 'https://br.linkedin.com/in/thomas-sampaio'}, 
    ],
    // link: {
    //   linkedin: 'https://br.linkedin.com/in/thomas-sampaio',
    //   github: 'https://github.com/thomasdevsp',
    // },
    publishedAt: new Date('2024-01-23 12:15:49'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}


