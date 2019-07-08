<template>
	<div >
	
		<v-container >
			<v-card>
				<v-card-text>
					<v-text-field label="Student1" placeholder="Name" v-model="student1"></v-text-field>
					<v-text-field label="Reg No" placeholder="Reg No 1" v-model="reg_no1"></v-text-field>
					<v-text-field label="Student2" placeholder="Name" v-model="student2"></v-text-field>
					<v-text-field label="Reg No" placeholder="Reg No 2" v-model="reg_no2"></v-text-field>
					<v-text-field label="Title" placeholder="Title" v-model="title"></v-text-field>
					<v-text-field label="Problem Statment" placeholder="Problem Statment" v-model="problem_statment"></v-text-field>
					<v-text-field label="Abstract" placeholder="Abstract" v-model="abstract"></v-text-field>
					<v-btn flat class="green mx-0" @click="$refs.inputUpload.click()">Upload File</v-btn>
					<input v-show="false" ref="inputUpload" type="file">
					<v-btn flat class="green my-5" @click="postproposal()">Submit</v-btn>

				</v-card-text>
			</v-card>
			
		</v-container>
		
	</div>
	
</template>
<script>
import axios from 'axios'
    export default {
        data() {
            return {
                student1: "",
                reg_no1: "",
                student2: "",
                reg_no2: "",
                title: "",
                problem_statment: "",
                abstract: "",
                file: "pdf"
            }
        },
        methods: {
            postproposal() {
                axios.post("http://127.0.0.1:5000/postproposals", {
                    "student1": this.student1, "reg_no1": this.reg_no1, "student2": this.student2, "reg_no2": reg_no2,
                    "title": this.title, "problem_statment": this.problem_statment, "abstract": this.abstract,
                    "file": this.file
                })
            },
        }
}
</script>
