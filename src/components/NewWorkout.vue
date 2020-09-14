<template>
<!-- eslint-disable -->
  <div>
    <div>
      <h1>Workouts</h1>
    <div>
    <input v-model="title" type="text" name="title" id="workout-title" placeholder="Enter workout name here"><br />
    <textarea v-model="content" class="form-control rounded-0" rows="10" name="content" id="workout-content" placeholder="Enter workout here"></textarea>
  <br>
  <button @click="submitWorkout" class="btn btn-primary btn-lg btn-block" id="add-workout">Add Workout</button>
    </div>
    <div>
      <ul>
        <li>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  data() {
    return {
      title: '',
      content: '',
      date: Date(),
      workouts: []
    }
  },
methods: {
  
   submitWorkout(){
    if(this.title.length > 0 && this.content.length > 0) {
      db.collection('workouts').add({
        title: this.title,
        content: this.content,
        date: Date()

      })//.catch(error => console.log(error))
      this.workouts.push({
        title: this.title,
        content: this.content,
        date: Date()

      })
      this.title=''
      this.content=''
      this.date=Date()
    }  
    this.$router.push('home')

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
 }
}
}
</script>