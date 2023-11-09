import Carrossel from "../../components/Carrossel/Index"
import ColecaoDestaque from "../../components/ColecaoDestaque/Index"
import OfertaEspecial from "../../components/OfertaEspecial/Index"
import ProdutosAlta from "../../components/ProdutosAlta/Index"

const Home = () => {
  return (
    <>
      <div>
        <Carrossel />
      </div>
      <div>
        <ColecaoDestaque />
      </div>
      <div>
        <ProdutosAlta />
      </div>
      <div>
        <OfertaEspecial />
      </div>
    </>
  )
}

export default Home