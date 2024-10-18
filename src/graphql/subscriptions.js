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
  subscription OnCreateClub(
    $filter: ModelSubscriptionClubFilterInput
    $owner: String
  ) {
    onCreateClub(filter: $filter, owner: $owner) {
      id
      name
      userID
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateClub = /* GraphQL */ `
  subscription OnUpdateClub(
    $filter: ModelSubscriptionClubFilterInput
    $owner: String
  ) {
    onUpdateClub(filter: $filter, owner: $owner) {
      id
      name
      userID
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteClub = /* GraphQL */ `
  subscription OnDeleteClub(
    $filter: ModelSubscriptionClubFilterInput
    $owner: String
  ) {
    onDeleteClub(filter: $filter, owner: $owner) {
      id
      name
      userID
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateLake = /* GraphQL */ `
  subscription OnCreateLake($filter: ModelSubscriptionLakeFilterInput) {
    onCreateLake(filter: $filter) {
      id
      name
      state
      description
      boatRamps {
        nextToken
        __typename
      }
      tournamentLakes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLake = /* GraphQL */ `
  subscription OnUpdateLake($filter: ModelSubscriptionLakeFilterInput) {
    onUpdateLake(filter: $filter) {
      id
      name
      state
      description
      boatRamps {
        nextToken
        __typename
      }
      tournamentLakes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLake = /* GraphQL */ `
  subscription OnDeleteLake($filter: ModelSubscriptionLakeFilterInput) {
    onDeleteLake(filter: $filter) {
      id
      name
      state
      description
      boatRamps {
        nextToken
        __typename
      }
      tournamentLakes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBoatRamp = /* GraphQL */ `
  subscription OnCreateBoatRamp($filter: ModelSubscriptionBoatRampFilterInput) {
    onCreateBoatRamp(filter: $filter) {
      id
      name
      location
      lakeID
      lake {
        id
        name
        state
        description
        createdAt
        updatedAt
        __typename
      }
      tournamentLakeBoatRamps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBoatRamp = /* GraphQL */ `
  subscription OnUpdateBoatRamp($filter: ModelSubscriptionBoatRampFilterInput) {
    onUpdateBoatRamp(filter: $filter) {
      id
      name
      location
      lakeID
      lake {
        id
        name
        state
        description
        createdAt
        updatedAt
        __typename
      }
      tournamentLakeBoatRamps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBoatRamp = /* GraphQL */ `
  subscription OnDeleteBoatRamp($filter: ModelSubscriptionBoatRampFilterInput) {
    onDeleteBoatRamp(filter: $filter) {
      id
      name
      location
      lakeID
      lake {
        id
        name
        state
        description
        createdAt
        updatedAt
        __typename
      }
      tournamentLakeBoatRamps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      club {
        id
        name
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      clubName
      userID
      tournamentLakes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      club {
        id
        name
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      clubName
      userID
      tournamentLakes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      club {
        id
        name
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      clubName
      userID
      tournamentLakes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTournamentLake = /* GraphQL */ `
  subscription OnCreateTournamentLake(
    $filter: ModelSubscriptionTournamentLakeFilterInput
  ) {
    onCreateTournamentLake(filter: $filter) {
      id
      tournamentID
      tournament {
        id
        name
        date
        location
        clubID
        clubName
        userID
        createdAt
        updatedAt
        __typename
      }
      lakeID
      lake {
        id
        name
        state
        description
        createdAt
        updatedAt
        __typename
      }
      allowAllRamps
      tournamentLakeBoatRamps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTournamentLake = /* GraphQL */ `
  subscription OnUpdateTournamentLake(
    $filter: ModelSubscriptionTournamentLakeFilterInput
  ) {
    onUpdateTournamentLake(filter: $filter) {
      id
      tournamentID
      tournament {
        id
        name
        date
        location
        clubID
        clubName
        userID
        createdAt
        updatedAt
        __typename
      }
      lakeID
      lake {
        id
        name
        state
        description
        createdAt
        updatedAt
        __typename
      }
      allowAllRamps
      tournamentLakeBoatRamps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTournamentLake = /* GraphQL */ `
  subscription OnDeleteTournamentLake(
    $filter: ModelSubscriptionTournamentLakeFilterInput
  ) {
    onDeleteTournamentLake(filter: $filter) {
      id
      tournamentID
      tournament {
        id
        name
        date
        location
        clubID
        clubName
        userID
        createdAt
        updatedAt
        __typename
      }
      lakeID
      lake {
        id
        name
        state
        description
        createdAt
        updatedAt
        __typename
      }
      allowAllRamps
      tournamentLakeBoatRamps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTournamentLakeBoatRamp = /* GraphQL */ `
  subscription OnCreateTournamentLakeBoatRamp(
    $filter: ModelSubscriptionTournamentLakeBoatRampFilterInput
  ) {
    onCreateTournamentLakeBoatRamp(filter: $filter) {
      id
      tournamentLakeID
      tournamentLake {
        id
        tournamentID
        lakeID
        allowAllRamps
        createdAt
        updatedAt
        __typename
      }
      boatRampID
      boatRamp {
        id
        name
        location
        lakeID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTournamentLakeBoatRamp = /* GraphQL */ `
  subscription OnUpdateTournamentLakeBoatRamp(
    $filter: ModelSubscriptionTournamentLakeBoatRampFilterInput
  ) {
    onUpdateTournamentLakeBoatRamp(filter: $filter) {
      id
      tournamentLakeID
      tournamentLake {
        id
        tournamentID
        lakeID
        allowAllRamps
        createdAt
        updatedAt
        __typename
      }
      boatRampID
      boatRamp {
        id
        name
        location
        lakeID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTournamentLakeBoatRamp = /* GraphQL */ `
  subscription OnDeleteTournamentLakeBoatRamp(
    $filter: ModelSubscriptionTournamentLakeBoatRampFilterInput
  ) {
    onDeleteTournamentLakeBoatRamp(filter: $filter) {
      id
      tournamentLakeID
      tournamentLake {
        id
        tournamentID
        lakeID
        allowAllRamps
        createdAt
        updatedAt
        __typename
      }
      boatRampID
      boatRamp {
        id
        name
        location
        lakeID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
