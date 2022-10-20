# Akbank React Bootcamp Bitirme Projesi
 
## Server'ın Ayağa Kalkabilmesi İçin Gereksinimler
1. navigate to server-side
2. <code>npm install</code>
3. <code>docker-compose up --build</code>

## Projeyi Çalıştırmak İçin
1. <code>npm install && npm start</code>


#### Kimlik Doğrulama
* JWT Auth ile local storage yardımıyla kimlik doğrulanmıştır.

#### Veri Yönetmek İçin Kullanılan Yöntem
* React Context API.

#### Kullanılan Teknolojiler
- ReactJS
- Mui
- Axios
- ReactStrap
- React-Beautiful-DnD

# Introduction
- Bu projede bir Kanban Board uygulaması geliştirilmesi hedeflenmiştir.
- Projeye giriş yapan kullanıcı eğer bir hesaba sahipse giriş yapabilecek değilse de kolayca yeni bir hesap oluşturabilecektir.
- Yeni bir board oluşturulduğunda ilgili kişiye ait sayfaya yönlendirilecektir.
- Yönlendirilen sayfada list ekleme,card ekleme işlemleri gerçekleşmektedir.
- Card ve Liste güncellenebilir bir yapıdadır.Gerçekleşen güncellemeler API aracılığıyla veritabanında da değerler değiştirilebilmektedir.

# Projenin Çalışan Özellikleri
- Kullanıcı Giriş ve Kayıt işlemlerinin yapılabilmesi,
- Kullanıcıya ait boardların listelenmesi ve yeni board oluşturulabilmesi,
- İlgili board'a ait sayfaya gidilerek yeni liste cardların oluşturulabilmesi,
- Oluşturulan cardlara özellikler atanabilmesi ve bunların gösterilmesi,
- Card'a atanan özelliklerin modal aracılığıyla editlenebilmesi ve backend tarafında da güncellenebilmesi,
- List ve cardların drag-drop yapılabilmesi gerçekleştirilmiştir.

# Eksik ve Sorunu Olan Gereksinimler
- Oluşturulan yeni board'un isimlendirme isteğinde sıkıntılar yaşanabilmektedir.
- Listler sayfa yenilendiği zaman bazen geç gelebilmektedir.Bu durumda chrome üzerinden ileri-geri yaparak sorun çözülmektedir.
- Güncellenen Card'ın görüntülenmesi için sayfanın yenilenmesi gerekmektedir.
- Card'a ait olan comment,checklist,label ve kullanıcıların çark iconunda listelenme görevi tamamlanamamıştır. 

# Projeye Ait Ekran Görüntüleri

![LoginPage](https://user-images.githubusercontent.com/44654527/197049331-cfe92f25-6608-46c6-9b81-be4f645dc820.png)
![registerpage](https://user-images.githubusercontent.com/44654527/197049042-0124c089-8a76-41fd-b2b3-fc73e3206ad2.png)
![BoardPage](https://user-images.githubusercontent.com/44654527/197048345-d7242452-0b80-4ed1-a334-7c08faf3cf8a.png)
![Listpage](https://user-images.githubusercontent.com/44654527/197048986-e6dc8fdd-ee44-4563-ad90-135744c4a067.png)
![Editmodal](https://user-images.githubusercontent.com/44654527/197049018-353c2609-ed9a-4743-8c99-4e8fadf9e506.png)

