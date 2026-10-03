// Tipos usados no projeto


export type PokemonListItem={
    name: string
    url: string
}
export type PokemonDetails = {
    id: number
    name:string
    height: number
    weight: number
    image:string
    types: string[]
}


// type Props ={
//     pokemon: PokemonDetails
// }

// // Card responsavel apenas por exibir as informacoes do pokemon
// // a busca de dados da API nao e feita por aqui ainda isso deixa o componente mais limpo

