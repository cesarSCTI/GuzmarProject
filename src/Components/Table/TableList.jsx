import { Button, Table } from 'react-bootstrap'
import { useCotization } from '../../Hooks/Cotizations/useCotization'


const TableList = ({items}) => {
const {removeProduct} = useCotization()

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
          {
            items.cotization_products.map((ele)=>{
              return(
                <tr key={ele.id}>
                  <td>{ele.name}</td>
                  <td>{ele.qty}x</td>
                  <td>${ele.price}</td>
                  <td>${ele.subtotal}</td>
                </tr>
                )
            }
            )
          }        
      </tbody>
    </Table>
  )
}
export default TableList