# you can use print for debugging purposes, e.g.
# print "this is a debug message"

def solution(N):
#same as JS - turn this beezy into a string, and sort from there:
	newvar = str(N)
	ahha = (sorted(newvar))
	ahha.reverse()
	final = ''.join(ahha)
#Mynd you, moose bites Kan be pretti nasti...
	booyah = int(final)
	return booyah
#We apologise again for the fault in the code-comments. 
#Those responsible for sacking the people who have just been sacked have been sacked. 


test = solution(45236)
print test