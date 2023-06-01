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
        subType: ["long", "voiced"],
        description: "long open-mid back rounded"
    },
    {
        symbol: "æ",
        audio: "PhcAt",
        type: "monophthong",
        subType: ["short", "voiced"],
        description: "short near-open front unrounded"
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
        subType: ["long", "voiced"],
        description: "long open back unrounded"
    },
    {
        symbol: "ɒ",
        audio: "PhdOg",
        type: "monophthong",
        subType: ["short", "voiced"],
        description: "short open back rounded"
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
        subType: ["plosive", "pair", "voiceless"],
        description: "voiceless bilabial plosive"
    },
    {
        symbol: "b",
        audio: "PhB",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"],
        description: "voiced bilabial plosive"
    },
    {
        symbol: "t",
        audio: "PhT",
        type: "consonant",
        subType: ["plosive", "pair", "voiceless"],
        description: "voiceless alveolar plosive"
    },
    {
        symbol: "d",
        audio: "PhD",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"],
        description: "voiced alveolar plosive"
    },
    {
        symbol: "ʧ",
        audio: "PhCH",
        type: "consonant",
        subType: ["affricate", "pair", "voiceless"],
        description: "voiceless palato-alveolar affricate"
    },
    {
        symbol: "ʤ",
        audio: "PhDZ",
        type: "consonant",
        subType: ["affricate", "pair", "voiced"],
        description: "voiced palato-alveolar affricate"
    },
    {
        symbol: "k",
        audio: "PhK",
        type: "consonant",
        subType: ["plosive", "pair", "voiceless"],
        description: "voiceless velar plosive"
    },
    {
        symbol: "g",
        audio: "PhG",
        type: "consonant",
        subType: ["plosive", "pair", "voiced"],
        description: "voiced velar plosive"
    },
    {
        symbol: "f",
        audio: "PhF",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"],
        description: "voiceless labiodental fricative"
    },
    {
        symbol: "v",
        audio: "PhV",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"],
        description: "voiced labiodental fricative"
    },
    {
        symbol: "θ",
        audio: "PhTHumb",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"],
        description: "voiceless dental fricative"
        
    },
    {
        symbol: "ð",
        audio: "PhmoTHer",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"],
        description: "voiced dental fricative"
    },
    {
        symbol: "s",
        audio: "PhS",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"],
        description: "voiceless alveolar fricative"
    },
    {
        symbol: "z",
        audio: "PhZ",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"],
        description: "voiced alveolar fricative"
    },
    {
        symbol: "ʃ",
        audio: "PhSH",
        type: "consonant",
        subType: ["fricative", "pair", "voiceless"],
        description: "voiceless palato-alveolar fricative"
    },
    {
        symbol: "ʒ",
        audio: "PhZH",
        type: "consonant",
        subType: ["fricative", "pair", "voiced"],
        description: "voiced palato-alveolar fricative"
    },
    {
        symbol: "m",
        audio: "PhM",
        type: "consonant",
        subType: ["nasal", "voiced"],
        description: "voiced bilabial nasal"
    },
    {
        symbol: "n",
        audio: "PhN",
        type: "consonant",
        subType: ["nasal", "voiced"],
        description: "voiced alveolar nasal"
    },
    {
        symbol: "ŋ",
        audio: "PhNG",
        type: "consonant",
        subType: ["nasal", "voiced"],
        description: "voiced velar nasal"
    },
    {
        symbol: "h",
        audio: "PhH",
        type: "consonant",
        subType: ["fricative", "voiceless"],
        description: "voiceless glottal fricative"

    },
    {
        symbol: "l",
        audio: "PhL",
        type: "consonant",
        subType: ["approximant", "voiced"],
        description: "voiced alveolar lateral approximant"
    },
    {
        symbol: "r",
        audio: "PhR",
        type: "consonant",
        subType: ["approximant", "voiced"],
        description: "voiced postalveolar approximant"
    },
    {
        symbol: "w",
        audio: "PhW",
        type: "consonant",
        subType: ["approximant", "voiced"],
        description: "voiced labial-velar approximant"
    },
    {
        symbol: "j",
        audio: "PhY",
        type: "consonant",
        subType: ["approximant", "voiced"],
        description: "voiced palatal approximant"
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