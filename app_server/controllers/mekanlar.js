var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
	footer: "Muhammed Mesud Karakayalı ",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "İncikçi Ali Usta",
        adres: "Devlet Bahçeli Caddesi",
        puan: "5",
        imkanlar: ["Tavuk", "kola", "Pilav"],
        mesafe: "5km",
      },
      {
        ad: "Antre Gurme",
        adres: "Centrum Garden",
        puan: "2",
        imkanlar: ["Yemek", "Tatlı", "İçecek"],
        mesafe: "10km",
      },
      {
        ad: "Mesud Çay Bahçesi",
        adres: "Valilik Yanı",
        puan: "2",
        imkanlar: ["Çay", "Kahve","Açık Hava", "Muhabbet"],
        mesafe: "8km",
      },
      {
        ad: "Küfefe Diyarı",
        adres: "Modernevler",
        puan: "5",
        imkanlar: [ "Tatlı", "İçecek"],
        mesafe: "12km",
      },
	   {
        ad: "Lion Cafe",
        adres: "Fatih Mahallesi",
        puan: "5",
        imkanlar: ["Müzik", "Nargile", "İçecek"],
        mesafe: "14km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer: "Muhammed Mesud Karakayalı",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: "3",
      imkanlar: ["kahve", "çay", "pasta"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },
	  
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "7:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9:00",
          kapanis: "22:30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Muhammed Mesud Karakayalı",
          puan: "5",
          tarih: "12 kasım 2020",
          yorumMetni: "Güler yüzlü bir kadro",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};
