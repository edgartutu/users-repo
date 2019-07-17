<template>
	<div >
		<v-flex>
		<v-container>
			
       <material-card 
        title="Updated Abstract"
        color="red lighten-3"
        >
			
				<div class="font-weight-bold">New Abstract
				<v-text-field  placeholder="Abstract"></v-text-field>
        </div>
				<v-btn flat class="teal">Submit</v-btn>
				
			
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