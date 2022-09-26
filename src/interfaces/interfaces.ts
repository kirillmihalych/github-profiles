export interface InitialProfile {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company?: any
  blog: string
  location: string
  email?: any
  hireable?: any
  bio?: any
  twitter_username?: any
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}

export interface SingleProfile {
  login: string
  name: string
  bio: string
  blog: string
  company: string
  followers: number
  public_repos: number
  avatar_url: string
  html_url: string
  location: string
}

export interface IProfile {
  id: number
  login: string
  avatar_url: string
}
