<template>
  <form class="zoomed-out">
    <v-avatar
      size="200px">
      <img v-if="author.profilePicture" :src="`http://localhost:3000/${author.profilePicture}`" />
      <img v-else :src="require('@/assets/yabLogo.jpg')" />
    </v-avatar>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name">
    </v-text-field>
    <div class="multiselect-container">
        <multi-select
            id="pronouns"
            v-model="pronounsSelected"
            :taggable="true"
            multiple="multiple"
            @tag="addTag"
            :options="pronounsOptions"
            placeholder="Pronouns">
        </multi-select>
    </div>
    <v-btn @click="cancelEdit" class="elevation-5" outline> Cancel </v-btn>
    <v-btn @click="edit" class="elevation-5" outline >Edit Author</v-btn>
  </form>
</template>

<script>
import Multiselect from 'vue-multiselect';
export default {
  name: 'AlterAuthor',
  props: ['author', 'pronouns'],
  components: {
      'multi-select': Multiselect,
  },
  created() {
      this.pronounsOptions = this.pronouns;
  },
  methods: {
      addTag( newTag, field ) {
          this[`${field}Options`].push(newTag);
          this[`${field}Selected`].push(newTag);
      },
      edit() {
          console.log('edit');
      },
      cancelEdit() {
          this.$emit('cancelCard');
      }
  },
  data() {
      return {
          name: this.author.name,
          nameRules: [
            v => !!v || 'Name is required',
            v => /^[a-zA-Z\s]+$/.test(v) || 'Name can only have letters'
          ],
          pronounsSelected: this.author.pronouns,
          pronounsOptions: [],
      }
  }
}
</script>
<style scoped>
  .zoomed-out {
     zoom: 0.5;
     -moz-transform: scale(0.5);
  }
  .section-header > h1 {
      font-size: 3em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  .bottom-margin {
      margin-bottom: 3%;
  }
</style>
