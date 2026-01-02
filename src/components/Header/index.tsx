import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import cesta from '../../assets/cesta.png'

const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.cart.itens
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
