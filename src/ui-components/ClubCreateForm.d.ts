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
export declare type ClubCreateFormInputValues = {
    name?: string;
    state?: string;
    cityArea?: string;
    contactEmail?: string;
    phoneNumber?: string;
    description?: string;
    rules?: string;
    memberLimit?: number;
    logoUrl?: string;
    additionalImages?: string[];
    bannerImageUrl?: string;
    userID?: string;
};
export declare type ClubCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    cityArea?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    rules?: ValidationFunction<string>;
    memberLimit?: ValidationFunction<number>;
    logoUrl?: ValidationFunction<string>;
    additionalImages?: ValidationFunction<string>;
    bannerImageUrl?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClubCreateFormOverridesProps = {
    ClubCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    cityArea?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    rules?: PrimitiveOverrideProps<TextFieldProps>;
    memberLimit?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    additionalImages?: PrimitiveOverrideProps<TextFieldProps>;
    bannerImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClubCreateFormProps = React.PropsWithChildren<{
    overrides?: ClubCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClubCreateFormInputValues) => ClubCreateFormInputValues;
    onSuccess?: (fields: ClubCreateFormInputValues) => void;
    onError?: (fields: ClubCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClubCreateFormInputValues) => ClubCreateFormInputValues;
    onValidate?: ClubCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClubCreateForm(props: ClubCreateFormProps): React.ReactElement;
