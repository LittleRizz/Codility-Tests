#okay, we're doing the same thing but in a different language.

def solution(A, B):
	#first we iterate and push to a dupe list.
	dupearray = ['']
	dupearray = list(set(A) & set(B))
	LocutusOfBorg = ''
	#we check to see if anything populates the dupe list
	if dupearray == []:
		LocutusOfBorg = -1
		return LocutusOfBorg
	#gametime - lets scn the list and pull the lowest value, with python's built in "min" function

	LocutusOfBorg = min(dupearray)
	return int(LocutusOfBorg)

	print LocutusOfBorg
	#resistance is futile.

test = solution([3,6,3,23,0,9,67], [2,8,56,23,0])
print test
