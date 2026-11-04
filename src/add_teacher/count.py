#use this logic for password setting 

s=input("Enter String: ")
l=len(s)
digitCout=0
upperCaseCount=0
lowerCaseCount=0
specialSymbolCount=0
for i in range(l):
    if (s[i].isdigit()):
        digitCout= digitCout+1
    elif s[i].isupper():
        upperCaseCount=upperCaseCount+1
    elif s[i].islower():
        lowerCaseCount=lowerCaseCount+1
    else:
        specialSymbolCount=specialSymbolCount+1
print("number of digits= ",digitCout)
print("number of lowercase= ",lowerCaseCount)
print("number of uppercase= ",upperCaseCount)
print("number of specialsymbol= ",specialSymbolCount)
