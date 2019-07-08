<template>
	<div >
		<v-flex>
		<v-container>
			
			<v-card class= "ma-2" v-for="project in projects" :key="project.title">
				<v-card-text class="px-4">
          <h4 class="font-weight-bold">Title</h4>
					<div >{{project.title}}</div>
           <h4 class="font-weight-bold">Comments</h4>
					<div >{{project.comments}}</div>
           <h4 class="font-weight-bold">Date</h4>
					<div >{{project.date}}</div>
				</v-card-text>
				
			</v-card>
		</v-container>
    </v-flex>
		
	</div>
	
</template>

<script>

export default {
	components:{
		
	},
	data(){
		return{
			projects: [
			{title:'hello',comments:'awesome',date:'date'},
			{title:'hello2',comments:'awesome',date:'date'},
			{title:'hello3',comments:'awesome',date:'date'},
			{title:'hello4',comments:'awesome',date:'date'},
			{title:'hello5',comments:'awesome',date:'date'},
			{title:'hello6',comments:'awesome',date:'date'},
			{title:'hello7',comments:'awesome',date:'date'},
			{title:'hello8',comments:'awesome',date:'date'},
			{title:'hello9',comments:'awesome',date:'date'},
			{title:'hello10',comments:'awesome',date:'date'}

			]

		}
	}
}
</script>