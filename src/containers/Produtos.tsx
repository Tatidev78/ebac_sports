import Produto from '../components/Produto'
import * as S from './styles'

import { useDispatch } from 'react-redux'
import { useGetProdutosQuery } from '../store/api'
import { adicionarAoCarrinho } from '../store/cartSlice'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={false}
          aoComprar={(produto) =>
            dispatch(adicionarAoCarrinho(produto))
          }
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
