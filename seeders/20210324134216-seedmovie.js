'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Movies', [
  {
      title: "Black Panther",
      year: "2018",
      tags: [
          "Action",
          "Adventure",
          "Sci-Fi"
      ],
      actors: [
          "Chadwick Boseman",
          "Michael B. Jordan",
          "Lupita Nyong'o"
      ],
      rating: 7.0,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      title: "Grottmannen Dug",
      year: "2018",
      tags: [
          "Animation",
          "Adventure",
          "Comedy"
      ],
      actors: [
          "Tom Hiddleston",
          "Eddie Redmayne",
          "Maisie Williams"
      ],
      rating: 6.3,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWMxYWVjNzAtMTY0YS00YWQyLWExMGItMjUxODkwYzQyNzMwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY500_CR0,0,328,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      title: "Aiyaary",
      year: "2018",
      tags: [
          "Action",
          "Crime",
          "Drama"
      ],

      actors: [
          "Anupam Kher",
          "Sidharth Malhotra",
          "Naseeruddin Shah"
      ],
      rating: 6,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTk0NTc1OV5BMl5BanBnXkFtZTgwNTMwMTE4NDM@._V1_SY500_CR0,0,281,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      title: "Samson",
      year: "2018",
      tags: [
          "Action",
          "Drama"
      ],
      actors: [
          "Jackson Rathbone",
          "Billy Zane",
          "Taylor James"
      ],
      rating: 5.0,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYThiMjg4ZDAtNjk5ZS00ZTUxLThmM2ItMGI0ZTE1NjRhNWNmXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      title: "Loveless",
      year: "2017",
      tags: [
          "Drama"
      ],

      actors: [
          "Maryana Spivak",
          "Aleksey Rozin",
          "Matvey Novikov"
      ],
      rating: 7.8,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU3ODQ3MzQ5Nl5BMl5BanBnXkFtZTgwMDQwMDIzNDM@._V1_SY500_CR0,0,338,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      title: "L'amant double",
      year: "2017",
      tags: [
          "Drama",
          "Romance",
          "Thriller"
      ],

      actors: [
          "Marine Vacth",
          "J\u00e9r\u00e9mie Renier",
          "Jacqueline Bisset"
      ],
      rating: 6.2,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NjUyMzAyOV5BMl5BanBnXkFtZTgwMTU4Njk2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      title: "The Party",
      year: "2017",
      tags: [
          "Comedy",
          "Drama"
      ],

      actors: [
          "Timothy Spall",
          "Kristin Scott Thomas",
          "Patricia Clarkson"
      ],
      rating: 6.7,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTU5MzY4NF5BMl5BanBnXkFtZTgwNTY2NTkxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  createdAt: new Date(),
      updatedAt: new Date()},
  {
      title: "The Boy Downstairs",
      year: "2017",
      tags: [
          "Comedy",
          "Drama",
          "Romance"
      ],

      actors: [
          "Zosia Mamet",
          "Matthew Shear",
          "Deirdre O'Connell"
      ],
      rating: 6.9,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZiNzgzNjUtOWE0Ni00MWFmLTliZDEtNWRkMzc5ZTA2MWM1XkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_SY500_CR0,0,337,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      title: "Nostalgia",
      year: "2018",
      tags: [
          "Drama"
      ],

      actors: [
          "Hugo Armstrong",
          "Shinelle Azoroh",
          "Annalise Basso"
      ],
      rating: 6.6,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYTc0MjI4YTktY2NkYi00YzgwLWIxNDItYWIyNjAwMWNlMGUzXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SY500_CR0,0,337,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      
 title: "Oh Lucy!",
      year: "2017",
      tags: [
          "Comedy",
          "Drama"
      ],

      actors: [
          "Shinobu Terajima",
          "Josh Hartnett",
          "Kaho Minami"
      ],
      rating: 6.8,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMjcwMDExOV5BMl5BanBnXkFtZTgwMjU4Njk2NDM@._V1_SY377_CR0,0,254,377_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      
 title: "Tehran Taboo",
      year: "2017",
      tags: [
          "Animation",
          "Drama"
      ],
      actors: [
          "Farhad Abadinejad",
          "Jasmina Ali",
          "Rozita Assadollahy"
      ],
      rating: 7.1,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM0OTZlOWQtZGU0My00MmIxLTk0N2ItMjU3OGY0ODRlODYxXkEyXkFqcGdeQXVyNTQ0NjIwNDU@._V1_SY500_CR0,0,353,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Xiyouji zhi N\u00fc'erguo",
      year: "2018",
      tags: [
          "Action",
          "Adventure",
          "Fantasy"
      ],
      actors: [
          "Aaron Kwok",
          "William Feng",
          "Zanilia Zhao"
      ],
      rating: 6,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDM1MzZjNDUtNDBmMC00M2M5LTg0NDQtN2ExMjQ1Zjc0ZTE0XkEyXkFqcGdeQXVyNjMyMDA1ODM@._V1_SY500_CR0,0,357,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Mind Game",
      year: "2004",
      tags: [
          "Animation",
          "Adventure",
          "Comedy"
      ],
      actors: [
          "K\u00f4ji Imada",
          "Sayaka Maeda",
          "Takashi Fujii"
      ],
      rating: 7.9,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzFlMDI1ZjctMzgzYy00YmVkLTlmMTMtNDZmZmVmMzk3MzNhXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SY500_CR0,0,381,500_AL_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Western",
      year: "2017",
      tags: [
          "Drama"
      ],
      actors: [
          "Meinhard Neumann",
          "Reinhardt Wetrek",
          "Syuleyman Alilov Letifov"
      ],
      rating: 7.2,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZDRkZGUxZmEtZDdiZC00NGJmLWFiODAtN2RiMzY3ODhjNTNmXkEyXkFqcGdeQXVyMTg5MDEyNw@@._V1_SY500_CR0,0,341,500_AL_.jpg"
      ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Fifty Shades Freed",
      year: "2018",
      tags: [
          "Drama",
          "Romance",
          "Thriller"
      ],
      actors: [
          "Dakota Johnson",
          "Jamie Dornan",
          "Eric Johnson"
      ],
      rating: 4.2,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxOTQ1MzI0Nl5BMl5BanBnXkFtZTgwMzgwMzIxNDM@._V1_SY500_CR0,0,315,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Pelle Kanin",
      year: "2018",
      tags: [
          "Animation",
          "Adventure",
          "Comedy"
      ],
      actors: [
          "James Corden",
          "Fayssal Bazzi",
          "Domhnall Gleeson"
      ],
      rating: 6.1,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzI0ODUwN15BMl5BanBnXkFtZTgwOTIxNjA0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "The 15:17 to Paris",
      year: "2018",
      tags: [
          "Drama",
          "History",
          "Thriller"
      ],
      actors: [
          "Alek Skarlatos",
          "Anthony Sadler",
          "Spencer Stone"
      ],
      rating: 5.1,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NjUzNjYwOV5BMl5BanBnXkFtZTgwMzY1MDM0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Jumanji: Welcome to the Jungle",
      year: "2017",
      tags: [
          "Action",
          "Adventure",
          "Comedy"
      ],
      actors: [
          "Dwayne Johnson",
          "Karen Gillan",
          "Kevin Hart"
      ],
      rating: 7.2,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_SY400_SX270_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "The Greatest Showman",
      year: "2017",
      tags: [
          "Biography",
          "Drama",
          "Musical"
      ],
      actors: [
          "Hugh Jackman",
          "Michelle Williams",
          "Zac Efron"
      ],
      rating: 8.0,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY500_CR0,0,337,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Maze Runner: The Death Cure",
      year: "2018",
      tags: [
          "Action",
          "Sci-Fi",
          "Thriller"
      ],
      actors: [
          "Dylan O'Brien",
          "Ki Hong Lee",
          "Kaya Scodelario"
      ],
      rating: 6.9,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Winchester - House of Ghosts",
      year: "2018",
      tags: [
          "Biography",
          "Fantasy",
          "Horror"
      ],
      actors: [
          "Helen Mirren",
          "Sarah Snook",
          "Finn Scicluna-O'Prey"
      ],
      rating: 5.3,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2OWE5OGItMTE4Yi00ZmIzLThjZDctNTU1OTMxMTc3Yjg4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,315,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "The Post",
      year: "2017",
      tags: [
          "Biography",
          "Drama",
          "History"
      ],
      actors: [
          "Meryl Streep",
          "Tom Hanks",
          "Sarah Paulson"
      ],
      rating: 7.4,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "Hostiles",
      year: "2017",
      tags: [
          "Adventure",
          "Drama",
          "Western"
      ],

      actors: [
          "Scott Shepherd",
          "Rosamund Pike",
          "Ava Cooper"
      ],
      rating: 7.3,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjFhZjM4ZDYtMGRjYi00Yzc2LWExYmEtMDQ3NzA4ODU4YTljXkEyXkFqcGdeQXVyNjkwMzU3NDI@._V1_SY500_CR0,0,337,500_AL_.jpg"
  ,createdAt: new Date(),
      updatedAt: new Date()},
  {
      
      title: "The Shape of Water",
      year: "2017",
      tags: [
          "Adventure",
          "Drama",
          "Fantasy"
      ],
       actors: [
          "Sally Hawkins",
          "Octavia Spencer",
          "Michael Shannon"
      ],
      rating: 7.8,
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg"
 ,createdAt: new Date(),
      updatedAt: new Date() }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Movies', null, {})

  }
};
