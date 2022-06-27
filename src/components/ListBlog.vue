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
  <div
    class="mx-auto p-5 sm:p-10 md:p-16 relative hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
    v-for="blog in Blogs"
    :key="blog._id"
  >
    <div class=" gap-10">
      <div class="sm:col-span-6 lg:col-span-9">
        <div><img :src="blog.imageUrl" alt="" class="w-100 mx-auto" /></div>
        <div
          class="mt-3 text-center rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
        >
          <div class="">
            <p
              href="#"
              class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              Election
            </p>
            <p
              href="#"
              class="block font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {{ blog.title }}
            </p>
            <p class="text-gray-600 text-base mt-2 mx-5 sm:mx-10">
              {{ blog.description }}
            </p>
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

<style scoped>
.classe {
  min-width: 500px;
}
</style>
