import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

const Comentarios = (props) => {

  if (props.com_cargando && !props.comentarios.length) {
    return <Spinner />
  }
  if (props.com_error) {
    return <Fatal mensaje={props.com_error} />
  }

  const ponerComentarios = () => (
    props.comentarios.map((comentario) => (
      <li>
        <b>
          <u>
            {comentario.email}
          </u>
        </b>
        {comentario.body}
      </li>
    ))
  )
  return (
    <ul>
      {ponerComentarios()}
    </ul>
  )
}

const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);
