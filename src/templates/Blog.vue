<template>
    <layout>
        <div>
            <div>hola desde blog</div>
            <div v-for="post in $page.allBlog.edges" :key="post.id">
                <h2>{{post.node.title}}</h2>
            </div>
        </div>
    </layout>
</template>

<page-query>
query{
  allBlog{
    edges{
      node{
        title
        excerpt
        content
      }
    }
  }
}
</page-query>