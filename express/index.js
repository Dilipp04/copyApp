const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
let data = {
  "1a": `
# Graph definition
graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
}

# BFS function
def bfs(start):
  queue = [start]       # Start with the initial node
  visited = []          # List to track visited nodes

  while queue:
      node = queue.pop(0)   # Remove the first node from the queue
      if node not in visited:
          visited.append(node)  # Mark the node as visited

          # Add neighbors to the queue
          for neighbor in graph[node]:
              if neighbor not in visited:
                  queue.append(neighbor)

  return visited   # Return the list of visited nodes

# Run BFS starting from 'A'
print(bfs('A'))`,
};

// Route that returns JSON data
app.get("/", (req, res) => {
  res.json();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
