//This function will get the categories, blacklistFiles, and languages from the joke API
export default function getJokeInfo() {
  //get categories and blacklistFlags
  const jokeApiInfo = fetch("https://v2.jokeapi.dev/info")

  //handle the fulfilled promise whose value will be a response value
  return jokeApiInfo
    .then(function (response) {
      return response.json()
    }) //second then gets the (value)info from the body
    .then(function (jokeInfo) {
      //store categories, blacklistFlags & languages using the  destructoring syntax that uses {}
      const { categories, flags, safeJokes: languageObjects } = jokeInfo.jokes
      console.log(jokeInfo)

      const languageTable = {
        names: {
          en: "English",
          cs: "Czech",
          de: "German",
          es: "Spanish",
          fr: "French",
          pt: "Portuguese",
        },

        codes: {
          english: "en",
          czech: "cs",
          german: "de",
          spanish: "es",
          french: "fr",
          portuguese: "pt",
        }
      }
      return {
        categories,
        flags,
        languageTable,
      }
    })
    .catch(function (error) {
      return false
    })
}
