class Player:
    def __init__(self,n: int):
        self.pos,self.moves,self.name = 0,0,f"Player {n}"
class SnakesLadders():
    def __init__(self):
        self.players = [Player(1),Player(2)]
        self.turn = 0
        self.game_over = False
        self.snl =[(16,6),(49,11),(62,19),(46,25),(74,53),(64,60),(89,68),(95,75),(99,80),(92,88), #Snakes
                   (2,38),(7,14),(8,31),(15,26),(21,42),(28,84),(36,44),(51,67),(71,91),(78,98),(87,94)] #Ladders
    def play(self, die1: int, die2: int) -> str:
        p = self.players[self.turn%2]
        p.moves = die1+die2
        if not self.game_over:
            if (p.pos + p.moves)<=100: p.pos+= p.moves
            else: p.pos = 100 + (100-(p.pos+p.moves))
            for pos in self.snl: 
                if p.pos == pos[0]: p.pos = pos[1]
            self.turn += 1 if not die1==die2 else 0
            if p.pos==100:
                self.game_over = True
                return f"{p.name} Wins!"
            return f"{p.name} is on square {p.pos}"
        else:
            return "Game over!"