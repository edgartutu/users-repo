<template>
	<div >
	
		<v-container >
			<v-card class="rounded-card">
                <v-card-text>
                    <v-text-field label="Student1" placeholder="Name" v-model="student1"></v-text-field>
                    <v-text-field label="Reg No" placeholder="Reg No 1" v-model="reg_no1"></v-text-field>
                    <v-text-field label="Student2" placeholder="Name" v-model="student2"></v-text-field>
                    <v-text-field label="Reg No" placeholder="Reg No 2" v-model="reg_no2"></v-text-field>
                    <v-text-field label="Project Reference Number" placeholder="Project Reference Number" v-model="project_ref"></v-text-field>
                    <v-text-field label="Title" placeholder="Title" v-model="title"></v-text-field>
                    <v-text-field label="Problem Statment" placeholder="Problem Statment" v-model="problem_statment"></v-text-field>
                    <v-text-field label="Methodology" placeholder="Methodology" v-model="methodology"></v-text-field>
                    <input type="file" name="Upload File" @change="uploadfile" />
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
                project_ref: "",
                student2: "",
                reg_no2: "",
                title: "",
                problem_statment: "",
                methodology: "",
                file: null
            }
        },
        methods: {

            postproposal() {
                const fd = new FormData();
                fd.append('foo', 'bar')
                fd.append('file', this.file)
                fd.append('student1', this.student1)
                fd.append('reg_no', this.reg_no1)
                fd.append('student2', this.student2)
                fd.append('reg_no2', this.reg_no2)
                fd.append('title', this.title)
                fd.append('problem_statement', this.problem_statment)
                fd.append('methodology', this.methodology)
                fd.append('proposal_ref', this.project_ref)

                axios.post("http://127.0.0.1:5000/postproposals", fd).then(response => {
                    console.log(response)
                })
            },
            uploadfile(event) {
                this.file = event.target.files[0]
            }
        }
}
</script>
<style>
.rounded-card{
    border-radius:50px;
}
    
</style>
