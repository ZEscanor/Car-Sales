// action types, creators, objects

// ac are functions that creates an object based on an event

const addFeature = (newFeature) => {
    return {type: "ADD_MEMBER",payload: newFeature}
}