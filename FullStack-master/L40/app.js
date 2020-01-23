

const input = require("./input");
const fileHandler = require("./file-handler");

async function wrtieToFile(firstName, lastName, ccField, ccAddress, ccEmail) {
    try {
        await fileHandler.write("./my-file.txt", "Your info is: "
            + firstName + " " + lastName + " " + ccField + " " + ccAddress + " " + ccEmail);
        const content = await fileHandler.read("./my-file.txt");
        console.log(content);
    }
    catch (err) {
        console.log(err.message);
    }
}
async function main() {
    try {
        const firstName = await input.getValue("Enter your first name: "); // Blocking Operation
        const lastName = await input.getValue("Enter your last name: "); // Blocking Operation
        const ccField = await input.getValue("Provide us with your credit card: "); // Blocking Operation
        const ccAddress = await input.getValue("Place your location: "); // Blocking Operation
        const ccEmail = await input.getValue("What's your email: "); // Blocking Operation
        wrtieToFile(firstName, lastName, ccField, ccAddress, ccEmail);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        input.close();
    }
}

main();