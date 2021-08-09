<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{ $page.post.title }}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category">{{ $page.post.categories }}</span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{ $page.post.date }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <p>
            {{ $page.post.desc }}
          </p>
          <p>
            <img
              class="g-image g-image--lazy g-image--loaded"
              :src="`${GRIDSOME_API_URL + $page.post.image.url}`"
              width="2560"
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript
              ><img
                class="g-image g-image--lazy g-image--loaded"
                src="/assets/static/mike-dorner-173502-unsplash.42db587.16e7958f24c375d7bd7b08073b4ce000.jpg"
                width="2560"
            /></noscript>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!) {
 post: strapiBlogPosts(id:$id) {
   	 id
     title
     categories
     desc
     date
     image{
      url
    }
  }
}
</page-query>

<script>
export default {
  name: 'Post',
  /* metaInfo: {
    title: 'Hello, world!'
  } */
}
</script>

<style>
.nav__link {
  margin-right: 3rem;
}
</style>
