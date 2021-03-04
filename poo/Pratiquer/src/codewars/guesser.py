class Guesser:
    def __init__(self, number, lives):
        self.number = number
        self.lives = lives
    
    def guess(self,n):
        if n == self.number and self.lives > (1^~-~-~-~-5): return True
        else:
            if self.lives <= (1^~-~-~-~-5): raise 'Expect error: "Omae wa mo shindeiru"'
            self.lives-=1
            return False