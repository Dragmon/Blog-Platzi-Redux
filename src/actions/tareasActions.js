import axios from 'axios';
import {
  TRAER_TODAS,
  CARGANDO,
  ERROR,
  CAMBIO_USUARIO,
  CAMBIO_TITULO,
  GUARDAR,
  ACTUALIZAR,
  LIMPIAR
} from '../types/tareasTypes';

export const traerTodas = () => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })
  try {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const tareas = {};
    respuesta.data.map((tar) => (
      tareas[tar.userId] = {
        ...tareas[tar.userId],
        [tar.id]: {
          ...tar
        }
      }
    ))

    dispatch({
      type: TRAER_TODAS,
      payload: tareas
    })
  } catch (error) {
    console.log('Error: ', error.message)
    dispatch({
      type: ERROR,
      payload: 'Información de tareas no disponible'
    })
  }
};

export const cambioUsuarioId = (valor) => (dispatch) => {
  dispatch({
    type: CAMBIO_USUARIO,
    payload: valor
  })
};

export const cambioTitulo = (valor) => (dispatch) => {
  dispatch({
    type: CAMBIO_TITULO,
    payload: valor
  })
};

export const agregar = (nueva_tarea) => async (dispatch) => {
  dispatch({
    type: CARGANDO
  });

  try {
    const respuesta = await axios.post('https://jsonplaceholder.typicode.com/todos', nueva_tarea);
    console.log('respuesat-guardar', respuesta.data)
    dispatch({
      type: GUARDAR
    });
  }
  catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Servicio no disponible en este momento.'
    });
  }
};

export const editar = (tarea_editada) => async (dispatch) => {
  dispatch({
    type: CARGANDO
  });

  try {
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${tarea_editada.id}`, tarea_editada);
    dispatch({
      type: GUARDAR
    });
  }
  catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'No se pueden guardar sus cambiso servicio no disponible en este momento.'
    });
  }
};

export const cambioCheck = (usu_id, tar_id) => async (dispatch, getState) => {
  const { tareas } = getState().tareasReducer;
  const seleccionada = tareas[usu_id][tar_id];

  const actualizadas = {
    ...tareas
  };
  actualizadas[usu_id] = {
    ...tareas[usu_id]
  };
  actualizadas[usu_id][tar_id] = {
    ...tareas[usu_id][tar_id],
    completed: !seleccionada.completed
  };

  dispatch({
    type: ACTUALIZAR,
    payload: actualizadas
  });
};

export const eliminar = (tar_id) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.put(`https://jsonplaceholder.typicode.com/todos/${tar_id}`);
    console.log('respuesta-eliminar', respuesta);
    dispatch({
      type: TRAER_TODAS,
      payload: {}
    });
  }
  catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'No se pueden eliminar el campo seleccionado el servicio no disponible en este momento.'
    });
  }
};

export const limpiarForma = () => (dispatch) => {
  dispatch({
    type: LIMPIAR
  })
}