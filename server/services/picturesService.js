import { PicRepository } from '../repository/picturesRepository.js'

const createPictures = async (detail_id, urls) => {
  const pictures = await PicRepository.createPictures(detail_id, urls)

  return pictures
}

export const PicService = {
  createPictures
}
