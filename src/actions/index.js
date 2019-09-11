export const deleteFeature = () => {
  return { type: "DELETE_FEATURE" };
};

export const addFeature = feature => {
  return { type: "ADD_FEATURE", payload: feature };
};
