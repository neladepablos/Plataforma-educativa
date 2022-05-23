import React, { useEffect } from 'react';
import { getAllTeachers } from '../../redux/actionCreators';
import store from '../../redux/store';
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import Teacher from '../Organisms/Teacher';

const Teachers = ( {match, teachers} ) => {

  // Despachar la acción cuando el componente cargue
  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])

  
  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
          alt: "Banner profesores"
        }}
        title= "Nuestros profesores"
        subtitle= "Este plantel docente está altamente calificado para guiarte en tu educación."

      />

      {/* Dibujando cada uno de los profesores */}
      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {
            teachers.map(t => (
              <Teacher
                key={t.id}
                picture={t.picture}
                name={t.name}
                country={t.country}
               />
            ))
          }
      </main>
      }

     
    </>
    
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {}) (Teachers)
