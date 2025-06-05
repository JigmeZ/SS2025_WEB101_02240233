# File Upload Implementation

## 1. Documentation

### Key Concepts Used

1. **Disabling Next.js Body Parser**  
   Next.js includes a built-in body parser, but it isn't compatible with formidable (used for file uploads). Therefore, I disabled the default parser so formidable could handle multipart/form-data in API routes.

2. **Handling Form Data with Formidable**  
   I utilized formidable to parse incoming requests containing files, allowing me to separate files from other form fields.

3. **File Management**  
   Uploaded files were saved to a designated folder. I moved each file from its temporary location to the target directory using `fs.rename` or `fs.promises.rename`, and sanitized file names for security.

4. **Security & Validation (Frontend & Backend)**
   - **Frontend:** Checked file type (e.g., image/jpeg, PDF) and size before allowing uploads.
   - **Backend:** Revalidated file size and type on the server to prevent unsafe uploads.

## 2. Reflection

### Lessons Learned

Building the file upload feature in my Next.js app taught me about both frontend and backend processes:

1. **Multipart Form Data Handling:**  
   I discovered that Next.js's default body parser can't process multipart/form-data, so formidable was necessary for file uploads.

2. **Using React Hook Form:**  
   I learned to integrate react-hook-form for managing form state and validation, simplifying the upload form's logic.

3. **File Validation:**  
   Validating file size and type on both the frontend and backend highlighted the importance of security and user experience.

4. **Drag-and-Drop with React Dropzone:**  
   Implementing react-dropzone enabled a user-friendly drag-and-drop upload area.

5. **Upload Progress with Axios:**  
   I used Axios's `onUploadProgress` to provide real-time feedback on upload progress.

6. **Security Awareness:**  
   This project increased my awareness of file upload risks, such as malicious or oversized files, emphasizing the need for thorough validation and sanitization.

### Challenges and Solutions

**Drag-and-Drop Integration**  
**Challenge:**  
Initially, integrating react-dropzone with react-hook-form was difficult, especially ensuring the drag-and-drop area correctly set the file input.

**Solution:**  
I resolved this by creating a custom component that wrapped useDropzone and connected it to react-hook-form using `setValue` and `watch`.
