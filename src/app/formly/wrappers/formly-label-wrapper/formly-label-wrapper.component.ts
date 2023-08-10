import { Component } from "@angular/core";
import { FieldTypeConfig, FieldWrapper } from "@ngx-formly/core";
import { FormlyCommonProps } from "../../formly-props.model";

@Component({
  selector: "app-formly-label-wrapper",
  templateUrl: "./formly-label-wrapper.component.html",
  styleUrls: ["./formly-label-wrapper.component.scss"],
})
export class FormlyLabelWrapperComponent extends FieldWrapper<
  FieldTypeConfig<FormlyCommonProps>
> {}