<template>
 <div >
  
    <main class="approving-list">
      <div v-if="Approved == false ">
        <div class="pending" v-if="ApproveList.length == 0">
          <p>no words to be approved</p>
        </div>
        <div class="pending" v-if="filterWord.length != 0">
          <p>
            {{ filterWord.length }}
            words to be approved
          </p>
        </div>
      </div>

      <div v-for="(word, index) in filterWord" v-bind:key="index" class="card">
        <div class="card_title">
          <h3>{{ word.Word }}</h3>
          <span> {{ word.Synonyms }} </span>
        </div>
        <hr />
        <div class="card_content" v-html="word.definition.slice(0, 100)"></div>
        <router-link
          v-bind:to="{
            name: 'word',
            params: {
              Word: word.Word,
            },
            query: { word: word.Word.toLowerCase().replace(/ /g,'') },
          }"
          >See More</router-link
        >
      </div>
    </main>
  </div>

</template>

<script>
import db from "../firebase/init";


export default {

  data: function() {
    return {
      Approved: false,
      feedback_search: false,
      SEARCH: "",
      feedback: "",
      AllWords: [],
      pendingS: [],
    };
  },
  methods: {
    pendingWords() {
     
        var pendings = [];


        this.AllWords.map(() => {
        
            pendings.push();
          
        });
        this.pendingS = pendings;
   
    
     
    },
  },
  mounted() {
    var Words = [];
    db.collection("Words")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          Words.push({
            Word: doc.data().Word,
            Origin: doc.data().Origin,
            definition: doc.data().definition,
            Synonyms: doc.data().Synonyms,
            Willaya: doc.data().Willaya,
          });
        });
      });
    this.AllWords = Words;
  },
};



</script>

<style>

</style>
