import { NextPage } from "next";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post]
}


export default function Posts({posts}: Props){
console.log(posts)

return <div>

</div>
}


