# Running Application

1. ### Configure ENV Variables

   Ensure that the `env` file stored on `server/.env` is configured as follows:

   ```
   PORT=8080
   MONGODB_URL=mongodb+srv://hoseina:2g3ydvEgFj965LlL@cluster0.71jtf4m.mongodb.net/?retryWrites=true&w=majority
   ```

2. ### Run Backend

   Navigate to the backend directory

   ```
   cd server
   ```

   Run the server

   ```
   go run main.go
   ```

3. ### Run Frontend
   Open a new terminal window and navigate to the frontend directory
   ```
   cd frontend
   ```
   Install node dependencies
   ```
   npm install
   ```
   Run Development Server
   ```
   npm run dev
   ```
