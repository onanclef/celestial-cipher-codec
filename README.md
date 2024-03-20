# Quaint Quantum Queries

A library for efficiently parsing and managing complex queries with ease. Designed for developers who need to handle, validate, and manipulate query strings in their applications.

## Installation

```bash
npm install quaint-quantum-queries
```

## Usage

```javascript
const QuaintQuantumQueries = require('quaint-quantum-queries');

// Initialize with a query string
const qqq = new QuaintQuantumQueries('name=Alex&filter=alpha');

// Validate and manipulate the query
console.log(qqq.getQueryString()); // Outputs modified and validated query string

// Get generated unique ID for the query
console.log(qqq.generateQueryId());
```

## Features

- Parse query strings with ease.
- Validate query parameters with built-in validations.
- Add timestamps to your queries.
- Generate a unique ID for each query instance.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
