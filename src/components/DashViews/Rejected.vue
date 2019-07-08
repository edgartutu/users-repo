<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >

      <v-flex
        md12
      >

        <material-card 
        title="Previous Projects"
        color="red"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-general text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
             
              <td>{{ item.title }}</td>
                <td>{{ item.abstract }}</td>
                <td>{{ item.year }}</td>
              
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

     
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
     
      {
        sortable: true,
        text: 'Title',
        value: 'title'
      },
      
      {
        sortable: false,
        text: 'Abstract',
        value: 'abstract',
      },
      {
        sortable: false,
        text: 'Year',
        value: 'year',
      },
      
    ],
    items: [
      {
        
        title: 'Energy Saving System for Corporate Computers and Lighting System By Using PIR Sensor ',
      
        abstract: 'think sbout it',
       year: 'coming....',
      
      },
     
    ]
  })
}
</script>
