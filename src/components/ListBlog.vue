<template>
  <h1>Blogs</h1>
  <div>
    <tr v-for="blog in Blogs" :key="blog._id">
      <td>{{ blog.title }}</td>
      <td>{{ blog.description }}</td>
      <td>{{ blog.imageUrl }}</td>
      <td>{{ blog._id }}</td>
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
