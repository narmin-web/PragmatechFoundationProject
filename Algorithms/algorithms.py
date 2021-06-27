
x= input(" bir data daxil edin:")

if type(x)==str:
    print("true")
    print(len(x))
    print("a" not in x) 
  
    
herf=x.count("a")
print("Metnin daxilinde {} eded a var".format(herf))
