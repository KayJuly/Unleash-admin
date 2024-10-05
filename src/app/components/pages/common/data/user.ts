//
// MongoDB User Master Schema
//

// {
//     _id: ObjectId,
//     name: {
//         firstName: String,
//         lastName: String
//     },
//     email: {
//         type: String,
//         unique: true
//     },
//     phone: String,
//     registrationDate: Date,
//     userType: {
//         type: String,
//         enum: ['curriculumStudent', 'extracurricularStudent', 'staff', 'visitor']
//     },
//         createdAt: Date,
//         updatedAt: Date
// }

export const userData = [
    {
        date: '26/08/2024',
        name: 'Hallie Haynes',
        upi: 'hlhy1234',
        email: 'hlhy1234@aucklanduni.com',
        phone: '+64 9152639845',
        type: 'Extracurricular Student',
        degree: 'Bachelor of Science'
    },
    {
        date: '26/05/2024',
        name: 'Kason Sanchez',
        upi: 'kssh3452',
        email: 'kssh3452@aucklanduni.com',
        phone: '+64 9152639845',
        type: 'Curriculum Student',
        degree: 'Bachelor of Commerce'
    },
    {
        date: '24/3/2024',
        name: 'Lay Haynes',
        upi: 'lyhy1234',
        email: 'lyhy1234@aucklanduni.com',
        phone: '+64 9152639845',
        type: 'Staff',
        degree: ''
    },
    {
        date: '11/05/2024',
        name: 'Hallie Haynes',
        upi: 'hlhy1234',
        email: 'hlhy1234@aucklanduni.com',
        phone: '+64 9152639845',
        type: 'Visitor',
        degree: ''
    },
    {
        date: '13/05/2024',
        name: 'Ron Hank',
        upi: 'rohk1212',
        email: 'rohk1212@aucklanduni.com',
        phone: '+64 02719191',
        type: 'Extracurricular Student',
        degree: 'Bachelor of Science'
    },
    {
        date: '06/05/2021',
        name: 'Kason Sanchez',
        upi: 'kssh3452',
        email: 'kssh3452@aucklanduni.com',
        phone: '+64 9152639845',
        type: 'Extracurricular Student',
        degree: 'Bachelor of Science'
    },
    {
        date: '26/09/2024',
        name: 'Hallie Haynes',
        upi: 'hlhy1234',
        email: 'hlhy1234@aucklanduni.com',
        phone: '+64 9152639845',
        type: 'Curriculum Student',
        degree: 'Bachelor of Science'
    },
    {
        date: '12/04/2022',
        name: 'Cay Jonson',
        upi: 'cyjs3434',
        email: 'cyjs3434@aucklanduni.com',
        phone: '020 12345678',
        type: 'Staff',
        degree: ''
    },
    {
        date: '11/02/2022',
        name: 'Hallie Haynes',
        upi: 'hlhy1234',
        email: 'hlhy1234@aucklanduni.com',
        phone: '+64 9152639845',
        type: 'Staff',
        degree: ''
    },
    {
        date: '30/01/2020',
        name: 'Aaron Hank',
        upi: 'arhk0909',
        email: 'arhk0909@aucklanduni.com',
        phone: '+64 02719191',
        type: 'Extracurricular Student',
        degree: 'Bachelor of Art'
    },
]
