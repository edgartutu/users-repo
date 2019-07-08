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
    <h1 class="subheading grey--text">Submitted Proposals</h1>
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
              <div>{{proposal.problem_statment}}</div>
              <h4 class="font-weight-bold">abstract</h4>
              <div>{{proposal.abstract}}</div>
               <h4 class="font-weight-bold">file</h4>
              <div>{{proposal.file}}</div>
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
export default {
  
    data () {
      return {
        proposals: [
        {reg_no: 'VICKIE:13/U/144',title:'Energy Saving System for Corporate Computers and Lighting System By Using PIR Sensor',problem_statment:'problemsMost children in Uganda have faced some form of violence – physical, sexual, emotional or domestic. More than 8 million children, 51 per cent of the child population, are believed to be vulnerable. f early Girls in particular are at risk omarriage, teenage pregnancy and female genital mutilation/cutting and child marriages. Although, FGM/C affects only 1.4 per cent of the population in Uganda, it is estimated that it affects about 90 per cent of girls in the 6 districts where FGM/C is practiced (three in Karamoja and three in Eastern Uganda).',abstract:'To design a platform to hold current topics and discussions on child abuse.To provide a hot line for victims which offers crisis intervention, information, and referrals to thousands of emergency, social service, and support resources.To provide a secure connection with victims that is monitored making the conversation confidential. To sensitize children in schools and various communities about the platform and its use.',file:'yes',status:'pending'},
        {reg_no: '12345',title:'Data communications',problem_statment:'problems',abstract:'no',file:'yes',status:'pending'},
        {reg_no: '12346',title:'Networking on the moon',problem_statment:'problems',abstract:'no',file:'yes',status:'pending'},
        {reg_no: '12347',title:'what is wrong with the government',problem_statment:'problems',abstract:'no',file:'yes',status:'pending'}
        ]
      }
    
    },
     
    
   
}
</script>
