const phonemes = [
    {
        symbol: "i:",
        audio: "PhshEEp",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɪ",
        audio: "PhfIt",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ʊ",
        audio: "PhgOOd",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "u:",
        audio: "PhglUE",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "e",
        audio: "PhEgg",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ə",
        audio: "PhSCHWA",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ɜ:",
        audio: "PhbIrd",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɔ:",
        audio: "PhdOOR",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "æ",
        audio: "PhcAt",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ʌ",
        audio: "PhUp",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ɑ:",
        audio: "PhfAr",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɒ",
        audio: "PhdOg",
        type: "vowel",
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
        subType: ["plosive", "pair", "voiceless"]
    },
    {
        symbol: "b",
        audio: "PhB",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"]
    },
    {
        symbol: "t",
        audio: "PhT",
        type: "consonant",
        subType: ["plosive", "pair", "voiceless"]
    },
    {
        symbol: "d",
        audio: "PhD",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"]
    },
    {
        symbol: "ʧ",
        audio: "PhCH",
        type: "consonant",
        subType: ["affricate", "pair", "voiceless"]
    },
    {
        symbol: "ʤ",
        audio: "PhDZ",
        type: "consonant",
        subType: ["affricate", "pair", "voiced"]
    },
    {
        symbol: "k",
        audio: "PhK",
        type: "consonant",
        subType: ["plosive", "pair", "voiceless"]
    },
    {
        symbol: "g",
        audio: "PhG",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"]
    },
    {
        symbol: "f",
        audio: "PhF",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "v",
        audio: "PhV",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "θ",
        audio: "PhTHumb",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "ð",
        audio: "PhmoTHer",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "s",
        audio: "PhS",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "z",
        audio: "PhZ",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "ʃ",
        audio: "PhSH",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "ʒ",
        audio: "PhZH",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "m",
        audio: "PhM",
        type: "consonant",
        subType: ["nasal", "voiced"]
    },
    {
        symbol: "n",
        audio: "PhN",
        type: "consonant",
        subType: ["nasal", "voiced"]
    },
    {
        symbol: "ŋ",
        audio: "PhNG",
        type: "consonant",
        subType: ["nasal", "voiced"]
    },
    {
        symbol: "h",
        audio: "PhH",
        type: "consonant",
        subType: ["fricative", "voiceless"]
    },
    {
        symbol: "l",
        audio: "PhL",
        type: "consonant",
        subType: ["approximant", "voiced"]
    },
    {
        symbol: "r",
        audio: "PhR",
        type: "consonant",
        subType: ["approximant", "voiced"]
    },
    {
        symbol: "w",
        audio: "PhW",
        type: "consonant",
        subType: ["approximant", "voiced"]
    },
    {
        symbol: "j",
        audio: "PhY",
        type: "consonant",
        subType: ["approximant", "voiced"]
    }
]

export const getVowels = () => {
    const vowels = []
    phonemes.forEach((item) => {
        if (item.type === "vowel") {
            vowels.push(item)
        }
    })
    return vowels
}

export const getDipthongs = () => {
    const dipthongs = []
    phonemes.forEach((item) => {
        if (item.type === "dipthong") {
            dipthongs.push(item)
        }
    })
    return dipthongs
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