<template>
  <h1>Edit data</h1>
  <form @submit.prevent="updateForm">
    <label for="">Title</label>
    <input type="text" name="" id="" v-model="blog.title" />
    <label for="">Descrpition</label>
    <input type="text" name="" id="" v-model="blog.description" />
    <label for="">Image</label>
    <input type="text" name="" id="" v-model="blog.imageUrl" />
    <button type="submit">Update</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blog: {},
    };
  },
  created() {
    let apiURL = `http://localhost:3000/blogs/${this.$route.params.id}`;
    axios.get(apiURL).then((res) => (this.blog = res.data));
  },
  methods: {
    updateForm() {
      let apiURL = `http://localhost:3000/blogs/edit-blog/${this.$route.params.id}`;
      axios
        .put(apiURL, this.blog)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
