/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      clubs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      clubs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      clubs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClub = /* GraphQL */ `
  mutation CreateClub(
    $input: CreateClubInput!
    $condition: ModelClubConditionInput
  ) {
    createClub(input: $input, condition: $condition) {
      id
      name
      userID
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userClubsId
      __typename
    }
  }
`;
export const updateClub = /* GraphQL */ `
  mutation UpdateClub(
    $input: UpdateClubInput!
    $condition: ModelClubConditionInput
  ) {
    updateClub(input: $input, condition: $condition) {
      id
      name
      userID
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userClubsId
      __typename
    }
  }
`;
export const deleteClub = /* GraphQL */ `
  mutation DeleteClub(
    $input: DeleteClubInput!
    $condition: ModelClubConditionInput
  ) {
    deleteClub(input: $input, condition: $condition) {
      id
      name
      userID
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userClubsId
      __typename
    }
  }
`;
export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
      id
      name
      date
      location
      clubID
      userID
      createdAt
      updatedAt
      clubTournamentsId
      __typename
    }
  }
`;
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
      id
      name
      date
      location
      clubID
      userID
      createdAt
      updatedAt
      clubTournamentsId
      __typename
    }
  }
`;
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
      id
      name
      date
      location
      clubID
      userID
      createdAt
      updatedAt
      clubTournamentsId
      __typename
    }
  }
`;
