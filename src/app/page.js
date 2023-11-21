import PokeCards from "@/components/Cards/Page"
import { getResponseApi } from "@/libs/api-libs"
import Navbar from "@/components/Navbar/navbar"

const Page = async () => {
  const response = await getResponseApi()
  const pokemon = response.results
  console.log(pokemon)
  return (
    <div className="pt-4">
      <Navbar />
      <PokeCards api={pokemon} />
    </div>
  )
}

export default Page