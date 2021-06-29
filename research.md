*Week08-Day01 [21 Iyun 2021]*

### Transistor nədir və necə işləyir?
 elektrik siqnallarını gücləndirmək ,dəyişdirmək üçün istifadə olunan dovre elementidir.Transiztorun birinci funksiyasi acarlamadir, digeri ise elektrik siqnallarin guclendirmekdir.Baza kollektor emitter adlanan hisselerden ibaretdir.Bazadan daxil olan enerji axini kollectordan emittere yaxud eksine gedir transiztor bu axina nezaret edir.

[ istinad](https://elektrikinfo.com/transistor-nedir/)
[ istinad](https://www.youtube.com/watch?v=7ukDKVHnac4)
[istinad](https://www.youtube.com/watch?v=-XHRu54mnbc&t=39s)

### 10luq say sistemindəki bir ədədi 2lik say sisteminə necə çevirə bilərik?
 Onluq say sistemindən ikilik say sisteminə keçmək üçün ədədi ikiyə bölmək və qalığı qeyd etmək lazımdır. Sonra aldığımız cavabı yenidən ikiyə bölüb qalığı qeyd edirik.Sonda sağdan sola ardıcıl olaraq qalıqları yazırıq.Məsələn 26 rəqəminin onluq say sistemindən ikilik say sisteminə keçid edilməsi 26=11010

 [istinad](https://www.youtube.com/watch?v=teTrhghcORA)

### 2-lik say sistemindəki bir ədədi 10-luq say sisteminə necə çevirə bilərik?
İkilik  say sistemindən onluq say sisteminə keçmək üçün ədədi sağdan sola sıfırdan başlayıb ardıcıl nömrələmək , sonra ədədin hər bir rəqəmini ikinin uyğun qüvvətinə vurmaq və alınan cavabları toplamaq lazımdır.Ədədlərin üzərində 0 olanda 1-ə bərabər olur.Ədədlərin üzərində 1 olanda elə həmin ədədin özünə bərabər olur Ədədin üzərində neçə yazılırsa o ədədi özü-özünə o qədər dəfə vurmaq lazımdır.Məsələn 11001 ikilik say sistemindən 10luq say sisteminə keçidi 25ə bərabər olacaqdır.


### *Week08-Day02 [22 Iyun 2021]*

### 1) interpreter dillər necə işləyir
Qaynaq kodu setir-setir cevirerek icra edir.

### 2) compiler dillər necə işləyir
Yuksek seviyeli dilde yazilan proqrami masin diline ve ya basqa dile cevirir.Qaynaq koddaki datani emal ederek obyekt koda oturur oradan da emeliyyat sistemine.

### 3)qaynaq kod (source code) nədir
her hansi proqrami yaradarken istifade etdiyimiz kodlar butunudur.Meselen her hansi yemeyin resepti o yemeyin qaynaq kodudur ;) 

[istinad](https://www.youtube.com/watch?v=5JsIfKwJsPY)


### 5)İnterpreter dillər və compiler dillər arasında fərqlər nələrdir?
Compiler dil qaynaq kodu birdefeye masin diline cevirir.Interpreter diller ise setir-setir .Compiler interpretere gore bir az suretlidir.

[istinad](https://www.youtube.com/watch?v=am7vyHCDU14)

### 6)Python və Javascript arasında oxşar və fərqli cəhətlər nələrdir?
javascript dinamik web sayt ve istifadeci interfeysi yaratmaq ucun istifade olunan proqramlasdirma dilidir,Python ise muxtelilf sahelerde istifade edilir.mes suni zeka , data analiz ve s.JavaScript bir saytın front end hissəsini işlətmək üçün istifadə edilir, ancaq Python server tərəfini idarə etmək üçün istifadə edilə bilər.

[istinad](https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/)

### 7)VS Code-da Python kodu yazabilmək üçün lazımlı extentionlar hansılardır?
Python Microsoft terefinden yaradilan extensionu ,Python Indent , Bracket Pair Colorizer , Code Runner ve s.

[istinad](https://www.youtube.com/watch?v=UczGcbqNqUM)

 ### 8) Yeni fayl yaradmaq üçün hansı komandadan istifadə edirik?
touch faylin adi 

### 9)Faylı silmək üçün lazimlı komanda hansıdır?
rm faylin adi

### 10)Yeni folder yaratmaq, folder silmək, folderin içərisinə daxil olmaq üçün lazımlı komandalar hansılardır?
- mkdir folder adi  (make direction) folder yaratmaq
-  m -r folder adi  folderi silmek 
-  cd komandi ile folderin incerisine kecid etmek olur

[istinad](https://medium.com/@emrekacan/temel-terminal-komutlar%C4%B1-fe08d7c54bc5)



### str,int,bool data tipləri üzərində müqaise operatorlarının analizi
 - str,int,bool arasinda comparison operatorlarin istifadesi
 - bool=int -> icaze verilmir ona gore ki  ferqli data tipidir
 - str=str -> icaze verilir cunki eyni data tipidir
 - str!=bool -> icaze verilir ferqli data tipi olmasina baxmayaraq bir birine beraber deyil deye icaze verilir
 - bool<bool -> icaze verilmir cunki eyni data tipidir ve bir-birinden boyuk ola bilmez
 - int<=int -> normal riyazi emeliyat aparir cunki integerler bir-birine beraberdir

 ```
 a='yazi'
b=9
c=True
print(c==b)
print(a==a)
print(a!=c)
print(c<c)
print(b<=b)
 ```
[istinad](https://www.w3schools.com/python/python_operators.asp)


### *Week08-Day05 [25 Iyun 2021]*


### 1)void function nədir?
Geriye deyer qaytarmayan (void).
 ```
def sum(a,b):
    c=a+b
    print(c)
 ```
### 2)return function nədir?
geriye deyer qaytaran(return).Return deyerini istifade etdikde ondan sonraki setirde kod islemez.
 ```
def f(a ,b,c):
  return a*b/c

netice = f(6,7 ,8)
print(netice)
 ```

[istinad](https://www.youtube.com/watch?v=J9ONM0M8Gz8)
### 3)parametr nədir?
Funksiya yaradarken verdiyimiz deyerlere parametr deyilir.funksiyada sonradan gonderilen ve yeni deyerler alan ifadelere arqument deyilir. Asagidaki numunede ad parametrdir
 ```
def salamlama (ad):
    print("xos gelmisiniz"+ad)   
```
### 4)arqument nədir?
Funksiyada sonradan gonderilen ve yeni deyerler alan ifadelere arqument deyilir.Asagidaki numuneye baxaq.
 ```
def salamlama (ad):
    print("xos gelmisiniz"+ad)   
salamlama("Kamil")
salamlama("hesen")   
salamlama("memmed")
 ```
[istinad](https://tekrei.gitlab.io/other/bbgd_p/ch03.xhtml)

### 5)default parametr nədir?
Funksiyanı təyin edərkən parametrlərinə standart dəyərlər təyin etmək mümkündür. Funksiya çağırışında bir parametr buraxılırsa, standart dəyər istifadə olunur.Asagidaki funsiyada seher parametrinin default degeri Bakidir.
 ```
def funksiya(seher="bakida"):
   print ("men yasayiram" +seher) 

funksiya("Parisde")
funksiya()
funksiya("Gencede")
funksiya("Istanbulda")
 ```
[istinad](https://duygubulut.wordpress.com/tag/parametre/)

###  6)dict nədir? Hansı hallarda istifadə olunur?
Dictionaryde esas mentiq her hansi acar soze uygun gelen melumat ve qiymetin olmasidir.Bu sebebden dictionaryden iki melumati elaqeli yaddasda saxlamaq ve tez sekilde muraciet etmek ucun istifade edirik.Acar soz dedikde ele bir melumat nezerde tutulur ki dictionaryde ona yalniz bir melumat uygun gelir.Asagida bir nece dictionary numunesinde mehsul acar sozune olan melumati tapib print etdik.
 ```
aksesuar= {"mehsul":"qolbaq" , "terkibi": "qizil","istehsalci olke": "Turkiye"}
print (aksesuar["mehsul"])
 ```
[istinad](https://www.youtube.com/watch?v=iW6_F77ut0w)

### 7)list nədir? Hansı hallarda istifadə olunur?
Python-da hər hansı bir siyahı yaratmaq üçün əvvəlcə siyahımıza bir ad verməli və sonra həmin siyahının elementlərini kvadrat mötərizədə göstərməliyik.Siyahı hazırlayarkən üç əsas məqama diqqət etməliyikş
Birincisi, dəyişənlərə ad verdiyimiz kimi siyahını adlandırmaq.
İkincisi, siyahımızı təşkil edən maddələri kvadrat mötərizədə "[]" yazmaq.
Python-un siyahıları ayırd edə bilməsi üçüncü əsas meyar siyahıdakı hər bir maddənin dırnaq işarələrində ("") göstərilməsi və vergüllə (,) ayrılmasıdır. Sade bir izahla listin yaradilmasini gosterek.
 ```
aksesuar= ["qolbaq" , "sirga" ,"boyunbagi" , "uzuk"]
print (aksesuar)
append vasitesile 
aksesuar= ["qolbaq" , "sirga" ,"boyunbagi" , "uzuk"]

aksesuar.append("hal-hal")

print(aksesuar)
 ```
+= ve ya extend ile listleri birlesdire bilerik
 ```
aksesuar= ["qolbaq" , "sirga" ,"boyunbagi" , "uzuk"]

yeni_aksesuar=["hal-hal", "coker"]

aksesuar.extend(yeni_aksesuar)
print(aksesuar)
 ```
listden elementi silmek ucun remove ,pop , ve del istifade edirik 
Eger biz asagidaki listde qolbaq yazisini silmek isteyirikse 
  ```
aksesuar= ["qolbaq" , "sirga" ,"boyunbagi" , "uzuk"]

aksesuar.remove("qolbaq")
print(aksesuar)
  ```
Pop ile asagidaki kimi ede bilerik
```
aksesuar= ["qolbaq" , "sirga" ,"boyunbagi" , "uzuk"]

aksesuar.pop(0)
print(aksesuar)
   ```

del ile asagidaki sekilde ede bilerik

 ```
aksesuar= ["qolbaq" , "sirga" ,"boyunbagi" , "uzuk"]
del aksesuar[0]
print(aksesuar)
 ```

[istinad](https://sites.google.com/site/egitimbilgileri/home/a---python---twisted---qt/05---liste-tuple-dict-yapisi)

### 8)Tuple nədir? Hansı hallarda istifadə olunur?
tuple listlere oxsardir. ancaq tuplein elementlerini deyisdirmek mumkun deyil.(immutable)Bezi hallarda serverler arasinda mesajlasma. mesaj a sunucusudan b-ye geder o deyerin deyise bilme xususiyyetini sinirlamaq lazim olur ki gelecekde sistem xetasi bas vermesin bele veziyyetde tuple istifadesi daha avantajlidir

 ```
aksesuar= ("qolbaq" , "sirga" ,"boyunbagi" , "uzuk")
print(aksesuar)
aksesuar[0]="diamond"
 ```

bu zaman  "tuple"object does not support item error verecek

[istinad](https://www.youtube.com/watch?v=4uy8wMXxBzY)

### 9)Python dövrlər nədir? Nümunələrlə izah edin
Dövr hər hansı bir funsiyanin,işin təkrar-təkrar edilməsidir.
Əgər dövrün ilkin və son qiyməti əvvəlcədən məlum olarsa for (sayğaclı)
for dongusuyle bir numuneye baxaq

 ```
s=0
for i in [5, 6, 7, 8 , 9, 10] :
    s=s+i
print(s)
 ```

range operatorlarindan istifade ederek numuneye baxaq

 ```
s=1
for i in range (5,11):
    s=s*i
print(s)
 ```

Əgər təkrarlanmaların sayı əvvəlcədən məlum deyilsə belə dövr şərt(while) adlanır.
while dongusuyle bir numuneye baxaq

 ```
s=1
i=1
while i<=10:
    s=s*i
    i=i+1
print(s)
 ```

[istinad](https://www.youtube.com/watch?v=JUsemOXDvjY)

### *Week09-Day01 [28 Iyun 2021]*


### 1)Bir mesajı dəyişəndə saxlayın və sonra mesajı çapa verin
```
mesaj= "Bu axirinci xeberdarliqdir"
print(mesaj)
```
### 2)ad və soyad dəyişkənləri yaradın və onlara istədiyiniz kiçik hərflərdən ibarət dəyər verin. Sonra tam_ad adlı dəyərdə ad və soyadın ilk hərflərini böyük şəkildə çapa verərək həmin şəxsə Salam verin.
```
ad= 'nermin'
soyad='qarazade'

tam_ad= ad.capitalize() + soyad.capitalize() 
print("Salam" +tam_ad)
```

### 3)İki ədədi iki müxtəlif dəyişkənə mənimsədin sonra isə onların bir birlərinə olan qüvvətini tapın (Riyazi operatorları research edin həll etmək üçün bu taski)
```
x = 5
y = 3
z= x**y
c= y**x
print(z)
print(c)
```

### 4) y = “4.92” stringini integere çevirin.
```
y="4.92"
z=int(float (y))
print(type(y))
```

### 5) İstifadəçidən havanın temperaturunu soruşun. 10 dərəcədən aşağı olarsa temperatur, ekrana soyuq, 20 dərəcə olarsa, Normal, 30 dərəcədən yüksək olarsa İsti sözü yazılsın.
```

x = int(input('Havanin temperaturu nece derecedir?'))
if x <10:
    print('Soyuq')
elif x==20:
    print('Normal')
else : 
    print('Isti')
```

### 6) 'Proqramlaşdırma' sözündə 'x' hərfinin olub-olmamasının yoxlayın
```
z = "Proqramlaşdırma"

print('x' in z)
```
### 7)İki dənə string tipində dəyişkən yaradıb onları başqa bir string dəyərdə birləşdirib saxlayın və həmin string dəyəri ekrana yazdırın
```
deyer1='buyurun'
deyer2='xos gelmisiniz'

deyer3='Salam' + deyer1 + deyer2
print(deyer3)
```