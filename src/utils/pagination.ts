import { IProfile } from '../interfaces/interfaces'

export const pagination = (followers: IProfile[]) => {
  const itemsPerPage = 6
  const pages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = itemsPerPage * index
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}
