// Funcao utilitaria para o nome do pokemon mais bel
// exemplo: "pikachu" vira "pikachu"

export function formatPokemonName(name:string){
    return name.charAt(0).toUpperCase()+name.slice(1)
}