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
  print(bfs('A'))
  `,
  "1b": `
# Graph definition
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# DFS function
def dfs(start):
    stack = [start]       # Start with the initial node
    visited = []          # List to track visited nodes

    while stack:
        node = stack.pop()   # Remove the first node from the queue
        if node not in visited:
            visited.append(node)  # Mark the node as visited

            # Add neighbors to the queue
            for neighbor in graph[node]:
                if neighbor not in visited:
                    stack.append(neighbor)

    return visited   # Return the list of visited nodes

# Run DFS starting from 'A'
print(dfs('A'))`,
  "2a": `class Solution:
    def __init__(self):
        self.result = []
        
    def is_valid(self, board, row, col):
        # Check this column on the upper side
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        # Check the upper left diagonal
        i, j = row, col
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j -= 1
        
        # Check the upper right diagonal
        i, j = row, col
        while i >= 0 and j < len(board):
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1
        
        return True  # All checks passed, placement is valid
    
    def solve(self, board, row):
        if row == len(board):
            self.result.append(["".join(row) for row in board])
            return
        for col in range(len(board)):
            if self.is_valid(board, row, col):
                board[row][col] = 'Q'
                self.solve(board, row + 1)
                board[row][col] = '.'
    
    def solveNQueens(self, n):
        if n == 0:
            return []
        board = [["." for _ in range(n)] for _ in range(n)]
        self.solve(board, 0)
        return self.result


solution = Solution()
n = int(input("Enter the number of queens (n): "))
solutions = solution.solveNQueens(n)
print(f"Number of solutions: {len(solutions)}\n")
for sol in solutions:
    for row in sol:
        print(row)
    print()  # Separate each solution
`,
  "2b": `def moveTower(height,fromPole,toPole,withPole):
    if height>=1:
        moveTower(height-1,fromPole,withPole,toPole)
        print("Moving disk from",fromPole,"to",toPole)
        moveTower(height-1,withPole,toPole,fromPole)
    
moveTower(3,"A","C","B")

`,
  "3a": `tree = [[[0, 1, 2], [8, -8, -9]], [[9, 4, 5], [-3, 4, 3]]]
root = 0
pruned = 0
def children(branch, depth, alpha, beta):
    global tree
    global root
    global pruned
    i = 0
    for child in branch:
        if type(child) is list:
            (nalpha, nbeta) = children(child, depth + 1,
                                       alpha, beta)
            if depth % 2 == 1:
                beta = nalpha if nalpha < beta else beta
            else:
                alpha = nbeta if nbeta > alpha else alpha
            branch[i] = alpha if depth % 2 == 0 else beta
            i += 1
        else:
            if depth % 2 == 0 and alpha < child:
                alpha = child
            if depth % 2 == 1 and beta > child:
                beta = child
            if alpha >= beta:
                pruned += 1
                break
    if depth == root:
        tree = alpha if root == 0 else beta
    return (alpha, beta)
def alphabeta(in_tree=tree, start=root, upper=-15, lower=15):
    global tree
    global pruned
    global root
    (alpha, beta) = children(tree, start, upper, lower)
    if __name__ == "__main__":
        print ("(alpha, beta): ", alpha, beta)
        print ("Result: ", tree)
        print ("Times pruned: ", pruned)
    return (alpha, beta, tree, pruned)

if __name__ == "__main__":
    alphabeta(None)
`,
  "3b": `import math
increment=0.1
startingPoint=[1,1]
point1=[1,5]
point2=[6,4]
point3=[5,2]
point4=[2,1]

def distance(x1,y1,x2,y2):
    dist=math.pow(x2-x1,2)+math.pow(y2-y1,2)
    return dist
def sumOfDistance(x1,y1,px1,py1,px2,py2,px3,py3,px4,py4):
    d1=distance(x1,y1,px1,py1)
    d2=distance(x1,y1,px2,py2)
    d3=distance(x1,y1,px3,py3)
    d4=distance(x1,y1,px4,py4)
    return d1+d2+d3+d4
def newDistance(x1,y1,point1,point2,point3,point4):
    d1=[x1,y1]
    d1temp=sumOfDistance(x1,y1,point1[0],point1[1],point2[0],point2[1],point3[0],point3[1],point4[0],point4[1])
    d1.append(d1temp)
    return d1

minDistance=sumOfDistance(startingPoint[0],startingPoint[1],point1[0],point1[1],point2[0],point2[1],point3[0],point3[1],point4[0],point4[1])
flag=True

def newPoints(minimum,d1,d2,d3,d4):
    if d1[2]==minimum:
        return [d1[0],d1[1]]
    elif d2[2]==minimum:
        return [d2[0],d2[1]]
    elif d3[2]==minimum:
        return [d3[0],d3[1]]
    elif d4[2]==minimum:
        return [d4[0],d4[1]]

i=1
while flag:
    d1=newDistance(startingPoint[0]+increment,startingPoint[1],point1,point2,point3,point4)
    d2=newDistance(startingPoint[0]-increment,startingPoint[1],point1,point2,point3,point4)
    d3=newDistance(startingPoint[0],startingPoint[1]+increment,point1,point2,point3,point4)
    d4=newDistance(startingPoint[0],startingPoint[1]-increment,point1,point2,point3,point4)

    print(i,'',round(startingPoint[0],2),round(startingPoint[1],2))
    minimum=min(d1[2],d2[2],d3[2],d4[2])
    if minimum<minDistance:
        startingPoint=newPoints(minimum,d1,d2,d3,d4)
        minDistance=minimum
        i+=1
    else:
        flag=False`,
  "4a": `from simpleai.search import SearchProblem, astar
GOAL = 'HELLO WORLD'
class HelloProblem(SearchProblem):
    def actions(self, state):
        if len(state) < len(GOAL):
            return list(' ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        else:
            return []
    def result(self, state, action):
     return state+action
    def is_goal(self, state):
        return state == GOAL
    def heuristic(self, state):
        wrong = sum([1 if state[i] != GOAL[i] else 0
                     for i in range(len(state))])
        missing = len(GOAL) - len(state)
        return wrong + missing
problem = HelloProblem(initial_state='')
result = astar(problem)
print(result.state)
print(result.path())`,
  "4b": `def Cost(H,condition,weight = 1):
    cost={}
    if 'AND' in condition:
        AND_nodes = condition['AND']
        Path_A =' AND '.join(AND_nodes)
        PathA = sum(H[node]+weight for node in AND_nodes)
        cost[Path_A] = PathA

    if 'OR' in condition:
        OR_nodes = condition['OR']
        Path_B=' OR '.join(OR_nodes)
        PathB= min(H[node]+weight for node in OR_nodes)
        cost[Path_B] = PathB
    return cost

def update_cost(H,Conditions, weight=1):
    Main_nodes = list(Conditions.keys())
    Main_nodes.reverse()
    least_cost={}
    for key in Main_nodes:
        condition = Conditions[key]
        print(key,':',Conditions[key],'>>>',Cost(H,condition,weight))
        c = Cost(H,condition,weight)
        H[key] = min(c.values())
        least_cost[key] = Cost(H,condition,weight)
    return least_cost

def shortest_path(Start,Updated_cost,H):
    Path = Start
    if Start in Updated_cost.keys():
        Min_cost = min(Updated_cost[Start].values())
        key = list(Updated_cost[Start].keys())
        values = list(Updated_cost[Start].values())
        Index=values.index(Min_cost)
        Next=key[Index].split()
        if len(Next)==1:
            Start=Next[0]
            Path+='<--'+shortest_path(Start,Updated_cost,H)
        else:
            Path+='<--('+key[Index]+')'
            Start=Next[0]
            Path+='['+shortest_path(Start,Updated_cost,H)+'+'
            Start=Next[0]
            Path+=shortest_path(Start,Updated_cost,H)+']'
    return Path

H={'A':-1, 'B':5, 'C':2, 'D':4, 'E':7, 'F':9, 'G':3, 'H':0, 'I':0, 'J':0}
Conditions={
'A':{'OR':['B'],'AND':['C','D']},
'B':{'OR':['C','F']},
'C':{'OR':['G'],'AND':{'H','I'}},
'D':{'OR':['J']}
}
weight=1

print('Updated_Cost:')
Updated_cost=update_cost(H,Conditions,weight=1)
print('*'*75)
print('Shortest_Path:\n',shortest_path('A',Updated_cost,H))`,
  "5a": `#Water-Jug problem
def pour(jug1, jug2):
    max1, max2, fill = 3,5,4  
    print("%d\t%d" % (jug1, jug2))
    if jug2 is fill:
        return
    elif jug2 is max2:
        pour(0, jug1)
    elif jug1 != 0 and jug2 is 0:
        pour(0, jug1)
    elif jug1 is fill:
        pour(jug1, 0)
    elif jug1 < max1:
        pour(max1, jug2)
    elif jug1 < (max2-jug2):
        pour(0, (jug1+jug2))
    else:
        pour(jug1-(max2-jug2), (max2-jug2)+jug2)
 
print("JUG1\tJUG2")
pour(0, 0)`,
  "5b": `#Tic Tac Toe Game
import os 
import time 
 
board = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '] 
player = 1 
 
### Win Pre-requsities ###
Win = 1 
Draw = -1 
Running = 0 
Stop = 1  
Game = Running 
Mark = 'X' 
 
#Draws Game Board 
def DrawBoard():
    print(" %c | %c | %c " % (board[1],board[2],board[3]))
    print("___|___|___")
    print(" %c | %c | %c " % (board[4],board[5],board[6]))
    print("___|___|___")
    print(" %c | %c | %c " % (board[7],board[8],board[9]))
    print("---|---|---")
    
 
#Checks position is empty or not 
def CheckPosition(x):
    if(board[x] == ' '):
        return True
    else:
        return False 
 
#Checks player has won or not 
def CheckWin():
    global Game
    #Horizontal Win
    if(board[1] == board[2] and board[2] == board[3] and board[1] != ' '):
        Game = Win
    elif(board[4] == board[5] and board[5] == board[6] and board[4] != ' '):
        Game = Win
    elif(board[7] == board[8] and board[8] == board[9] and board[7] != ' '):
        Game = Win
    #Vertical Win
    elif(board[1] == board[4] and board[4] == board[7] and board[1] != ' '):
        Game = Win
    elif(board[2] == board[5] and board[5] == board[8] and board[2] != ' '):
        Game = Win
    elif(board[3] == board[6] and board[6] == board[9] and board[3] != ' '):
        Game=Win
    #Diagonal Win
    elif(board[1] == board[5] and board[5] == board[9] and board[5] != ' '):
        Game = Win
    elif(board[3] == board[5] and board[5] == board[7] and board[5] != ' '):
        Game=Win
    #Draw 
    elif(board[1]!=' ' and board[2]!=' ' and board[3]!=' ' and board[4]!=' ' and board[5]!=' ' and board[6]!=' ' and board[7]!=' ' and board[8]!=' ' and board[9]!=' '):
        Game=Draw 
    else:
        Game=Running 
 
print("Tic-Tac-Toe Game") 
print("Player 1 [X] --- Player 2 [O]\n") 
print() 
print() 
print("Please Wait...") 
time.sleep(1) 
while(Game == Running):
    os.system('cls')
    DrawBoard()
    if(player % 2 != 0):
        print("Player 1's chance")
        Mark = 'X'
    else:
        print("Player 2's chance")
        Mark = 'O'
    choice = int(input("Enter the position between [1-9] where you want to mark:"))
    if(CheckPosition(choice)):
        board[choice] = Mark 
        player+=1 
        CheckWin() 
 
os.system('cls') 
DrawBoard() 
if(Game==Draw):
    print("Game Draw") 
elif(Game==Win): 
    player-=1 
    if(player%2!=0):
        print("Player 1 Won")
    else:
        print("Player 2 Won") `,
  "7a": `import itertools,random
# Method I
value = ["Ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"]
suit = ["Spade", "club", "heart", "Diamond"]
deck = list(itertools.product(value,suit)) 

#Method II
# deck=list(itertools.product(range(1,14),['Spade','Club','Heart','Diamond']))


random.shuffle(deck)
print("You got=")
for i in range(5):
    print(deck[i][0],"of",deck[i][1])`,
  "7b": `import itertools

def calculate_distance(route, distance_matrix):
    total_distance=0
    num_cities=len(route)
    for i in range(num_cities-1):
        total_distance+=distance_matrix[route[i]][route[i+1]]
    total_distance+=distance_matrix[route[-1]][route[0]]
    return total_distance
def tsp_brute_force(distance_matrix):
    num_cities=len(distance_matrix)
    cities=list(range(num_cities))
    min_route=None
    min_distance=float('inf')

    for perm in itertools.permutations(cities):
        current_distance=calculate_distance(perm,distance_matrix)
        if current_distance< min_distance:
            min_distance=current_distance
            min_route=perm
    return min_route,min_distance

if __name__=="__main__":
    distance_matrix=[
        [0,10,15,20],
        [10,0,35,25],
        [15,35,0,30],
        [20,25,30,0]
    ]
    route,distance=tsp_brute_force(distance_matrix)
    print("Optimal Route=",route)
    print("Minimal Distance=",distance)
`,
  "8a": `class BlockWorld:
    def __init__(self,num_blocks):
        self.stacks=[[i] for i in range(num_blocks)]

    def __str__(self):
        return '\n'.join(f'{i}:{stack}' for i,stack in enumerate(self.stacks))
    
    def move_onto(self,a,b):
        self.clear_above(a)
        self.clear_above(b)
        self.stacks[b].append(a)

    def move_over(self,a,b):
        self.clear_above(a)
        self.stacks[b].append(a)

    def pile_onto(self,a,b):
        self.clear_above(b)
        pile=self.remove_pile(a)
        self.stacks[b].extend(pile)
    
    def pile_over(self,a,b):
        pile=self.remove_pile(a)
        self.stacks[b].extend(pile)


    def clear_above(self,block):
        stack=self.find_stack(block)
        index=stack.index(block)
        for b in stack[index+1:]:
            self.stacks[b].append(b)
        del stack[index+1:]

    def find_stack(self,block):
        for stack in self.stacks:
            if block in stack:
                return stack
        return None
    
    def remove_pile(self,block):
        stack=self.find_stack(block)
        index=stack.index(block)
        pile=stack[index:]
        del stack[index:]
        return pile
    
world=BlockWorld(5)
print("Initital State=")
print(world)

world.move_onto(1,3)
print("\nAfter moving block 1 onto block 3=")
print(world)

world.move_onto(2,4)
print("\nAfter moving block 2 onto block 4=")
print(world)

world.pile_onto(0,3)
print("\nAfter piling block 0 onto block 3=")
print(world)

world.pile_onto(3,1)
print("\nAfter piling block 3 and block 4 onto block 1=")
print(world)
`,
  "8b": `from __future__ import print_function
from simpleai.search import CspProblem, backtrack,min_conflicts,MOST_CONSTRAINED_VARIABLE,HIGHEST_DEGREE_VARIABLE,LEAST_CONSTRAINING_VALUE
variables=('WA','NT','SA','Q','NSW','V','T')
domains=dict((v,['red','green','blue','yellow']) for v in variables)
def const_difference(variable,values):
    return values[0]!=values[1]

constraints=[
    (('WA','NT'),const_difference),
    (('WA','SA'),const_difference),
    (('SA','NT'),const_difference),
    (('SA','Q'),const_difference),
    (('NT','Q'),const_difference),
    (('SA','NSW'),const_difference),
    (('Q','NSW'),const_difference),
    (('SA','V'),const_difference),
    (('NSW','V'),const_difference),
]

my_problem=CspProblem(variables,domains,constraints)
# print(backtrack(my_problem))
# print(backtrack(my_problem,variable_heuristic=MOST_CONSTRAINED_VARIABLE))
# print(backtrack(my_problem,variable_heuristic=HIGHEST_DEGREE_VARIABLE))
# print(backtrack(my_problem,value_heuristic=LEAST_CONSTRAINING_VALUE))
# print(backtrack(my_problem,variable_heuristic=MOST_CONSTRAINED_VARIABLE,value_heuristic=LEAST_CONSTRAINING_VALUE))
# print(backtrack(my_problem,variable_heuristic=MOST_CONSTRAINED_VARIABLE,value_heuristic=LEAST_CONSTRAINING_VALUE))
print(min_conflicts(my_problem))



`,
  "9a": `def associative_law(a,b,c):
    add1=(a+b)+c
    add2=a+(b+c)
    assert add1 == add2, f"Addtion law failed:({a}+{b})+{c}={add1},{a}+({b}+{c})={add2}"

    mul1=(a*b)*c
    mul2=a*(b*c)
    assert mul1 == mul2, f"Multiplication law failed:({a}*{b})*{c}={add1},{a}*({b}*{c})={add2}"

    return True

a,b,c =0.1, 0.2, 0.3
print(f"Associative law test for a={a},b={b},c={c}: \n {associative_law(a,b,c)}")`,
  "9b": `def distributive_law(a, b, c):
    left_side = a * (b + c)
    right_side = (a * b) + (a * c)
    
    assert left_side == right_side, f"Distributive law failed: {a} * ({b} + {c}) = {left_side}, ({a} * {b}) + ({a} * {c}) = {right_side}"
    
    return True 
a, b, c =  0.1, 0.2, 0.3
print(f"Distributive law test for a={a}, b={b}, c={c}: {distributive_law(a, b, c)}")`,
};

// Route that returns JSON data
app.get("/", (req, res) => {
  res.json(data.data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
