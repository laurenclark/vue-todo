module.exports = {
    verbose: true,
    snapshotSerializers: ["jest-serializer-vue"],
    roots: ["<rootDir>/src/", "<rootDir>/specs/"],
    moduleFileExtensions: ["js", "json", "vue"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/components/$1"
    },
    transform: {
        "^.+\\.vue$": "vue-jest",
        "^.+\\.js$": "babel-jest",
        ".+\\.(css|scss|jpe?g|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$":
            "jest-transform-stub"
    },
    setupFilesAfterEnv: ["<rootDir>/matchers"],
    globals: {
        "vue-jest": {
            // Compilation errors in the <style> tags of Vue components will
            // already result in failing builds, so compiling CSS during unit
            // tests doesn't protect us from anything. It only complicates
            // and slows down our unit tests.
            experimentalCSSCompile: false
        }
    }
};
