import Vue from "vue";
import { Component } from "vue-property-decorator";

var toastr = require("toastr/toastr");

@Component
export default class ToastComponent extends Vue {
	created() {
		console.log(toastr);
	}

	mounted() {
		console.log("toast mounted");
		this.showToastr();
	}

	components: {
	}

	showToastr() {
		console.log("toastr triggered");
		toastr.info("Test message");
	}
}