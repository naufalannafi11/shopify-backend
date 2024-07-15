"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "5e6f8d2a-2458-4454-9243-2994134c7e7a",
          fullName: "Brynne Castro",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "felis.eget@aol.org",
          birthDate: "Sep 10, 1994",
          phoneNumber: "1-212-246-8987",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "e076f190-5c6a-4454-b434-8ae9b8881850",
          fullName: "Venus Bonner",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "a.odio.semper@google.org",
          birthDate: "Mar 4, 2002",
          phoneNumber: "1-379-725-3725",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "80f78a32-d00d-48b1-8f4c-97d2217e4d1c",
          fullName: "Vielka Pace",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "et.netus@protonmail.couk",
          birthDate: "Oct 7, 2000",
          phoneNumber: "1-715-714-3736",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "583f8ee9-1bc8-4620-b2ef-1c5f0386ef99",
          fullName: "Henry Martin",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "mollis.dui.in@aol.edu",
          birthDate: "Apr 4, 1996",
          phoneNumber: "(314) 839-6143",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "51b309d5-22b9-44b8-82db-fbaebf03f87c",
          fullName: "Mechelle Stout",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "mauris.vestibulum@yahoo.org",
          birthDate: "Feb 7, 1995",
          phoneNumber: "1-645-125-2407",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f116cb57-f849-4df0-8fea-b15d7abe2afb",
          fullName: "Grant Acosta",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "tellus.imperdiet@aol.ca",
          birthDate: "Jan 4, 1994",
          phoneNumber: "(586) 842-7589",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "458b9eef-d44b-4103-8f4a-74ac1948e4a1",
          fullName: "Guinevere Cabrera",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "nunc@hotmail.couk",
          birthDate: "Nov 10, 2003",
          phoneNumber: "(438) 616-4912",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a31f3cb6-920a-4590-9242-e4e299804e97",
          fullName: "Mariam Griffith",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "neque.vitae@aol.couk",
          birthDate: "Oct 18, 1998",
          phoneNumber: "(673) 671-3176",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "126e98fa-59b8-40fb-afb4-12ce43ef1d7b",
          fullName: "Hayley Murray",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "per@yahoo.ca",
          birthDate: "Jun 16, 2004",
          phoneNumber: "(680) 896-1751",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "704c076e-4770-4233-85aa-80d90730ef81",
          fullName: "Denise Black",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "magnis.dis@hotmail.couk",
          birthDate: "Jun 12, 1993",
          phoneNumber: "1-434-638-2343",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4b4e26f5-b67a-45b4-8c6a-aa7f9be42173",
          fullName: "Carolyn Mueller",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "imperdiet@hotmail.ca",
          birthDate: "Nov 15, 2003",
          phoneNumber: "(618) 142-4263",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "e7626a45-a627-4743-91e8-8687d3cd16e1",
          fullName: "Brynne Dickerson",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "ridiculus@yahoo.net",
          birthDate: "Jun 4, 2000",
          phoneNumber: "1-681-469-7660",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f7d2790d-3ac1-4d89-9de3-1c01f8cd30c1",
          fullName: "Keely Galloway",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "adipiscing.elit@hotmail.edu",
          birthDate: "May 16, 1998",
          phoneNumber: "(773) 882-8506",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "30f6463e-6d09-4202-820e-2b5184bbe99d",
          fullName: "Jelani Richmond",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "et.ultrices@outlook.net",
          birthDate: "Dec 18, 1992",
          phoneNumber: "(958) 257-2927",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "e2cac605-d67d-4ad5-8f03-e54c3ea18cf5",
          fullName: "Jayme Stephens",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "mauris@aol.com",
          birthDate: "Sep 18, 2001",
          phoneNumber: "1-525-868-3386",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "85cd31e8-f414-46ee-8762-ad31a2e2ab01",
          fullName: "Gary Hayden",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "ultricies@google.net",
          birthDate: "Aug 26, 1998",
          phoneNumber: "(562) 749-0368",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7e6ddc55-1636-46cd-881c-75ce8338c7cc",
          fullName: "Thane Bradshaw",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "mattis@outlook.couk",
          birthDate: "Dec 23, 1998",
          phoneNumber: "1-691-849-4708",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4d7ed20a-54fe-4047-a35c-cfaabef94e2e",
          fullName: "Cedric Hayden",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "porttitor.interdum@outlook.ca",
          birthDate: "Jun 8, 1995",
          phoneNumber: "1-131-252-5387",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c1a2888a-f1ed-4fca-a1c5-3fb1065aa35e",
          fullName: "Merritt Shields",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "erat@hotmail.edu",
          birthDate: "Aug 11, 2000",
          phoneNumber: "1-568-613-7073",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "987bae85-9b10-4a85-8fc9-92dde8fd5b57",
          fullName: "Baxter Chaney",
          password:
            "$argon2d$v=19$m=12,t=3,p=1$emhyZ2xndmgwZjAwMDAwMA$FbnBTUXUVZIlegPAAGTdoQ",
          email: "odio.auctor@hotmail.couk",
          birthDate: "Dec 9, 1990",
          phoneNumber: "(265) 387-9278",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
