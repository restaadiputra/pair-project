# pair-project-phase-1

# Bisnis Proses Aplikasi Lelang

## USER

- **User** mempunyai atribut *role*, *name*, *username*, *password*, *email*
- **User** dibagi menjadi 2 yaitu **Admin** dan **Bidder**
- Bidder dapat membuat sebuah **Article** lelang
- Bidder dapat melihat seluruh **Article** lelang yang dibuat oleh Bidder lain
- Bidder dapat menghentikan waktu lelang dan memberi alasan berhenti
- Bidder dapat melelang lebih dari satu **Auction**



## ARTICLE

- Article mempunyai atribut *title*, *description*, *userId*,
- Satu Article bisa ditaruh di **Auction** berkali-kali dengan syarat hanya per satu periode



## AUCTION(lelang)

- Auction mempunyai atribut *ArticleId*, *price*, *time*, *status*
- Satu *Action* bisa dilelang oleh lebih dari satu **Bidder**
- Bila waktu pada **Auction** habis, maka secara otomatis, sistem akan mencari pelelang paling tinggi
- Ada 2 kemungkinan hasil lelang, *Tidak ada pelelang* atau *Ada pelelang*
- Bila *tidak ada pelelang*, kirim pesan pada *pemilik* artikel
- BIla *ada pelelang*, kirim pesan pada *pemilik* dan *pelelang*