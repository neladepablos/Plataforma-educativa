import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getCourse } from '../../redux/actionCreators'
import store from '../../redux/store'
import Banner from '../Organisms/Banner'

const Course = ({ course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [])


  return (
    <>
      {
        course &&
        <>
          <Banner
            color="dark-color"
            title={course.name}
            subtitle={course.subtitle}
            image={{
              src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
              alt: course.name
            }}
            courseBanner
            poster={course.picture}
            especialidad={course.data.specialities[0].name}
            info={course.information}
          />

          <main className='ed-grid lg-grid-10'>
            <div className='lg-cols-7'>                                         
              <div className='course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block'>
                <div>
                  <h3 className='t4'>¿Què aprenderás?</h3>
                  <ul dangerouslySetInnerHTML={{__html: course.you_learn}} />
                </div>

                <div>
                  <h3 className='t4'>Conocimientos previos</h3>
                  <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
                </div>

                <div>
                  <h3 className='t4'>Nivel</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className='s-border s-pxy-2 lg-pxy-2 s-radius s-bg-white l-block l-section s-shadow-bottom'>
                {
                  course.data.classes.map(cl => (
                    <div className='course-class l-section' key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul className='data-list'>
                        {
                          cl.subjects.map(s => (
                            <li key={s.subject.id}><a href={`/clase/${s.subject.id}`}>{s.subject.title}</a></li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='lg-cols-3'>
              <h2 className='t3'>Descripción del curso</h2>
              <p>{course.information}</p>
              <div>
                <img src={course.picture} alt="React" />
              </div>
              <h2 className='t3 s-mb-0'>Profesor</h2>
              <p>Beto Quiroga</p>
            </div>
          </main>
        </>
      }
    </>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {}) (Course)
