# File Upload Implementation

## 1. Documentation

### Main Concepts Applied

1. **Disabling Next.js Body Parser**  
   Next.js comes with its own body parser, but it doesn't work with formidable (which I used for handling file uploads). So, I had to turn off the default body parser to let formidable handle multipart/form-data in my API routes.

2. **Parsing Form Data with Formidable**  
   I used formidable to read incoming requests that had files. It helped me separate the files and other form fields from the request.

3. **Managing Uploaded Files**  
   I saved uploaded files to a folder. I moved each file from its temporary spot to the right directory using `fs.rename` or `fs.promises.rename`. I also made sure to sanitize file names for security.

4. **Security & Validation (Frontend & Backend)**  
   Frontend:  
   I checked the file type (like image/jpeg or PDF) and size before letting users upload.  
   Backend:  
   I double-checked the file size and type on the server to block any unsafe uploads.

## 2. Reflection

### What I Learned

While building the file upload feature in my Next.js app, I learned a lot about both frontend and backend work:

1. **Handling Multipart Form Data:**  
   I learned that Next.js's default body parser can't handle multipart/form-data, so I needed formidable to process file uploads.

2. **Integrating React Hook Form:**  
   I figured out how to use react-hook-form to manage form state and validation, which made my upload form easier to build and check.

3. **File Validation:**  
   By checking file size and type, I saw how important it is to validate files both on the frontend (for users) and backend (for safety).

4. **Drag-and-Drop UI with React Dropzone:**  
   Using react-dropzone let me make a simple drag-and-drop area for uploads, which made my app nicer to use.

5. **Tracking Upload Progress with Axios:**  
   I learned to use Axios's `onUploadProgress` to show users how much of their file had uploaded in real time.

6. **Security Considerations:**  
   This project made me more aware of the risks with file uploads, like people trying to upload dangerous or huge files, so I learned to always validate and sanitize uploads.

### Challenges Faced (with Screenshots) and Solutions

**Drag-and-Drop Styling and Integration**  
**Challenge:**  
At first, I had trouble getting react-dropzone to work with react-hook-form, especially making sure drag-and-drop actually set the file input.

**Solution:**  
I fixed this by making a custom component that wrapped the useDropzone logic and connected it to react-hook-form using `setValue` and `watch`.
