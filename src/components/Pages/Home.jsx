import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllPosts, getAllCourses } from '../../redux/actionCreators'
import store from '../../redux/store'
import Banner from '../Organisms/Banner'
import Publication from '../Organisms/Publication'
import Card from '../Organisms/Card';


const Home = ({ posts, courses }) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
    store.dispatch(getAllCourses())
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src:"https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
          alt: "Banner cursos"
        }}
        title="Bienvenido a la experiencia más increible en educación online"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. sabemos que estas buscando contenido de calidad. Aquí lo encontrarás."
        home 
        poster="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80"   
      />
      
      {
        courses &&
        <section className='ed-grid m-grid-4'>
          {
             courses.slice(-4).map(c => (            
              <Card picture={c.picture} name={c.name} key={c.id} path="cursos" cardId={c.id} />
            ))
          }
        </section>
         
      }     

      <main className='ed-grid m-grid-3'>
        <div className='l-section m-cols-2'>
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
            <div>
              {
                posts.map(p => 
                <Publication 
                  title={p.title} 
                  author={p.author}
                  fecha={p.fecha}
                  content={p.content}
                  key={p.id}
                />)
              }
            </div> :
            <p>No existen publicaciones en la base de datos</p>

          }
        </div>

        <div className='m-cols-1'>
          <h3 className='s-center'>Lista de categorias</h3>
          <ul className='feature-list'>
            <li><span>React.js</span></li>
            <li><span>Angula.js</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
    
  )
}

const mapStateToProps = state =>({
  posts: state.postReducer.posts,
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {}) (Home)
