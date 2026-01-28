console.log('Booking app is running...');

// Question 1: Create an enum for Booking Status
enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED'
}

// Question 2: Create a User interface
interface User {
    id: number
    name: string
    email: string
    isActive?: boolean
}

// Question 3: Create an Event type
type bEvent = {
    id: number
    title: string
    location: string
    price: number
    isPaid: boolean
}

// Question 4: Create a Booking interface using previous types
interface Booking {
    user: User
    event: bEvent
    status: BookingStatus
    bookingDate: Date
}

// Question 5: Create in-memory data using the above types
const users: User[] = [
    {
        id: 1,
        name: "Tauqueer",
        email: "tauqueer@example.com",
        isActive: true
    },
    {
        id: 2,
        name: "TJ",
        email: "tj@example.com"
    }
];


const events: bEvent[] = [
    {
        id: 1,
        title: "Music Concert",
        location: "Mumbai",
        price: 3000,
        isPaid: true
    },
    {
        id: 2,
        title: "Tech Conference",
        location: "Banglore",
        price: 2000,
        isPaid: true
    },
    {
        id: 3,
        title: "Startup Meetup",
        location: "Delhi",
        price: 1000,
        isPaid: true
    }
];


const bookings: Booking[] = [
    {
        user: users[0]!,
        event: events[0]!,
        status: BookingStatus.PENDING,
        bookingDate: new Date("2026-01-20")
    },
    {
        user: users[1]!,
        event: events[1]!,
        status: BookingStatus.CONFIRMED,
        bookingDate: new Date("2026-01-22")
    }
];

// TASK: MAKE A FUNCTION THAT RETURNS CONFIRM BOOKING AT THE END
function confirmedBooking(): Booking {
    const confirmed = bookings.find(
        booking => booking.status === BookingStatus.CONFIRMED
    );

    if (!confirmed) {
        throw new Error("No confirmed booking found");
    }

    return confirmed;
}

console.log(confirmedBooking());