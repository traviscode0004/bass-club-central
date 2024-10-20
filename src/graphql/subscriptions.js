/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateCatchReport = /* GraphQL */ `
  subscription OnCreateCatchReport(
    $filter: ModelSubscriptionCatchReportFilterInput
  ) {
    onCreateCatchReport(filter: $filter) {
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
export const onUpdateCatchReport = /* GraphQL */ `
  subscription OnUpdateCatchReport(
    $filter: ModelSubscriptionCatchReportFilterInput
  ) {
    onUpdateCatchReport(filter: $filter) {
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
export const onDeleteCatchReport = /* GraphQL */ `
  subscription OnDeleteCatchReport(
    $filter: ModelSubscriptionCatchReportFilterInput
  ) {
    onDeleteCatchReport(filter: $filter) {
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
export const onCreateClub = /* GraphQL */ `
  subscription OnCreateClub($filter: ModelSubscriptionClubFilterInput) {
    onCreateClub(filter: $filter) {
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
export const onUpdateClub = /* GraphQL */ `
  subscription OnUpdateClub($filter: ModelSubscriptionClubFilterInput) {
    onUpdateClub(filter: $filter) {
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
export const onDeleteClub = /* GraphQL */ `
  subscription OnDeleteClub($filter: ModelSubscriptionClubFilterInput) {
    onDeleteClub(filter: $filter) {
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
export const onCreateMembership = /* GraphQL */ `
  subscription OnCreateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
    $owner: String
  ) {
    onCreateMembership(filter: $filter, owner: $owner) {
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
export const onUpdateMembership = /* GraphQL */ `
  subscription OnUpdateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
    $owner: String
  ) {
    onUpdateMembership(filter: $filter, owner: $owner) {
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
export const onDeleteMembership = /* GraphQL */ `
  subscription OnDeleteMembership(
    $filter: ModelSubscriptionMembershipFilterInput
    $owner: String
  ) {
    onDeleteMembership(filter: $filter, owner: $owner) {
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
export const onCreateLake = /* GraphQL */ `
  subscription OnCreateLake($filter: ModelSubscriptionLakeFilterInput) {
    onCreateLake(filter: $filter) {
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
export const onUpdateLake = /* GraphQL */ `
  subscription OnUpdateLake($filter: ModelSubscriptionLakeFilterInput) {
    onUpdateLake(filter: $filter) {
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
export const onDeleteLake = /* GraphQL */ `
  subscription OnDeleteLake($filter: ModelSubscriptionLakeFilterInput) {
    onDeleteLake(filter: $filter) {
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
export const onCreateBoatRamp = /* GraphQL */ `
  subscription OnCreateBoatRamp($filter: ModelSubscriptionBoatRampFilterInput) {
    onCreateBoatRamp(filter: $filter) {
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
export const onUpdateBoatRamp = /* GraphQL */ `
  subscription OnUpdateBoatRamp($filter: ModelSubscriptionBoatRampFilterInput) {
    onUpdateBoatRamp(filter: $filter) {
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
export const onDeleteBoatRamp = /* GraphQL */ `
  subscription OnDeleteBoatRamp($filter: ModelSubscriptionBoatRampFilterInput) {
    onDeleteBoatRamp(filter: $filter) {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onCreateTournament(filter: $filter) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onUpdateTournament(filter: $filter) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onDeleteTournament(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
