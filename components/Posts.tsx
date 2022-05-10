import { NextPage } from "next";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post]
}


const Posts: NextPage = () => {
console.log(posts)

return <div>

</div>
}

export default Posts

