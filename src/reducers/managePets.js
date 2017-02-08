export let state;

let defaultState = {pets: []}

export function managePets(state=defaultState, action){
  switch(action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, state.pets.push(action.payload))
    case 'REMOVE_PET':
      let petId = action.payload // remove id 101 - puppy
      let newPetArr = state.pets.filter(function(pet) {
        return pet.id !== petId
      })
      return Object.assign({}, state, {pets: newPetArr})
    default:
      return state
  }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
  let container = document.getElementById('container')
  let petsArr = state.pets.map((pet, index) => {
    return `<li>${pet.name}</li>`
  })

  let allPets = petsArr.join(" ")
  container.innerHtml = `<ul>${allPets}</ul>`
}
