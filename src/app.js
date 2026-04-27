const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
  res.send('<h1>Todo App</h1><p>API running!</p>');
});

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.json(todo);
});

app.get('/metrics', (req, res) => {
  res.send(`# HELP todos_total Total todos\n# TYPE todos_total gauge\ntodos_total ${todos.length}\n`);
});

if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
