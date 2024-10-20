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
export declare type ClubUpdateFormInputValues = {
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
export declare type ClubUpdateFormValidationValues = {
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
export declare type ClubUpdateFormOverridesProps = {
    ClubUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ClubUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClubUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    club?: any;
    onSubmit?: (fields: ClubUpdateFormInputValues) => ClubUpdateFormInputValues;
    onSuccess?: (fields: ClubUpdateFormInputValues) => void;
    onError?: (fields: ClubUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClubUpdateFormInputValues) => ClubUpdateFormInputValues;
    onValidate?: ClubUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClubUpdateForm(props: ClubUpdateFormProps): React.ReactElement;
