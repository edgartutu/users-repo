<template>
	<div >
	
		<v-container >
			<v-card>
				<v-card-text>
					<v-text-field label="Student1" placeholder="Name"></v-text-field>
					<v-text-field label="Reg No" placeholder="Reg No 1"></v-text-field>
					<v-text-field label="Student2" placeholder="Name"></v-text-field>
					<v-text-field label="Reg No" placeholder="Reg No 2"></v-text-field>
					<v-text-field label="Title" placeholder="Title"></v-text-field>
					<v-text-field label="Problem Statment" placeholder="Problem Statment"></v-text-field>
					<v-text-field label="Abstract" placeholder="Abstract"></v-text-field>
					<v-btn flat class="green mx-0" @click="$refs.inputUpload.click()">Upload File</v-btn>
					<input v-show="false" ref="inputUpload" type="file">
					<div>
						<v-btn flat class="green mx-0">Submit</v-btn>
					</div>
				</v-card-text>
			</v-card>
			
		</v-container>
		
	</div>
	
</template>