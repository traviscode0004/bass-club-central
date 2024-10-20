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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createCatchReport = /* GraphQL */ `
  mutation CreateCatchReport(
    $input: CreateCatchReportInput!
    $condition: ModelCatchReportConditionInput
  ) {
    createCatchReport(input: $input, condition: $condition) {
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
export const updateCatchReport = /* GraphQL */ `
  mutation UpdateCatchReport(
    $input: UpdateCatchReportInput!
    $condition: ModelCatchReportConditionInput
  ) {
    updateCatchReport(input: $input, condition: $condition) {
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
export const deleteCatchReport = /* GraphQL */ `
  mutation DeleteCatchReport(
    $input: DeleteCatchReportInput!
    $condition: ModelCatchReportConditionInput
  ) {
    deleteCatchReport(input: $input, condition: $condition) {
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
export const createClub = /* GraphQL */ `
  mutation CreateClub(
    $input: CreateClubInput!
    $condition: ModelClubConditionInput
  ) {
    createClub(input: $input, condition: $condition) {
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
export const updateClub = /* GraphQL */ `
  mutation UpdateClub(
    $input: UpdateClubInput!
    $condition: ModelClubConditionInput
  ) {
    updateClub(input: $input, condition: $condition) {
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
export const deleteClub = /* GraphQL */ `
  mutation DeleteClub(
    $input: DeleteClubInput!
    $condition: ModelClubConditionInput
  ) {
    deleteClub(input: $input, condition: $condition) {
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
export const createMembership = /* GraphQL */ `
  mutation CreateMembership(
    $input: CreateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    createMembership(input: $input, condition: $condition) {
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
export const updateMembership = /* GraphQL */ `
  mutation UpdateMembership(
    $input: UpdateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    updateMembership(input: $input, condition: $condition) {
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
export const deleteMembership = /* GraphQL */ `
  mutation DeleteMembership(
    $input: DeleteMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    deleteMembership(input: $input, condition: $condition) {
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
export const createBoatRamp = /* GraphQL */ `
  mutation CreateBoatRamp(
    $input: CreateBoatRampInput!
    $condition: ModelBoatRampConditionInput
  ) {
    createBoatRamp(input: $input, condition: $condition) {
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
export const updateBoatRamp = /* GraphQL */ `
  mutation UpdateBoatRamp(
    $input: UpdateBoatRampInput!
    $condition: ModelBoatRampConditionInput
  ) {
    updateBoatRamp(input: $input, condition: $condition) {
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
export const deleteBoatRamp = /* GraphQL */ `
  mutation DeleteBoatRamp(
    $input: DeleteBoatRampInput!
    $condition: ModelBoatRampConditionInput
  ) {
    deleteBoatRamp(input: $input, condition: $condition) {
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
export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
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
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
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
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
