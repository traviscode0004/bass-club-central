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
export declare type LakeCreateFormInputValues = {
    name?: string;
    state?: string;
    description?: string;
    images?: string[];
};
export declare type LakeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LakeCreateFormOverridesProps = {
    LakeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LakeCreateFormProps = React.PropsWithChildren<{
    overrides?: LakeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LakeCreateFormInputValues) => LakeCreateFormInputValues;
    onSuccess?: (fields: LakeCreateFormInputValues) => void;
    onError?: (fields: LakeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LakeCreateFormInputValues) => LakeCreateFormInputValues;
    onValidate?: LakeCreateFormValidationValues;
} & React.CSSProperties>;
export default function LakeCreateForm(props: LakeCreateFormProps): React.ReactElement;
