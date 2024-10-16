/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateClub = /* GraphQL */ `
  subscription OnCreateClub($filter: ModelSubscriptionClubFilterInput) {
    onCreateClub(filter: $filter) {
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
export const onUpdateClub = /* GraphQL */ `
  subscription OnUpdateClub($filter: ModelSubscriptionClubFilterInput) {
    onUpdateClub(filter: $filter) {
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
export const onDeleteClub = /* GraphQL */ `
  subscription OnDeleteClub($filter: ModelSubscriptionClubFilterInput) {
    onDeleteClub(filter: $filter) {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onCreateTournament(filter: $filter) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onUpdateTournament(filter: $filter) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onDeleteTournament(filter: $filter) {
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
