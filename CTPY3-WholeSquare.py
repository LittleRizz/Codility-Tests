# you can use print for debugging purposes, e.g.
# print "this is a debug message"

def solution(A, B):
	import math
#insert a couple of statements to keep A and B from acting funny
	if A == B:
		return 0
	if B < A:
		return 0
# since negative numbers in a range can't be perfect squares, we can
# make sure they don't mess with our funtion while still allowing the 
# argument to be input.
	if A <=0:
		A=1
	if B <=0:
		return 0
#in Py we can implement a range given our two variables.  Like a boss.
	newlist = []
	rangeRover =range(A,B)
#then, its iterate o'clock.
	for x in rangeRover:
		if math.sqrt(x) % 1 == 0:
			newlist.append(x)
	return len(newlist)
#looking back, I think I could have implemented this remainder function in JS too.

test = solution(23,3460)
print test