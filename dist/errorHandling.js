"use strict";
function riskyOperation() {
    throw new Error("Something went wrong!");
}
try {
    riskyOperation();
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    }
    else {
        console.error("Unexpected error:", error);
    }
}
