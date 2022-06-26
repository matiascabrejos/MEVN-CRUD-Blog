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

  <body class="bg-gray-800 text-gray-100 px-8 py-12">
    <form @submit.prevent="updateForm">
      <div
        class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg"
      >
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Title</span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name=""
              id=""
              v-model="blog.title"
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold"
              >Description</span
            >
            <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name=""
              id=""
              v-model="blog.description"
            ></textarea>
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold"
              >Image Url</span
            >
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name=""
              id=""
              v-model="blog.imageUrl"
            />
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Update Blog
            </button>
          </div>
        </div>
      </div>
    </form>
  </body>
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
