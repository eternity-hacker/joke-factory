//get categories and blacklistFlags
const jokeApiInfo = fetch("https://v2.jokeapi.dev/info")
//handle the fulfilled promise whose value will be a response value
jokeApiInfo.then(function (response) {
  return response.json()
}) //second then gets the info from the body
  .then(function (jokeInfo) {
    //store categories, blacklistFlags, languages
    const { categories, flags, safeJokes: languageObjects } = jokeInfo.jokes

    const languageTable = {
      en: "English",
      cs: "Czech",
      de: "German",
      es: "Spanish",
      fr: "French",
      pt: "Portuguese",
    }
    //contains the supported languages
    const languages = languageObjects.map(function (element, index) {
      return languageTable[element.lang];
    })

  })


