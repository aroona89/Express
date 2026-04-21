/**
 * 🗄️ MODEL LAYER - Data Storage
 * ==============================
 * This file represents the MODEL in our MVC architecture.
 * The model is responsible for:
 *   - Storing and managing application data
 *   - Defining data structure (shape of user objects)
 *   - Acting as the "single source of truth" for data
 *
 * In a real app, this would connect to a database (MongoDB, PostgreSQL, etc.)
 * For now, we use an in-memory JavaScript array.
 */

// This is our "fake database" - in a real app, this would be a real database like MongoDB
// For now, we store user data in a JavaScript array that lives in memory
const users = [
    {
        id: 0,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 1,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    }
];

// Export the users array so other files can import and use it
module.exports = users;