const phonemes = [
    {
        symbol: "i:",
        audio: "PhshEEp",
        type: "monophthong",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɪ",
        audio: "PhfIt",
        type: "monophthong",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ʊ",
        audio: "PhgOOd",
        type: "monophthong",
        subType: ["short", "voiced"]
    },
    {
        symbol: "u:",
        audio: "PhglUE",
        type: "monophthong",
        subType: ["long", "voiced"]
    },
    {
        symbol: "e",
        audio: "PhEgg",
        type: "monophthong",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ə",
        audio: "PhSCHWA",
        type: "monophthong",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ɜ:",
        audio: "PhbIrd",
        type: "monophthong",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɔ:",
        audio: "PhdOOR",
        type: "monophthong",
        subType: ["long", "voiced"]
    },
    {
        symbol: "æ",
        audio: "PhcAt",
        type: "monophthong",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ʌ",
        audio: "PhUp",
        type: "monophthong",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ɑ:",
        audio: "PhfAr",
        type: "monophthong",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɒ",
        audio: "PhdOg",
        type: "monophthong",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ɪə",
        audio: "PhEAR",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "ʊə",
        audio: "PhcURe",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "eə",
        audio: "PhAIR",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "eɪ",
        audio: "PhEI",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "ɔɪ",
        audio: "PhOI",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "aɪ",
        audio: "PhAI",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "əʊ",
        audio: "PhshOW",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "aʊ",
        audio: "PhAU",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "p",
        audio: "PhP",
        type: "consonant",
        subType: ["voiceless", "bilabial", "plosive"]
    },
    {
        symbol: "b",
        audio: "PhB",
        type: "consonant",
        subType: ["voiced", "bilabial", "plosive"]
    },
    {
        symbol: "t",
        audio: "PhT",
        type: "consonant",
        subType: ["voiceless", "alveolar", "plosive"]
    },
    {
        symbol: "d",
        audio: "PhD",
        type: "consonant",
        subType: ["voiced", "alveolar", "plosive"]
    },
    {
        symbol: "ʧ",
        audio: "PhCH",
        type: "consonant",
        subType: ["voiceless", "palato-alveolar", "affricate"]
    },
    {
        symbol: "ʤ",
        audio: "PhDZ",
        type: "consonant",
        subType: ["voiced", "palato-alveolar", "affricate"]
    },
    {
        symbol: "k",
        audio: "PhK",
        type: "consonant",
        subType: ["voiceless", "velar", "plosive"]
    },
    {
        symbol: "g",
        audio: "PhG",
        type: "consonant",
        subType: ["voiced", "velar", "plosive"]
    },
    {
        symbol: "f",
        audio: "PhF",
        type: "consonant",
        subType: ["voiceless", "labio-dental", "fricative"]
    },
    {
        symbol: "v",
        audio: "PhV",
        type: "consonant",
        subType: ["voiced", "labio-dental", "fricative"]
    },
    {
        symbol: "θ",
        audio: "PhTHumb",
        type: "consonant",
        subType: ["voiceless", "dental", "fricative"]
        
    },
    {
        symbol: "ð",
        audio: "PhmoTHer",
        type: "consonant",
        subType: ["voiced", "dental", "fricative"]
    },
    {
        symbol: "s",
        audio: "PhS",
        type: "consonant",
        subType: ["voiceless", "alveolar", "fricative"]
    },
    {
        symbol: "z",
        audio: "PhZ",
        type: "consonant",
        subType: ["voiced", "alveolar", "fricative"]
    },
    {
        symbol: "ʃ",
        audio: "PhSH",
        type: "consonant",
        subType: ["voiceless", "palato-alveolar", "fricative"]
    },
    {
        symbol: "ʒ",
        audio: "PhZH",
        type: "consonant",
        subType: ["voiced", "palato-alveolar", "fricative"]
    },
    {
        symbol: "m",
        audio: "PhM",
        type: "consonant",
        subType: ["voiced", "bilabial", "nasal"]
    },
    {
        symbol: "n",
        audio: "PhN",
        type: "consonant",
        subType: ["voiced", "alveolar", "nasal"]
    },
    {
        symbol: "ŋ",
        audio: "PhNG",
        type: "consonant",
        subType: ["voiced", "velar", "nasal"]
    },
    {
        symbol: "h",
        audio: "PhH",
        type: "consonant",
        subType: ["voiceless", "glottal", "fricative"]

    },
    {
        symbol: "l",
        audio: "PhL",
        type: "consonant",
        subType: ["voiced", "alveolar", "lateral approximant"]
    },
    {
        symbol: "r",
        audio: "PhR",
        type: "consonant",
        subType: ["voiced", "postalveolar", "approximant"]
    },
    {
        symbol: "w",
        audio: "PhW",
        type: "consonant",
        subType: ["voiced", "bilabial", "approximant"]
    },
    {
        symbol: "j",
        audio: "PhY",
        type: "consonant",
        subType: ["voiced", "palatal", "approximant"]
    }
]

export const getMonophthongs = () => {
    const monophthongs = []
    phonemes.forEach((item) => {
        if (item.type === "monophthong") {
            monophthongs.push(item)
        }
    })
    return monophthongs
}

export const getDiphthongs = () => {
    const diphthongs = []
    phonemes.forEach((item) => {
        if (item.type === "dipthong") {
            diphthongs.push(item)
        }
    })
    return diphthongs
}

export const getConsonants = () => {
    const consonants = []
    phonemes.forEach((item) => {
        if (item.type === "consonant") {
            consonants.push(item)
        }
    })
    return consonants
}

export const getRandomConsonants = () => {
    const consonants = []
    phonemes.forEach((item) => {
        if (item.type === "consonant") {
            consonants.push(item)
        }
    })
    const randomConsonants = []
    return consonants
}