<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex xs12
        md10 >
        
        
         <div class="pendingproposals">
    <navbar/>
    <h4  v-for="proposal in proposals" :key="proposal.status" class="orange--text">{{proposal.status}}</h4>
    <v-container class="my-2">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="proposal in proposals" :key="proposal.reg_no">
          <div slot="header">{{proposal.title}}</div>
          <v-card>
            <v-card-text class="px-4">
              <h4 class="font-weight-bold">reg n0</h4>
              <div >{{proposal.reg_no}}</div>
              <h4 class="font-weight-bold">title</h4>
              <div>{{proposal.title}}</div>
              <h4 class="font-weight-bold">problem statment</h4>
              <div>{{proposal.problem_statement}}</div>
              <h4 class="font-weight-bold">abstract</h4>
              <div>{{proposal.abstract}}</div>
               <h4 class="font-weight-bold">file</h4>
              <div>{{proposal.proposal_uploadfile}}</div>
               <h4 class="font-weight-bold">Students</h4>
              <div>{{proposal.student}}</div>
               <h4 class="font-weight-bold">Comment</h4>
              <div>{{proposal.commet}}</div>
            </v-card-text>
            
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      
    </v-container>
    
  </div>
  </v-flex>
        
     
    </v-layout>
  </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                proposals: [],
                reg_no: "",
            }
        },
        created() {
            this.reg_no = localStorage.getItem('user')
            axios.post('http://127.0.0.1:5000/viewprojects2',
                { reg_no: this.reg_no }).then(response => {
                this.proposals = response.data
            })


        }
    }
     
</script>
