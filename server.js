const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4040;
const DATA_FILE = path.join(__dirname, 'data', 'todos.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function readTodos() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

app.get('/api/todos', (req, res) => {
  res.json(readTodos());
});

app.post('/api/todos', (req, res) => {
  const todos = readTodos();
  const { text, completed } = req.body;
  if (text) {
    todos.push({ text, completed: completed || false });
    writeTodos(todos);
  }
  res.json(todos);
});

app.put('/api/todos/:index', (req, res) => {
  const todos = readTodos();
  const index = parseInt(req.params.index);
  if (todos[index]) {
    if (req.body.text !== undefined) todos[index].text = req.body.text;
    if (req.body.completed !== undefined) todos[index].completed = req.body.completed;
    writeTodos(todos);
  }
  res.json(todos);
});

app.delete('/api/todos/:index', (req, res) => {
  const todos = readTodos();
  const index = parseInt(req.params.index);
  if (todos[index]) {
    todos.splice(index, 1);
    writeTodos(todos);
  }
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});