import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.css"]
})
export class ModalFormComponent {
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormLoginEmail: new FormControl("", Validators.email),
      modalFormLoginPassword: new FormControl("", Validators.required),
      modalFormRegisterEmail: new FormControl("", Validators.email),
      modalFormRegisterPassword: new FormControl("", Validators.required),
      modalFormRegisterRepeatPassword: new FormControl("", Validators.required)
    });
  }

  get modalFormLoginEmail() {
    return this.validatingForm.get("modalFormLoginEmail");
  }

  get modalFormLoginPassword() {
    return this.validatingForm.get("modalFormLoginPassword");
  }

  get modalFormRegisterEmail() {
    return this.validatingForm.get("modalFormRegisterEmail");
  }

  get modalFormRegisterPassword() {
    return this.validatingForm.get("modalFormRegisterPassword");
  }

  get modalFormRegisterRepeatPassword() {
    return this.validatingForm.get("modalFormRegisterRepeatPassword");
  }
}
