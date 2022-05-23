import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllSpecialities } from '../../redux/actionCreators';
import store from '../../redux/store';
import Banner from '../Organisms/Banner';
import Card from '../Organisms/Card';

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])


  return (    
      <>
        <Banner
          color="first-color"
          image={{
            src:"https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
            alt: "Banner especialidades"
          }}
          title="Especialidades"
          subtitle="Domina una tecnología con las rutas de aprendizaje que te ofrecemos"
        />

        {
          specialities &&
          <main  className='ed-grid m-grid-3'>
            {
              specialities.map(s => (
                <Card picture={s.picture} name={s.name} key={s.id} cardId={s.id} path="especialidades" />
              ))
            }
          </main>
        }
      </>
    
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps, {}) (Specialities)
