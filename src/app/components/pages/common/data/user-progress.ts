//
// MongoDB User Progress Schema
//

// {
//     userId: ObjectId,
//     name: String,
//
//     orientation: {
//         completedDate: Date
//     },
//     quiz: {
//         completedDate: Date,
//         score: Number
//     },
//     trainings: [
//         {
//             type: String,
//             completedDate: Date,
//             status: String // 'completed', 'in-progress', 'booking'
//         }
//     ],
//         lastUpdated: Date
// }

export const userProgressData = [
    {
        name: 'Hallie Haynes',
        type: 'Extracurricular Student',
        join: '26/08/2024',
        orientation: '26/08/2024',
        quiz: { date:'26/08/2024', score: '95%'},
        trainings: [
            { type: '3D Printer', date: '10/09/2024', status: 'completed' },
            { type: 'Laser Cutter', date: '13/09/2024', status: 'booking' },
            { type: 'Vinyl cutter', date: '', status: '' },
            { type: 'Sewing machines', date: '', status: '' },
            { type: 'CNC Router', date: '', status: '' },
        ]
    },
    {
        name: 'John Doe',
        type: 'Curriculum Student',
        join: '25/08/2024',
        orientation: '25/02/2024',
        quiz: { date:'26/02/2024', score: '98%'},
        trainings: [
            { type: '3D Printer', date: '29/04/2024', status: 'completed' },
            { type: 'Laser Cutter', date: '13/04/2024', status: 'completed' },
            { type: 'Vinyl cutter', date: '10/08/2024', status: 'completed' },
            { type: 'Sewing machines', date: '24/06/2024', status: 'completed' },
            { type: 'CNC Router', date: '12/10/2024', status: 'completed'  },
        ]
    },
    {
        name: 'Emma Watson',
        type: 'Staff',
        join: '24/08/2024',
        orientation: '24/08/2024',
        quiz: { date:'1/09/2024', score: '90%'},
        trainings: [
            { type: '3D Printer', date: '', status: '' },
            { type: 'Laser Cutter', date: '', status: '' },
            { type: 'Vinyl cutter', date: '', status: '' },
            { type: 'Sewing machines', date: '10/8/2024', status: 'booking' },
            { type: 'CNC Router', date: '', status: '' },
        ]
    },
    {
        name: 'Mike Ross',
        type: 'Visitor',
        join: '27/08/2024',
        orientation: '27/08/2024',
        quiz: {},
        trainings: []
    },
    {
        name: 'Sarah Johnson',
        type: 'Extracurricular Student',
        join: '23/08/2024',
        orientation: '23/08/2024',
        quiz: { date:'23/08/2024', score: '100%'},
        trainings: [
            { type: '3D Printer', date: '12/08/2024', status: 'booking' },
            { type: 'Laser Cutter', date: '', status: '' },
            { type: 'Vinyl cutter', date: '', status: '' },
            { type: 'Sewing machines', date: '', status: '' },
            { type: 'CNC Router', date: '', status: '' },
        ]
    },
    {
        name: 'Hallie Haynes',
        type: 'Extracurricular Student',
        join: '26/08/2024',
        orientation: '26/08/2024',
        quiz: { date:'26/08/2024', score: '98%'},
        trainings: [
            { type: '3D Printer', date: '', status: '' },
            { type: 'Laser Cutter', date: '12/10/2024', status: 'booking' },
            { type: 'Vinyl cutter', date: '', status: '' },
            { type: 'Sewing machines', date: '10/8/2024', status: 'completed' },
            { type: 'CNC Router', date: '', status: '' },
        ]
    },
    {
        name: 'John Doe',
        type: 'Curriculum Student',
        join: '25/08/2024',
        orientation: '25/08/2024',
        quiz: { date:'26/08/2024', score: '98%'},
        trainings: [
            { type: '3D Printer', date: '29/04/2024', status: 'completed' },
            { type: 'Laser Cutter', date: '13/04/2024', status: 'booking' },
            { type: 'Vinyl cutter', date: '', status: '' },
            { type: 'Sewing machines', date: '', status: '' },
            { type: 'CNC Router', date: '', status: ''  },
        ]
    },
    {
        name: 'Emma Watson',
        type: 'Staff',
        join: '24/08/2024',
        orientation: '24/08/2024',
        quiz: { date:'24/08/2024', score: '60%'},
        trainings: []
    },
    {
        name: 'Mike Ross',
        type: 'Visitor',
        join: '27/08/2024',
        orientation: '27/08/2024',
        quiz: {},
        trainings: []
    },
    {
        name: 'Sarah Johnson',
        type: 'Extracurricular Student',
        join: '23/08/2024',
        orientation: '23/08/2024',
        quiz: { date:'23/08/2024', score: '100%'},
        trainings: [
            { type: '3D Printer', date: '12/08/2024', status: 'completed' },
            { type: 'Laser Cutter', date: '', status: '' },
            { type: 'Vinyl cutter', date: '', status: '' },
            { type: 'Sewing machines', date: '', status: '' },
            { type: 'CNC Router', date: '', status: '' },
        ]
    }];