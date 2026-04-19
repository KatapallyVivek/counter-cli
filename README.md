# counter-cli 

A lightweight Node.js CLI tool for file operations including create, read, append, delete, and word/line counting.

---

##  Features

-  Create files
-  Delete files
-  Show file content
-  Append text to files
-  Count words
-  Count lines

---

##  Installation

### 1. Clone the repository
```bash
git clone https://github.com/KatapallyVivek/counter-cli.git
cd counter-cli
```
### 2. Install dependencies
```bash
npm install
```
### 3. Link CLI globally
```bash
npm link
```

---

## Usage (Few commands)
### Create a file
```bash
counter create file.txt
# alias
counter cr file.txt
```

### Append text
```bash
counter add file.txt Hello world from CLI
```

### Show file content
```bash
counter show file.txt
# alias
counter sh file.txt
```

### For all commands, help and version. run 
```bash
counter --help or counter -h
counter -V
```
---
## Tech Stack 
- Node.js
- Commander

---

## Contributing

Contributions are welcome!

### How to Contribute

1. Fork the repository  
2. Clone your fork  
   ```bash
   git clone https://github.com/<your-username>/counter-cli.git
   cd counter-cli
3. Create a new branch
   ```bash
   git checkout -b feature/your-feature
4. Make your changes and test them
   ```bash
   npm install
   npm link
   counter --help
5. Commit your changes
   ```bash
   git commit -m "feat: add your feature"
6. Push to your branch
   ```bash
   git push origin feature/your-feature
7. Open a Pull Request

### Guidelines
- Write clean and readable code
- Use meaningful commit messages
- Avoid breaking existing functionality
- Also avoid submitting pull requests that only make trivial changes (such as minor README edits) without improving functionality or usability



















