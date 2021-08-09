<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>
          Leave me a note with any questions you might have, I'll get back to
          you as soon as possible.
        </p>
      </div>
      <form name="contact" class="contact-form" @submit.prevent="submit">
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" v-model="form.name" />
          </div>
          <div>
            <label for="email" class="label">Your email</label
            ><input type="email" name="email" v-model="form.email" />
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label
          ><textarea name="message" v-model="form.message"></textarea>
        </div>
        <button class="button">Submit form</button>
      </form>
    </div>
  </Layout>
</template>
<script>
import axios from 'axios'
export default {
  /* metaInfo: {
    title: 'Hello, world!'
  } */
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    async submit() {
      let _self = this
      let { data } = await axios({
        method: 'post',
        url: _self.GRIDSOME_API_URL + '/contacts',
        data: _self.form,
      })
      alert('留言成功')
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>
