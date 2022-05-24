import { TrendingProps } from './typings.d'
export interface Post {
  _id: string
  _createdAt: string
  publishedAt: string
  title: string
  author: {
    name: string
    image: string
  }
  readTime: number
  description: string
  category: [
    {
      title: string
    }
  ]
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

export interface categoryQuery {
  categoryQuery: [
    {
      title: string
    }
  ]
}

export interface IndexProps {
  posts: [Post]
  trending: [Post]
  categoryQuery: [
    {
      title: string
    }
  ]
}
