<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">chelsea-landmark</h1>
        <h2 class="hero-subtitle">
          The banana fruits grow from a banana blossom in hanging clusters, also
          called a bunch or banana stem. The fruits grow in rows called tiers or
          hands. There can be as many as twenty fruits to a hand, and as many as
          twenty tiers in a bunch. A bunch usually weighs between 30 and 50
          kilograms (65 to 110 pounds)...
        </h2>
      </div>
      <div class="projects">
        <div
          class="project"
          v-for="{ node: article } in $page.posts.edges"
          :key="article.id"
        >
          <g-link :to="`/projects/${article.id}`" class="project-link"
            ><img
              alt="Banana"
              :src="`${GRIDSOME_API_URL + article.image.url}`"
              width="2560"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              sizes="(max-width: 2560px) 100vw, 2560px"
            />
            <h3 class="project-title">{{ article.title }}</h3>
            <div class="categories">
              <span>{{ article.categories }}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link
            class="journal"
            v-for="{ node: journal } in $page.journals.edges"
            :key="journal.id"
          >
            <h3 class="journal-title">
              {{ journal.title }}
            </h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allStrapiBlogPosts {
      edges{
        node{
          id
          title
          categories
          date
          image{
            url
          }
        }
      }
  },
  journals: allStrapiJournals {
   	edges {
      node {
        id
        title
        label
        date
      }
    }
  }
}
</page-query>

<script>
export default {
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
