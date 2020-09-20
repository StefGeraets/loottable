import { hoard } from "../../data/hoard";
import { individual } from "../../data/individual";

const query = (type, name) => {
  let query = type.type.find((char) => char.name === name)
  return query
}

export const findHoard = (charName) => {
  let result = query(hoard, charName)
  return result
};

export const findIndividual = (charName) => {
  let result = query(individual, charName)
  return result
};
