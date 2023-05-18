const phonemes = [
    {
        symbol: "i:",
        audio: "",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɪ",
        audio: "",
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
        audio: "",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "e",
        audio: "",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ə",
        audio: "",
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
        audio: "",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ɑ:",
        audio: "",
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
        audio: "",
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
        audio: "",
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
        audio: "",
        type: "consonant",
        subType: ["plosive", "pair", "voiceless"]
    },
    {
        symbol: "b",
        audio: "",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"]
    },
    {
        symbol: "t",
        audio: "",
        type: "consonant",
        subType: ["plosive", "pair", "voiceless"]
    },
    {
        symbol: "d",
        audio: "",
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
        audio: "",
        type: "consonant",
        subType: ["plosive", "pair", "voiceless"]
    },
    {
        symbol: "g",
        audio: "",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"]
    },
    {
        symbol: "f",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "v",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "θ",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "ð",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "s",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "z",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "ʃ",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"]
    },
    {
        symbol: "ʒ",
        audio: "",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"]
    },
    {
        symbol: "m",
        audio: "",
        type: "consonant",
        subType: ["nasal", "voiced"]
    },
    {
        symbol: "n",
        audio: "",
        type: "consonant",
        subType: ["nasal", "voiced"]
    },
    {
        symbol: "ŋ",
        audio: "",
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
        audio: "",
        type: "consonant",
        subType: ["approximant", "voiced"]
    },
    {
        symbol: "r",
        audio: "",
        type: "consonant",
        subType: ["approximant", "voiced"]
    },
    {
        symbol: "w",
        audio: "",
        type: "consonant",
        subType: ["approximant", "voiced"]
    },
    {
        symbol: "j",
        audio: "",
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