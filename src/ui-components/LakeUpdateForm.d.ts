/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LakeUpdateFormInputValues = {
    name?: string;
    state?: string;
    description?: string;
    images?: string[];
};
export declare type LakeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LakeUpdateFormOverridesProps = {
    LakeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LakeUpdateFormProps = React.PropsWithChildren<{
    overrides?: LakeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    lake?: any;
    onSubmit?: (fields: LakeUpdateFormInputValues) => LakeUpdateFormInputValues;
    onSuccess?: (fields: LakeUpdateFormInputValues) => void;
    onError?: (fields: LakeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LakeUpdateFormInputValues) => LakeUpdateFormInputValues;
    onValidate?: LakeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LakeUpdateForm(props: LakeUpdateFormProps): React.ReactElement;
