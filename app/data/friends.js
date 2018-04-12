// ===============================================================================
// DATA
// Below data will hold all of the bros.
// Initially we just set it equal to a "dummy" bro.
// But you could have it be an empty array as well.
// ===============================================================================

var broArray = [
    {
        broName: "Jodd Hipscat",
        broPhoto: "peter@someone.com",
        scores: [1, 4, 1, 4, 2, 2, 5, 1, 3, 5]
        //28
    },
    {
        broName: "Packer",
        broPhoto: "peter@someone.com",
        scores: [1, 1, 2, 1, 2, 1, 1, 1, 1, 1]
        //12
    },
    {
        broName: "Dean Goose",
        broPhoto: "peter@someone.com",
        scores: [5, 4, 5, 4, 5, 5, 4, 5, 4, 5]
        //46
    },
    {
        broName: "Chaz McHugelarge",
        broPhoto: "peter@someone.com",
        scores: [3, 3, 3, 4, 3, 3, 3, 4, 3, 4]
        //33
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = broArray;