# Gunakan image Node.js versi LTS (Long Term Support) sebagai base image
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh aplikasi ke dalam container
COPY . .

# Expose port (sesuaikan dengan port aplikasi Express Anda)
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["node", "index.js"]