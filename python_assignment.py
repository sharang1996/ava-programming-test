'''
1. Define a generator which generates the positive integers up to and including a supplied value which are divisible by another supplied positive integer and use it to calculate the sum of all positive integers less than 102030 which are divisible by 3
'''
def pos_div_gen(limit, divisor):
    for i in range(limit):
        if i%divisor==0:
            yield i
            
print(sum(pos_div_gen(100, 20)))

'''
2. Write a function which is passed an integer, n, and returns a list of n lists such that: f(0) returns []
f(1) returns [[1]]
f(2) returns [[1], [1,2]]
f(3) returns [[1], [1,2], [1,2,3]] etc.
'''
def list_of_lists(n):
    return [[i+1 for i in xrange(x+1)] for x in xrange(n)]
    
print(list_of_lists(4))