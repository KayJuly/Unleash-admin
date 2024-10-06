//
// MongoDB Course registration Schema
//
// {
//     _id: ObjectId,
//     courseId: {
//          type: ObjectId,
//          ref: 'Course',
//          required: true
//     },
//     date: {
//          type: Date,
//          required: true
//     },
//     time: {
//          start: {
//              type: String,
//              required: true
//          },
//          end: {
//              type: String,
//              required: true
//          }
//     },
//     instructor: {
//          type: String,
//          required: true
//     },
//     participants: {
//          type: Number,
//          default: 0
//     },
//     maxParticipants: {
//          type: Number,
//          required: true
//     },
//     status: {
//          type: String,
//          enum: ['Scheduled', 'In Progress', 'Completed', 'Cancelled'],
//     default: 'Scheduled'
//     }
// }


export const courseRegistrationData = [
    {
        course: '3D Printer',
        date: '2024-09-14',
        time: {start: "09:00", end: "12:00"},
        instructor: "Kason Sanchez",
        participants: 12,
        maxParticipants: 15,
        status: "Completed"
    },
    {
        course: 'Laser Cutter',
        date: '2024-09-21',
        time: {start: "14:00", end: "17:00"},
        instructor: "Lay Haynes",
        participants: 8,
        maxParticipants: 10,
        status: "Completed"
    },
    {
        course: 'Vinyl cutter',
        date: '2024-09-23',
        time: {start: "10:00", end: "13:00"},
        instructor: "Lay Haynes",
        participants: 6,
        maxParticipants: 8,
        status: "Cancelled"
    },
    {
        course: 'Sewing machines',
        date: '2024-10-01',
        time: {start: "13:00", end: "16:00"},
        instructor: "Kason Sanchez",
        participants: 10,
        maxParticipants: 12,
        status: "Completed"
    },
    {
        course: '3D Printer',
        date: '2024-10-7',
        time: {start: "10:00", end: "13:00"},
        instructor: "Kason Sanchez",
        participants: 15,
        maxParticipants: 15,
        status: "In Progress"
    },
    {
        course: 'Laser Cutter',
        date: '2024-10-7',
        time: {start: "14:30", end: "17:30"},
        instructor: "Lay Haynes",
        participants: 9,
        maxParticipants: 10,
        status: "In Progress"
    },
    {
        course: 'Vinyl cutter',
        date: '2024-10-7',
        time: {start: "09:00", end: "12:00"},
        instructor: "Lay Haynes",
        participants: 8,
        maxParticipants: 8,
        status: "In Progress"
    },
    {
        course: 'Sewing machines',
        date: '2024-10-9',
        time: {start: "13:30", end: "16:30"},
        instructor: "Kason Sanchez",
        participants: 11,
        maxParticipants: 12,
        status: "Scheduled"
    },
    {
        course: 'CNC Router',
        date: '2024-10-10',
        time: {start: "10:00", end: "13:00"},
        instructor: "Kason Sanchez",
        participants: 6,
        maxParticipants: 6,
        status: "In Progress"
    },
    {
        course: 'Soldering station',
        date: '2024-10-10',
        time: {start: "10:00", end: "13:00"},
        instructor: "Kason Sanchez",
        participants: 9,
        maxParticipants: 10,
        status: "Scheduled"
    },
    {
        course: '3D Printer',
        date: '2024-10-12',
        time: {start: "09:30", end: "12:30"},
        instructor: "Kason Sanchez",
        participants: 13,
        maxParticipants: 15,
        status: "Scheduled"
    },
    {
        course: 'Laser Cutter',
        date: '2024-10-12',
        time: {start: "14:00", end: "17:00"},
        instructor: "Lay Haynes",
        participants: 7,
        maxParticipants: 10,
        status: "Scheduled"
    },
    {
        course: 'Vinyl cutter',
        date: '2024-10-21',
        time: {start: "10:30", end: "13:30"},
        instructor: "Lay Haynes",
        participants: 5,
        maxParticipants: 8,
        status: "Cancelled"
    },
    {
        course: 'Sewing machines',
        date: '2024-10-22',
        time: {start: "13:00", end: "16:00"},
        instructor: "Kason Sanchez",
        participants: 12,
        maxParticipants: 12,
        status: "Scheduled"
    },
    {
        course: 'CNC Router',
        date: '2024-10-24',
        time: {start: "09:00", end: "12:00"},
        instructor: "Kason Sanchez",
        participants: 4,
        maxParticipants: 6,
        status: "Scheduled"
    },
    {
        course: 'Soldering station',
        date: '2024-10-24',
        time: {start: "15:00", end: "18:00"},
        instructor: "Kason Sanchez",
        participants: 8,
        maxParticipants: 10,
        status: "Scheduled"
    },
    {
        course: '3D Printer',
        date: '2024-10-25',
        time: {start: "10:00", end: "13:00"},
        instructor: "Kason Sanchez",
        participants: 14,
        maxParticipants: 15,
        status: "Scheduled"
    },
    {
        course: 'Laser Cutter',
        date: '2024-10-25',
        time: {start: "14:30", end: "17:30"},
        instructor: "Lay Haynes",
        participants: 10,
        maxParticipants: 10,
        status: "Scheduled"
    }
];