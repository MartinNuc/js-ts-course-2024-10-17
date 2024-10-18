function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve(Math.random()) : reject('Fetching failed')
    }, 1000);
  })
}

async function execute() {
  const results = [];
  try {
    const seznamData = await fetchData('seznam.cz');
    results.push(seznamData)
    const googleData = await fetchData('google.com');
    results.push(googleData);
  } catch (e) {
    console.log(error)
  }
  console.log('done')
}