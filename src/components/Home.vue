<template>
<!-- eslint-disable -->
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h1>Workouts</h1>
        <input type="text" v-model="search" placeholder="Search workout"/>
      </li>
      <li class="collection-item" :key="index" v-for="(workout, index) in filteredWorkouts">
        <h3 class="title-display">{{workout.title}}</h3><br/>
        <h5 style="white-space: pre-line;">{{workout.content}}</h5>
        <p style="small" class="title-display">{{workout.date}}</p><br/>
        <button @click="deleteWorkout(workout.title)" class="btn light" >Delete</button>
        </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large blue">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import db from './firebaseInit'
import store from "@/store.js"
import moment from 'moment'
export default {
  data() {
    return {
      store,
      title: '',
      content: '',
      date: Date(),
      workouts: [],
      search: ''
    }
  },
methods: {
  moment, 
  deleteWorkout(title){
    let docToDeleteId = ''
    this.workouts = this.workouts.filter(workout => {
      return workout.title !== title
    })
    if(confirm ('Are you sure?')) {
    db.collection('workouts').where("title","==", title).get().then(query => {
      query.docs.map(doc => {
        docToDeleteId = doc.id;
      })
      db.collection('workouts').doc(docToDeleteId).delete()
      this.$router.push('home')
    })
  }
}
},
mounted(){
  db.collection('workouts').get().then(query => {
    query.forEach(doc => {
      const dbWorkout = {
        title: doc.data().title,
        content: doc.data().content,
        date: doc.data().date
      }
      this.workouts.push(dbWorkout)
    })
  })
},
computed: {
      filteredWorkouts: function(){
        return this.workouts.filter((workout) => {
          return workout.title.toLowerCase().match(this.search.toLowerCase()); 
        })
      }
}
}
</script>