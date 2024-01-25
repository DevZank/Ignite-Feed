import styles from './Post.module.css';
import { Comment } from "./Comment"
import { Avatar } from './Avatar';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/leckliss.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Erick Caique</strong>
                        <span>Dev Full-Stack</span>
                    </div>
                </div>

                <time title='24 de Janeiro às 14:55h' dateTime='2024-01-24 14:55:38'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p> Hey visitante! 👋 </p>

                <p> Sou um entusiasta de tecnologia e dev fullstack, estou começando na área e já utilizei diversas tecnologias! Ficou curioso ou gostaria de entrar em contato? </p>
                <p> Acesse meu LinkedIn e Github para saber mais... </p>

                <p> <a href='https://github.com/leckliss' target='_blank'> GitHub </a> </p>
                <p> <a href='https://br.linkedin.com/in/erick-caique-091264221' target='_blank'> Linkedin </a> </p>

                <p> 
                    <a href=''>#fullstack</a> {' '}
                    <a href=''>#deviniciante</a> {' '}
                    <a href=''>#devjunior</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}