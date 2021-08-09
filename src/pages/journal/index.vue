<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">a wise person once said...</h1>
      </div>
    </div>
    <g-link
      class="journal-post"
      v-for="{ node: journal } in $page.journals.edges"
      :key="journal.id"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ journal.title }}</h2>
        <p class="journal-excerpt">
          {{ journal.desc }}
        </p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query {
 journals: allStrapiJournals {
   	edges {
      node {
        id
        title
        desc
        date
        label
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'journal',
}
</script>
<style scoped>
.container {
  margin-top: 100px;
}
</style>
