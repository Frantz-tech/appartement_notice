import { PicRepository } from '../repository/picturesRepository.js'

const createPictures = async (detail_id, urls) => {
  const pictures = await PicRepository.createPictures(detail_id, urls)

  return pictures
}

const getPictures = async detail_id => {
  const pictures = await PicRepository.getPictures(detail_id)

  return pictures
}

export const PicService = {
  createPictures,
  getPictures
}
