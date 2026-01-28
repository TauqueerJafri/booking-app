# TypeScript Practice

This repository is for practice work.

## Objective

Practice core TypeScript concepts:

- `interface`
- `type`
- `enum`
- Optional & readonly properties
- Arrays of typed objects
- Basic type safety

You **must NOT use any database or API**.

All data should be stored in **in-memory variables**.

---

## Context: Booking Application

You are working on a **booking application**.

You will define **TypeScript types** to represent users, events, and bookings.

---

## Question 1: Create an `enum` for Booking Status

### Task

Create an `enum` called `BookingStatus` with the following values:

- `PENDING`
- `CONFIRMED`
- `CANCELLED`

---

## Question 2: Create a `User` interface

### Requirements

Create an `interface` called `User` with:

| Property | Type | Required |
| --- | --- | --- |
| id | number | ✅ |
| name | string | ✅ |
| email | string | ✅ |
| isActive | boolean | ❌ (optional) |

---

## Question 3: Create an `Event` type

### Requirements

Create a `type` called `Event` with:

| Property | Type |
| --- | --- |
| id | number |
| title | string |
| location | string |
| price | number |
| isPaid | boolean |

---

## Question 4: Create a `Booking` interface using previous types

### Requirements

Create an `interface` called `Booking` that:

- Uses `User` for the user
- Uses `Event` for the event
- Uses `BookingStatus` enum for status
- Has a `bookingDate` of type `Date`

---

## Question 5: Create in-memory data using the above types

### Task

1. Create an **array of users**
2. Create an **array of events**
3. Create an **array of bookings**

### Rules

- All arrays must be **strongly typed**
- At least:
	- 2 users
	- 2 events
	- 2 bookings
- Booking must reference user & event objects
- TypeScript should show **no type errors**

TASK: MAKE A FUNCTION THAT RETURNS CONFIRM BOOKING AT THE END
