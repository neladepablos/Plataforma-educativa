import React, { useEffect } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import store from '../../redux/store';
import { getCourse, getFragment } from '../../redux/actionCreators';
import { connect } from 'react-redux';

const Fragment = ({ fragment, course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
    store.dispatch(getFragment(123))
  }, [])


  return (
    <div className='class-page-container background dark-color s-pxy-4'>
      {
        (fragment && course) &&
        <div className='ed-grid lg-grid-12'>
          <div className='lg-cols-8'>
            <div>
              <Vimeo
                video={fragment.video}
                autoplay
                width={780}

              />
            </div>
            <div>
              <h2 className='color accent-color s-mb-0'>{fragment.name}</h2>
              <span className='color light-color'>{course.name}</span>
            </div>

          </div>

          <div className='lg-cols-4'>
            <div>
              <h2 className='t3'>Temario del curso</h2>              
              {
                course.data.classes.map(cl => (
                  <div className='course-class l-section' key={cl.class.id}>
                    <h3 className='color light-color'>{cl.class.title}</h3>                     
                    <ul className='data-list'>
                      {
                        cl.subjects.map(s => (
                          <li key={s.subject.id}><a className='color light-color' href={`/clase/${s.subject.id}`}>{s.subject.title}</a></li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
      }
    </div>

  )
}

const mapStateToProps = state => ({
  fragment: state.fragmentReducer.fragment,
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Fragment)
