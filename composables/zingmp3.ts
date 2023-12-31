const apiBaseUrl = '/api/v2'
export async function fetchZingMp3(
  url: string,
  params: Record<string, string | number | boolean | undefined> = {},
): Promise<any> {
  return $fetch(url, {
    baseURL: `${apiBaseUrl}`,
    params,
  })
}

export function getHome(page: number): Promise<any> {
  return fetchZingMp3(`page/get/home`, { page, segmentId: -1, count: 30 })
}

export function getSongList(id: string) {
  return fetchZingMp3('page/get/playlist', { id })
}

export function getStreaming(id: string, isWorldWide = true) {
  return fetchZingMp3('song/get/streaming', { id, isWorldWide })
}

export function getSearchCounter(q: string) {
  return fetchZingMp3('search/getCounter', { q })
}

export function getSearchAll(q: string) {
  return fetchZingMp3('search/multi', { q })
}

export function getSearch(q: string, _type: string) {
  return fetchZingMp3('search', { q })
}

export function getHotKeyword() {
  return fetchZingMp3('app/get/hot-keyword')
}

export function getSongInfo(id: string) {
  return fetchZingMp3('song/get/info', { id })
}

export function getSuggestions(query: string) {
  return fetchZingMp3('v1/web/ac-suggestions', { query })
}

export function getPlaylistDetail(id: string) {
  return fetchZingMp3('page/get/playlist', { id })
}

export function getLyric(id: string) {
  return fetchZingMp3('lyric/get/lyric', { id })
}
