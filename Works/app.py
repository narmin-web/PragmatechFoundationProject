# str,int,bool arasinda comparison operatorlarin istifadesi
# bool=int -> icaze verilmir ona gore ki  ferqli data tipidir
# str=str -> icaze verilir cunki eyni data tipidir
# str!=bool -> icaze verilir ferqli data tipi olmasina baxmayaraq bir birine beraber deyil deye icaze verilir
# bool<bool -> icaze verilmir cunki eyni data tipidir ve bir-birinden boyuk ola bilmez
# int<=int -> normal riyazi emeliyat aparir cunki integerler bir-birine beraberdir



a='yazi'
b=9
c=True
print(c==b)
print(a==a)
print(a!=c)
print(c<c)
print(b<=b)


username=input(' username :')
password=input(' password :')
if username==''  or password=='':
      print(butun melumatlar daxil edilmelidir)



def f2(a ,b,c):
  return a*b/c

netice = f2(6,7 ,8)
print(netice)




def funksiya(seher="bakida"):
    print ("men yasayiram" +seher) 

funksiya("Parisde")
funksiya()
funksiya("Gencede")
funksiya("Istanbulda")