<template>
<div id="blog">
  <ul class="blog_list">
    <BlogItem v-for="post in displayedPosts" :key="post.id" :blogProps="post" />
  </ul>
  <div class="pagination">

    <button type="button"
    v-for="pageNumber in displayedPages"
    @click="page = pageNumber"
    :class="['btn_number', page === pageNumber ? 'active' : '', ]"
    > {{pageNumber}} </button>

    <button type="button"
    v-if="page < (pages.length - 1)"
    class="btn_dots">...</button>

    <!-- <button type="button"
     v-for="pageNumber in pages"
    @click="page = pageNumber"
    v-if="page !== (pages.length - 1)"
    class="btn_last"> {{pageNumber}} </button> -->

    <button type="button" @click="page++" v-if="page < pages.length" class="btn_next"> >> </button>
  </div>
</div>
</template>

<script>
import axios from 'axios';

import BlogItem from '../components/BlogItem.vue'

export default {
  name: 'Blog',
  components: {
    BlogItem
  },

  data() {
    return {
      posts: [],
      page: 1,
      perPage: 10,
      pageRange: 3,
      pages: [],
    }
  },

  methods: {
    getPosts () {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (this.posts = response.data))

        .catch(response => {
          console.log(response);
        });
    },

    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    paginate(pages) {
      let page = this.page;
      let from = 0;
      let to = (page + 1);
      if(to === 2) {
        to = page + 2;
      }
      return  pages.slice(from, to);
    },

    pagination(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    }
  },

  created() {
    this.getPosts();
  },

  watch: {
    posts () {
      this.setPages();
    }
  },

  computed: {
    displayedPosts () {
      return this.pagination(this.posts);
    },
    displayedPages () {
      return this.paginate(this.pages);
    }
  }

}
</script>

<style>
#blog {
  max-width: 1500px;
  margin: 0 auto;
}

#blog ul {
  padding: 0;
}

#blog ul li {
  list-style-type: none;
  text-align: left;
  padding: 20px 15px;
}

#blog ul li:nth-child(2n+2) {
  background-color: #f2f2f2;
}

#blog ul li .post_title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.pagination {
  margin: 50px 0;
  display: flex;
    justify-content: center;
}

.pagination button {
  color: green;
  width: 38px;
  height: 38px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  background-color: #fff;
  margin: 0 3px;
  transition: 0.3s;
  cursor: pointer;
}

.pagination button.active,
.pagination button:hover {
  background-color: green;
  color: #fff;
}
</style>
