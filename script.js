// ========================================
// DATA CONFIGURATION (LENGKAP & FIXED)
// ========================================

const CONFIG = {
    tooltips: {
        main: "Tentukan DNA konten lu. Mindset jualan (hard/soft sell) sangat berbeda dengan murni edukasi (branding).",
        goal: "Setiap konten yang bagus cuma boleh punya SATU nyawa/fokus utama. Jangan maruk. Pilih satu action paling krusial yang lu pengen audiens lakukan.",
        platform: "Setiap sosmed punya 'budaya' dan rentang perhatian (attention span) yang beda. Script TikTok butuh hook super cepat, LinkedIn butuh formal.",
        role: "Ini soal sudut pandang (Angle). Cara ngomong seorang Founder pasti beda banget rasanya sama gaya ngomong Affiliate. Pilih peran lu agar AI bisa meniru tone suaranya.",
        persona: "Ini adalah kemasan visual atau vibe konten lu nantinya. Apakah lu mau tampil formal (Expert), ngobrol santai (UGC), atau tanpa muka (Faceless)?"
    },
    
    // DATA UNTUK MODAL JUALAN
    jualan: {
        goals: [
            "Sales / Closing (Langsung jualan / hard selling)",
            "Traffic ke Landing Page (Giring audiens klik link web/LP)",
            "Klik Link Affiliate (Arahkan audiens klik link di bio / keranjang)",
            "Lead Generation (Kumpulkan kontak WA / Email / Form)",
            "Promo / Flash Sale (Ciptakan urgensi & FOMO)",
            "Booking Konsultasi / Jadwal (Cocok untuk jasa medis, desain, B2B)",
            "Registrasi Event / Webinar (Kumpulkan peserta online/offline)",
            "App Install (Arahkan untuk download aplikasi)",
            "Retargeting (Ingatkan audiens yang sudah pernah berinteraksi)",
            "Lainnya (Isi Manual)"
        ],
        platforms: [
            "TikTok / IG Reels / YT Shorts (Video vertikal cepat & visual)",
            "Shopee Video / Tokopedia Play (Format live/video commerce)",
            "IG / FB Story (Video 15 detik, urgensi tinggi)",
            "Facebook / IG Ads (Format iklan berbayar)",
            "YouTube Video (Format panjang, review mendalam)",
            "LinkedIn (Formal, target B2B / korporat)",
            "Twitter / X (Thread jualan / soft selling teks)",
            "Pinterest (Pencarian visual & estetika)",
            "Email Marketing (Subject line & isi newsletter jualan)",
            "Lainnya (Isi Manual)"
        ],
        roles: [
            "Advertiser / Business Owner (Pemilik bisnis langsung)",
            "Affiliate Marketer (Mempromosikan produk orang lain)",
            "Dropshipper / Reseller (Menjual ulang produk)",
            "Sales / Agen (Properti, asuransi, otomotif, dll)",
            "Service Provider / Freelancer (Menawarkan jasa keahlian)",
            "Agency / Media Buyer (Mengelola campaign klien)",
            "Lainnya (Isi Manual)"
        ],
        personas: [
            "The Founder / Owner (Cerita jujur di balik brand)",
            "UGC Creator (Sok akrab, gaya racun sosmed, natural)",
            "Karyawan / Admin / Tim (A day in my life admin, tim packing)",
            "Expert / Mentor (Berwibawa, edukasi produk secara teknis)",
            "Customer Testimonial (Bukti sosial, review jujur)",
            "POV (Point of View) (Membawa audiens ke sudut pandang spesifik)",
            "Product Showcase / Faceless (Fokus murni ke keindahan/fungsi barang)",
            "Lainnya (Isi Manual)"
        ]
    },

    // DATA UNTUK MODAL EDUKASI
    edukasi: {
        goals: [
            "Awareness / Viral (Jangkauan luas, konten yang mudah di-share)",
            "Edukasi / Value Delivery (Berikan informasi berbobot / 'daging')",
            "Engagement (Pancing likes, comments, saves, dan interaksi)",
            "Trust & Authority Building (Bangun kredibilitas sebagai ahli)",
            "Community Building (Ajak audiens masuk grup WA/Telegram/Discord)",
            "Brand Recall (Tetap top of mind di ingatan audiens)",
            "Klarifikasi / Public Relations (Manajemen krisis, merespons isu)",
            "Lainnya (Isi Manual)"
        ],
        platforms: [
            "TikTok / IG Reels / YT Shorts (Edukasi fast-paced, tips singkat)",
            "Instagram Feed / Carousel (Edukasi visual geser)",
            "YouTube Video (Deep dive, penjelasan materi panjang)",
            "LinkedIn (Edukasi karir, bisnis, thought leadership)",
            "Twitter / X / Threads (Opini, micro-blogging teks)",
            "Podcast (Spotify / Apple) (Format audio, obrolan mendalam)",
            "Email Newsletter (Tulisan personal & edukasi rutin)",
            "Pinterest (Infografis, quotes, inspirasi visual)",
            "Lainnya (Isi Manual)"
        ],
        roles: [
            "Content Creator / Influencer (Kreator independen)",
            "Industry Expert / Mentor (Spesialis di bidang tertentu)",
            "Corporate / Official Brand (Suara resmi institusi/perusahaan)",
            "Thought Leader (Tokoh opini, pendobrak industri)",
            "Community Manager (Penggerak komunitas)",
            "Hobbyist / Enthusiast (Bukan expert, tapi antusias sharing)",
            "Lainnya (Isi Manual)"
        ],
        personas: [
            "The Storyteller (Naratif, emosional, menceritakan pengalaman)",
            "The Educator (Formal, terstruktur, langsung ke poin materi)",
            "Case Study Presenter (Bedah data, analisis kasus viral/sukses)",
            "Vlog Style (A day in my life sambil menyisipkan value)",
            "Interviewer / Podcast Host (Format tanya-jawab / dialog)",
            "React / Commentary (Merespons video viral / berita terbaru)",
            "Motion Graphic / Animation (Penjelasan visual tanpa wajah)",
            "Lainnya (Isi Manual)"
        ]
    },

    // DATA UNTUK SECTION 2
    section2: {
        tooltips: {
            header: "Di sini kita ngebentuk 'fisik' dari konten lu. AI akan menyesuaikan panjang naskah, ritme baca, dan ngasih arahan visual sesuai pilihan lu di bawah ini.",
            jenisKonten: "Mau dibungkus kayak gimana pesan lu? Soft selling butuh naskah yang halus, sementara Ads butuh copy yang punchy dan agresif.",
            formatDurasi: "Durasi menentukan jumlah kata. Video 15 detik cuma butuh sekitar 30-40 kata, kalau kepanjangan nanti Voice Over-nya balapan.",
            gayaVisual: "Ini ngasih tahu AI untuk nulis arahan adegan (scene direction). Kalau lu pilih Green Screen, AI bakal nulis instruksi 'Tunjuk gambar di background'."
        },
        jenisKonten: {
            jualan: [
                "Konten Ads Berbayar (Direct Response)",
                "Affiliate Review / Honest Review",
                "Komparasi / Versus (Produk A vs B)",
                "Soft Selling / Edu-Selling",
                "Hard Selling / Promo / Flash Sale",
                "Unboxing & First Impression",
                "Testimonial / Case Study Klien",
                "Product Launch / Teaser",
                "Behind The Scenes (BTS) Bisnis",
                "Lainnya (Isi Manual)"
            ],
            edukasi: [
                "Listicle / Top X (Misal: 3 Cara, 5 Tools)",
                "Mitos vs Fakta / Debunking",
                "Edu-Content / Tutorial / How-To",
                "Organik Harian / Vlog / Day in Life",
                "Trend Jacking / React Video",
                "Thought Leadership / Opini Tajam",
                "Q&A / Balas Komen Audiens",
                "Case Study / Bedah Kasus",
                "Inspirational / Motivasi",
                "Lainnya (Isi Manual)"
            ]
        },
        formatDurasi: [
            "Video Super Short (< 15 detik)",
            "Video Short (15–30 detik)",
            "Video Medium (30–60 detik)",
            "Video Long-form (1–3 menit)",
            "Video YouTube / Podcast (> 5 menit)",
            "Live Streaming Outline / Script",
            "Carousel / Microblog (5–10 Slide)",
            "Story Sequence (3–5 Frame)",
            "Single Image / Foto Statis + Caption Panjang",
            "Teks / Thread (Khusus X/LinkedIn/Email)",
            "Lainnya (Isi Manual)"
        ],
        gayaVisual: [
            "Talking Head (Wajah Full)",
            "POV (Sudut Pandang Orang Pertama)",
            "Faceless / Stock Footage Aesthetic",
            "Text on Screen + Trending Audio",
            "Podcast / Desk Setup",
            "Green Screen / Screencast",
            "B-Roll / Cinematic Focus",
            "Skit / Drama Pendek / Komedi",
            "Split Screen / Before-After",
            "ASMR / Satisfying",
            "Whiteboard / Motion Graphic",
            "Auto (Biar AI yang merekomendasikan)",
            "Lainnya (Isi Manual)"
        ]
    },

    // DATA UNTUK SECTION 3
    section3: {
        tooltips: {
            header: "Ini adalah otak dari script lu. Strategi di section ini adalah hasil racikan murni dari ilmu yang gua pelajari di SYCA (Start Your Content Academy) dipaduin sama pengalaman praktik gua sendiri di lapangan. Ingat rumus HSC: Headline (Curi perhatian) ➡️ Storytelling (Bikin relate/konflik) ➡️ CTA (Ajak action). Kombinasi Hook yang kuat dan Framework yang tepat adalah kuncinya!",
            // PERBAIKAN: Tambah koma di atas ^ dan hapus kurung kurawal berlebih di bawah
            frameworkJualan: `
                <strong>🌟 TOP 5 PALING GACOR (JUALAN):</strong><br>
                <strong>RTER:</strong> (Relate, Trust, Engage, Repeat). Autentik, jujur, nggak kelihatan ngiklan.<br>
                <strong>PAS:</strong> Sebutin masalah ➡️ Bikin makin galau ➡️ Kasih produkmu sebagai penyelamat.<br>
                <strong>BAB:</strong> Tunjukin kondisi suram sebelum pakai ➡️ Kondisi enak setelah pakai ➡️ Jelasin produkmu.<br>
                <strong>HSO:</strong> Berhenti scroll di 3 detik pertama ➡️ Ceritain fakta/pengalaman ➡️ Langsung jualan di akhir.<br>
                <strong>FAB:</strong> Jelasin spek produk ➡️ Apa bedanya sama yang lain ➡️ Manfaat nyata buat pembeli.<br><br>
                <strong>📚 PILIHAN LAINNYA:</strong><br>
                <strong>AIDCA:</strong> Bikin kepo ➡️ Bikin tertarik ➡️ Kasih bukti ➡️ Suruh beli.<br>
                <strong>4P:</strong> Kasih janji ➡️ Suruh bayangin enaknya ➡️ Kasih testimoni ➡️ Dorong beli.<br>
                <strong>SLAP:</strong> Bikin berhenti scroll kaget ➡️ Suruh perhatiin ➡️ Bikin penasaran ➡️ Kasih tombol beli.<br>
                <strong>PASTOR:</strong> Sebut masalah ➡️ Makin parah ➡️ Cerita pengalaman ➡️ Tunjukin perubahan ➡️ Promo.<br>
                <strong>3 Reason Why:</strong> Sebutin 3 alasan utama kenapa mereka rugi kalau nggak beli.<br>
                <strong>Stop-Fear-Listen:</strong> Bikin audiens sadar ada bahaya, lalu suruh dengerin solusinya.
            `,
            frameworkEdukasi: `
                <strong>🌟 TOP 5 PALING GACOR (EDUKASI):</strong><br>
                <strong>RTER:</strong> (Relate, Trust, Engage, Repeat). Pendekatan organik & libatkan opini audiens.<br>
                <strong>PCS:</strong> Sebutin masalah ➡️ Kasih tau penyebab aslinya ➡️ Kasih cara praktis mengatasinya.<br>
                <strong>ABT:</strong> Sebutin fakta ➡️ "Tapi" ada masalah tersembunyi ➡️ "Makanya" ini solusinya.<br>
                <strong>QUEST:</strong> Sapa audiens spesifik ➡️ Tunjukin empati ➡️ Kasih edukasi/tips ➡️ Kesimpulan.<br>
                <strong>StoryBrand:</strong> Posisikan audiens sebagai pemeran utama, kamu sebagai pemandunya.<br><br>
                <strong>📚 PILIHAN LAINNYA:</strong><br>
                <strong>Hero's Journey:</strong> Ceritain proses dari titik terendah sampai nemu jalan keluar.<br>
                <strong>Awareness Ladder:</strong> Giring orang yang nggak peduli jadi sadar butuh.<br>
                <strong>JTBD:</strong> Bahas hasil akhir yang bisa diselesaikan, bukan produk/layanan.<br>
                <strong>Failed-Growth-Success:</strong> Curhat gagal, nemu rahasia, lalu sukses.<br>
                <strong>Solution-Impact-Problem:</strong> Kasih liat hasil enaknya dulu, baru ceritain susahnya kalau nggak pakai cara ini.<br>
                <strong>Feature-Solution-Impact:</strong> Sebut fakta ➡️ Kasih solusi praktis ➡️ Tunjukin perasaan lega.
            `,
            hooks: `
                <strong>🔥 A. PANCINGAN EMOSI & HASRAT:</strong><br>
                <strong>Gain Tanpa Pain:</strong> Hasil instan tanpa pengorbanan. Contoh: "Cara dapet [Hasil] tanpa [Sakit]".<br>
                <strong>Senggol Pain Point:</strong> Menyerang ketakutan/frustrasi audiens.<br>
                <strong>Warning:</strong> Mengingatkan ancaman/kesalahan fatal.<br>
                <strong>Achieve the Goal:</strong> Memancing hasrat terdalam (jual impian).<br>
                <strong>Validation:</strong> Menyerang sisi emosional & memberi rasa senasib.<br><br>
                
                <strong>🧠 B. PANCINGAN LOGIKA & BUKTI:</strong><br>
                <strong>Curiosity Gap:</strong> Memancing rasa penasaran tingkat tinggi (Bongkar Rahasia).<br>
                <strong>Instan Hack:</strong> Memberikan jalan pintas dengan angka spesifik.<br>
                <strong>Social Proof:</strong> Meminjam kredibilitas orang lain.<br>
                <strong>Statistik:</strong> Menggunakan data nyata untuk tarik perhatian logis.<br>
                <strong>Urgency:</strong> Dorong action cepat karena keterbatasan.<br><br>

                <strong>🎬 C. INTERAKSI & TREN VISUAL:</strong><br>
                <strong>POV:</strong> Membawa audiens ke sudut pandang relate.<br>
                <strong>Unpopular Opinion:</strong> Memancing perdebatan dan komen.<br>
                <strong>Direct Question:</strong> Pertanyaan tajam bikin auto-jawab di hati.<br>
                <strong>Flashback:</strong> Memancing kenangan masa lalu.<br>
                <strong>Pattern Interrupt:</strong> Gerakan/visual aneh di 1 detik pertama.<br>
                <strong>Story Hook:</strong> Langsung masuk ke tengah konflik cerita.
            `
        },
        // Framework dibagi per tipe
        frameworks: {
            jualan: {
                top: [
                    "RTER (Gen Z Soft-Sell)",
                    "PAS (Senggol Masalah & Solusi)",
                    "BAB (Sebelum vs Sesudah)",
                    "HSO (Hook, Cerita, Jualan)",
                    "FAB (Fitur, Keunggulan, Manfaat)"
                ],
                others: [
                    "AIDCA (Curi Perhatian sampai Beli)",
                    "4P (Janji & Bukti Nyata)",
                    "SLAP (Bikin Kaget & Beli)",
                    "PASTOR (Masalah, Cerita, Promo)",
                    "3 Reason Why (3 Alasan Beli)",
                    "Stop-Fear-Listen (Takut & Dengerin)",
                    "Lainnya (Isi Manual)"
                ]
            },
            edukasi: {
                top: [
                    "RTER (Gen Z Community)",
                    "PCS (Problem, Cause, Solution)",
                    "ABT (Fakta, Tapi, Makanya)",
                    "QUEST (Sapa & Edukasi)",
                    "StoryBrand (Audiens = Pahlawan)"
                ],
                others: [
                    "Hero's Journey (Kisah Perjuangan)",
                    "Awareness Ladder (Edukasi Bertahap)",
                    "JTBD (Fokus 'Tugas' Produk)",
                    "Failed-Growth-Success (Gagal & Sukses)",
                    "Solution-Impact-Problem (Hasil Dulu)",
                    "Feature-Solution-Impact (Logis ke Emosi)",
                    "Lainnya (Isi Manual)"
                ]
            }
        },
        // Hook Strategy (Universal dengan Kategori)
        hooks: {
            emosi: [
                "Gain Tanpa Pain (Hasil Max, Usaha Min)",
                "Senggol Pain Point / Fear",
                "Warning / Kesalahan Fatal",
                "Achieve the Goal / Jual Impian",
                "Validation / Empathy"
            ],
            logika: [
                "Curiosity Gap / Bongkar Rahasia",
                "Instan Hack / Specific Number",
                "Social Proof / Fakta Keberhasilan",
                "Statistik / Data",
                "Urgency / Keterbatasan"
            ],
            interaksi: [
                "POV (Point of View)",
                "Unpopular Opinion",
                "Direct Question (Tanya Langsung)",
                "Flashback / Nostalgia",
                "Pattern Interrupt (Visual/Audio)",
                "Story Hook (In Media Res)",
                "Lainnya (Isi Manual)"
            ]
        }
    },
    // DATA UNTUK SECTION 4
    section4: {
        tooltips: {
            header: "Konten yang ngomong ke semua orang sama dengan nggak ngomong ke siapa-siapa. Di section ini, kita kasih 'nyawa' ke AI biar dia ngerti siapa lawan bicaranya, apa ketakutan terbesarnya, dan batasan aturan main/compliance-nya.",
            awareness: `
                <strong>Auto (Biar AI yang tentukan):</strong> Pilih ini kalau lo bingung. AI akan menganalisis level kesadaran audiens berdasarkan topik/produk lo.<br><br>
                <strong>Unaware:</strong> Masih cuek, belum sadar kalau mereka punya masalah yang harus diselesaikan.<br><br>
                <strong>Problem Aware:</strong> Mulai pusing, sadar ada masalah, dan mulai nyari-nyari tau.<br><br>
                <strong>Solution Aware:</strong> Udah tau solusinya (misal: butuh diet), tapi lagi milih-milih cara atau produk yang pas.<br><br>
                <strong>Product Aware:</strong> Udah tau produk/jasa lo, tapi belum yakin beli karena masih ragu atau ngebandingin sama kompetitor.<br><br>
                <strong>Most Aware:</strong> Udah ngebet pengen beli, cuma butuh dorongan promo, diskon, atau urgensi aja.
            `,
            psychographics: `
                <strong>Auto (Biar AI yang tentukan):</strong> AI akan memilih psikologi yang paling pas dengan produk/topik lo.<br><br>
                <strong>Insecure / Glow-Up Seeker:</strong> Punya rasa kurang percaya diri terhadap fisik/status, butuh validasi, dan pengen bertransformasi.<br><br>
                <strong>Pain-Averse (Cari Aman):</strong> Paling takut rugi, takut salah pilih, butuh garansi & trust tinggi.<br><br>
                <strong>Status Seeker / Flexing:</strong> Ingin terlihat kaya, pintar, keren, atau eksklusif di mata orang lain.<br><br>
                <strong>Skeptic / Kritis:</strong> Nggak gampang percaya janji manis, butuh bukti klinis, fakta, dan data logis.<br><br>
                <strong>Trend Follower / FOMO:</strong> Gampang tergoda tren, takut ketinggalan jaman, impulsif, dan ikut-ikutan.<br><br>
                <strong>Value Seeker (Mendang-Mending):</strong> Cari yang paling murah, hemat, atau untungnya paling banyak.<br><br>
                <strong>Time-Starved / Sibuk:</strong> Nggak punya banyak waktu, butuh solusi yang instan, praktis, dan anti-ribet.<br><br>
                <strong>Aesthetic / Visual Driven:</strong> Peduli banget sama desain, keindahan, packaging, dan "looks" (Cocok buat fashion/home decor).<br><br>
                <strong>Community / Fandom Seeker:</strong> Bertindak karena ingin merasa jadi bagian dari kelompok (K-popers, Anak Motor, dll).<br><br>
                <strong>Eco-Conscious / Sustainable:</strong> Peduli isu lingkungan, keberlanjutan, dan bahan organik.<br><br>
                <strong>Tech Savvy / Early Adopter:</strong> Suka ngoprek, melek teknologi, dan seneng nyobain gadget/fitur baru.<br><br>
                <strong>Family Oriented:</strong> Apapun keputusannya, pertimbangan utamanya adalah demi anak atau keluarga.
            `,
            targetMarket: "Pilih segmentasi spesifik yang paling relevan dengan produk atau topik yang dibahas.",
            compliance: `
                <strong>General / Aman Bebas:</strong> Tidak ada larangan khusus, AI bebas menggunakan gaya bahasa agresif.<br><br>
                <strong>Beauty / Skincare (Soft Claim):</strong> Menghindari kata "memutihkan instan", diganti "mencerahkan bertahap" biar lolos review.<br><br>
                <strong>Health / Medical (No Overclaim):</strong> Menghindari janji medis berlebihan (menyembuhkan 100%) agar akun tidak kena shadowban.<br><br>
                <strong>Mom & Baby / Kids:</strong> Sangat ketat di sosmed. AI akan menghindari bahasa eksploitasi atau yang membahayakan anak.<br><br>
                <strong>Make Money Online / Bisnis:</strong> Dilarang keras menjanjikan "Cepat Kaya" atau garansi income pasti. AI akan memperhalus bahasanya.<br><br>
                <strong>Crypto / Trading:</strong> Rawan pembatasan platform. AI wajib pakai disclaimer risiko finansial tinggi.<br><br>
                <strong>Financial / Investment:</strong> AI akan menambahkan disclaimer risiko dan tidak menjanjikan kepastian return.<br><br>
                <strong>Food & Beverage:</strong> Fokus pada kehalalan, kebersihan, rasa, atau bahan sehat.<br><br>
                <strong>Real Estate / Properti:</strong> Menghindari janji legal/investasi properti yang tidak realistis.
            `
        },
        awareness: [
            "Auto (Biar AI yang tentukan)",
            "Unaware",
            "Problem Aware",
            "Solution Aware",
            "Product Aware",
            "Most Aware"
        ],
        psychographics: [
            "Auto (Biar AI yang tentukan)",
            "Insecure / Glow-Up Seeker",
            "Pain-Averse (Cari Aman)",
            "Status Seeker / Flexing",
            "Skeptic / Kritis",
            "Trend Follower / FOMO",
            "Value Seeker (Mendang-Mending)",
            "Time-Starved / Sibuk",
            "Aesthetic / Visual Driven",
            "Community / Fandom Seeker",
            "Eco-Conscious / Sustainable",
            "Tech Savvy / Early Adopter",
            "Family Oriented",
            "Lainnya (Isi Manual)"
        ],
        targetMarket: {
            b2c: { 
                label: 'A. B2C / Consumer & Lifestyle', 
                options: [
                    "Beauty & Fashion Enthusiast",
                    "Foodies / Pecinta Kuliner",
                    "Gamers & E-sports",
                    "Health & Fitness",
                    "Travel & Leisure",
                    "Otomotif Enthusiast"
                ] 
            },
            demographics: { 
                label: 'B. Demographics / General', 
                options: [
                    "Ibu Rumah Tangga / Moms",
                    "Mahasiswa / Pelajar",
                    "Fresh Graduate / Job Seeker",
                    "Karyawan Swasta / Budak Korporat",
                    "Umum (General Audience)"
                ] 
            },
            business: { 
                label: 'C. Business & Commerce', 
                options: [
                    "Business Owner (UMKM / Brand Lokal)",
                    "Founder Startup",
                    "Seller Marketplace (Shopee/Tokped)",
                    "Reseller / Dropshipper",
                    "Distributor / Grosir"
                ] 
            },
            creator: { 
                label: 'D. Creator Economy / Education', 
                options: [
                    "Content Creator / Affiliate",
                    "Influencer (Nano/Micro)",
                    "Coach / Mentor / Trainer"
                ] 
            },
            marketing: { 
                label: 'E. Marketing & Ads', 
                options: [
                    "Advertiser (FB/TikTok Ads)",
                    "Performance Marketer / Media Buyer",
                    "Digital Marketing Manager",
                    "Agency / Content Strategist"
                ] 
            }
        },
        compliance: [
            "General / Aman Bebas",
            "Beauty / Skincare (Soft Claim)",
            "Health / Medical (No Overclaim)",
            "Mom & Baby / Kids",
            "Make Money Online / Bisnis",
            "Crypto / Trading",
            "Financial / Investment",
            "Food & Beverage",
            "Real Estate / Properti",
            "Lainnya (Isi Manual)"
        ]
    },

        // DATA UNTUK SECTION 5
    section5: {
        tooltips: {
            header: "Ini adalah amunisi utama lu. Semakin spesifik lu menjabarkan detail di sini, semakin tajam peluru script yang akan ditembakkan oleh AI. Punya catatan mentah atau copy-paste materi? Masukin aja di bagian Referensi!",
            // Jualan
            referensi: "Males ngetik panjang? Copas aja teks deskripsi asli produk dari toko sebelah, catatan spesifikasi, atau ketik curhatan ide mentah lu di sini. AI bakal otomatis mengekstrak info pentingnya buat lu!",
            painPoint: "Apa masalah paling menyebalkan yang dialami audiens sebelum pakai produk lu? (Contoh: 'Udah diet ketat tapi BB stuck').",
            solusi: "Apa hasil akhir atau transformasi nyata yang lu janjikan ke mereka? (Contoh: 'Turun 3kg dalam 2 minggu tanpa nyiksa lambung').",
            usp: "Kenapa harus beli dari lu, bukan dari toko sebelah? (Contoh: 'Satu-satunya yang pakai bahan organik bersertifikat BPOM').",
            harga: "Kalau mau hard-selling, masukin harga normal & diskon biar AI bikin efek FOMO. Tapi kalau mau soft-selling, lu cukup ketik instruksi kayak: 'Bilang aja harganya terjangkau' atau 'Arahin langsung cek keranjang kuning tanpa nyebut nominal'.",
            asetVisualJualan: "Kasih tau AI lu punya alat tempur apa aja buat di depan kamera. AI akan menyesuaikan arahan adegannya biar lu gampang pas shooting.",
            // Edukasi
            kategoriNiche: "Kasih tau AI lu main di kolam mana, biar kalau lu lagi buntu ide, AI tau harus nyari bahan ke mana.",
            topikUtama: "Udah punya ide? Tulis di sini. Kalau lagi buntu (Creator's Block), KOSONGIN AJA! AI akan meriset topik paling relevan & viral buat audiens lu.",
            bahanMateri: "Punya copas-an artikel berita, rangkuman PDF, jurnal, atau ide acak yang masih berantakan? Paste teksnya di sini! AI akan mengubahnya jadi script video yang terstruktur.",
            keresahan: "Kalau lu tau spesifik apa kebingungan followers lu, tulis di sini. Kalau kosong, AI bakal otomatis nyari pain point atau pertanyaan terbesar dari target audiens lu.",
            insight: "Punya pesan moral atau teori spesifik yang mau disampein? Tulis! Kalau kosong, AI bakal bikinin poin-poin edukasi yang solid dan berbobot buat lu.",
            sudutPandang: "Punya opini yang beda dari orang kebanyakan (Unpopular Opinion)? Tulis di sini biar script lu nggak pasaran.",
            asetVisualEdukasi: "Punya bahan visual apa untuk nunjukin data di video? AI akan ngasih instruksi kapan gambar itu harus dimunculin di layar.",
            // Universal
            seoKeyword: "Masukkan 1-3 kata kunci pencarian yang sering diketik audiens. AI akan menyelipkannya secara natural ke dalam naskah dan caption agar konten lu gampang masuk FYP jalur pencarian (SEO)."
        },
        jualan: {
            jenisProduk: {
                digital: { label: 'A. Digital Product', options: ["Ebook/Template", "Mini Course/Video", "Toolkit/Asset", "Membership/Komunitas", "Bundle/Paket"] },
                service: { label: 'B. Service / Jasa', options: ["Agency/Freelance", "Konsultasi 1:1", "Done-For-You", "Audit/Review", "Maintenance/Retainer"] },
                physical: { label: 'C. Physical / Commerce', options: ["Skincare/Beauty", "Fashion/Apparel", "Food & Beverage", "Kesehatan/Wellness", "Home & Living", "Gadget/Aksesoris", "Affiliate Product / TikTok Shop"] },
                software: { label: 'D. Software', options: ["SaaS / Aplikasi / Tools"] },
                education: { label: 'E. Education', options: ["Kursus/Coaching", "Bootcamp/Intensif", "Workshop"] },
                event: { label: 'F. Event & Social', options: ["Event/Webinar", "Event Offline", "Fundraising/Donasi"] },
                lainnya: { label: 'G. Lainnya', options: ["Lainnya (Isi Manual)"] }
            },
            cta: [
                "Cek Keranjang Kuning",
                "Klik Link di Bio",
                "Beli Sekarang",
                "DM / Chat Sekarang",
                "Komen 'MAU' / 'INFO' (Mancing Algoritma)",
                "Daftar Sekarang",
                "Klik Link Sticker (IG Stories)",
                "Start Free Trial / Download",
                "Lainnya (Isi Manual)"
            ]
        },
        edukasi: {
            kategoriNiche: [
                "Bisnis & Finansial",
                "Self-Development & Motivasi",
                "Kesehatan & Fitness",
                "Teknologi & Gadget",
                "Edukasi Akademik",
                "Lifestyle & Hobi",
                "Pop Culture & Entertainment",
                "Lainnya (Isi Manual)"
            ],
            cta: [
                "Follow & Save",
                "Share ke teman kamu yang butuh ini",
                "Komen pendapat/pengalamanmu di bawah",
                "Klik Link di Bio (Join Grup/Download Gratisan)",
                "Tonton video selanjutnya (Part 2)",
                "Lainnya (Isi Manual)"
            ]
        },
        universal: {
            gayaBahasa: [
                "Santai & Relatable (Sok kenal)",
                "Edukatif & Profesional (Guru)",
                "Urgent & Direct (Agresif)",
                "Gen-Z / Anak Jaksel (Gaul)",
                "Witty & Humorous (Lucu)",
                "Empathetic (Empati)",
                "Minimalist (Singkat & Padat)",
                "Bold & Kontroversial (Berani)",
                "Storytelling (Naratif)",
                "Lainnya (Isi Manual)"
            ]
        }
    },

        // DATA UNTUK SECTION 6
    section6: {
        tooltips: {
            header: "A/B Testing adalah kunci konten viral! Semakin banyak variasi yang lo minta, AI akan merombak Hook (pancingan) dan Angle (sudut pandang) naskahnya agar lo punya banyak pilihan untuk ngetes mana yang paling gacor di algoritma.",
            variationInfo: `
                <strong>1 Script (Fokus & Presisi):</strong><br>
                AI akan fokus memberikan satu naskah terbaik dengan instruksi adegan dan intonasi yang paling mendalam sesuai pilihan gaya visual lo.<br><br>
                
                <strong>2 Script (A/B Testing Hook):</strong><br>
                Dapatkan 2 naskah dengan Hook (3 detik pertama) yang beda total. Fokusnya adalah ngetes mana pancingan yang paling ampuh buat nahan orang biar nggak scroll.<br><br>
                
                <strong>3 Script (Variasi Hook + Angle Cerita):</strong><br>
                The Sweet Spot! AI bakal bikin 3 naskah dengan sudut pandang berbeda (misal: satu versi edukatif, satu versi curhat, satu versi to-the-point) agar konten lo nggak ngebosenin.<br><br>
                
                <strong>5 Script (Produksi Massal / Batch Shooting):</strong><br>
                Produksi massal! AI bakal bikin 5 naskah unik sekaligus dari satu topik yang sama. Cocok buat lo yang mau shooting borongan untuk stok konten seminggu penuh.
            `
        },
        variations: [
            "1 Script (Fokus & Presisi)",
            "2 Script (A/B Testing Hook)",
            "3 Script (Variasi Hook + Angle Cerita)",
            "5 Script (Produksi Massal / Batch Shooting)"
        ]
    }

};

// ========================================
// PROMPT DICTIONARY (Instruksi Mendalam untuk AI)
// ========================================
const PROMPT_DICTIONARY = {
    frameworks: {
        // ===== FRAMEWORK JUALAN =====
        "RTER (Gen Z Soft-Sell)": `Gunakan struktur RTER yang halus:
1. RELATE: Buka dengan masalah/opini yang sangat relate dengan keseharian audiens. Gunakan kalimat empati (Contoh: "Lo pasti ngerasain kan...").
2. TRUST: Bangun kepercayaan dengan cerita personal/pengalaman asli, bukan klaim kosong. Tunjukkan sisi rapuh manusiawi.
3. ENGAGE: Libatkan audiens dengan fakta menarik atau solusi yang bikin mereka mikir "Oh iya bener".
4. REPEAT: CTA yang halus, jangan terkesan ngiklan. Ajak aja, jangan maksa. (Contoh: "Coba deh cek di bio...").`,
        
        "PAS (Senggol Masalah & Solusi)": `Gunakan struktur PAS yang menusuk:
1. PROBLEM: Senggol langsung masalah utama audiens di kalimat pertama. Jangan basa-basi.
2. AGITATE: Bikin masalah itu terasa makin parah, makin bikin pusing, makin urgent. "Udah gitu malah tambah parah karena..."
3. SOLUTION: HADIRKAN produk sebagai JALAN KELUAR yang paling gampang dan logis. Fokus ke manfaat instan.`,
        
        "BAB (Sebelum vs Sesudah)": `Gunakan struktur BAB yang kontras:
1. BEFORE: Deskripsikan kondisi suram/sebelum pakai produk. Buat audiens merasain susahnya.
2. AFTER: Tunjukin kondisi enak/setelah pakai produk. Buat audiens iri sama hasilnya.
3. BRIDGE: Jelasin produk sebagai JEMBATAN penghubung antara Before dan After.`,
        
        "HSO (Hook, Cerita, Jualan)": `Gunakan struktur HSO yang lugas:
1. HOOK: Pancing perhatian di 3 detik pertama dengan kalimat controversial atau shocking.
2. STORY: Ceritakan pengalaman atau konteks yang membangun kredibilitas.
3. OFFER: Langsung tawarkan produk dengan jelas di akhir. Jangan muter-muter.`,
        
        "FAB (Fitur, Keunggulan, Manfaat)": `Gunakan struktur FAB yang logis:
1. FEATURE: Sebutin fitur utama produk secara spesifik.
2. ADVANTAGE: Jelasin keunggulan fitur itu dibanding kompetitor.
3. BENEFIT: Ubah jadi manfaat nyata buat audiens (apakah hemat waktu? hemat uang? bikin cantik?).`,

        // ===== FRAMEWORK EDUKASI =====
        "PCS (Problem, Cause, Solution)": `Gunakan struktur PCS yang sistematis:
1. PROBLEM: Sebutin masalah yang sering dialami audiens.
2. CAUSE: Jelasin penyebab akarnya (sering kali audiens salah kaprah).
3. SOLUTION: Kasih cara praktis mengatasinya.`,

        "ABT (Fakta, Tapi, Makanya)": `Gunakan struktur ABT yang engaging:
1. FACT: Sebutin fakta atau kondisi umum.
2. BUT: Gunakan "Tapi" untuk membalik situasi atau nunjukkin masalah tersembunyi.
3. THEREFORE: Gunakan "Makanya" untuk kasih solusi atau kesimpulan.`,

        "QUEST (Sapa & Edukasi)": `Gunakan struktur QUEST yang interaktif:
1. QUALIFY: Sapa audiens spesifik (siapa yang relevan dengan topik ini).
2. UNDERSTAND: Tunjukin kalau lu ngerti perasaan mereka (empati).
3. EDUCATE: Kasih edukasi atau tips solusi.
4. TRANSITION: Alihkan ke kesimpulan atau CTA.`,

        "StoryBrand (Audiens = Pahlawan)": `Gunakan struktur StoryBrand:
Posisikan audiens sebagai TOKOH UTAMA yang punya masalah.
Lu (brand) adalah PANDUAN (Yoda/Gandalf) yang ngasih solusi.
Alurnya: Masalah -> Pertemuan dengan Panduan -> Solusi -> Sukses.`
    },
    
    hooks: {
        // ===== EMOSI & HASRAT =====
        "Gain Tanpa Pain (Hasil Max, Usaha Min)": `Hook Formula: Tawarkan hasil maksimal dengan usaha minimal.
Contoh polah kalimat: "Cara dapet [Hasil Impian] tanpa [Hal yang Disukai Audiens]."
Buat terdengar terlalu bagus jadi kenyataan, tapi tetap logis.`,

        "Senggol Pain Point / Fear": `Hook Formula: Sentuh ketakutan/frustrasi terdalam audiens secara langsung.
Gunakan kalimat yang bikin mereka bilang "Iya bener, gue gitu!".
Contoh: "Masih [kondisi menyebalkan] sampai sekarang?"`,

        "Warning / Kesalahan Fatal": `Hook Formula: Ingatkan audiens tentang bahaya atau kesalahan fatal.
Buat sense of urgency. Gunakan kata "Jangan", "Hati-hati", atau "Salah kaprah".
Contoh: "Berhenti lakukan ini kalau mau [hasil yang diinginkan]."`,
        
        "Achieve the Goal / Jual Impian": `Hook Formula: Langsung tunjukkan hasil akhir yang diidamkan.
Visualisasikan kondisi sukses mereka.
Contoh: "Bayangin kalau [kondisi sukses] bisa lo capai dalam [waktu singkat]."`,

        // ===== LOGIKA & BUKTI =====
        "Curiosity Gap / Bongkar Rahasia": `Hook Formula: Bikin audiens penasaran dengan menyembunyikan informasi.
Gunakan phrase seperti: "Rahasia yang...", "Hal yang orang nggak tau tentang...", "Gue bakal bongkar...".`,

        "Instan Hack / Specific Number": `Hook Formula: Berikan jalan pintas dengan angka spesifik.
Orang suka angka karena terkesan ilmiah dan terukur.
Contoh: "3 langkah gampang buat...", "Hack 5 menit biar..."`,

        "Social Proof / Fakta Keberhasilan": `Hook Formula: Pinjam kredibilitas orang lain.
Sebut nama brand, tokoh, atau jumlah pengguna.
Contoh: "Ini alasan 10.000 orang sudah beralih ke..."`,

        // ===== INTERAKSI =====
        "POV (Point of View)": `Hook Formula: Bawa audiens masuk ke sudut pandang spesifik.
Gunakan kata "POV:" di awal atau langsung deskripsikan situasi.
Contoh: "POV: Lo lagi [kondisi relate]."`,
        
        "Unpopular Opinion": `Hook Formula: Keluarkan pendapat yang melawan arus.
Buat audiens penasaran dan ingin berdebat.
Contoh: "Menurut gue, [pendapat kontroversial]."`,

        "Direct Question (Tanya Langsung)": `Hook Formula: Ajukan pertanyaan langsung yang bikin audiens menjawab di hati.
Gunakan kata "Kalian pernah...", "Siapa yang...".
Contoh: "Siapa yang sering [kondisi relate]?"`
    }
};

// ========================================
// STATE MANAGEMENT
// ========================================
let appState = {
    masterFilter: null, // 'jualan' atau 'edukasi'
    goal: null,
    platform: null,
    role: null,
    persona: null,
    jenisKonten: null,
    formatDurasi: null,
    gayaVisual: null,
    framework: null,
    hook: null,
    levelAwareness: null,
    psychographics: null,
    targetMarket: null,
    compliance: null,
    // Tambahan untuk Section 5
    namaProduk: null,
    jenisProduk: null,
    referensiMateri: null,
    painPoint: null,
    solusiUtama: null,
    uniqueValue: null,
    hargaPromo: null,
    asetVisual: null,
    ctaJualan: null,
    kategoriNiche: null,
    topikUtama: null,
    bahanMateri: null,
    keresahan: null,
    insightUtama: null,
    sudutPandang: null,
    leadMagnet: null,
    ctaEdukasi: null,
    targetKeyword: null,
    gayaBahasa: null,
    // Tambahan untuk Section 6
    jumlahVariasi: null
};

// ========================================
// LOGIC: MASTER FILTER (UPDATED)
// ========================================
function selectMasterFilter(type) {
    // 1. Reset State dan Update Master Filter
    appState = { masterFilter: type };
    
    // 2. Visual Toggle untuk Card
    document.querySelectorAll('.card-option').forEach(card => card.classList.remove('active'));
    document.getElementById(`card-${type}`).classList.add('active');

    // 3. Render Section 1
    renderDynamicForm(type);

    // 4. Render Section 2
    renderSection2();

    // 5. Render Section 3
    renderSection3();

    // 6. Render Section 4
    renderSection4();

    // 7. Render Section 5
    renderSection5();

    // 8. Render Section 6
    renderSection6();

    // 9. Render Tombol Final
    renderFinalAction();

    // DIHAPUS: Preview tidak lagi auto-update saat pilih filter
    // Preview hanya muncul setelah klik "Generate Script"
}

// ========================================
// RENDER DYNAMIC FORM (SECTION 1) - NO BUTTON
// ========================================
function renderDynamicForm(type) {
    const container = document.getElementById('dynamicFormContainer');
    const data = CONFIG[type]; 

    // Template Form HTML (Tanpa Tombol Next)
    let html = `
        <div class="animate-fadeInUp">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                ${createSelectField('goal', 'Tujuan Utama (Goal Akhir)', CONFIG.tooltips.goal, data.goals)}
                ${createSelectField('platform', 'Platform Target', CONFIG.tooltips.platform, data.platforms)}
                ${createSelectField('role', 'Role Pengguna (Siapa Anda?)', CONFIG.tooltips.role, data.roles)}
                ${createSelectField('persona', 'Avatar / Persona Konten', CONFIG.tooltips.persona, data.personas)}

            </div>
        </div>
    `;

    container.innerHTML = html;
    container.classList.remove('hidden');
}

// ========================================
// HELPER: BUAT SELECT FIELD (FINAL FIX)
// ========================================
function createSelectField(id, label, tooltipText, options, useModal = false) {
    let optionsHtml = '';

    // Proses Options
    if (Array.isArray(options)) {
        optionsHtml = options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
    } else {
        for (const key in options) {
            const group = options[key];
            if (group.label && group.options) {
                optionsHtml += `<optgroup label="${group.label}">`;
                optionsHtml += group.options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
                optionsHtml += `</optgroup>`;
            } else {
                optionsHtml += `<option value="${group}">${group}</option>`;
            }
        }
    }
    
    // Logika Tooltip vs Modal
    let infoElementHtml = '';

    if (useModal) {
        // FIX: Escape kutip dua DAN newline/enter
        // Newline di atribut HTML = parsing error!
        const escapedTooltip = tooltipText
            .replace(/"/g, '&quot;')
            .replace(/\n/g, ' ')      // Ganti newline jadi spasi
            .replace(/\r/g, '')       // Hapus carriage return
            .replace(/\s+/g, ' ')     // Multiple spasi jadi single spasi
            .trim();
            
        infoElementHtml = `
            <span class="info-icon-btn" 
                  data-modal-title="${label}" 
                  data-modal-content="${escapedTooltip}" 
                  onclick="triggerInfoModal(this)">?</span>
        `;
    } else {
        // Tooltip Hover Biasa
        infoElementHtml = `
            <div class="tooltip-container">
                <span class="tooltip-icon">?</span>
                <div class="tooltip-box">
                    <div class="tooltip-header">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Info</span>
                    </div>
                    <div class="tooltip-content">
                        ${tooltipText}
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="form-group">
            <label class="form-label">
                ${label}
                ${infoElementHtml}
            </label>
            <select id="input-${id}" class="custom-select" onchange="handleInputChange('${id}', this.value)">
                <option value="" disabled selected>Pilih salah satu...</option>
                ${optionsHtml}
            </select>
            <div id="manual-${id}" class="hidden mt-2">
                <input type="text" class="manual-input" placeholder="Tulis manual di sini..." oninput="appState.${id} = this.value">
            </div>
        </div>
    `;
}

// ========================================
// LOGIC: HANDLE INPUT CHANGE
// ========================================
function handleInputChange(fieldId, value) {
    const safeValue = value || '';
    const isManual = safeValue.toLowerCase().includes('lainnya') || safeValue.toLowerCase().includes('manual');
    const manualContainer = document.getElementById(`manual-${fieldId}`);

    if (isManual && manualContainer) {
        manualContainer.classList.remove('hidden');
        const inputEl = manualContainer.querySelector('input');
        if (inputEl) inputEl.focus();
        appState[fieldId] = ""; 
    } else {
        if (manualContainer) manualContainer.classList.add('hidden');
        appState[fieldId] = value; 
    }
    
    // Update progress bar setiap ada perubahan
    updateProgressBar();
}

// ========================================
// NEXT STEP HANDLER (Updated)
// ========================================
function proceedToStep2() {
    // Validasi Section 1
    if (!appState.masterFilter || !appState.goal || !appState.platform || !appState.role || !appState.persona) {
        alert("⚠️ Pastikan semua kolom di Section 1 sudah terisi ya!");
        return;
    }

    // 1. Sembunyikan Section 1 (Opsional: biar bersih, atau biarkan terbuka)
    // Disini kita biarkan terbuka tapi kita scroll ke Section 2
    
    // 2. Render Section 2
    renderSection2();
}

function renderSection2() {
    const container = document.getElementById('section2Container');
    const data = CONFIG.section2; // Pindahkan ke atas untuk akses mudah
    const type = appState.masterFilter; 
    
    // Logika untuk menentukan opsi Jenis Konten
    let jenisKontenOptions = [];
    let jenisKontenDisabled = false;
    
    if (type) {
        // Jika sudah pilih filter (Jualan/Edukasi), ambil opsinya
        jenisKontenOptions = data.jenisKonten[type];
    } else {
        // Jika belum pilih, tampilkan placeholder
        jenisKontenOptions = ["Pilih 'Jualan' atau 'Edukasi' di Section 1 dulu..."];
        jenisKontenDisabled = true;
    }

    const html = `
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 animate-fadeInUp">
            
            <!-- Header Section 2 -->
            <div class="flex items-center gap-3 mb-6">
                <div class="section-number">2</div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-xl font-bold text-slate-900">Spesifikasi Konten</h3>
                        <!-- Tooltip Utama Section 2 -->
                        <div class="tooltip-container">
                            <span class="tooltip-icon">?</span>
                            <div class="tooltip-box">
                                <div class="tooltip-header">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>Info</span>
                                </div>
                                <div class="tooltip-content">
                                    ${data.tooltips.header}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400">Tentukan format dan gaya visual</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                <!-- 1. Jenis Konten (Dinamis) -->
                <div class="form-group">
                    <label class="form-label">Jenis Konten</label>
                    <select id="input-jenisKonten" class="custom-select" onchange="handleInputChange('jenisKonten', this.value)" ${jenisKontenDisabled ? 'disabled' : ''}>
                        <option value="" disabled selected>${jenisKontenDisabled ? 'Pilih tipe konten di Section 1 dulu' : 'Pilih salah satu...'}</option>
                        ${!jenisKontenDisabled ? jenisKontenOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('') : ''}
                    </select>
                </div>

                <!-- 2. Format & Durasi (Universal) -->
                ${createSelectField('formatDurasi', 'Format & Durasi', data.tooltips.formatDurasi, data.formatDurasi)}

                <!-- 3. Gaya Visual -->
                <div class="md:col-span-2 md:grid md:grid-cols-2 md:gap-x-8">
                    ${createSelectField('gayaVisual', 'Gaya Visual / Shooting', data.tooltips.gayaVisual, data.gayaVisual)}
                    <div></div> 
                </div>

            </div>

        </div>
    `;

    container.innerHTML = html;
    container.classList.remove('hidden');
}

// ========================================
// RENDER SECTION 3 (STRATEGI COPYWRITING)
// ========================================
function renderSection3() {
    const container = document.getElementById('section3Container');
    
    // PERUBAHAN: Hapus return, ganti dengan cek kondisi
    const type = appState.masterFilter; 
    
    // Jika belum pilih filter, tampilkan UI kosong/disable
    if (!type) {
        container.innerHTML = `
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 animate-fadeInUp">
                 <div class="flex items-center gap-3 mb-6">
                    <div class="section-number">3</div>
                    <div><h3 class="text-xl font-bold text-slate-900">Strategi Copywriting</h3></div>
                </div>
                <p class="text-slate-400 text-center py-10">Silakan pilih tipe konten di Section 1 untuk membuka opsi strategi.</p>
            </div>`;
        container.classList.remove('hidden');
        return;
    }

    const data = CONFIG.section3;
    const frameworkData = data.frameworks[type];

    // Tentukan tooltip Framework berdasarkan tipe (Jualan/Edukasi)
    const frameworkTooltipText = type === 'jualan' 
        ? data.tooltips.frameworkJualan 
        : data.tooltips.frameworkEdukasi;

    // Format Label Group
    const topLabel = type === 'jualan' 
        ? '🌟 TOP 5 PALING GACOR (JUALAN)' 
        : '🌟 TOP 5 PALING GACOR (EDUKASI)';
    const otherLabel = type === 'jualan' 
        ? '📚 PILIHAN LAINNYA (JUALAN)' 
        : '📚 PILIHAN LAINNYA (EDUKASI)';

    const html = `
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 animate-fadeInUp">
            
            <!-- Header Section 3 -->
            <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg font-bold text-slate-600">3</div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-xl font-bold text-slate-900">Strategi Copywriting</h3>
                        <!-- Tooltip Header Section 3 (Masih pakai tooltip hover karena singkat) -->
                        <div class="tooltip-container">
                            <span class="tooltip-icon">?</span>
                            <div class="tooltip-box">
                                <div class="tooltip-header">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>Info</span>
                                </div>
                                <div class="tooltip-content">
                                    ${data.tooltips.header}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400">Pilih framework dan hook pembuka</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                <!-- 1. Framework Copywriting -->
                <!-- PERUBAHAN: Param ke-5 diisi 'true' untuk aktifkan Modal -->
                ${createSelectField('framework', 'Framework Copywriting', frameworkTooltipText, {
                    top: { label: topLabel, options: frameworkData.top },
                    others: { label: otherLabel, options: frameworkData.others }
                }, true)}

                <!-- 2. Hook Strategy -->
                <!-- PERUBAHAN: Param ke-5 diisi 'true' untuk aktifkan Modal -->
                ${createSelectField('hook', 'Hook Strategy / Pembuka', data.tooltips.hooks, {
                    emosi: { label: '🔥 A. PANCINGAN EMOSI & HASRAT', options: data.hooks.emosi },
                    logika: { label: '🧠 B. PANCINGAN LOGIKA, RAHASIA & BUKTI', options: data.hooks.logika },
                    interaksi: { label: '🎬 C. PANCINGAN INTERAKSI & TREN VISUAL', options: data.hooks.interaksi }
                }, true)}

            </div>
        </div>
    `;

    container.innerHTML = html;
    container.classList.remove('hidden');
}

// ========================================
// RENDER SECTION 4 (TARGET AUDIENCE)
// ========================================
function renderSection4() {
    const container = document.getElementById('section4Container');
    
    // PERUBAHAN: Section 4 bersifat universal, jadi bisa langsung muncul
    // Hapus baris: if (!appState.masterFilter) return;

    const data = CONFIG.section4;

    const html = `
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 animate-fadeInUp">
            
            <!-- Header Section 4 -->
            <div class="flex items-center gap-3 mb-6">
                <div class="section-number">4</div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-xl font-bold text-slate-900">Target Audience</h3>
                        <!-- Tooltip Utama Section 4 -->
                        <div class="tooltip-container">
                            <span class="tooltip-icon">?</span>
                            <div class="tooltip-box">
                                <div class="tooltip-header">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>Info</span>
                                </div>
                                <div class="tooltip-content">
                                    ${data.tooltips.header}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400">Definisikan siapa audiensmu</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                <!-- 1. Level Awareness -->
                ${createSelectField('levelAwareness', 'Level Awareness', data.tooltips.awareness, data.awareness, true)}

                <!-- 2. Psychographics -->
                ${createSelectField('psychographics', 'Psychographics (Karakter Psikologi)', data.tooltips.psychographics, data.psychographics, true)}

                <!-- 3. Target Market (Dengan Optgroup) -->
                ${createSelectField('targetMarket', 'Target Market', data.tooltips.targetMarket, data.targetMarket)}

                <!-- 4. Compliance / Niche -->
                ${createSelectField('compliance', 'Compliance / Niche (Keamanan Akun)', data.tooltips.compliance, data.compliance, true)}

            </div>
        </div>
    `;

    container.innerHTML = html;
    container.classList.remove('hidden');
}

// ========================================
// HELPER: INPUT & TEXTAREA GENERATOR
// ========================================
function createInputField(id, label, placeholder, tooltipText = '', isRequired = false) {
    const requiredMark = isRequired ? '<span class="text-red-500 ml-1">*</span>' : '';
    const tooltipHtml = tooltipText ? `
        <div class="tooltip-container">
            <span class="tooltip-icon">?</span>
            <div class="tooltip-box">
                <div class="tooltip-header">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Info</span>
                </div>
                <div class="tooltip-content">${tooltipText}</div>
            </div>
        </div>` : '';

    return `
        <div class="form-group">
            <label class="form-label">
                ${label}${requiredMark}
                ${tooltipHtml}
            </label>
            <input type="text" id="input-${id}" class="input-text-field" placeholder="${placeholder}" oninput="handleTextInput('${id}', this.value)">
        </div>
    `;
}

function createTextArea(id, label, placeholder, tooltipText = '', isRequired = false) {
    const requiredMark = isRequired ? '<span class="text-red-500 ml-1">*</span>' : '';
    const tooltipHtml = tooltipText ? `
        <div class="tooltip-container">
            <span class="tooltip-icon">?</span>
            <div class="tooltip-box">
                <div class="tooltip-header">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Info</span>
                </div>
                <div class="tooltip-content">${tooltipText}</div>
            </div>
        </div>` : '';

    return `
        <div class="form-group md:col-span-2">
            <label class="form-label">
                ${label}${requiredMark}
                ${tooltipHtml}
            </label>
            <textarea id="input-${id}" class="input-text-field" placeholder="${placeholder}" oninput="handleTextInput('${id}', this.value)"></textarea>
        </div>
    `;
}

// Handler khusus untuk Input Text/Area
function handleTextInput(id, value) {
    appState[id] = value;
    // Update progress bar setiap ada perubahan
    updateProgressBar();
}

// ========================================
// RENDER SECTION 5 (DETAIL PRODUK / KONTEKS)
// ========================================
function renderSection5() {
    const container = document.getElementById('section5Container');
    
    // PERUBAHAN: Tampilkan UI "Waiting" jika belum pilih filter
    const type = appState.masterFilter;

    if (!type) {
        container.innerHTML = `
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 animate-fadeInUp">
                 <div class="flex items-center gap-3 mb-6">
                    <div class="section-number">5</div>                  
                    <div><h3 class="text-xl font-bold text-slate-900">Detail Produk & Konteks</h3></div>
                </div>
                <p class="text-slate-400 text-center py-10">Silakan pilih tipe konten di Section 1 untuk membuka form detail.</p>
            </div>`;
        container.classList.remove('hidden');
        return;
    }

    const data = CONFIG.section5;
    
    let specificFieldsHtml = '';

    // RENDER BERDASARKAN TIPE (JUALAN / EDUKASI)
    if (type === 'jualan') {
        const jualanData = data.jualan;
        
        specificFieldsHtml = `
            <!-- 1. Nama Produk -->
            ${createInputField('namaProduk', 'Nama Produk / Jasa', 'Contoh: Masterclass Meta Ads / Serum Anti-Aging X...', '', true)}
            
            <!-- 2. Jenis Produk -->
            ${createSelectField('jenisProduk', 'Jenis Produk', 'Pilih kategori produk yang paling sesuai.', jualanData.jenisProduk)}

            <!-- 3. Referensi Materi -->
            ${createTextArea('referensiMateri', 'Referensi Materi / Draft Mentah', 'Paste deskripsi produk dari supplier, atau ketik ide/catatan berantakan lu di sini...', data.tooltips.referensi)}

            <!-- 4. Pain Point -->
            ${createTextArea('painPoint', 'Masalah Utama / Pain Point', 'Kosongin kalau lu udah masukin referensi lengkap di atas...', data.tooltips.painPoint, true)}

            <!-- 5. Solusi Utama -->
            ${createTextArea('solusiUtama', 'Solusi Utama / Main Benefit', 'Kosongin kalau lu udah masukin referensi lengkap di atas...', data.tooltips.solusi, true)}

            <!-- 6. USP -->
            ${createTextArea('uniqueValue', 'Unique Value / Pembeda USP', 'Kosongin kalau lu udah masukin referensi lengkap di atas...', data.tooltips.usp, true)}

            <!-- 7. Harga -->
            ${createInputField('hargaPromo', 'Harga & Promo Saat Ini', 'Contoh: Rp99.000 (Atau ketik: Jangan sebut harga...)', data.tooltips.harga)}

            <!-- 8. Aset Visual -->
            ${createInputField('asetVisual', 'Aset Visual / Props yang Dimiliki', 'Contoh: Punya fisik produknya / Cuma foto dari Google...', data.tooltips.asetVisualJualan)}

            <!-- 9. CTA Jualan -->
            ${createSelectField('ctaJualan', 'Call to Action (CTA)', 'Pilih instruksi action yang paling sesuai dengan funnel lu.', jualanData.cta)}
        `;
    } else {
        // TIPE EDUKASI
        const edukasiData = data.edukasi;

        specificFieldsHtml = `
            <!-- 1. Kategori Niche -->
            ${createSelectField('kategoriNiche', 'Kategori Niche / Kolam Bahasan', data.tooltips.kategoriNiche, edukasiData.kategoriNiche)}

            <!-- 2. Topik Utama -->
            ${createInputField('topikUtama', 'Topik Utama Bahasan', 'Ketik topik lu, atau KOSONGIN biar AI yang cari ide...', data.tooltips.topikUtama)}

            <!-- 3. Bahan Materi -->
            ${createTextArea('bahanMateri', 'Bahan Materi / Draft Mentah', 'Paste teks artikel, jurnal, atau ketikan ide acak lu di sini...', data.tooltips.bahanMateri)}

            <!-- 4. Keresahan -->
            ${createTextArea('keresahan', 'Keresahan / Rasa Ingin Tahu Audiens', 'KOSONGIN kalau mau AI yang nentuin...', data.tooltips.keresahan)}

            <!-- 5. Insight Utama -->
            ${createTextArea('insightUtama', 'Insight / Pesan Utama / Main Value', 'KOSONGIN kalau mau AI yang nentuin daging materinya...', data.tooltips.insight)}

            <!-- 6. Sudut Pandang -->
            ${createTextArea('sudutPandang', 'Sudut Pandang Unik / Pembeda Opini', 'Contoh: Menurut gua, kerja keras aja nggak cukup...', data.tooltips.sudutPandang)}

            <!-- 7. Aset Visual -->
            ${createInputField('asetVisual', 'Aset Visual / Bukti Pendukung', 'Contoh: Screenshot berita / Grafik saham...', data.tooltips.asetVisualEdukasi)}

            <!-- 8. Lead Magnet -->
            ${createInputField('leadMagnet', 'Lead Magnet / Ajakan Gratis', 'Contoh: Join grup Telegram gratis di bio...')}

            <!-- 9. CTA Edukasi -->
            ${createSelectField('ctaEdukasi', 'Call to Action (CTA)', 'Pilih instruksi action untuk engagement.', edukasiData.cta)}
        `;
    }

    // UNIVERSAL FIELDS
    const universalHtml = `
        <div class="border-t border-slate-100 pt-8 mt-8">
            <h4 class="text-md font-bold text-slate-700 mb-6 flex items-center gap-2">
                <span class="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs">⚡</span>
                Pengaturan Universal
            </h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <!-- 10. SEO Keyword -->
                ${createInputField('targetKeyword', 'Target Keyword / SEO TikTok & IG', 'Contoh: rekomendasi skincare jerawat, cara lolos interview...', data.tooltips.seoKeyword)}

                <!-- 11. Gaya Bahasa -->
                ${createSelectField('gayaBahasa', 'Gaya Bahasa / Tone', 'Pilih tone suara yang paling cocok dengan personal branding lu.', data.universal.gayaBahasa)}
            </div>
        </div>
    `;

    // FINAL HTML
    const html = `
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 animate-fadeInUp">
            
            <!-- Header Section 5 -->
            <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg font-bold text-slate-600">5</div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-xl font-bold text-slate-900">Detail Produk & Konteks Konten</h3>
                        <div class="tooltip-container">
                            <span class="tooltip-icon">?</span>
                            <div class="tooltip-box">
                                <div class="tooltip-header">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>Info</span>
                                </div>
                                <div class="tooltip-content">
                                    ${data.tooltips.header}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400">Spesifikasikan detail materi atau produk</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                ${specificFieldsHtml}
            </div>

            ${universalHtml}
        </div>
    `;

    container.innerHTML = html;
    container.classList.remove('hidden');
}

// ========================================
// RENDER SECTION 6 (PENGATURAN OUTPUT)
// ========================================
function renderSection6() {
    const container = document.getElementById('section6Container');
    
    // PERUBAHAN: Section 6 bersifat universal, bisa langsung muncul
    // Hapus baris: if (!appState.masterFilter) return;

    const data = CONFIG.section6;

    const html = `
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 animate-fadeInUp">
            
            <!-- Header Section 6 -->
            <div class="flex items-center gap-3 mb-6">
                <div class="section-number">6</div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-xl font-bold text-slate-900">Pengaturan Output & Variasi</h3>
                        <!-- Tooltip Header Section 6 -->
                        <div class="tooltip-container">
                            <span class="tooltip-icon">?</span>
                            <div class="tooltip-box">
                                <div class="tooltip-header">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>Info</span>
                                </div>
                                <div class="tooltip-content">
                                    ${data.tooltips.header}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400">Tentukan jumlah variasi naskah yang dihasilkan</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                <!-- 1. Jumlah Variasi -->
                <!-- Gunakan Modal (param terakhir = true) karena penjelasan opsi panjang -->
                ${createSelectField('jumlahVariasi', 'Jumlah Variasi Script', data.tooltips.variationInfo, data.variations, true)}

            </div>
        </div>
    `;

    container.innerHTML = html;
    container.classList.remove('hidden');
}

// ========================================
// LOGIC: RESET FORM
// ========================================
function resetForm() {
    if(!confirm("Yakin mau reset semua? Data yang sudah diisi akan hilang.")) return;

    // 1. Reset State
    appState = {
        masterFilter: null, goal: null, platform: null, role: null, persona: null,
        jenisKonten: null, formatDurasi: null, gayaVisual: null, framework: null, hook: null,
        levelAwareness: null, psychographics: null, targetMarket: null, compliance: null,
        namaProduk: null, jenisProduk: null, referensiMateri: null, painPoint: null, solusiUtama: null,
        uniqueValue: null, hargaPromo: null, asetVisual: null, ctaJualan: null, kategoriNiche: null,
        topikUtama: null, bahanMateri: null, keresahan: null, insightUtama: null, sudutPandang: null,
        leadMagnet: null, ctaEdukasi: null, targetKeyword: null, gayaBahasa: null, jumlahVariasi: null
    };

    // 2. Hapus Active State Card
    document.querySelectorAll('.card-option').forEach(card => card.classList.remove('active'));

    // 3. Bersihkan isi container (Jangan sembunyikan, tapi kosongkan)
    // Kecuali Section 1 yang penting, kita reset dropdown/input di dalamnya via render ulang
    // Untuk simplicity, kita bisa render ulang section 1-6 dengan data kosong
    
    // Kosongkan konten dinamis
    const containers = ['dynamicFormContainer', 'section2Container', 'section3Container', 'section4Container', 'section5Container', 'section6Container'];
    containers.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.innerHTML = '';
    });

    // Reset Tombol Action
    renderFinalAction();

    // Reset Preview ke tampilan awal
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = `
        <div class="text-center text-slate-400 pt-20">
            <svg class="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <h3 class="font-bold text-lg text-slate-300">Preview Prompt</h3>
            <p class="text-sm mt-2">Hasil prompt akan muncul di sini secara real-time saat Anda mengisi form.</p>
        </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset progress bar
    updateProgressBar();
}


// ========================================
// LOGIC: UPDATE PREVIEW (HANYA DIPANGGIL SAAT GENERATE)
// ========================================
function updatePreview() {
    const container = document.getElementById('previewContainer');
    
    // Jika master filter belum dipilih, jangan tampilkan prompt
    if (!appState.masterFilter) {
        showPreviewPlaceholder(container);
        return;
    }

    // Generate teks prompt
    const promptText = generatePrompt();

    // Tampilan Mac Window
    const html = `
        <div class="mac-window">
            <!-- Header Mac Style -->
            <div class="mac-header">
                <div class="mac-dots">
                    <div class="mac-dot dot-red"></div>
                    <div class="mac-dot dot-yellow"></div>
                    <div class="mac-dot dot-green"></div>
                </div>
                <button onclick="copyPrompt()" class="copy-btn-top">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    <span>Salin Prompt</span>
                </button>
            </div>

            <!-- Body Prompt -->
            <div class="prompt-body-container">
                <div id="prompt-text-area" class="prompt-text-content"></div>
            </div>

            <!-- Footer Action -->
            <div class="action-btn-container">
                <button onclick="openChatGPT()" class="generate-btn-main">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Buat Script Konten Sekarang
                </button>
            </div>
        </div>
    `;

    container.innerHTML = html;
    
    // Jalankan animasi mengetik
    const promptArea = document.getElementById('prompt-text-area');
    if(promptArea) {
        typeWriter(promptText, promptArea, 5); // 5ms delay per karakter (cepat)
    }
}

// ========================================
// HELPER: ANIMASI MENGETIK (TYPEWRITER) + AUTO SCROLL
// ========================================
function typeWriter(text, element, delay = 1) {
    let i = 0;
    element.innerHTML = ''; // Clear previous content
    
    // Tambah cursor awal
    const cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    element.appendChild(cursor);

    // Dapatkan container parent untuk scroll
    const scrollContainer = element.closest('.prompt-body-container');

    function type() {
        if (i < text.length) {
            // Sisipkan karakter sebelum cursor
            const char = document.createTextNode(text.charAt(i));
            element.insertBefore(char, cursor);
            i++;
            
            // Auto scroll ke bawah mengikuti teks baru
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            }
            
            setTimeout(type, delay);
        }
    }
    type();
}

// ========================================
// HELPER: BUKA CHATGPT & COPY PROMPT
// ========================================
function openChatGPT() {
    const promptText = generatePrompt();
    
    // 1. Salin ke clipboard
    navigator.clipboard.writeText(promptText).then(() => {
        // 2. Buka ChatGPT di tab baru
        // Menggunakan parameter ?q= untuk auto-fill di beberapa versi web
        // Jika tidak support, user cukup paste (Ctrl+V)
        const encodedPrompt = encodeURIComponent(promptText);
        const chatGPTUrl = `https://chatgpt.com/?q=${encodedPrompt}`; 
        
        window.open(chatGPTUrl, '_blank');
        
        // Feedback user
        alert("✅ Prompt sudah disalin! Kamu akan diarahkan ke ChatGPT.\n\nPaste (Ctrl+V) jika prompt tidak muncul otomatis.");
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
        alert("Gagal menyalin prompt. Silakan salin manual.");
    });
}

// ========================================
// GENERATE SCRIPT HANDLER (FINAL)
// ========================================
function generateScript() {
    // Validasi input Section 2
    if (!appState.jenisKonten || !appState.formatDurasi || !appState.gayaVisual) {
        alert("⚠️ Lengkapi semua pilihan di Section 2 terlebih dahulu.");
        return;
    }

    // Validasi input Section 3
    if (!appState.framework || !appState.hook) {
        alert("⚠️ Lengkapi Framework dan Hook di Section 3 terlebih dahulu.");
        return;
    }

    // Validasi Section 4
    if (!appState.levelAwareness || !appState.psychographics || !appState.targetMarket || !appState.compliance) {
        alert("⚠️ Lengkapi semua pilihan Target Audience di Section 4.");
        return;
    }

    // Validasi input Section 5 (Dinamis)
    if (appState.masterFilter === 'jualan') {
        if (!appState.namaProduk || !appState.jenisProduk || !appState.painPoint || !appState.solusiUtama || !appState.uniqueValue || !appState.ctaJualan || !appState.gayaBahasa) {
            alert("⚠️ Lengkapi semua field wajib di Section 5 (Detail Produk Jualan).");
            return;
        }
    } else {
        if (!appState.kategoriNiche || !appState.ctaEdukasi || !appState.gayaBahasa) {
            alert("⚠️ Lengkapi Kategori Niche, CTA, dan Gaya Bahasa di Section 5.");
            return;
        }
    }

    // Validasi input Section 6
    if (!appState.jumlahVariasi) {
        alert("⚠️ Pilih jumlah variasi script di Section 6.");
        return;
    }
    
    // Jika semua valid, cukup update preview (atau bisa langsung copy)
    updatePreview();
    
    // Auto scroll ke preview di mobile
    // document.getElementById('previewContainer').scrollIntoView({ behavior: 'smooth' });
        
    // Langsung generate tanpa notifikasi
}

// ========================================
// PROMPT GENERATOR LOGIC (V6 - CRITICAL UPDATE)
// ========================================
function generatePrompt() {
    const s = appState; 
    const isJualan = s.masterFilter === 'jualan';

    const getVal = (val, fallback = "Tentukan sendiri yang relevan") => val || fallback;

    // ========================================
    // 1. CONDITIONAL LOGIC: TONE & PRONOUNS
    // ========================================
    let pronounRule = 'Gunakan kata ganti "Aku/Kamu" atau sapaan natural (Teman-teman).';
    let toneRule = 'Bahasa santai tapi tetap sopan, profesional tapi tidak kaku.';

    const tone = (s.gayaBahasa || '').toLowerCase();
    
    if (tone.includes('gen-z') || tone.includes('gaul') || tone.includes('santai') || tone.includes('witty')) {
        pronounRule = 'WAJIB gunakan kata ganti "Gue/Lo". HARAM PAKAI "Anda" atau "Kalian".';
        toneRule = 'Bahasa tongkrongan, ceplas-ceplos, singkat, langsung ke intinya, bisa menggunakan bahasa gaul Jakarta/Selatan.';
    } else if (tone.includes('profesional') || tone.includes('edukatif')) {
        pronounRule = 'Gunakan "Saya/Anda" (atau "Kita") dengan natural. Hindari "Gue/Lo" kecuali dalam konteks cerita.';
        toneRule = 'Bahasa berwibawa, meyakinkan, expert, tapi tetap HUMANIS (bukan bahasa makalah/tesis).';
    } else if (tone.includes('bold') || tone.includes('urgent')) {
        pronounRule = 'Gunakan "Gue/Lo" atau "Saya/Kamu" yang tegas dan langsung.';
        toneRule = 'Bahasa agresif, mengarahkan, dominan, tanpa basa-basi.';
    }

    // ========================================
    // 2. DETEKSI FORMAT KONTEN (FIXED)
    // ========================================
    const fmt = (s.formatDurasi || '').toLowerCase();
    const isCarousel = fmt.includes('carousel') || fmt.includes('slide') || fmt.includes('geser');
    const isThread = fmt.includes('twitter') || fmt.includes('thread') || fmt.includes('x') || fmt.includes('teks');
    const isStaticImage = fmt.includes('single image') || fmt.includes('foto') || fmt.includes('statis') || fmt.includes('caption');
    const isVideo = fmt.includes('video') || fmt.includes('short') || fmt.includes('menit') || fmt.includes('detik');

    // ========================================
    // 3. WORD LIMIT BERDASARKAN DURASI
    // ========================================
    let wordLimit = '';
    if (fmt.includes('super short') || fmt.includes('15 detik')) {
        wordLimit = '(Max 40 kata / 3-4 kalimat)';
    } else if (fmt.includes('short') || fmt.includes('30 detik')) {
        wordLimit = '(Max 80 kata / 6-8 kalimat)';
    } else if (fmt.includes('medium') || fmt.includes('60 detik')) {
        wordLimit = '(Max 160 kata / 12-16 kalimat)';
    } else if (fmt.includes('youtube') && !fmt.includes('shorts')) {
        wordLimit = '(Max 200 kata per menit)';
    } else if (isCarousel) {
        wordLimit = '(Max 20 kata per slide)';
    } else if (isThread) {
        wordLimit = '(Max 280 karakter per tweet)';
    }

    // ========================================
    // 4. DETEKSI KONDISI KHUSUS
    // ========================================
    const isFaceless = (s.gayaVisual || '').toLowerCase().includes('faceless');
    const isComplianceAman = (s.compliance || '').toLowerCase().includes('aman') || (s.compliance || '').toLowerCase().includes('general');

    // ========================================
    // MULAI MERAKIT PROMPT V6
    // ========================================
    let p = `ACT AS: Ahli Content Strategy & Copywriter Sosmed Indonesia.\n`;
    p += `TUGAS: Buat ${getVal(s.jumlahVariasi, '1')} script konten untuk ${getVal(s.platform)}.\n\n`;

    p += `[1. PERSONA & AUDIENS]\n`;
    p += `- Kreator: ${getVal(s.role)} (${getVal(s.persona)})\n`;
    p += `- Target Market: ${getVal(s.targetMarket)}\n`;
    p += `- Level Awareness: ${getVal(s.levelAwareness)}\n`;
    p += `- Psikografi: ${getVal(s.psychographics)}\n`;
    p += `- Kata Ganti (Pronouns): ${pronounRule}\n`;
    p += `- Vibe & Tone: ${toneRule}\n\n`;

    p += `[2. STRATEGI KONTEN]\n`;
    p += `- Goal: ${getVal(s.goal)}\n`;
    p += `- Format: ${getVal(s.formatDurasi)} ${wordLimit}\n`;
    p += `- Visual: ${getVal(s.gayaVisual)}\n`;
    
    // ========================================
    // 5. FRAMEWORK DENGAN PROMPT_DICTIONARY
    // ========================================
    if (s.framework) {
        // Cek di dictionary dulu, kalau nggak ada, fallback ke nama biasa
        const fwPrompt = PROMPT_DICTIONARY.frameworks[s.framework];
        if (fwPrompt) {
            p += `- Framework: ${s.framework}\n`;
            p += `  INSTRUKSI DETAIL: ${fwPrompt}\n`;
        } else {
            p += `- Framework: ${s.framework}\n`;
        }
    }

    // ========================================
    // 6. HOOK DENGAN PROMPT_DICTIONARY
    // ========================================
    if (s.hook) {
        // Cek di dictionary dulu
        const hPrompt = PROMPT_DICTIONARY.hooks[s.hook];
        if (hPrompt) {
            p += `- Hook Strategy: ${s.hook}\n`;
            p += `  INSTRUKSI DETAIL: ${hPrompt}\n`;
        } else {
            p += `- Hook Strategy: ${s.hook}\n`;
        }
    }
    p += '\n';

    p += `[3. MATERI KONTEN]\n`;
    if (isJualan) {
        p += `- Produk: ${getVal(s.namaProduk)} (${getVal(s.jenisProduk)})\n`;
        p += `- Masalah Utama: ${getVal(s.painPoint)}\n`;
        p += `- Solusi yang Dijanjikan: ${getVal(s.solusiUtama)}\n`;
        p += `- USP (Pembeda): ${getVal(s.uniqueValue)}\n`;
        if (s.hargaPromo) p += `- Harga/Promo: ${s.hargaPromo}\n`;
        if (s.referensiMateri) p += `- Referensi: ${s.referensiMateri}\n`;
        p += `- CTA: ${getVal(s.ctaJualan)}\n\n`;
    } else {
        p += `- Niche: ${getVal(s.kategoriNiche)}\n`;
        p += `- Topik Utama: ${getVal(s.topikUtama)}\n`;
        if (s.bahanMateri) p += `- Bahan Materi: ${s.bahanMateri}\n`;
        p += `- Keresahan Audiens: ${getVal(s.keresahan)}\n`;
        p += `- Insight Utama: ${getVal(s.insightUtama)}\n`;
        if (s.sudutPandang) p += `- Sudut Pandang: ${s.sudutPandang}\n`;
        if (s.leadMagnet) p += `- Lead Magnet: ${s.leadMagnet}\n`;
        p += `- CTA: ${getVal(s.ctaEdukasi)}\n\n`;
    }

    // ========================================
    // 7. RULES STRICT (REVISED - SUPER STRICT)
    // ========================================
    p += `[4. RULES STRICT - WAJIB PATUHI!]\n`;
    p += `1. ANTI-BAHASA BAKU & KAKU:\n`;
    p += `   - DILARANG KERAS menggunakan kata: "Anda", "Kau", "Kalian", "Merupakan", "Sangatlah", "Adalah", "Oleh karena itu", "Kesimpulannya", "Mari kita", "Di era digital ini", "Penting untuk diketahui", "Salah satu cara", "Guna".\n`;
    p += `   - JANGAN gunakan struktur kalimat pasif yang kaku (contoh salah: "Hal ini dapat dilakukan dengan...").\n`;
    p += `   - REPLACE dengan kata ganti yang sudah ditentukan di atas.\n`;
    p += `2. PACING & INTONASI NATURAL (SPOKEN WORD):\n`;
    p += `   - Tulis naskah seperti naskah ORANG NGOBROL, bukan artikel blog.\n`;
    p += `   - Gunakan partikel bahasa lisan Indonesia dengan natural: "sih", "deh", "kan", "kok", "dong", "mah" (tapi jangan di setiap kalimat).\n`;
    p += `   - Gunakan tanda "..." untuk jeda napas atau mikir.\n`;
    p += `   - Kalimat harus PENDEK. Maksimal 10-15 kata per kalimat.\n`;
    p += `3. CONTOH SALAH vs BENAR:\n`;
    p += `   - SALAH: "Penting untuk memperhatikan asupan gizi Anda."\n`;
    p += `   - BENAR: "Cek lagi deh, makan lo udah bener belum." (Sesuaikan dengan Pronoun Rules).\n`;
    
    if (isFaceless) p += `4. FACELESS: Dilarang instruksi senyum/gesture wajah. Fokus ke visual layar/B-Roll/Text Overlay.\n`;
    if (!isComplianceAman && s.compliance) p += `5. COMPLIANCE (${s.compliance}): Dilarang overclaim (klaim berlebihan). Gunakan bahasa aman (membantu, mendukung, dsb).\n`;
    if (s.targetKeyword) p += `6. SEO: Selipkan natural keyword "${s.targetKeyword}" di caption atau narasi.\n`;
    if (s.asetVisual) p += `7. ASET: Sesuaikan adegan dengan aset yang tersedia: "${s.asetVisual}".\n\n`;

    // ========================================
    // 8. FORMAT OUTPUT DINAMIS
    // ========================================
    p += `[5. FORMAT OUTPUT]\n`;

    if (isCarousel) {
        // ===== FORMAT CAROUSEL/SLIDES =====
        p += `Konten berbentuk CAROUSEL/SLIDES. Gunakan format ini:\n\n`;
        p += `**Variasi [No]: [Judul Angle]**\n`;
        p += `*Hook: [Sebutkan taktik hook yang dipilih]*\n\n`;
        p += `[SLIDE 1 - COVER]\n`;
        p += `(Visual): [Deskripsi gambar/ilustrasi cover]\n`;
        p += `(Teks): "[Headline utama yang menarik]"\n\n`;
        p += `[SLIDE 2-N - ISI]\n`;
        p += `(Visual): [Deskripsi gambar per slide]\n`;
        p += `(Teks): "[Poin/value per slide - singkat! Max 20 kata]"\n\n`;
        p += `[SLIDE AKHIR - CTA]\n`;
        p += `(Visual): [Deskripsi gambar CTA]\n`;
        p += `(Teks): "[Ajakan action yang jelas]"\n\n`;
        p += `Caption: [Copywriting singkat] | Hashtag: [3-5 hashtag]\n`;
        p += `----------------------------------\n`;

    } else if (isThread) {
        // ===== FORMAT TWITTER/X THREAD =====
        p += `Konten berbentuk THREAD. Gunakan format ini:\n\n`;
        p += `**Variasi [No]: [Judul Thread]**\n`;
        p += `*Hook: [Sebutkan taktik hook yang dipilih]*\n\n`;
        p += `[TWEET 1 - HOOK]\n`;
        p += `"[Kalimat pembuka powerful - max 280 char]"\n\n`;
        p += `[TWEET 2-N - ISI]\n`;
        p += `"[1 poin per tweet - max 280 char]"\n\n`;
        p += `[TWEET AKHIR - CTA]\n`;
        p += `"[Summary + Ajakan action]"\n\n`;
        p += `----------------------------------\n`;

    } else if (isStaticImage) {
        // ===== FORMAT SINGLE IMAGE =====
        p += `Konten berbentuk IMAGE + CAPTION. Gunakan format ini:\n\n`;
        p += `**Variasi [No]: [Judul]**\n`;
        p += `*Hook: [Taktik visual hook]*\n\n`;
        p += `[IMAGE]\n`;
        p += `(Visual): [Deskripsi foto/gambar utama]\n`;
        p += `(Teks Overlay): "[Text yang ada di gambar]"\n\n`;
        p += `[CAPTION PANJANG]\n`;
        p += `"[Caption dengan hook + value + CTA - bisa 300+ kata]"\n\n`;
        p += `Hashtag: [5-10 hashtag relevant]\n`;
        p += `----------------------------------\n`;

    } else {
        // ===== FORMAT VIDEO (DEFAULT) =====
        p += `Konten berbentuk VIDEO. Gunakan format ini:\n\n`;
        p += `**Variasi [No]: [Judul Angle]**\n`;
        p += `*Hook: [Sebutkan taktik hook yang dipilih]*\n\n`;
        p += `[HOOK - 3 detik pertama]\n`;
        p += `(Visual): [Deskripsi adegan pembuka]\n`;
        p += `(Audio): "[Naskah spoken-word hook - harus stop scroll!]"\n\n`;
        p += `[BODY & CTA]\n`;
        p += `(Visual): [Deskripsi adegan isi]\n`;
        p += `(Audio): "[Naskah spoken-word isi + CTA]"\n\n`;
        p += `Caption: [Copywriting singkat] | Hashtag: [3-5 hashtag]\n`;
        p += `----------------------------------\n`;
    }

    return p;
}

// Helper untuk copy prompt (dipakai di tombol header)
function copyPrompt() {
    const promptText = generatePrompt();
    navigator.clipboard.writeText(promptText).then(() => {
        const btn = document.querySelector('.copy-btn-top');
        if(!btn) return;
        
        // Simpan konten asli
        const originalHTML = btn.innerHTML;
        
        // Ubah ke state "Tersalin!"
        btn.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>Tersalin!</span>
        `;
        btn.classList.add('copied');
        
        // Kembalikan setelah 2 detik
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
        alert("Gagal menyalin prompt. Silakan coba lagi.");
    });
}

// ========================================
// HELPER: TAMPILKAN PLACEHOLDER PREVIEW
// ========================================
function showPreviewPlaceholder(container) {
    container.innerHTML = `
        <div class="mac-window">
            <!-- Header Mac Style -->
            <div class="mac-header">
                <div class="mac-dots">
                    <div class="mac-dot dot-red"></div>
                    <div class="mac-dot dot-yellow"></div>
                    <div class="mac-dot dot-green"></div>
                </div>
                <span class="text-slate-400 text-sm font-medium">Preview</span>
            </div>

            <!-- Body Placeholder -->
            <div class="prompt-body-container" style="display: flex; align-items: center; justify-content: center;">
                <div class="preview-placeholder">
                    <div class="preview-placeholder-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <h3>Belum Ada Prompt</h3>
                    <p>Prompt yang di-generate akan muncul di sini setelah Anda klik tombol "Generate Script"</p>
                </div>
            </div>
        </div>
    `;
}


// ========================================
// RENDER FINAL ACTION BUTTON (UPDATED)
// ========================================
function renderFinalAction() {
    const container = document.getElementById('finalActionContainer');

    const html = `
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 mb-4 animate-fadeInUp">
            <!-- Tombol Reset -->
            <button onclick="resetForm()" class="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-600 font-bold text-lg rounded-2xl hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 shadow-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                <span>Reset</span>
            </button>

            <!-- Tombol Generate -->
            <button onclick="generateScript()" class="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span>Generate Script</span>
            </button>
        </div>
    `;

    container.innerHTML = html;
}

// ========================================
// MODAL INFO FUNCTIONS
// ========================================
function openInfoModal(title, content) {
    const modal = document.getElementById('infoModal');
    const titleText = document.getElementById('infoModalTitleText');
    const contentBox = document.getElementById('infoModalContent');

    titleText.textContent = title;
    contentBox.innerHTML = content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

// TAMBAHKAN FUNGSI INI: Pembantu untuk membaca data attribute
function triggerInfoModal(element) {
    const title = element.getAttribute('data-modal-title');
    // Decode HTML entities yang di-escape sebelumnya (jika perlu, meski innerHTML bisa handle &quot;)
    // Namun karena kita pakai innerHTML di openInfoModal, &quot; otomatis jadi kutip.
    const content = element.getAttribute('data-modal-content'); 
    
    openInfoModal(title, content);
}

function closeInfoModal(event) {
    const modal = document.getElementById('infoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
}

// ========================================
// LOGOUT
// ========================================
function logout() {
    alert("Logout berhasil!");
    // window.location.href = 'login.html';
}

// ========================================
// INITIALIZATION: TAMPILKAN PLACEHOLDER SAAT LOAD
// ========================================
function initializeApp() {
    // Render Section 2 - 6 dalam mode "waiting" atau default
    renderSection2();
    renderSection3();
    renderSection4();
    renderSection5();
    renderSection6();
    renderFinalAction();
    
    // Tampilkan placeholder di preview saat load
    const previewContainer = document.getElementById('previewContainer');
    if(previewContainer) {
        showPreviewPlaceholder(previewContainer);
    }
    
    // Initialize progress bar
    initProgressBar();
}

// Jalankan saat halaman dimuat
window.onload = initializeApp;
// ========================================
// PROGRESS BAR FUNCTIONS (OFFER 2)
// ========================================

/**
 * Validasi apakah section sudah diisi
 * Returns: true jika section sudah complete
 */
function isSectionComplete(sectionNum) {
    const s = appState;
    
    switch(sectionNum) {
        case 1:
            // Section 1: Konteks & Platform
            return !!(s.masterFilter && s.goal && s.platform && s.role && s.persona);
        
        case 2:
            // Section 2: Spesifikasi Konten
            return !!(s.jenisKonten && s.formatDurasi && s.gayaVisual);
        
        case 3:
            // Section 3: Strategi Copywriting
            return !!(s.framework && s.hook);
        
        case 4:
            // Section 4: Target Audience
            return !!(s.levelAwareness && s.psychographics && s.targetMarket && s.compliance);
        
        case 5:
            // Section 5: Detail Produk (dinamis berdasarkan tipe)
            if (s.masterFilter === 'jualan') {
                return !!(s.namaProduk && s.jenisProduk && s.painPoint && s.solusiUtama && s.uniqueValue && s.ctaJualan && s.gayaBahasa);
            } else if (s.masterFilter === 'edukasi') {
                return !!(s.kategoriNiche && s.ctaEdukasi && s.gayaBahasa);
            }
            return false;
        
        case 6:
            // Section 6: Pengaturan Output
            return !!(s.jumlahVariasi);
        
        default:
            return false;
    }
}

/**
 * Update tampilan progress bar
 */
function updateProgressBar() {
    const totalSteps = 6;
    let completedSteps = 0;
    let currentActiveStep = 0;
    
    // Cek setiap section
    for (let i = 1; i <= totalSteps; i++) {
        const dot = document.getElementById(`progress-dot-${i}`);
        const label = dot?.parentElement?.querySelector('.progress-label');
        const isComplete = isSectionComplete(i);
        
        if (dot) {
            // Reset classes
            dot.classList.remove('active', 'completed');
            if (label) label.classList.remove('active', 'completed');
            
            if (isComplete) {
                // Section sudah complete
                dot.classList.add('completed');
                dot.innerHTML = `
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                `;
                if (label) label.classList.add('completed');
                completedSteps++;
                currentActiveStep = i;
            } else if (currentActiveStep === 0 || currentActiveStep === i - 1) {
                // Section yang sedang aktif (pertama yang belum complete)
                dot.classList.add('active');
                dot.innerHTML = i;
                if (label) label.classList.add('active');
                currentActiveStep = i;
            } else {
                // Section yang belum sampai
                dot.innerHTML = i;
            }
        }
    }
    
    // Update garis progress
    const progressLine = document.getElementById('progressLineActive');
    if (progressLine) {
        // Hitung persentase progress
        const percentage = ((completedSteps / totalSteps) * 100);
        progressLine.style.width = `${percentage}%`;
    }
}

/**
 * Initialize progress bar saat load
 */
function initProgressBar() {
    updateProgressBar();
}