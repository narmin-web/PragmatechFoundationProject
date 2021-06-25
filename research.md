*Week08-Day01 [21 Iyun 2021]*

### Transistor nədir və necə işləyir?
 > elektrik siqnallarını gücləndirmək ,dəyişdirmək üçün istifadə olunan dovre elementidir.Transiztorun birinci funksiyasi acarlamadir, digeri ise elektrik siqnallarin guclendirmekdir.Baza kollektor emitter adlanan hisselerden ibaretdir.Bazadan daxil olan enerji axini kollectordan emittere yaxud eksine gedir transiztor bu axina nezaret edir.

[ istinad](https://elektrikinfo.com/transistor-nedir/)
[ istinad](https://www.youtube.com/watch?v=7ukDKVHnac4)
[istinad](https://www.youtube.com/watch?v=-XHRu54mnbc&t=39s)

### 10luq say sistemindəki bir ədədi 2lik say sisteminə necə çevirə bilərik?
 > Onluq say sistemindən ikilik say sisteminə keçmək üçün ədədi ikiyə bölmək və qalığı qeyd etmək lazımdır. Sonra aldığımız cavabı yenidən ikiyə bölüb qalığı qeyd edirik.Sonda sağdan sola ardıcıl olaraq qalıqları yazırıq.Məsələn 26 rəqəminin onluq say sistemindən ikilik say sisteminə keçid edilməsi 26=11010

 [istinad](https://www.youtube.com/watch?v=teTrhghcORA)

### 2-lik say sistemindəki bir ədədi 10-luq say sisteminə necə çevirə bilərik?
> İkilik  say sistemindən onluq say sisteminə keçmək üçün ədədi sağdan sola sıfırdan başlayıb ardıcıl nömrələmək , sonra ədədin hər bir rəqəmini ikinin uyğun qüvvətinə vurmaq və alınan cavabları toplamaq lazımdır.Ədədlərin üzərində 0 olanda 1-ə bərabər olur.Ədədlərin üzərində 1 olanda elə həmin ədədin özünə bərabər olur Ədədin üzərində neçə yazılırsa o ədədi özü-özünə o qədər dəfə vurmaq lazımdır.Məsələn 11001 ikilik say sistemindən 10luq say sisteminə keçidi 25ə bərabər olacaqdır.












*Week08-Day02 [22 Iyun 2021]*

### 1) interpreter dillər necə işləyir
> Qaynaq kodu setir-setir cevirerek icra edir.

### 2) compiler dillər necə işləyir
> Yuksek seviyeli dilde yazilan proqrami masin diline ve ya basqa dile cevirir.Qaynaq koddaki datani emal ederek obyekt koda oturur oradan da emeliyyat sistemine.

### 3)qaynaq kod (source code) nədir
> her hansi proqrami yaradarken istifade etdiyimiz kodlar butunudur.Meselen her hansi yemeyin resepti o yemeyin qaynaq kodudur ;) 

[istinad](https://www.youtube.com/watch?v=5JsIfKwJsPY)

### 4)python qaynaq kodu necə maşın dilinə tərcümə edir?
> 
### 5)İnterpreter dillər və compiler dillər arasında fərqlər nələrdir?
> Compiler dil qaynaq kodu birdefeye masin diline cevirir.Interpreter diller ise setir-setir .Compiler interpretere gore bir az suretlidir.

[istinad](https://www.youtube.com/watch?v=am7vyHCDU14)

### 6)Python və Javascript arasında oxşar və fərqli cəhətlər nələrdir?
> javascript dinamik web sayt ve istifadeci interfeysi yaratmaq ucun istifade olunan proqramlasdirma dilidir,Python ise muxtelilf sahelerde istifade edilir.mes suni zeka , data analiz ve s.JavaScript bir saytın front end hissəsini işlətmək üçün istifadə edilir, ancaq Python server tərəfini idarə etmək üçün istifadə edilə bilər.

[istinad](https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/)

### 7)VS Code-da Python kodu yazabilmək üçün lazımlı extentionlar hansılardır?
> Python Microsoft terefinden yaradilan extensionu ,Python Indent , Bracket Pair Colorizer , Code Runner ve s.

[istinad](https://www.youtube.com/watch?v=UczGcbqNqUM)

 ### 8) Yeni fayl yaradmaq üçün hansı komandadan istifadə edirik?
> touch faylin adi 

### 9)Faylı silmək üçün lazimlı komanda hansıdır?
> rm faylin adi

### 10)Yeni folder yaratmaq, folder silmək, folderin içərisinə daxil olmaq üçün lazımlı komandalar hansılardır?
> mkdir folder adi  (make direction) folder yaratmaq
> m -r folder adi  folderi silmek 
> cd komandi ile folderin incerisine kecid etmek olur

[istinad](https://medium.com/@emrekacan/temel-terminal-komutlar%C4%B1-fe08d7c54bc5)



### str,int,bool data tipləri üzərində müqaise operatorlarının analizi
 str,int,bool arasinda comparison operatorlarin istifadesi
 bool=int -> icaze verilmir ona gore ki  ferqli data tipidir
 str=str -> icaze verilir cunki eyni data tipidir
 str!=bool -> icaze verilir ferqli data tipi olmasina baxmayaraq bir birine beraber deyil deye icaze verilir
 bool<bool -> icaze verilmir cunki eyni data tipidir ve bir-birinden boyuk ola bilmez
 int<=int -> normal riyazi emeliyat aparir cunki integerler bir-birine beraberdir


> a='yazi'
b=9
c=True
print(c==b)
print(a==a)
print(a!=c)
print(c<c)
print(b<=b)

[istinad](https://www.w3schools.com/python/python_operators.asp)