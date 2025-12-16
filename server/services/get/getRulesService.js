import { Repository } from '../../repository/get/getRulesRepository.js'

const getAllRules = async () => {
  const rules = await Repository.getAllRules()
  // const errors = []
  return rules
}

// const getAppartById = async id => {
//   const appartement = await Repository.getAppartById(id)
//   // const errors = []
//   return appartement
// }

export const Service = {
  getAllRules
  // getAppartById
}
