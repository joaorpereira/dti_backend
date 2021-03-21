import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardInfo from '../../components/CardInfo/CardInfo'

import { requestProductsList } from '../../store/modules/Products/actions'
import { Container, Box } from './styled'

const Home = () => {
  const dispatch = useDispatch()
  const { products, loading, success } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(requestProductsList())
  }, [dispatch])

  const handleDelete = async id => {
    console.log(id)
  }

  const handleUpdate = async id => {
    console.log(id)
  }
  return (
    <Container>
      <h1>Meu Estoque</h1>
      <Box>
        {products ? (
          products.map(item => (
            <CardInfo
              onDelete={handleUpdate}
              onUpdate={handleDelete}
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Container>
  )
}

export default Home
