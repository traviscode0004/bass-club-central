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
      profilePictureUrl
      heroImageUrl
      clubs {
        nextToken
        __typename
      }
      posts {
        nextToken
        __typename
      }
      catchReports {
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
        profilePictureUrl
        heroImageUrl
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      userID
      user {
        id
        username
        email
        phoneNumber
        state
        profilePictureUrl
        heroImageUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      content
      imageUrl
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        content
        imageUrl
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCatchReport = /* GraphQL */ `
  query GetCatchReport($id: ID!) {
    getCatchReport(id: $id) {
      id
      userID
      user {
        id
        username
        email
        phoneNumber
        state
        profilePictureUrl
        heroImageUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      fishType
      weight
      location
      imageUrl
      createdAt
      updatedAt
      userCatchReportsId
      __typename
    }
  }
`;
export const listCatchReports = /* GraphQL */ `
  query ListCatchReports(
    $filter: ModelCatchReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCatchReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        fishType
        weight
        location
        imageUrl
        createdAt
        updatedAt
        userCatchReportsId
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
      logoUrl
      additionalImages
      bannerImageUrl
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
        logoUrl
        additionalImages
        bannerImageUrl
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
        profilePictureUrl
        heroImageUrl
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
        logoUrl
        additionalImages
        bannerImageUrl
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      dateJoined
      phoneNumber
      clubProfilePictureUrl
      createdAt
      updatedAt
      userClubsId
      clubMembershipsId
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
        clubProfilePictureUrl
        createdAt
        updatedAt
        userClubsId
        clubMembershipsId
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
      images
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
        images
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
      images
      lakeID
      lake {
        id
        name
        state
        description
        images
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
      lakeBoatRampsId
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
        images
        lakeID
        createdAt
        updatedAt
        lakeBoatRampsId
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
      logoUrl
      bannerImageUrl
      gallery
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
        logoUrl
        additionalImages
        bannerImageUrl
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      clubName
      userID
      isPublic
      tournamentLakes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      clubTournamentsId
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
        logoUrl
        bannerImageUrl
        gallery
        clubID
        clubName
        userID
        isPublic
        createdAt
        updatedAt
        clubTournamentsId
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
        logoUrl
        bannerImageUrl
        gallery
        clubID
        clubName
        userID
        isPublic
        createdAt
        updatedAt
        clubTournamentsId
        owner
        __typename
      }
      lakeID
      lake {
        id
        name
        state
        description
        images
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
      lakeTournamentLakesId
      tournamentTournamentLakesId
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
        lakeTournamentLakesId
        tournamentTournamentLakesId
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
        lakeTournamentLakesId
        tournamentTournamentLakesId
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
        images
        lakeID
        createdAt
        updatedAt
        lakeBoatRampsId
        __typename
      }
      createdAt
      updatedAt
      boatRampTournamentLakeBoatRampsId
      tournamentLakeTournamentLakeBoatRampsId
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
        boatRampTournamentLakeBoatRampsId
        tournamentLakeTournamentLakeBoatRampsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      date
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        date
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
