export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  readTime: number
  description: string
  mainImage: {
    asset: {
      _ref: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}

export interface PostProps {
  posts: [Post]
}

export interface TrendingProps {
  trending: [Post]
}
