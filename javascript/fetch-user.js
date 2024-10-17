
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    const responseDuration = Math.round(1000 + Math.random() * 2000);
    setTimeout(() => {
      if (userId < 0) {
        return reject(new Error(`User doesn't exist.`));
      }

      resolve({
        id: userId,
        name: 'John Doe',
        email: 'john.doe@example.com'
      });
    }, responseDuration);
  });
}

console.log('fetching user...');
fetchUser(25).then((user) => console.log(user))