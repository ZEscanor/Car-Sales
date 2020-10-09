// action types, creators, objects

// ac are functions that creates an object based on an event

export const addFeature = (newFeature) => {
    return {type: "ADD_MEMBER", payload: newFeature};
}

export const remFeature = (oldFeature) => {
  return{type:"REMOVE_MEMBER", payload:oldFeature};
}