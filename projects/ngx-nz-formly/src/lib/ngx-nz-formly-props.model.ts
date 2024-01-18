import { FormlyAttributeEvent } from "@ngx-formly/core/lib/models/fieldconfig";
import { TemplateRef } from "@angular/core";
import {
  NzSafeAny,
  NzSizeDSType,
  NzSizeLDSType,
  NzStatus,
} from "ng-zorro-antd/core/types";
import { Observable } from "rxjs";
import { NzOptionComponent, NzSelectPlacementType } from "ng-zorro-antd/select";
import { NzSelectModeType } from "ng-zorro-antd/select/select.types";
import { NzButtonShape, NzButtonType } from "ng-zorro-antd/button";
import { NzRadioButtonStyle } from "ng-zorro-antd/radio";

export type FormlyCustomFieldProps = NzFormlyInputProps | NzFormlyCheckboxProps;

enum InputMask {
  PHONE = "phone",
}

export interface NzFormlyCommonProps {
  disabled?: boolean;
  hidden?: boolean;
  label?: string;
  labelObs?: Observable<string>;
  labelPosition?: "inline" | "top" | "float";
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  keyup?: FormlyAttributeEvent;
  keydown?: FormlyAttributeEvent;
  keypress?: FormlyAttributeEvent;
  click?: FormlyAttributeEvent;
  focus?: FormlyAttributeEvent;
  blur?: FormlyAttributeEvent;
  change?: FormlyAttributeEvent;
  styles?: {
    labelClass?: string;
    labelWidth?: string;
    fieldClass?: string;
    wrapperClass?: string;
  };
}

// extends FormlyFieldProps

export interface NzFormlyInputProps extends NzFormlyCommonProps {
  mask?: InputMask | string;
  thousandSeparator?: string;
  minLen?: number;
  maxLen?: number;
  minValue?: number;
  maxValue?: number;
  nzBorderless?: boolean;
  nzStatus?: NzStatus;
  type?: string;
  // for nz-input-group
  nzAddOnAfter?: string | TemplateRef<void>;
  nzAddOnBefore?: string | TemplateRef<void>;
  nzAddOnAfterIcon?: string;
  nzAddOnBeforeIcon?: string;
  nzPrefix?: string | TemplateRef<void>;
  nzSuffix?: string | TemplateRef<void>;
  nzSize?: NzSizeLDSType;
}

export interface NzFormlyCheckboxProps extends NzFormlyCommonProps {
  hasSelectAll?: boolean;
  isGroup?: boolean;
}

export interface NzFormlySwitchProps extends NzFormlyCommonProps {
  nzCheckedChildren?: string | TemplateRef<void>;
  nzUnCheckedChildren?: string | TemplateRef<void>;
  nzLoading?: boolean;
  nzSize?: NzSizeDSType;
}

export interface NzFormlyRadioProps extends NzFormlyCommonProps {
  nzOptions: nzRadioOptionType[];
  nzName?: string;
  nzSize?: NzSizeDSType;
  nzType?: "nz-radio" | "nz-radio-button";
  nzButtonStyle?: NzRadioButtonStyle;
}

export interface NzFormlySelectProps extends NzFormlyCommonProps {
  objectValue?: boolean;
  compareWith?: (o1: any, o2: any) => boolean;
  nzAutoClearSearchValue?: boolean;
  nzAllowClear?: boolean;
  nzBorderless?: boolean;
  nzOpen?: boolean;
  nzAutoFocus?: boolean; // does it really work
  nzDropdownClassName?: string | string[];
  nzDropdownMatchSelectWidth?: boolean;
  nzDropdownStyle?: {
    [key: string]: string;
  };
  nzCustomTemplate?: TemplateRef<{ $implicit: NzOptionComponent }>;
  nzServerSearch?: boolean;
  nzFilterOption?: (input?: string, option?: NzOptionComponent) => boolean;
  nzMaxMultipleCount?: number;
  nzMode?: NzSelectModeType;
  nzNotFoundContent?: string | TemplateRef<void>;
  nzPlacement?: NzSelectPlacementType;
  nzShowArrow?: boolean;
  nzShowSearch?: boolean;
  nzSize?: NzSizeLDSType;
  nzStatus?: NzStatus;
  nzSuffixIcon?: TemplateRef<any> | string; // does it really work
  nzRemoveIcon?: TemplateRef<any>; // does it really work
  nzClearIcon?: TemplateRef<any>; // does it really work
  nzMenuItemSelectedIcon?: TemplateRef<any>; // does it really work
  nzTokenSeparators?: string[];
  nzLoading?: boolean;
  nzLoadingObs?: Observable<boolean>;
  nzMaxTagCount?: number; // does it really work
  nzOptions?: nzSelectOptionType[];
  nzOptionsObs?: Observable<nzSelectOptionType[]>;
  nzMaxTagPlaceholder?: TemplateRef<{ $implicit: any[] }>;
  nzOptionHeightPx?: number;
  nzOptionOverflowSize?: number;
  nzSelectOnTab?: boolean;
  nzOpenChange?: (event: boolean) => void;
  nzScrollToBottom?: () => void;
  nzOnSearch?: (event: string) => void;
}

type nzSelectOptionType = {
  label: string | number;
  value: NzSafeAny;
  disabled?: boolean;
  hide?: boolean;
  nzCustomContent?: string | TemplateRef<NzSafeAny>;
};

type nzRadioOptionType = {
  value: NzSafeAny;
  disabled?: boolean;
} & (
  | { label: string | number }
  | { nzCustomContent: string | TemplateRef<NzSafeAny> }
);

export interface NzFormlyButtonProps {
  text: string;
  disabled?: boolean;
  nzGhost?: boolean;
  nzLoading?: boolean;
  nzShape?: NzButtonShape;
  nzSize?: NzSizeLDSType;
  nzType?: NzButtonType;
  nzBlock?: boolean;
  nzDanger?: boolean;
  classList?: string;
  click?: () => void;
}
