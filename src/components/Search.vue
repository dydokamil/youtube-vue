<template>
  <form id='searchForm'>
    <div><input v-model="query"
             placeholder="Cats, pranks, gaming..."></div>
    <div>
      <button type='submit'
              @click.prevent="onSearch">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    query: "",
  }),
  methods: {
    onSearch() {
      this.$store.dispatch("searchVideo", this.query)
    },
  },
}
</script>


<style>
#searchForm input {
  border-radius: 5px;
  padding: 0.5rem 0.5rem;
  border: 1px solid #e3e3e3;
  transition: 150ms;
  width: 50%;

  /* box-shadow: 1px 1px rgb(0, 0, 0, 0.2); */
}

#searchForm input:focus {
  outline: none;
  box-shadow: 0 0 1px 1px rgb(57, 175, 120);
  /* transform: scaleX(1.5); */
  width: 55%;
}

#searchForm button {
  margin-top: 0.25rem;
  cursor: pointer;
  background: none;
  border: none;
  /* border: 1px solid black; */
  font-size: large;

  transition: 150ms;
}

#searchForm button:active,
button:focus {
  outline: none;
}

#searchForm button:hover {
  color: rgb(57, 175, 120);
}
</style>

