# Atelier Nocté Website (Quick Guide)

This is a ready-to-deploy website for Atelier Nocté.

## Cara Cepat Deploy (dari HP/PC)

1. **Upload ZIP ke GitHub**
   - Buka https://github.com di browser HP/PC.
   - Login akun GitHub (buat baru jika belum punya).
   - Klik tombol `New Repository` → beri nama `ateliernocte`.
   - Upload semua file dari ZIP ini (bisa drag & drop lewat browser).

2. **Deploy ke Vercel**
   - Buka https://vercel.com → Login dengan akun GitHub.
   - Klik `New Project` → pilih repo `ateliernocte`.
   - Vercel otomatis mengenali Next.js → langsung klik `Deploy`.
   - Tunggu ±1 menit, website aktif di domain `https://ateliernocte.vercel.app`.

3. **Custom Domain (opsional)**
   - Jika punya domain (mis: ateliernocte.com), masuk ke dashboard Vercel → Settings → Domains.
   - Tambahkan domain, ikuti instruksi DNS.

4. **Edit Produk / Gambar**
   - Ganti gambar di folder `/public` (hero-nocte.jpg, product-tee-1.jpg, dll).
   - Edit data produk di file `pages/index.js` bagian `SAMPLE_PRODUCTS`.

## Selesai!
Sekarang website bisa dibuka publik di internet.
