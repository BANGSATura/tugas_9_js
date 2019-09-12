function fungsi(){
  var mobil = {
      type: "sedan",
      warna: "merah",
      harga: 200000000,
  }
  for (x in mobil) {
    console.log(x,":",mobil[x]);
  }
}
fungsi()
