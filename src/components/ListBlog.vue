<template>
  <div>
    <div class="text-center my-6">
      <router-link
        to="/create-blog"
        class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
      >
        Create Blog
      </router-link>
    </div>
    <h1>Blogs</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5 md:gap-5 lg:gap-5 gap-6 mb-4 text-center"
    >
      <div
        class="max-w-screen-xl mx-auto p-2"
        v-for="blog in Blogs"
        :key="blog._id"
      >
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

            <img :src="blog.imageUrl" class="object-cover h-48 w-96 mx-auto" />

            <hr class="mt-4" />
            <router-link :to="'/edit-blog/' + blog._id" class="text-xs"
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
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5 md:gap-5 lg:gap-5 gap-6 mb-4"
    >
      <div
        class="mx-auto p-5 sm:p-10 md:p-16 relative hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
        v-for="blog in Blogs"
        :key="blog._id"
      >
        <div class="gap-10">
          <div class="sm:col-span-6 lg:col-span-9">
            <div>
              <img
                :src="blog.imageUrl"
                alt=""
                class="object-cover h-48 w-96 mx-auto"
              />
            </div>
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
