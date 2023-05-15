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
        audio: "",
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
        audio: "",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "ɔ:",
        audio: "",
        type: "vowel",
        subType: ["long", "voiced"]
    },
    {
        symbol: "æ",
        audio: "",
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
        audio: "",
        type: "vowel",
        subType: ["short", "voiced"]
    },
    {
        symbol: "ɪə",
        audio: "",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "ʊə",
        audio: "",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "eə",
        audio: "",
        type: "dipthong",
        subType: ["voiced", "long"]
    },
    {
        symbol: "eɪ",
        audio: "",
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
        audio: "",
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
        audio: "",
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
        audio: "",
        type: "consonant",
        subType: ["affricate", "pair", "voiceless"]
    },
    {
        symbol: "ʤ",
        audio: "",
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
        audio: "",
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