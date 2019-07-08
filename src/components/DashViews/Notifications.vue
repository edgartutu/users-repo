<template>
	<div >
    <v-container>
		
    <v-layout
      fill-height
    fluid
    grid-list-xl>
      
    
    <v-flex xs12
        md10 >

		
			
			<v-card >
				<v-text-field label="Title" placeholder="Title"></v-text-field>
				<v-btn flat class="green mx-0" @click="$refs.inputUpload.click()">Upload File</v-btn>
				<input v-show="false" ref="inputUpload" type="file">
				<div>
					<v-btn flat class="green mx-0">Submit</v-btn>
				</div>
			</v-card>
			
		</v-flex>
     </v-layout>
     </v-container>
  
		
	</div>
	
</template>

<script>
import navbar from '@/components/user/navbar1.vue'
export default {
	components:{
		navbar
	},
	data(){
		return{

		}
	}

}