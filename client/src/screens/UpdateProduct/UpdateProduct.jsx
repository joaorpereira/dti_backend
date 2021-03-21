import React, { useEffect, useState } from 'react'
import Form from '../../components/Form/Form'
import { toast } from 'react-toastify'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Container, Divider, Row } from './styled'
import { requestUpdateProduct } from '../../store/modules/Products/actions'
import { useDispatch, useSelector } from 'react-redux'

const UpdateProduct = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const { success, product } = useSelector(state => state.products)

  useEffect(() => {
    if (product) {
      setName(product.name)
      setQuantity(product.quantity)
      setPrice(product.price)
    }
  }, [product, dispatch])

  const handleFormUpdate = e => {
    e.preventDefault()
    if (!name && !quantity && !price) {
      return toast.error('Campos nome, quantidade e preço são obrigatórios')
    }
    const id = product.id
    const body = { name, quantity, price }
    if (body && id) {
      dispatch(requestUpdateProduct(body, id))
    }
  }

  return (
    <Container>
      <Row>
        <h1>Editar Produto</h1>
      </Row>
      <Form onSubmit={e => handleFormUpdate(e)}>
        <Input
          type={'text'}
          name={'name'}
          label={'Nome:'}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Divider />
        <Input
          type={'number'}
          name={'quantity'}
          label={'Quantidade:'}
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <Divider />
        <Input
          type={'number'}
          name={'price'}
          label={'Preço:'}
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <Divider />
        <Button form color='cadastrar' type='submit'>
          Atualizar
        </Button>
      </Form>
    </Container>
  )
}

export default UpdateProduct
