import { GetServerSideProps } from 'next';
import React from 'react';
import { sanityClient, urlFor } from '../sanity';

export const getServerSideProps:GetServerSideProps = async({query}) => {
const {_id} =  query

const makeQuery = ` *[_type == "post" && _id == ${_id}]{
    _id,
  _createdAt,
  title,
  body,
    slug {
  current
},
description,
author -> {
  name,
  image
},
mainImage,
'comments': *[
  _type == "comment" && post._ref == ^._id && approved == true]

 }`

 const post = await sanityClient.fetch(makeQuery)

 if (!post) {
   return {
     notFound: true,
   }
 }

 return {
   props: {
     post,
   },
 }

}

export default function Details() {
  return (
    <div>
      <div className="contents cursor-pointer">
        <div className="flex gap-2">
          <img
            src={urlFor(post.author.image).url()}
            alt="author picture"
            className="h-6 w-6 rounded-full object-cover"
          />
          <h3 className="text-sm font-medium">{post.author.name}</h3>
        </div>
        <p className="text-lg font-bold">{post.title}</p>
      </div>
    </div>
  )
}
