

list = []
z = 0

eded = int(input("eded sayini mueyyen edin : "))
for i in range(1, eded + 1):
    x = int(input("ededleri daxil edin : "))
    list.append(x)
for j in range(eded):
    z = z + list[j]
print("reqemlerin cemi: ", z)

for j in range(eded):
    z=z * list[j]
print("kvadratin sahesi : ",z)

