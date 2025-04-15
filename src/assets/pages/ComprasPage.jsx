import { useContext, } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"



 export const ComprasPage = () => {
    
    const {productos } = useContext(ProductosContext)
    const { agregarCompras, eliminarCompra} = useContext (CarritoContext)
      
    const handleAgregar =(compra) => {
      agregarCompras(compra)
    }

    const handleQuitar =(id) => {
      eliminarCompra(id)
    }
   
  return (
    <>
    <h1>Productos</h1>
    <hr/>

    {productos.map((producto) => (
      <Card
      key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
      ></Card>
    ))}


    </>
   
  )
}






