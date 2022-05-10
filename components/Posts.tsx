import { NextPage } from "next";
import { Post } from "../typings";

interface Props {
  posts: [Post]
}


const Posts: NextPage = (props: Props) => {
console.log(post)

}

export default Posts

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
      _id,
      title,
     author -> {
        name,
        image
      },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}