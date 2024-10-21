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
  CheckboxField,
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
import { createTournament } from "../graphql/mutations";
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
export default function TournamentCreateForm(props) {
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
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    cost: "",
    state: "",
    location: "",
    phoneNumber: "",
    logoUrl: "",
    bannerImageUrl: "",
    gallery: [],
    clubName: "",
    isPublic: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [date, setDate] = React.useState(initialValues.date);
  const [startTime, setStartTime] = React.useState(initialValues.startTime);
  const [endTime, setEndTime] = React.useState(initialValues.endTime);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [cost, setCost] = React.useState(initialValues.cost);
  const [state, setState] = React.useState(initialValues.state);
  const [location, setLocation] = React.useState(initialValues.location);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [logoUrl, setLogoUrl] = React.useState(initialValues.logoUrl);
  const [bannerImageUrl, setBannerImageUrl] = React.useState(
    initialValues.bannerImageUrl
  );
  const [gallery, setGallery] = React.useState(initialValues.gallery);
  const [clubName, setClubName] = React.useState(initialValues.clubName);
  const [isPublic, setIsPublic] = React.useState(initialValues.isPublic);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDate(initialValues.date);
    setStartTime(initialValues.startTime);
    setEndTime(initialValues.endTime);
    setDescription(initialValues.description);
    setCost(initialValues.cost);
    setState(initialValues.state);
    setLocation(initialValues.location);
    setPhoneNumber(initialValues.phoneNumber);
    setLogoUrl(initialValues.logoUrl);
    setBannerImageUrl(initialValues.bannerImageUrl);
    setGallery(initialValues.gallery);
    setCurrentGalleryValue("");
    setClubName(initialValues.clubName);
    setIsPublic(initialValues.isPublic);
    setErrors({});
  };
  const [currentGalleryValue, setCurrentGalleryValue] = React.useState("");
  const galleryRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    date: [{ type: "Required" }],
    startTime: [{ type: "Required" }],
    endTime: [{ type: "Required" }],
    description: [],
    cost: [],
    state: [{ type: "Required" }],
    location: [{ type: "Required" }],
    phoneNumber: [],
    logoUrl: [],
    bannerImageUrl: [],
    gallery: [],
    clubName: [],
    isPublic: [{ type: "Required" }],
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
          date,
          startTime,
          endTime,
          description,
          cost,
          state,
          location,
          phoneNumber,
          logoUrl,
          bannerImageUrl,
          gallery,
          clubName,
          isPublic,
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
            query: createTournament.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TournamentCreateForm")}
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
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
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
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date: value,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Start time"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={startTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime: value,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
            };
            const result = onChange(modelFields);
            value = result?.startTime ?? value;
          }
          if (errors.startTime?.hasError) {
            runValidationTasks("startTime", value);
          }
          setStartTime(value);
        }}
        onBlur={() => runValidationTasks("startTime", startTime)}
        errorMessage={errors.startTime?.errorMessage}
        hasError={errors.startTime?.hasError}
        {...getOverrideProps(overrides, "startTime")}
      ></TextField>
      <TextField
        label="End time"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={endTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime,
              endTime: value,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
            };
            const result = onChange(modelFields);
            value = result?.endTime ?? value;
          }
          if (errors.endTime?.hasError) {
            runValidationTasks("endTime", value);
          }
          setEndTime(value);
        }}
        onBlur={() => runValidationTasks("endTime", endTime)}
        errorMessage={errors.endTime?.errorMessage}
        hasError={errors.endTime?.hasError}
        {...getOverrideProps(overrides, "endTime")}
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
              date,
              startTime,
              endTime,
              description: value,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
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
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime,
              endTime,
              description,
              cost: value,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
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
              date,
              startTime,
              endTime,
              description,
              cost,
              state: value,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
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
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location: value,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
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
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber: value,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
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
        label="Logo url"
        isRequired={false}
        isReadOnly={false}
        value={logoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl: value,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic,
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
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl: value,
              gallery,
              clubName,
              isPublic,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery: values,
              clubName,
              isPublic,
            };
            const result = onChange(modelFields);
            values = result?.gallery ?? values;
          }
          setGallery(values);
          setCurrentGalleryValue("");
        }}
        currentFieldValue={currentGalleryValue}
        label={"Gallery"}
        items={gallery}
        hasError={errors?.gallery?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("gallery", currentGalleryValue)
        }
        errorMessage={errors?.gallery?.errorMessage}
        setFieldValue={setCurrentGalleryValue}
        inputFieldRef={galleryRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Gallery"
          isRequired={false}
          isReadOnly={false}
          value={currentGalleryValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.gallery?.hasError) {
              runValidationTasks("gallery", value);
            }
            setCurrentGalleryValue(value);
          }}
          onBlur={() => runValidationTasks("gallery", currentGalleryValue)}
          errorMessage={errors.gallery?.errorMessage}
          hasError={errors.gallery?.hasError}
          ref={galleryRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "gallery")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Club name"
        isRequired={false}
        isReadOnly={false}
        value={clubName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName: value,
              isPublic,
            };
            const result = onChange(modelFields);
            value = result?.clubName ?? value;
          }
          if (errors.clubName?.hasError) {
            runValidationTasks("clubName", value);
          }
          setClubName(value);
        }}
        onBlur={() => runValidationTasks("clubName", clubName)}
        errorMessage={errors.clubName?.errorMessage}
        hasError={errors.clubName?.hasError}
        {...getOverrideProps(overrides, "clubName")}
      ></TextField>
      <CheckboxField
        label="Open to the public"
        name="isPublic"
        value="isPublic"
        isDisabled={false}
        checked={isPublic}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              date,
              startTime,
              endTime,
              description,
              cost,
              state,
              location,
              phoneNumber,
              logoUrl,
              bannerImageUrl,
              gallery,
              clubName,
              isPublic: value,
            };
            const result = onChange(modelFields);
            value = result?.isPublic ?? value;
          }
          if (errors.isPublic?.hasError) {
            runValidationTasks("isPublic", value);
          }
          setIsPublic(value);
        }}
        onBlur={() => runValidationTasks("isPublic", isPublic)}
        errorMessage={errors.isPublic?.errorMessage}
        hasError={errors.isPublic?.hasError}
        {...getOverrideProps(overrides, "isPublic")}
      ></CheckboxField>
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
