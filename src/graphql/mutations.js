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
      owner
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
      owner
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
      owner
      __typename
    }
  }
`;
export const createLake = /* GraphQL */ `
  mutation CreateLake(
    $input: CreateLakeInput!
    $condition: ModelLakeConditionInput
  ) {
    createLake(input: $input, condition: $condition) {
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
export const updateLake = /* GraphQL */ `
  mutation UpdateLake(
    $input: UpdateLakeInput!
    $condition: ModelLakeConditionInput
  ) {
    updateLake(input: $input, condition: $condition) {
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
export const deleteLake = /* GraphQL */ `
  mutation DeleteLake(
    $input: DeleteLakeInput!
    $condition: ModelLakeConditionInput
  ) {
    deleteLake(input: $input, condition: $condition) {
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
export const createBoatRamp = /* GraphQL */ `
  mutation CreateBoatRamp(
    $input: CreateBoatRampInput!
    $condition: ModelBoatRampConditionInput
  ) {
    createBoatRamp(input: $input, condition: $condition) {
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
export const updateBoatRamp = /* GraphQL */ `
  mutation UpdateBoatRamp(
    $input: UpdateBoatRampInput!
    $condition: ModelBoatRampConditionInput
  ) {
    updateBoatRamp(input: $input, condition: $condition) {
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
export const deleteBoatRamp = /* GraphQL */ `
  mutation DeleteBoatRamp(
    $input: DeleteBoatRampInput!
    $condition: ModelBoatRampConditionInput
  ) {
    deleteBoatRamp(input: $input, condition: $condition) {
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
export const createTournamentLake = /* GraphQL */ `
  mutation CreateTournamentLake(
    $input: CreateTournamentLakeInput!
    $condition: ModelTournamentLakeConditionInput
  ) {
    createTournamentLake(input: $input, condition: $condition) {
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
export const updateTournamentLake = /* GraphQL */ `
  mutation UpdateTournamentLake(
    $input: UpdateTournamentLakeInput!
    $condition: ModelTournamentLakeConditionInput
  ) {
    updateTournamentLake(input: $input, condition: $condition) {
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
export const deleteTournamentLake = /* GraphQL */ `
  mutation DeleteTournamentLake(
    $input: DeleteTournamentLakeInput!
    $condition: ModelTournamentLakeConditionInput
  ) {
    deleteTournamentLake(input: $input, condition: $condition) {
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
export const createTournamentLakeBoatRamp = /* GraphQL */ `
  mutation CreateTournamentLakeBoatRamp(
    $input: CreateTournamentLakeBoatRampInput!
    $condition: ModelTournamentLakeBoatRampConditionInput
  ) {
    createTournamentLakeBoatRamp(input: $input, condition: $condition) {
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
export const updateTournamentLakeBoatRamp = /* GraphQL */ `
  mutation UpdateTournamentLakeBoatRamp(
    $input: UpdateTournamentLakeBoatRampInput!
    $condition: ModelTournamentLakeBoatRampConditionInput
  ) {
    updateTournamentLakeBoatRamp(input: $input, condition: $condition) {
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
export const deleteTournamentLakeBoatRamp = /* GraphQL */ `
  mutation DeleteTournamentLakeBoatRamp(
    $input: DeleteTournamentLakeBoatRampInput!
    $condition: ModelTournamentLakeBoatRampConditionInput
  ) {
    deleteTournamentLakeBoatRamp(input: $input, condition: $condition) {
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
