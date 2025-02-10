function riskyOperation(): void {
    throw new Error("Something went wrong!");
}

try {
    riskyOperation();
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}