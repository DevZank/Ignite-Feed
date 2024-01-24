import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import "./global.css"


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Isaac Martins"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis deserunt quisquam maxime, aspernatur dolore incidunt repudiandae libero beatae quasi tempore, a velit impedit dolorem aperiam esse voluptatem alias doloribus!"
          />
        </main>
      </div>
    </div>
  )
}


