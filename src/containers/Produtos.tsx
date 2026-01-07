import Produto from '../components/Produto'
import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { useGetProdutosQuery } from '../store/api'
import { adicionarAoCarrinho } from '../store/cartSlice'
import { adicionarAosFavorito } from '../store/favoriteSlice'
import { RootState } from '../store/store'

const Produtos = () => {
  const dispatch = useDispatch()
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favorites.itens)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some((f) => f.id === produto.id)}
          favoritar={(produto) => dispatch(adicionarAosFavorito(produto))}
          aoComprar={(produto) => dispatch(adicionarAoCarrinho(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
