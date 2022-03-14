<template>
  <div class="modal" :id="modalID" :ref="modalID" tabindex="-1" aria-labelledby="clockInModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="clockInModalLabel">CLOCK IN</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
          <div class="mb-3">
            <label for="clockInDate" class="form-label">Date</label>
            <input id="startDate" class="form-control" type="date" v-model="today"/>
          </div>

          <div class="mb-3">
            <label for="clockInNotes" class="form-label">Notes</label>
            <textarea class="form-control" id="clockInNotes" rows="3"></textarea>
          </div>

        <div id="liveClock">
          <label>Current Time : </label>
          <ClockWidget/>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Clock In</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">

    import {defineComponent} from 'vue';
    import Datepicker from 'vue3-datepicker';
    import ClockWidget from '../widgets/ClockWidget.vue';


    export default defineComponent({
    name: 'CheckInModal',
    props : ['modalID'],
    components : {
      Datepicker,
      ClockWidget,
    },
    data : () => ({
      today : new Date().toISOString().substring(0,10)
    }),
  });

</script>