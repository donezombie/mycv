from random import *

# Input Size Map
setMap = input("Input Your Size Map: ")
setMap = setMap.split(' ')
setMapInt = []   
for i in setMap:
  setMapInt.append(int(i))
x = setMapInt[0]
y = setMapInt[1]
# Random Position
MaxPostionX = list(range(0, x))
MaxPostionY = list(range(0, y))

def ChoosePositionRandom(ListPositionX, ListPositionY):
  x = choice(ListPositionX)
  y = choice(ListPositionY)
  ListPositionX.remove(x)
  ListPositionY.remove(y)
  return x,y

def Map(haveKey):
  for i in range(x):
    for j in range(y):
      if i == px and j == py:
        print('P ', end="")
      elif i == gx and j == gy:
        print('G ', end="")
      elif i == kx and j == ky and not haveKey:
        print('K ', end="")
      elif i == kx and j == ky and haveKey and kx != px and ky != py:
        print('_ ', end="")
      else:
        print('_ ', end="")
    print()


# Generator Position (Gate, Key, Player)
gx, gy = ChoosePositionRandom(MaxPostionX, MaxPostionY)
kx, ky = ChoosePositionRandom(MaxPostionX, MaxPostionY)
px, py = ChoosePositionRandom(MaxPostionX, MaxPostionY)

# Initial
haveKey = False
Map(haveKey)


loop = True
while loop:
  move = input('W A S D to Move P: ').lower()
  if move == 'w':
    px = px - 1
  elif move == 's':
    px = px + 1
  elif move == 'a':
    py = py - 1
  elif move == 'd':
    py = py + 1
  elif move == 'q':
    print('Quit Game!')
    loop = False
  else:
    print("Wrong input")
  
  
  # Wall
  if (px < 0 ):
    px = 0
  if (px >= x):
    px = 5
  if (py < 0):
    py = 0
  if (py >= y):
    py = 5
  
  dx = px
  dy = py

  # Get key
  if dx == kx and dy == ky:
    haveKey = True

  # Win Codition
  if haveKey and dx == gx and dy == gy:
    print('Winnn!')
    loop = False
    break
  Map(haveKey)
