import { getBaseUrl } from './baseUrl'

export function getAlbums(params: any) {
  return getBaseUrl().post('albums', params)
}
