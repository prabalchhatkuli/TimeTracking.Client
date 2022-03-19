<template>
  <div
    class="modal"
    :id="modalID"
    :ref="modalID"
    tabindex="-1"
    aria-labelledby="clockInModalLabel"
    aria-hidden="true"
  >
    <div class="alert alert-danger" v-if="error">
      An error has occurred. Unable to clock in. {{ error }}
    </div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="clockInModalLabel">CLOCK IN</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-show="!isSuccess">
          <div class="mb-3">
            <label for="clockInDate" class="form-label" read>Date</label>
            <input
              id="startDate"
              readonly
              class="form-control"
              type="date"
              v-model="today"
            />
          </div>

          <div class="mb-3">
            <label for="clockInNotes" class="form-label">Notes</label>
            <textarea
              class="form-control"
              id="clockInNotes"
              rows="3"
            ></textarea>
          </div>

          <div id="liveClock">
            <label>Current Time</label>
            <ClockWidget />
          </div>
        </div>
        <div class="modal-body" v-show="isSuccess">You've clocked in!</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="clockIn">
            Clock In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datepicker from "vue3-datepicker";
import ClockWidget from "../widgets/ClockWidget.vue";
import moment from "moment";
import axios from "axios";

export default defineComponent({
  name: "CheckInModal",
  props: ["modalID"],
  components: {
    Datepicker,
    ClockWidget,
  },
  data: () => ({
    momentInstance: moment(),
    today: moment.utc(new Date()).local().format().substring(0, 10),
    error: "",
    isSuccess: false,
  }),
  methods: {
    clockIn() {
      if (this.today == null) {
        return;
      }

      let clockInRequest = {};

      axios
        .post(
          import.meta.env.VITE_API_SERVERPORT +
            "/api/TimePunch/CreateClockInEntry",
          clockInRequest
        )
        .then((response) => {
          this.showSuccess();
        })
        .catch((returnedError) => {
          if (returnedError.response) {
            this.error = returnedError.response.data;
          } else {
            this.error = returnedError;
          }
        });
    },
    showSuccess() {
      this.isSuccess = true;
    },
  },
});
</script>
