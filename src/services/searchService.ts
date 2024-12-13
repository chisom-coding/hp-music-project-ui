import { getBaseUrl } from './baseUrl'

export function getArtists(params: any) {
  return getBaseUrl().post('artists', params)
}
