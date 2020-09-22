<template>
    <section>
        <div>
            <div>
                <h1> {{$page.post.title}}</h1>
            </div>
            <g-image v-for="imagen in $page.post.imagenPortada" :src="imagen.url" :key="imagen.id" class="galeria"/>
           <div v-for="blog in $page.allBlog.edges" :key="blog.id">
             <div v-html="blog.node.content"></div>
           </div>
           <ul v-for="lista in $page.post.list.laboratorio.servicios" :key="lista.id">
              <li> {{lista.Tarea}} </li> 

           </ul>
            <ul v-for="lista in $page.post.list.laboratorio.disenos" :key="lista.id">
              <li style="color:red"> {{lista.Diseno}} </li> 

           </ul>
           
        </div>
    </section>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulPost (path: $path) {
    slug
    id
	title
    content
    texto2
    descripcion
    imagenPortada{
        url
    }
    list{
      laboratorio{
        servicios{
          Tarea
        }
        disenos{
          Diseno
        }
      }
    }
  }
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
</page-query

<script>
import VueMarkdown from "vue-markdown";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  components: {
    'mark':VueMarkdown
  },
  methods: {
    stringify(lista) {
      return documentToHtmlString(lista);
    }
  }
};
</script>
 