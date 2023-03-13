import productos from '../utils/data'

export const pedirDatos = () => {
  return new Promise((res, rej) => {
    setTimeout(() =>{
      res(productos)
    }, 2000)
  })
}
export const pedirDatosId = (id) => {
    return new Promise((res, rej) => {
      setTimeout(() =>{
        res(productos.find( prod => prod.id === id ))
      }, 2000)
    })
  }