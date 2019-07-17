<template>
	<div >
    <v-container
	 fill-height
    fluid
    grid-list-xl>
		
    <v-layout
     >
      
    
    <v-flex xs12
        md10 >

		
			
			<v-card class="rounded-card" >
				<v-flex >
				<v-text-field label="Title" placeholder="Title"></v-text-field>
				</v-flex>
				<v-flex xs12 sm4 text-xs-center>
				<v-btn flat class="pink darken-1 " @click="$refs.inputUpload.click()">Upload File</v-btn>
				<input v-show="false" ref="inputUpload" type="file">
				
					<v-btn flat class="teal">Submit</v-btn>
					</v-flex><br>
					<v-card-text v-for="repo in reports" :key="repo.reg_no">
					 <div >{{repo.files}}</div>
					 <div >{{repo.datestamp}}</div>

				</v-card-text>
				
			</v-card><br>
			
			
			
		</v-flex>
     </v-layout>
     </v-container>
  
		
	</div>
	
</template>

<script>

import { Script } from 'vm';
export default {
	
	data(){
		return{

			reports:{

			}

		}
	}

}
</script>
<style >

 .rounded-card{
    border-radius:50px;
}
	
</style>