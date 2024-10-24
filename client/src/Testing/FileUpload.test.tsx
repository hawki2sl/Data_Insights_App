import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../Store/Store";
import FileUploadComponent from "../Features/FileUpload/FileUpload"; // Adjust path

describe("FileUploadComponent", () => {
  it("should upload a file and display success message", async () => {
    // Render the component wrapped with the Redux Provider
    render(
      <Provider store={Store}>
        <FileUploadComponent />
      </Provider>
    );

    // Ensure the file input is rendered
    const input = screen.getByText(/Select files/i);
    expect(input).toBeInTheDocument();

    // Create a mock CSV file
    const file = new File(["name,age\nJohn,30"], "example.csv", {
      type: "text/csv",
    });

    // Simulate file upload using the test id
    const fileInput = screen.getByTestId("file-input");
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Assert that the file upload was successful and the success message is displayed
    const successMessage = await screen.findByText(
      /File Uploaded Successfully!/i
    ); // Await the promise
    expect(successMessage).toBeInTheDocument();
  });
});
