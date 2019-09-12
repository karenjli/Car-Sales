export const deleteFeature = feature => {
  return { type: "DELETE_FEATURE", payload: feature };
};

export const addFeature = feature => {
  return { type: "ADD_FEATURE", payload: feature };
};
