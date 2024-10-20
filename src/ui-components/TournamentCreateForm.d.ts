/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TournamentCreateFormInputValues = {
    name?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
    description?: string;
    cost?: number;
    state?: string;
    location?: string;
    phoneNumber?: string;
    logoUrl?: string;
    bannerImageUrl?: string;
    gallery?: string[];
    clubName?: string;
    userID?: string;
    isPublic?: boolean;
};
export declare type TournamentCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    startTime?: ValidationFunction<string>;
    endTime?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
    state?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    bannerImageUrl?: ValidationFunction<string>;
    gallery?: ValidationFunction<string>;
    clubName?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    isPublic?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TournamentCreateFormOverridesProps = {
    TournamentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    startTime?: PrimitiveOverrideProps<TextFieldProps>;
    endTime?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    bannerImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    gallery?: PrimitiveOverrideProps<TextFieldProps>;
    clubName?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    isPublic?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TournamentCreateFormProps = React.PropsWithChildren<{
    overrides?: TournamentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TournamentCreateFormInputValues) => TournamentCreateFormInputValues;
    onSuccess?: (fields: TournamentCreateFormInputValues) => void;
    onError?: (fields: TournamentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TournamentCreateFormInputValues) => TournamentCreateFormInputValues;
    onValidate?: TournamentCreateFormValidationValues;
} & React.CSSProperties>;
export default function TournamentCreateForm(props: TournamentCreateFormProps): React.ReactElement;
