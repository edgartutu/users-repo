<template>
	<div >
		<v-flex>
		<v-container>
			
       <material-card 
        title="Updated Abstract"
        color="red"
        >
			<v-card >
				<div class="font-weight-bold">New Abstract
				<v-text-field  placeholder="Abstract"></v-text-field>
        </div>
				<v-btn flat color="success">Submit</v-btn>
				
			</v-card>
      </material-card>
		</v-container>
    </v-flex>
		
	</div>

</template>
<script>

export default {
	
	data(){
		return{

		}
	}

}
</script>