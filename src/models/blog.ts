export interface thumbnail {
  public_id: string
  url: string
}

export interface blogCategory {
  _id: string
  name: string
  description?: string
}

export interface createdBy {
  _id: string
  fullName: string
}

export interface blogModel {
  _id: string
  name: string
  slug: string
  content: string
  tag: string
  views: number
  likes: number
  blogCategory: blogCategory
  thumbnail: thumbnail
  createdBy: createdBy
  createdTime: string
}
