function friend(friends) {
    const filterFriends = friends.map(function (name) {
        return name.length === 4 ? name : null;
    });
    return filterFriends.filter((name) => name !== null);
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));
