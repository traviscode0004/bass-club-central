/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createClub } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ClubCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    state: "",
    cityArea: "",
    contactEmail: "",
    phoneNumber: "",
    description: "",
    rules: "",
    memberLimit: "",
    logoUrl: "",
    additionalImages: [],
    bannerImageUrl: "",
    userID: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [state, setState] = React.useState(initialValues.state);
  const [cityArea, setCityArea] = React.useState(initialValues.cityArea);
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [rules, setRules] = React.useState(initialValues.rules);
  const [memberLimit, setMemberLimit] = React.useState(
    initialValues.memberLimit
  );
  const [logoUrl, setLogoUrl] = React.useState(initialValues.logoUrl);
  const [additionalImages, setAdditionalImages] = React.useState(
    initialValues.additionalImages
  );
  const [bannerImageUrl, setBannerImageUrl] = React.useState(
    initialValues.bannerImageUrl
  );
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setState(initialValues.state);
    setCityArea(initialValues.cityArea);
    setContactEmail(initialValues.contactEmail);
    setPhoneNumber(initialValues.phoneNumber);
    setDescription(initialValues.description);
    setRules(initialValues.rules);
    setMemberLimit(initialValues.memberLimit);
    setLogoUrl(initialValues.logoUrl);
    setAdditionalImages(initialValues.additionalImages);
    setCurrentAdditionalImagesValue("");
    setBannerImageUrl(initialValues.bannerImageUrl);
    setUserID(initialValues.userID);
    setErrors({});
  };
  const [currentAdditionalImagesValue, setCurrentAdditionalImagesValue] =
    React.useState("");
  const additionalImagesRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    state: [{ type: "Required" }],
    cityArea: [{ type: "Required" }],
    contactEmail: [{ type: "Required" }],
    phoneNumber: [],
    description: [],
    rules: [],
    memberLimit: [],
    logoUrl: [],
    additionalImages: [],
    bannerImageUrl: [],
    userID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          state,
          cityArea,
          contactEmail,
          phoneNumber,
          description,
          rules,
          memberLimit,
          logoUrl,
          additionalImages,
          bannerImageUrl,
          userID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createClub.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClubCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state: value,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="City area"
        isRequired={true}
        isReadOnly={false}
        value={cityArea}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea: value,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.cityArea ?? value;
          }
          if (errors.cityArea?.hasError) {
            runValidationTasks("cityArea", value);
          }
          setCityArea(value);
        }}
        onBlur={() => runValidationTasks("cityArea", cityArea)}
        errorMessage={errors.cityArea?.errorMessage}
        hasError={errors.cityArea?.hasError}
        {...getOverrideProps(overrides, "cityArea")}
      ></TextField>
      <TextField
        label="Contact email"
        isRequired={true}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail: value,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.contactEmail ?? value;
          }
          if (errors.contactEmail?.hasError) {
            runValidationTasks("contactEmail", value);
          }
          setContactEmail(value);
        }}
        onBlur={() => runValidationTasks("contactEmail", contactEmail)}
        errorMessage={errors.contactEmail?.errorMessage}
        hasError={errors.contactEmail?.hasError}
        {...getOverrideProps(overrides, "contactEmail")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber: value,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description: value,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Rules"
        isRequired={false}
        isReadOnly={false}
        value={rules}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules: value,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.rules ?? value;
          }
          if (errors.rules?.hasError) {
            runValidationTasks("rules", value);
          }
          setRules(value);
        }}
        onBlur={() => runValidationTasks("rules", rules)}
        errorMessage={errors.rules?.errorMessage}
        hasError={errors.rules?.hasError}
        {...getOverrideProps(overrides, "rules")}
      ></TextField>
      <TextField
        label="Member limit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={memberLimit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit: value,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.memberLimit ?? value;
          }
          if (errors.memberLimit?.hasError) {
            runValidationTasks("memberLimit", value);
          }
          setMemberLimit(value);
        }}
        onBlur={() => runValidationTasks("memberLimit", memberLimit)}
        errorMessage={errors.memberLimit?.errorMessage}
        hasError={errors.memberLimit?.hasError}
        {...getOverrideProps(overrides, "memberLimit")}
      ></TextField>
      <TextField
        label="Logo url"
        isRequired={false}
        isReadOnly={false}
        value={logoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl: value,
              additionalImages,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.logoUrl ?? value;
          }
          if (errors.logoUrl?.hasError) {
            runValidationTasks("logoUrl", value);
          }
          setLogoUrl(value);
        }}
        onBlur={() => runValidationTasks("logoUrl", logoUrl)}
        errorMessage={errors.logoUrl?.errorMessage}
        hasError={errors.logoUrl?.hasError}
        {...getOverrideProps(overrides, "logoUrl")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages: values,
              bannerImageUrl,
              userID,
            };
            const result = onChange(modelFields);
            values = result?.additionalImages ?? values;
          }
          setAdditionalImages(values);
          setCurrentAdditionalImagesValue("");
        }}
        currentFieldValue={currentAdditionalImagesValue}
        label={"Additional images"}
        items={additionalImages}
        hasError={errors?.additionalImages?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "additionalImages",
            currentAdditionalImagesValue
          )
        }
        errorMessage={errors?.additionalImages?.errorMessage}
        setFieldValue={setCurrentAdditionalImagesValue}
        inputFieldRef={additionalImagesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Additional images"
          isRequired={false}
          isReadOnly={false}
          value={currentAdditionalImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.additionalImages?.hasError) {
              runValidationTasks("additionalImages", value);
            }
            setCurrentAdditionalImagesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("additionalImages", currentAdditionalImagesValue)
          }
          errorMessage={errors.additionalImages?.errorMessage}
          hasError={errors.additionalImages?.hasError}
          ref={additionalImagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "additionalImages")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Banner image url"
        isRequired={false}
        isReadOnly={false}
        value={bannerImageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.bannerImageUrl ?? value;
          }
          if (errors.bannerImageUrl?.hasError) {
            runValidationTasks("bannerImageUrl", value);
          }
          setBannerImageUrl(value);
        }}
        onBlur={() => runValidationTasks("bannerImageUrl", bannerImageUrl)}
        errorMessage={errors.bannerImageUrl?.errorMessage}
        hasError={errors.bannerImageUrl?.hasError}
        {...getOverrideProps(overrides, "bannerImageUrl")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              state,
              cityArea,
              contactEmail,
              phoneNumber,
              description,
              rules,
              memberLimit,
              logoUrl,
              additionalImages,
              bannerImageUrl,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
