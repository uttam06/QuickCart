
import connectDB from "./config/db.js"; // Use the correct relative path

async function testDB() {
  try {
    await connectDB();
    console.log("✅ Database connection test successful!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

testDB();



