function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(" ")
  const mazgazineArr = magazineText.split(" ")
  const magazineObj = {}

  mazgazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word]++
  })
  console.log(magazineObj)

  let noteIsPosible = true
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--
      if (magazineObj[word] < 0) noteIsPosible = false
    } else noteIsPosible = false
  })

  console.log(magazineObj)
  return noteIsPosible
}

harmlessRansomNote(
  "this is the magazine",
  "this is all the magazine text in the magazine"
)
