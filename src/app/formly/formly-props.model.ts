import { FormlyFieldProps } from "@ngx-formly/core/lib/models/fieldconfig";
import { TemplateRef } from "@angular/core";
import { NzSizeLDSType, NzStatus } from "ng-zorro-antd/core/types";

export type FormlyCustomFieldProps = FormlyInputProps & FormlyCheckboxProps;

enum InputMask {
  PHONE = "phone",
  CURRENCY = "currency",
}

export interface FormlyInputProps extends FormlyFieldProps {
  labelPosition?: "Top" | "Left";
  nzAddOnAfter?: string | TemplateRef<void> | undefined;
  nzAddOnBefore?: string | TemplateRef<void> | undefined;
  nzBorderless?: boolean | undefined;
  nzPrefix?: string | TemplateRef<void> | undefined;
  nzSuffix?: string | TemplateRef<void> | undefined;
  nzSize?: NzSizeLDSType | undefined;
  nzStatus?: NzStatus | undefined;
  mask?: InputMask | string;
  // custom props
  styles?: {
    labelClass?: string | undefined;
    fieldClass?: string | undefined;
    labelWidth?: string | undefined;
    wrapperClass?: string | undefined;
  };
}

export interface FormlyCheckboxProps extends FormlyFieldProps {
  hasSelectAll?: boolean | undefined;
  isGroup?: boolean | undefined;
  nzDisabled?: boolean | undefined;
}
