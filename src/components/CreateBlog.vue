<template>
  <h1>Create a blog</h1>
  <form @submit.prevent="submitForm">
    <label for="title">Title</label>
    <input type="text" v-model="blog.title" />
    <label for="decription">Description</label>
    <input type="text" v-model="blog.description" />
    <label for="image">Image</label>
    <input type="text" v-model="blog.imageUrl" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {
        title: "",
        description: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    submitForm() {
      let apiURL = "http://localhost:3000/blogs/create-blog";

      axios
        .post(apiURL, this.blog)
        .then(() => {
          this.$router.push("/view");
          this.blog = {
            title: "",
            description: "",
            imageUrl: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
