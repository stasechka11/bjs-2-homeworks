function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((value, index) => {
    return value === arr2[index];
  });
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
        return 0;
    }

  const filteredByGenderUsers = users.filter(user => user.gender === gender);

  if (filteredByGenderUsers.length === 0) {
    return 0;
  }

  const totalUsersAge = filteredByGenderUsers.reduce((acc, user) => acc + user.age, 0);

  return totalUsersAge / filteredByGenderUsers.length;
}