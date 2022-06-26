<template>
  <h1>Blogs</h1>
  <div>
    <tr v-for="blog in Blogs" :key="blog._id">
      <td>{{ blog.title }}</td>
      <td>{{ blog.description }}</td>
      <td>{{ blog._id }}</td>
      <td><img :src="blog.imageUrl" alt="" /></td>
      <td>
        <router-link :to="'/edit/' + blog._id" class="btn btn-success me-2">
          Edit
        </router-link>
        <button @click.prevent="deleteBlog(blog._id)" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  </div>

  <div
    class="max-w-screen-xl mx-auto p-16"
    v-for="blog in Blogs"
    :key="blog._id"
  >
    <div class="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
      <div
        class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
      >
        <div class="py-4 px-8">
          <a href="#">
            <h4 class="text-lg mb-3 font-semibold">
              {{ blog.title }}
            </h4>
          </a>
          <p class="mb-2 text-sm text-gray-600">
            {{ blog.description }}
          </p>

          <img :src="blog.imageUrl" class="w-100" />

          <hr class="mt-4" />
          <router-link :to="'/edit/' + blog._id" class="text-xs"
            >EDIT</router-link
          >
          &nbsp;<button
            @click.prevent="deleteBlog(blog._id)"
            class="text-xs text-gray-500"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Blogs: [],
    };
  },
  created() {
    let apiURL = "http://localhost:3000/blogs";

    axios
      .get(apiURL)
      .then((res) => {
        this.Blogs = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteBlog(id) {
      let apiURL = "http://localhost:3000/blogs/delete/" + id;
      let indexOfArrayItem = this.Blogs.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Blogs.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
