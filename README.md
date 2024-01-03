<h1 align="center"><bold></bold>Sistem Inventaris Barang - UAS Pemrograman Internet</bold></h1>

Assalamualaikum Warahmatullahi Wabarakatuh,

<p align="justify">Saya, Rhisma Syahrul Putra (NIM: 2207225), mahasiswa Program Studi Pendidikan Ilmu Komputer A, Universitas Pendidikan Indonesia, sedang menjalani semester 3. Repository ini telah saya buat sebagai bagian dari tugas Ujian Akhir Semester (UAS) mata kuliah Pemrograman Internet, yang diampu oleh Bapak Erlangga, S.Kom., M.T.</p>
  
<p align="justify">Dalam proyek ini, saya fokus pada pengembangan Sistem Inventaris Barang sederhana dengan menggunakan teknologi:
React Js untuk bagian Frontend,Golang untuk Backend,dan MySQL sebagai basis data. Pilihan ini didasarkan pada NIM ganjil yang saya miliki.</p>

## **Fitur Utama:**

- React Js (Vite js) + bootstrap Frontend: Tampilan antarmuka yang user-friendly.
- Golang Backend: Server yang handal untuk mengelola logika bisnis dan interaksi dengan database.
- MySQL Database: Penyimpanan data dari web.

## **Tujuan Proyek:**

<p align="justify">Proyek ini bertujuan untuk mengimplementasikan pengetahuan yang telah saya peroleh selama semester ini dalam mata kuliah Pemrograman Internet. Dengan menggabungkan teknologi-teknologi tersebut, saya berharap dapat menciptakan sebuah sistem inventaris yang efektif dan efisien.</p>

<p align="justify">Terima kasih kepada Bapak Erlangga atas bimbingan dan kesempatan ini. Saya berharap proyek ini dapat menjadi bukti kemajuan saya dalam memahami dan mengimplementasikan konsep-konsep pemrograman internet.</p>

## Update

### 1. Modal Confirmation

Menambahkan fitur modal konfirmasi untuk bagian delete item

### 2. Button Navigate

Menambahkan beberapa button untuk mengoptimalkan navigasi antar halaman

### 3. SearchBar By Name (Under Development)

Membuat search bar untuk bisa melakukan search terhadap item di database berdasarkan name

## How To Use
> [!WARNING]
> You should follow the instructions given.

1. **Download MySQL table and import it into phpMyAdmin.**
   
   1. **Create Database in phpMyAdmin**
      
       ```terminal
       CREATE DATABASE db_2207225_rhismasyahrulputra_uas
       ```
   3. **Import Table in phpMyAdmin**
      
<br>
3. **Download the Backend and Frontend folders.**

   ### For Backend folder
   ```terminal
   cd backed
   ```

   1. **Install modules:**
      
      - [gorilla/mux](https://github.com/gorilla/mux)
        
        ```terminal
        go install github.com/gorilla/mux
        ```
      - [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql)
        
        ```terminal
        go install github.com/go-sql-driver/mysql
        ```

   3. **Initialize the backend folder.**
        ```terminal
        go init backend
        ```
   4. **Run the backend.**
        ```terminal
        go run main.go
        ```

   ### For Frontend folder
   ```terminal
   cd frontend
   ```

   1. **Download the frontend folder:**
      
        - In the terminal, run:
          
        ```terminal
        npm install
        ```
   3. **Run the frontend.**
        ```terminal
        npm run dev
        ```

5. **Enjoy the Code.**
<br>

---

Jika Anda memiliki pertanyaan atau masukan silakan hubungi saya melalui:<br>
[Email](mailto:rhismasyahrulputra11@gmail.com)<br>
[Instagram](https://www.instagram.com/huangfeihong__/)<br>
[Linkedin](https://www.linkedin.com/in/rhisma-syahrul-putra/)
<br>

Terima kasih atas perhatian Anda.
