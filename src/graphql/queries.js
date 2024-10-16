/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phoneNumber
      state
      clubs {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phoneNumber
        state
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClub = /* GraphQL */ `
  query GetClub($id: ID!) {
    getClub(id: $id) {
      id
      name
      state
      cityArea
      contactEmail
      phoneNumber
      description
      rules
      memberLimit
      userID
      memberships {
        nextToken
        __typename
      }
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
export const listClubs = /* GraphQL */ `
  query ListClubs(
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        state
        cityArea
        contactEmail
        phoneNumber
        description
        rules
        memberLimit
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMembership = /* GraphQL */ `
  query GetMembership($id: ID!) {
    getMembership(id: $id) {
      id
      userID
      user {
        id
        username
        email
        phoneNumber
        state
        createdAt
        updatedAt
        owner
        __typename
      }
      clubID
      club {
        id
        name
        state
        cityArea
        contactEmail
        phoneNumber
        description
        rules
        memberLimit
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      dateJoined
      phoneNumber
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listMemberships = /* GraphQL */ `
  query ListMemberships(
    $filter: ModelMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        clubID
        dateJoined
        phoneNumber
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLake = /* GraphQL */ `
  query GetLake($id: ID!) {
    getLake(id: $id) {
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
export const listLakes = /* GraphQL */ `
  query ListLakes(
    $filter: ModelLakeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLakes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        state
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBoatRamp = /* GraphQL */ `
  query GetBoatRamp($id: ID!) {
    getBoatRamp(id: $id) {
      id
      name
      location
      street
      city
      state
      zipCode
      description
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
export const listBoatRamps = /* GraphQL */ `
  query ListBoatRamps(
    $filter: ModelBoatRampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoatRamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        street
        city
        state
        zipCode
        description
        lakeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
      id
      name
      date
      startTime
      endTime
      description
      cost
      state
      location
      phoneNumber
      clubID
      club {
        id
        name
        state
        cityArea
        contactEmail
        phoneNumber
        description
        rules
        memberLimit
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
      owner
      __typename
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        startTime
        endTime
        description
        cost
        state
        location
        phoneNumber
        clubID
        clubName
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTournamentLake = /* GraphQL */ `
  query GetTournamentLake($id: ID!) {
    getTournamentLake(id: $id) {
      id
      tournamentID
      tournament {
        id
        name
        date
        startTime
        endTime
        description
        cost
        state
        location
        phoneNumber
        clubID
        clubName
        userID
        createdAt
        updatedAt
        owner
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
export const listTournamentLakes = /* GraphQL */ `
  query ListTournamentLakes(
    $filter: ModelTournamentLakeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentLakes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tournamentID
        lakeID
        allowAllRamps
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTournamentLakeBoatRamp = /* GraphQL */ `
  query GetTournamentLakeBoatRamp($id: ID!) {
    getTournamentLakeBoatRamp(id: $id) {
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
        street
        city
        state
        zipCode
        description
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
export const listTournamentLakeBoatRamps = /* GraphQL */ `
  query ListTournamentLakeBoatRamps(
    $filter: ModelTournamentLakeBoatRampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentLakeBoatRamps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentLakeID
        boatRampID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const clubsByUserIDAndId = /* GraphQL */ `
  query ClubsByUserIDAndId(
    $userID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clubsByUserIDAndId(
      userID: $userID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        state
        cityArea
        contactEmail
        phoneNumber
        description
        rules
        memberLimit
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const membershipsByUserIDAndId = /* GraphQL */ `
  query MembershipsByUserIDAndId(
    $userID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    membershipsByUserIDAndId(
      userID: $userID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        clubID
        dateJoined
        phoneNumber
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const membershipsByClubIDAndId = /* GraphQL */ `
  query MembershipsByClubIDAndId(
    $clubID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    membershipsByClubIDAndId(
      clubID: $clubID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        clubID
        dateJoined
        phoneNumber
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const boatRampsByLakeID = /* GraphQL */ `
  query BoatRampsByLakeID(
    $lakeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBoatRampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    boatRampsByLakeID(
      lakeID: $lakeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        location
        street
        city
        state
        zipCode
        description
        lakeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentsByClubID = /* GraphQL */ `
  query TournamentsByClubID(
    $clubID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentsByClubID(
      clubID: $clubID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        date
        startTime
        endTime
        description
        cost
        state
        location
        phoneNumber
        clubID
        clubName
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentLakesByTournamentIDAndId = /* GraphQL */ `
  query TournamentLakesByTournamentIDAndId(
    $tournamentID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentLakeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentLakesByTournamentIDAndId(
      tournamentID: $tournamentID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentID
        lakeID
        allowAllRamps
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentLakesByLakeIDAndId = /* GraphQL */ `
  query TournamentLakesByLakeIDAndId(
    $lakeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentLakeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentLakesByLakeIDAndId(
      lakeID: $lakeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentID
        lakeID
        allowAllRamps
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentLakeBoatRampsByTournamentLakeIDAndId = /* GraphQL */ `
  query TournamentLakeBoatRampsByTournamentLakeIDAndId(
    $tournamentLakeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentLakeBoatRampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentLakeBoatRampsByTournamentLakeIDAndId(
      tournamentLakeID: $tournamentLakeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentLakeID
        boatRampID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentLakeBoatRampsByBoatRampIDAndId = /* GraphQL */ `
  query TournamentLakeBoatRampsByBoatRampIDAndId(
    $boatRampID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentLakeBoatRampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentLakeBoatRampsByBoatRampIDAndId(
      boatRampID: $boatRampID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentLakeID
        boatRampID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
