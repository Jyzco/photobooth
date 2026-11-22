(() => {
    "use strict";

    const STORAGE_THEME_KEY = "ekspedisi27_theme_v6";
    const STORAGE_QUIZ_KEY = "ekspedisi27_state_v6";
    const FRAME_WIDTH = 960;
    const FRAME_HEIGHT = 720;
    const INTER_SHOT_PAUSE_MS = 650;

    const QUIZ_STEPS = [
        {
            id: "step-origin-fyp",
            type: "choice",
            eyebrow: "POS BASECAMP 01 // AWAL MULA",
            evidenceImg: "assets/moment-follback-aug19.jpg",
            evidenceCaption: "19 Agustus 2026: 32 menit setelah di-follow",
            question: "Masih inget pertama kali aku notice kamu di mana sebelum kita kenalan?",
            options: [
                {
                    label: "Pas aku jadi tim dokum FYP BINUS, lagi nge-video dan kamu tiba-tiba dadah ke kamera",
                    reaction: "100% bener. Gara-gara dadah ke kamera pas FYP itu aku jadi sering gak sengaja ketemu kamu selama Agustus, sampai akhirnya twibbon IS B30 kamu lewat di beranda tanggal 19 Agustus."
                },
                {
                    label: "Di rak toko buku Gramedia Jalma pas lagi jalan sore",
                    reaction: "Kalau Gramed Jalma itu babak tanggal 3 Oktober! Awal bangetnya tetap dari momen kamu dadah ke kameraku pas aku lagi tugas tim dokum FYP BINUS."
                },
                {
                    label: "Di satu kelas kuliah yang sama persis",
                    reaction: "Justru karena beda angkatan dan ketemunya pas bulan ospek FYP BINUS itu yang bikin awalnya terasa random banget."
                },
                {
                    label: "Pas sama-sama lagi mendaki Gunung Merbabu",
                    reaction: "Merbabu masih masuk daftar mimpi yang harus kita wujudin bareng nanti! Pertama kali notice jelas waktu kamu dadah ke kamera tim dokum FYP BINUS."
                }
            ]
        },
        {
            id: "step-deeptalk",
            type: "choice",
            eyebrow: "POS BASECAMP 02 // 17 SEPTEMBER",
            evidenceImg: "assets/chat-deeptalk.jpg",
            evidenceCaption: "17 September 2026, pukul 22.03 WIB",
            question: "Tanggal 17 September, habis kamu bilang typing-ku kayak Gen Alpha, kita dapet nilai 100 buat matkul apa?",
            options: [
                {
                    label: "Matkul Deeptalk (plus rumus: canggung + canggung = nerveous)",
                    reaction: "Tepat. Dari yang malam itu mikir kalau ketemu bakal kabur karena canggung, sekarang malah bisa ketawa bareng bahas hal-hal paling gak penting."
                },
                {
                    label: "Matkul Pengantar Ngoding jam 01.43 pagi",
                    reaction: "Itu IG Note tanggal 2 September waktu aku sok siap men-tutor! Tanggal 17 September puncaknya di Matkul Deeptalk nilai 100."
                },
                {
                    label: "Matkul Sejarah Kimpul dan Topografi Jogja-Klaten",
                    reaction: "Kuliah kimpul udah tamat sejak DM pertama 27 Agustus! Malam 17 September itu yang dapet nilai 100 adalah Matkul Deeptalk."
                },
                {
                    label: "Matkul Bahasa Inggris #SIAPJDIPENDAMPING",
                    reaction: "Kalau kurikulum English itu baru kita bahas bulan November di WhatsApp. Malam 17 September juaranya tetap Matkul Deeptalk."
                }
            ]
        },
        {
            id: "step-gramed-jalma",
            type: "choice",
            eyebrow: "POS BASECAMP 03 // 03 OKTOBER",
            evidenceImg: "assets/notes-jalma.jpg",
            evidenceCaption: "IG Notes 03 Oktober 2026 -> Gramed Jalma",
            question: "Tanggal 3 Oktober kita perdana jalan bareng ke Gramed Jalma lewat kode IG Notes 'jalma -> maw maw'. Inget gak apa yang terjadi malamnya habis pulang?",
            options: [
                {
                    label: "HP-ku malah ngelag pas mau foto candid kamu, terus malam itu juga kita resmi pindah chat ke WhatsApp",
                    reaction: "Bener 100%! Katanya tukang candid, giliran mau motoin malah HP-nya ngelag. Untung malam itu juga obrolannya lanjut pindah ke WhatsApp."
                },
                {
                    label: "Langsung janjian muncak ke Gunung Merbabu besok paginya",
                    reaction: "Wacana Merbabu memang udah muncul sejak 18 September, tapi malam 3 Oktober itu yang kejadian HP-ku ngelag pas mau candid lalu kita pindah ke WhatsApp."
                },
                {
                    label: "Buka obrolan akun second ber berry untuk pertama kalinya",
                    reaction: "Kalau pintu rahasia akun second baru kebuka tanggal 17 Oktober! Malam 3 Oktober itu momen HP ngelag plus pindah WhatsApp."
                },
                {
                    label: "Nonton bioskop The Park XXI kursi D9 dan D10",
                    reaction: "Bioskop The Park itu akhir Oktober! Tanggal 3 Oktober adalah perdana jalan ke Gramed Jalma plus HP ngelag pas mau candid."
                }
            ]
        },
        {
            id: "step-momen-kita",
            type: "choice",
            eyebrow: "POS BASECAMP 04 // ARSIP FAVORIT",
            evidenceImg: "assets/moment-spotify.jpg",
            evidenceCaption: "29 Oktober 2026: Spotify Blend 100%",
            question: "Dari semua momen acak kita dari Agustus sampai November, mana yang paling 'kita banget'?",
            options: [
                {
                    label: "Obrolan akun second ber berry x jiddan side. soal kontrak bidadari dan sang gila",
                    reaction: "Dari sinilah pintu rahasia akun second dibuka, sampai muncul pesan yang di-pin dan cerita impian konten fairy tale & morikei."
                },
                {
                    label: "Spotify Blend 100% cocok + nonton Laut Bercerita kursi D9 dan D10",
                    reaction: "Kombinasi lagu La La Lost You 100% cocok plus typo legendaris 'lau bercerita' sebelum berangkat bioskop."
                },
                {
                    label: "Discord SIPALING AMBIS KEJAR KARIR 5 jam 47 menit + nobar fantasi tengah malam",
                    reaction: "Nugas bareng paling niat sedunia, walau kadang ketiduran di kafe dan ujungnya lanjut nobar Fantastic Beasts tengah malam."
                },
                {
                    label: "Atedoz Library Theme + koleksi foto pegang kamera dan recreate 5 meme klasik",
                    reaction: "Sudah sempat foto bertema perpustakaan, tukeran kamera, sampai niat bikin ulang 5 meme sekaligus dalam semalam."
                }
            ]
        },
        {
            id: "step-kamus-typo",
            type: "choice",
            eyebrow: "POS BASECAMP 05 // KAMUS TYPO & LORE",
            evidenceImg: "assets/moment-meme-heart.jpg",
            evidenceCaption: "20 Nov 2026: totalitas recreate meme bareng",
            question: "Typo atau julukan legendaris mana nih yang selalu sukses bikin kita langsung ngakak setiap diingat?",
            options: [
                {
                    label: "\"Manual, di kos ku gaada mesin cucu\" -> \"cui, what this is cui\"",
                    reaction: "Juara tak terbantahkan menjelang Puncak 27. Sampai sekarang kata 'cui' tetap terdengar kayak kode rahasia."
                },
                {
                    label: "\"Call me rara not semprul\" + \"kaka noh kebo\"",
                    reaction: "Dua julukan saling serang paling ikonik sejak akun second ber berry x jiddan side. dibuka!"
                },
                {
                    label: "\"Pa mau nonton lau bercerita\" sebelum berangkat ke XXI",
                    reaction: "Typo paling sopan sejagat sebelum akhirnya kita benar-benar duduk di kursi D9 dan D10."
                },
                {
                    label: "\"Cabggung + canggung : nerveous\" di malam 17 September",
                    reaction: "Bukti sejarah kalau dulunya kita sempat sejujur itu ngaku gugup sebelum akrab kayak sekarang."
                }
            ]
        },
        {
            id: "step-bareng-terus",
            type: "runaway",
            eyebrow: "POS BASECAMP 06 // PERTANYAAN PENTING",
            evidenceImg: "assets/chat-merbabu.jpg",
            evidenceCaption: "18 September 2026: wacana explore alam",
            question: "Jujur deh, setelah kenal dari Agustus sampai sekarang... nyesel gak dulu dadah ke kamera pas FYP dan follback aku?",
            options: [
                {
                    label: "Sama sekali gak nyesel, malah seru banget",
                    reaction: "Sip! Catat baik-baik ya, berarti agenda muncak Merbabu, nonton lagi, dan nugas bareng masih lanjut terus."
                }
            ],
            runawayStages: [
                "Nyesel dikit sih...",
                "Eits, tombolnya kabur",
                "Tuh kan gak mau diklik",
                "Jangan gitu dong semprul",
                "Oke menyerah, berarti gak nyesel ya!"
            ],
            runawayFinalReaction: "Nah kan, bahkan tombolnya pun tahu kalau kenal sama kamu itu justru hal paling seru di semester ini."
        },
        {
            id: "step-rating-note",
            type: "rating",
            eyebrow: "POS BASECAMP 07 // NILAI & PESAN PRIBADI",
            question: "Nilai pertemanan kita sejauh ini (1 sampai 100) plus satu pesan kecil buat masuk ke Kartu Rangkuman Kenangan:"
        }
    ];

    const VIGNETTE_SVGS = {
        "camera-stars": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><rect x="28" y="34" width="124" height="64" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><path d="M58 34L66 20H114L122 34" stroke="currentColor" stroke-width="1.8"/><circle cx="90" cy="66" r="21" fill="#F3D695" fill-opacity="0.24" stroke="currentColor" stroke-width="1.8"/><circle cx="90" cy="66" r="11" stroke="currentColor" stroke-width="1.6"/><circle cx="136" cy="48" r="3.5" fill="#D8A84E"/><path d="M22 18L24.5 24L30 26.5L24.5 29L22 35L19.5 29L14 26.5L19.5 24Z" fill="#D8A84E"/></svg>',
        "quill-arch": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><path d="M40 100V52C40 26 62 12 90 12C118 12 140 26 140 52V100" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 4"/><rect x="52" y="54" width="60" height="38" rx="5" fill="#F3D695" fill-opacity="0.2" stroke="currentColor" stroke-width="1.6"/><path d="M52 58L82 78L112 58" stroke="currentColor" stroke-width="1.5"/><path d="M126 30C114 48 106 66 104 82C118 76 132 58 144 36C139 32 132 30 126 30Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.7"/><circle cx="82" cy="78" r="4" fill="#8F2631"/></svg>',
        "mountain-sunrise": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><circle cx="90" cy="48" r="22" fill="#F8C87A" fill-opacity="0.42" stroke="#D8A84E" stroke-width="1.4"/><path d="M16 96L54 44L84 74L114 34L164 96H16Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M114 34L124 52L112 58L104 49L98 56L114 34Z" fill="#FFFDF8" fill-opacity="0.65"/></svg>',
        "lantern-oak": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><path d="M18 22C64 18 106 24 156 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="94" y1="20" x2="94" y2="42" stroke="currentColor" stroke-width="1.6"/><circle cx="94" cy="68" r="28" fill="#F8C87A" fill-opacity="0.3"/><path d="M80 42H108L114 64L104 88H84L74 64L80 42Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><circle cx="94" cy="65" r="7" fill="#D8A84E"/></svg>',
        "teacup-stars": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><path d="M52 54H118V76C118 90 106 98 85 98C64 98 52 90 52 76V54Z" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.8"/><path d="M118 60H128C135 60 138 66 138 71C138 77 134 82 127 82H118" stroke="currentColor" stroke-width="1.8"/><ellipse cx="85" cy="99" rx="44" ry="6" fill="#D8A84E" fill-opacity="0.24" stroke="currentColor" stroke-width="1.2"/></svg>',
        "moon-angel": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><circle cx="90" cy="58" r="42" stroke="currentColor" stroke-opacity="0.24" stroke-width="1.4" stroke-dasharray="4 5"/><path d="M98 24C80 28 69 44 72 62C74 78 88 89 104 91C84 97 63 85 58 64C53 43 66 23 87 20C91 20 95 21 98 24Z" fill="#D8A84E" fill-opacity="0.34" stroke="currentColor" stroke-width="1.7"/></svg>',
        "headset-waves": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><path d="M54 74V56C54 36 70 22 90 22C110 22 126 36 126 56V74" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect x="44" y="64" width="16" height="30" rx="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/><rect x="120" y="64" width="16" height="30" rx="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/><path d="M70 76C76 68 82 84 90 74C98 64 104 82 110 74" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
        "summit-crown": '<svg viewBox="0 0 180 116" width="144" height="94" fill="none"><path d="M22 96L58 46L82 72L90 34L104 72L126 48L158 96H22Z" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M90 12L94 21L103 25L94 29L90 38L86 29L77 25L86 21Z" fill="#D8A84E"/></svg>'
    };

    const BIOME_META = {
        1: {
            shortName: "Pesisir Senja",
            groupLabel: "ALAM I // PESISIR SENJA (POS 01 - 06)",
            kicker: "ALAM I // 100 - 650 MDPL // AGUSTUS - PERTENGAHAN SEPTEMBER",
            title: "Pesisir Senja & Awal Mula",
            subtitle: "Dari kamera FYP BINUS, DM ulang tahun perdana di senja Agustus, hingga janji awal menuju puncak gunung.",
            stampId: "pesisir",
            pills: ["Ombak Senja", "6 Pos Cerita", "2 Pos Istirahat"],
            svg: '<svg viewBox="0 0 120 44" width="108" height="40" fill="none"><circle cx="60" cy="22" r="11" fill="#F3D695" fill-opacity="0.28" stroke="currentColor" stroke-width="1.5"/><path d="M12 31C28 24 44 24 60 31C76 38 92 38 108 31" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M20 38C36 33 50 33 64 38C78 42 92 42 104 38" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.65" stroke-linecap="round"/></svg>'
        },
        2: {
            shortName: "Hutan Lentera",
            groupLabel: "ALAM II // HUTAN LENTERA (POS 07 - 13)",
            kicker: "ALAM II // 780 - 1.380 MDPL // AKHIR SEPTEMBER - PERTENGAHAN OKTOBER",
            title: "Hutan Lentera & Jalan Malam",
            subtitle: "Ketika stranger mulai jadi teman cerita, penuh kejutan prank, misteri pabrik permen, dan khodam tengah malam.",
            stampId: "lentera",
            pills: ["Lentera Rimba", "7 Pos Cerita", "2 Pos Istirahat"],
            svg: '<svg viewBox="0 0 120 44" width="108" height="40" fill="none"><line x1="16" y1="22" x2="44" y2="22" stroke="currentColor" stroke-width="1.3"/><line x1="76" y1="22" x2="104" y2="22" stroke="currentColor" stroke-width="1.3"/><path d="M52 10H68L72 22L66 34H54L48 22L52 10Z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.16"/><circle cx="60" cy="22" r="4" fill="#F3D695"/></svg>'
        },
        3: {
            shortName: "Lembah Bidadari",
            groupLabel: "ALAM III // LEMBAH BIDADARI (POS 14 - 20)",
            kicker: "ALAM III // 1.520 - 2.150 MDPL // 17 OKTOBER - 01 NOVEMBER",
            title: "Lembah Bidadari & Langit Morikei",
            subtitle: "Pintu rahasia akun second terbuka, telepon lewat tengah malam, Spotify 100%, sampai impian dunia Ghibli dan morikei.",
            stampId: "bidadari",
            pills: ["Bulan Sabit Berry", "7 Pos Cerita", "2 Pos Istirahat"],
            svg: '<svg viewBox="0 0 120 44" width="108" height="40" fill="none"><path d="M18 22H42M78 22H102" stroke="currentColor" stroke-width="1.3"/><path d="M66 9C58 11 54 19 56 26C58 32 64 36 70 36C61 39 53 33 51 24C49 16 56 8 64 7C65 7 65.5 8 66 9Z" fill="currentColor" fill-opacity="0.88"/><circle cx="72" cy="16" r="2.2" fill="#F3D695"/></svg>'
        },
        4: {
            shortName: "Puncak Bintang",
            groupLabel: "ALAM IV // PUNCAK GUNUNG BERBINTANG (POS 21 - 27)",
            kicker: "ALAM IV // 2.240 - 2.700 MDPL // NOVEMBER HINGGA PUNCAK 27",
            title: "Puncak Gunung Berbintang",
            subtitle: "Foto perpustakaan, nobar fantasi di balik layar laptop, totalitas recreate meme, sampai typo paling legendaris sebelum puncak.",
            stampId: "bintang",
            pills: ["Puncak 2.700 mdpl", "7 Pos Cerita", "1 Pos Istirahat"],
            svg: '<svg viewBox="0 0 120 44" width="108" height="40" fill="none"><path d="M18 35L38 15L52 27L62 11L78 28L90 16L102 35H18Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="currentColor" fill-opacity="0.16"/><circle cx="62" cy="6" r="2.6" fill="#F3D695"/></svg>'
        }
    };

    const TRAIL_CHECKPOINTS = [
        {
            id: "pos-01",
            biome: 1,
            postNum: "01",
            altitude: "100 mdpl",
            date: "Agustus 2026",
            title: "Kamera FYP BINUS & Follback 19 Agustus",
            vignette: "camera-stars",
            pullQuote: "Satu dadah ke kamera tim dokum FYP bikin Agustus jadi gak biasa.",
            lines: [
                "Semua berawal pas aku lagi bertugas sebagai tim dokum FYP BINUS, lalu di tengah keramaian freshmen kamu tiba-tiba dadah ke arah kamera.",
                "Gara-gara momen random itu aku jadi sering gak sengaja notice kamu sepanjang bulan Agustus, sampai akhirnya twibbon IS B30 kamu muncul paling atas di beranda tanggal 19 Agustus dan dibalas follback 32 menit kemudian."
            ],
            photos: [
                {
                    src: "assets/moment-follback-aug19.jpg",
                    alt: "Notifikasi Instagram Rara mem-follow balik pada 19 Agustus 2026",
                    caption: "Notifikasi follback 19 Agustus beserta foto profil di Siwil Art",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 01 // Masih inget berapa menit jarak follback 19 Agustus?",
                options: [
                    { label: "32 menit tepat!", reply: "Betul! Tercatat resmi di arsip notifikasi Instagram." },
                    { label: "Seharian penuh?", reply: "Enggak selama itu, cuma 32 menit langsung di-follback balik!" }
                ]
            }
        },
        {
            id: "pos-02",
            biome: 1,
            postNum: "02",
            altitude: "190 mdpl",
            date: "27 Agu 2026",
            title: "DM Pertama di Hari Ultah, Siwil Art, & Kuliah Kimpul",
            vignette: "quill-arch",
            pullQuote: "\"Rara tetap 'Jogja' kok ketanemny di ingatanku, dengan taburan topping Semarang.\"",
            lines: [
                "Delapan hari setelah saling follow, obrolan pertama akhirnya kebuka tepat di hari ulang tahunmu tanggal 27 Agustus."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "27 Agu 2026",
                    prompt: "Inget gak momen pas chat pertama ini?",
                    messages: [
                        { from: "jay", text: "Happy Bday!", time: "10:21" },
                        { from: "rara", text: "thank uu kaa", time: "10:56" },
                        { from: "jay", text: "anyway, kita blm kenalan, mind if we get to know each other?", time: "19:05" },
                        { from: "rara", text: "oh yaa, bole", time: "19:07" },
                        { from: "jay", text: "NGL, aku notice kamu karena pp kamu yg lgi baca buku..", time: "19:23" },
                        { from: "rara", text: "ada ko, \"siwil art\" namanya", time: "19:30" },
                        { from: "jay", text: "rara tetap \"jogja\" kok ketanemny di ingatanku", time: "19:48" },
                        { from: "jay", text: "dengan taburan topping semarang", time: "19:48" },
                        { from: "jay", text: "ada kimpulnya yg ketanem, blm dipanen", time: "19:49" }
                    ]
                }
            ],
            secretNote: "Baru kenal beberapa menit, tapi obrolannya langsung nyasar dari foto di Siwil Art Kota Lama, Klaten naturalisasi Jogja, sampai aku nulis satu esai penuh buat jelasin apa itu kimpul.",
            quickGame: {
                prompt: "Selingan Pos 02 // Sebutan geografis paling kocak di DM perdana:",
                options: [
                    { label: "Jogja topping Semarang", reply: "Ditambah sepaket materi soal kimpul yang belum dipanen." },
                    { label: "Kuliah botani Kimpul", reply: "Baru kenal satu jam sudah keluar penjelasan agronomi lengkap!" }
                ]
            }
        },
        {
            id: "pos-03",
            biome: 1,
            postNum: "03",
            altitude: "280 mdpl",
            date: "27 Agu 2026",
            title: "Tips Muncak Gunung Andong & Olahraga Tangga FYP",
            vignette: "mountain-sunrise",
            pullQuote: "\"Tp kl mau first muncak, naik ke Andong.\"",
            lines: [
                "Di hari pertama ngobrol itu juga ketahuan kalau kamu emang suka gunung dan alam terbuka, sampai ngasih rekomendasi gunung buat pemula."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "27 Agu 2026",
                    prompt: "Inget gak kuliah singkat soal mendaki ini?",
                    messages: [
                        { from: "rara", text: "ga ada gn yg buat pemula ka", time: "20:54" },
                        { from: "rara", text: "semua gn kalo mau nanjak wajib olga dulu", time: "20:55" },
                        { from: "rara", text: "tp kl mau first muncak, naik ke andong", time: "20:55" },
                        { from: "jay", text: "hmmm okey okey", time: "20:56" },
                        { from: "jay", text: "naik turun tangga termasuk olga kan ya", time: "20:56" },
                        { from: "jay", text: "kemarin fyp udh berkali2 naik turun tangga", time: "20:57" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 03 // Naik turun tangga FYP sah gak jadi latihan muncak?",
                options: [
                    { label: "Harus olahraga beneran!", reply: "Kata mentor pendakian Andong, wajib cardio beneran dulu!" },
                    { label: "Lumayan buat pemanasan", reply: "Lumayan sih, tapi pas nanjak beneran tetep butuh napas cadangan." }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #01 // PESISIR AWAL",
                teaser: "Bahas topik pembuka dulu di sini, lalu mainkan mini game tebak chat bareng!",
                question: "Jujur deh, pas pertama kali dapet DM 'Happy Bday!' tanggal 27 Agustus, impresi pertamamu soal aku waktu itu gimana? Sempat mikir aneh atau kaget gak?",
                hint: "Coba ceritain versi jujurnya ke Jay sebelum main mini game di sebelah!",
                miniGame: {
                    type: "tebak-chat",
                    badge: "MINI GAME #01 // TEBAK PENGIRIM",
                    title: "Tebak Siapa yang Ngetik Kalimat Ini!",
                    desc: "Tebak 3 kutipan asli dari obrolan kita: ini ketikan Jay atau Rara?",
                    items: [
                        { quote: "\"canggung + canggung : nerveous, combo luar biasa\"", answer: "Rara" },
                        { quote: "\"ada kimpulnya yg ketanem, blm dipanen\"", answer: "Jay" },
                        { quote: "\"kabur si aku ka\"", answer: "Rara" }
                    ]
                }
            }
        },
        {
            id: "pos-04",
            biome: 1,
            postNum: "04",
            altitude: "400 mdpl",
            date: "02-16 Sep 2026",
            title: "Komunikasi Kode Lewat IG Notes Tengah Malam",
            vignette: "quill-arch",
            pullQuote: "Banyak obrolan rahasia awalnya numpang lewat status pendek IG Notes jam satu pagi.",
            lines: [
                "Sebelum chat rutin tiap hari, obrolan kita sering banget nyambung diam-diam lewat status IG Notes jam satu pagi.",
                "Dari niat pengin belajar ngoding bareng rak buku, saling kabarin pas lagi sakit, sampai munculnya asal-usul julukan 'hantu'."
            ],
            photos: [
                {
                    src: "assets/notes-ngoding.jpg",
                    alt: "IG Notes Rara ingin belajar ngoding dibalas status Jay pukul 01.43 WIB",
                    caption: "02 Sep 01.43: UUU SAYA SIAP MEN TUTOR",
                    contain: true
                },
                {
                    src: "assets/notes-sick.jpg",
                    alt: "IG Notes Rara no i'm sick dan status Jay are u okay",
                    caption: "07 Sep: Saling pantau lewat Notes pas lagi gak enak badan",
                    contain: true
                },
                {
                    src: "assets/notes-hantu.jpg",
                    alt: "IG Notes Rara bertanya buat siapa dan status Jay buat hantu",
                    caption: "16 Sep: Awal mula lore 'buat hantu' muncul",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 04 // Siapa paling cepat balas IG Notes jam 1 pagi?",
                options: [
                    { label: "Jay paling standby", reply: "Pukul 01.43 langsung pasang status SIAP MEN TUTOR!" },
                    { label: "Dua-duanya peka!", reply: "Dari sakit sampai 'buat hantu', kode Notes selalu nyambung." }
                ]
            }
        },
        {
            id: "pos-05",
            biome: 1,
            postNum: "05",
            altitude: "530 mdpl",
            date: "17 Sep 2026",
            title: "Typing Gen Alpha & Matkul Deeptalk Nilai 100",
            vignette: "quill-arch",
            pullQuote: "\"Canggung + canggung : nerveous, combo luar biasa.\"",
            lines: [
                "Malam 17 September jadi salah satu obrolan paling jujur sekaligus paling kocak di awal pertemanan kita."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "17 Sep 2026",
                    prompt: "Inget gak malam pas kita dapet nilai 100 ini?",
                    messages: [
                        { from: "rara", text: "kaka gen z kan?", time: "21:49" },
                        { from: "rara", text: "ngga, typing nya kyk gen alpha", time: "21:50" },
                        { from: "jay", text: "BRAINROT BGT YAK", time: "21:51" },
                        { from: "jay", text: "untuk matkul deeptalk malam ini rara mendapat nilai 100", time: "21:58" },
                        { from: "rara", text: "masi cabggung h3h3", time: "21:58" },
                        { from: "rara", text: "canggung + canggung : nerveous", time: "22:01" },
                        { from: "rara", text: "combo luar biasa", time: "22:02" },
                        { from: "jay", text: "secanggung apa klo kita ketemu ya", time: "22:02" },
                        { from: "rara", text: "kabur si aku ka", time: "22:03" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/chat-gen-alpha.jpg",
                    alt: "Tangkapan layar DM membahas typing Gen Alpha pada 17 September 2026",
                    caption: "Bukti arsip tuduhan typing Gen Alpha",
                    contain: true
                },
                {
                    src: "assets/chat-deeptalk.jpg",
                    alt: "Tangkapan layar DM matkul deeptalk nilai 100",
                    caption: "Nilai 100 pertama plus rencana kabur kalau ketemu",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 05 // Typing siapa sebenarnya yang paling Gen Alpha?",
                options: [
                    { label: "Tetap Jay haha", reply: "Sampai dibilang BRAINROT BGT YAK malam itu!" },
                    { label: "Imbang kok sama 'cabggung'", reply: "Untung nilainya 100 di Matkul Deeptalk!" }
                ]
            }
        },
        {
            id: "pos-06",
            biome: 1,
            postNum: "06",
            altitude: "650 mdpl",
            date: "18 Sep 2026",
            title: "Janji Gunung & Manifesting Merbabu",
            vignette: "mountain-sunrise",
            pullQuote: "\"I take that as a challenge to get you there.\"",
            lines: [
                "Besok malamnya, topik obrolan langsung naik level dari ruang kuliah ke wacana explore alam terbuka dan puncak Merbabu."
            ],
            photos: [
                {
                    src: "assets/chat-merbabu.jpg",
                    alt: "Tangkapan layar DM tentang one day explore alam dan manifesting smt 2 merbabu",
                    caption: "18 Sep 2026: 'manifesting smt 2 merbabu'",
                    contain: true
                }
            ],
            secretNote: "Semoga tantangan 'get you there' ke Merbabu suatu hari beneran kejadian, bukan cuma jadi arsip tangkapan layar ya.",
            quickGame: {
                prompt: "Selingan Pos 06 // Siap kunci manifesting Merbabu jadi agenda nyata?",
                options: [
                    { label: "Kunci Merbabu!", reply: "Catat di arsip: tantangan 'get you there' masih berlaku." },
                    { label: "Pemanasan Andong dulu", reply: "Boleh banget, mulai dari Andong dulu baru Merbabu!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #02 // GERBANG PESISIR",
                teaser: "Obrolan singkat soal gunung impian berdua plus duel suit pendaki!",
                question: "Kalau wacana muncak Andong atau Merbabu beneran kejadian, hal paling seru atau paling bikin khawatir buatmu pas naik gunung bareng apa nih?",
                hint: "Bahas sebentar, lalu tentuin siapa yang bawa logistik paling banyak lewat suit!",
                miniGame: {
                    type: "suit-pendaki",
                    badge: "MINI GAME #02 // SUIT PENDAKI",
                    title: "Duel Suit Penentu Pembawa Logistik",
                    desc: "Tantang tim pendaki! Yang kalah wajib traktir minuman hangat di pos berikutnya."
                }
            }
        },
        {
            id: "pos-07",
            biome: 2,
            postNum: "07",
            altitude: "780 mdpl",
            date: "23 Sep 2026",
            title: "\"Am I Not a Stranger?\"",
            vignette: "lantern-oak",
            pullQuote: "\"Kalo mereka butuh tempat cerita, ak bisa mnjdi pendengar yg baik.\"",
            lines: [
                "Masih di akhir September, ada obrolan random pagi-pagi soal gimana jadinya kalau ada stranger tiba-tiba oversharing."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "23 Sep 2026",
                    prompt: "Inget gak dialog pagi sebelum kuliah ini?",
                    messages: [
                        { from: "rara", text: "exmple : stranger oversharing ke ak gt?", time: "08:32" },
                        { from: "jay", text: "yeah", time: "08:38" },
                        { from: "jay", text: "am i not a stranger?", time: "08:38" },
                        { from: "rara", text: "kl stranger tb2 oversharing kaget ya ka. But, kalo mereka butuh tempat cerita ak bisa mnjdi pendengar yg baik", time: "08:44" },
                        { from: "rara", text: "kan udh kenalan kemarin ka?", time: "08:44" },
                        { from: "jay", text: "hai salam kenal KWKWK", time: "10:32" },
                        { from: "rara", text: "telatt bgt ka", time: "11:06" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 07 // Tanggal 23 September status kita resmi naik jadi:",
                options: [
                    { label: "Bukan stranger lagi", reply: "Kan udah kenalan kemarin, tapi tetep ngucapin 'hai salam kenal'!" },
                    { label: "Pendengar yang baik", reply: "Salah satu sifatmu yang paling bikin nyaman diajak ngobrol." }
                ]
            }
        },
        {
            id: "pos-08",
            biome: 2,
            postNum: "08",
            altitude: "890 mdpl",
            date: "24 Sep 2026",
            title: "Insiden \"PRANKK / RARA IH\" & Cita-Cita Content Creator",
            vignette: "lantern-oak",
            pullQuote: "\"PRANKK\" -> \"RARA IH\"",
            lines: [
                "Sehari setelahnya, baru juga bilang mau berhenti becanda, tiba-tiba keluar satu kata pamungkas yang sukses bikin kaget."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "24 Sep 2026",
                    prompt: "Inget gak momen kena prank jam sepuluh malam ini?",
                    messages: [
                        { from: "rara", text: "cukup", time: "22:09" },
                        { from: "jay", text: "ok..", time: "22:09" },
                        { from: "rara", text: "PRANKK", time: "22:10" },
                        { from: "jay", text: "RARA IH", time: "22:11" },
                        { from: "rara", text: "NGAKAK BGT", time: "22:11" },
                        { from: "jay", text: "ku viralin lho ya kmu", time: "22:12" },
                        { from: "rara", text: "mau dong viral, sekalian jd content creator", time: "22:12" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/chat-prankk.jpg",
                    alt: "Tangkapan layar DM Rara mengirim PRANKK dibalas RARA IH",
                    caption: "24 Sep 22.11 WIB: Bukti asli insiden gentayangan di DM",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 08 // Nilai kejutan prank 'RARA IH' malam itu:",
                options: [
                    { label: "100 / 100 sukses ngakak", reply: "Sampai beneran diviralin masuk ke website arsip ini!" },
                    { label: "Bakat content creator!", reply: "Tinggal eksekusi bareng nanti kontennya." }
                ]
            }
        },
        {
            id: "pos-09",
            biome: 2,
            postNum: "09",
            altitude: "980 mdpl",
            date: "29 Sep 2026",
            title: "Penunggu Toko & Coklat Kunafa dari Hantu",
            vignette: "lantern-oak",
            pullQuote: "\"Tdi jg sebenernya tu hantu yg ngasih kamu coklat.\"",
            lines: [
                "Gara-gara becanda soal jadi 'penunggu', nama hantu kebawa terus sampai urusan ngasih coklat kunafa."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "29 Sep 2026",
                    prompt: "Inget gak cerita coklat ghoib ini?",
                    messages: [
                        { from: "jay", text: "nanti klo ada customer yg dateng nanyain masa ku jawab \"maaf kak, saya bukan book advisor, saya penunggu disini\"", time: "22:32" },
                        { from: "rara", text: "so, brarti kaka hantu", time: "22:33" },
                        { from: "jay", text: "tdi jg sebenernya tu hantu yg ngasih kamu coklat", time: "22:41" },
                        { from: "rara", text: "pantesan, agak ghoib", time: "22:41" },
                        { from: "jay", text: "hantu ny nempel ik", time: "22:44" },
                        { from: "rara", text: "ga keliatan", time: "22:46" }
                    ]
                }
            ],
            footnote: "Besoknya tanggal 30 September, adekmu malah ikutan suka dan nanyain coklat dari hantu yang satu itu.",
            quickGame: {
                prompt: "Selingan Pos 09 // Review jujur coklat kunafa dari 'hantu':",
                options: [
                    { label: "Enak banget sampai adek suka", reply: "Best review! Kapan-kapan boleh dong hantu-nya bawain lagi." },
                    { label: "Agak ghoib tapi manis", reply: "Hantu baik hati memang beda." }
                ]
            }
        },
        {
            id: "pos-10",
            biome: 2,
            postNum: "10",
            altitude: "1.090 mdpl",
            date: "02-03 Okt 2026",
            title: "\"In This Economy Harga Buku\" & Gramed Jalma",
            vignette: "quill-arch",
            pullQuote: "Dari kode Notes 'jalma -> maw maw' sampai makan malam perdana & pindah ke WhatsApp.",
            lines: [
                "Tanggal 2 Oktober pagi kita sempat sepakat soal mahalnya buku zaman sekarang. Besok siangnya lewat IG Notes, tiba-tiba janjian jalan perdana ke Gramedia Jalma."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "02 & 03 Okt 2026",
                    prompt: "Inget gak malam habis pulang dari Gramed Jalma?",
                    messages: [
                        { from: "rara", text: "itulah pentingnya baca buku", time: "02 Okt 08:33" },
                        { from: "rara", text: "in this economy harga buku luar biasa sekali ya", time: "02 Okt 08:33" },
                        { from: "jay", text: "kan tdi aku bilang aku tu tukang candid", time: "03 Okt 23:32" },
                        { from: "jay", text: "tdi tu ada mau ku foto pas kmu lagi baca belakangnya buku, tpi hpnya malah ngelag", time: "03 Okt 23:33" },
                        { from: "rara", text: "yg bnr yg mn y", time: "03 Okt 23:33" },
                        { from: "jay", text: "gabisanya ngepose in", time: "03 Okt 23:33" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/notes-jalma.jpg",
                    alt: "IG Notes Rara menulis jalma dan dibalas maw maw oleh Jay",
                    caption: "03 Okt 14.01: Awal ajakan 'jalma -> maw maw'",
                    contain: true
                },
                {
                    src: "assets/notes-letsgo.jpg",
                    alt: "IG Notes lanjut let's goo",
                    caption: "Obrolan niat di Notes sebelum langsung berangkat",
                    contain: true
                },
                {
                    src: "assets/moment-gramed.jpg",
                    alt: "Foto bersama saat jalan ke Gramedia Jalma",
                    caption: "Arsip pertama di Gramed Jalma"
                },
                {
                    src: "assets/moment-dinner-oct3.jpg",
                    alt: "Makan malam 3 Oktober 2026 bersama Rara",
                    caption: "Lanjut makan malam 3 Oktober"
                }
            ],
            secretNote: "Hari itu sekaligus jadi malam perdana kita pindah dari DM Instagram ke WhatsApp, awalnya cuma gara-gara malas buka IG dan lanjut bahas wawancara EESE lewat Google Meet.",
            quickGame: {
                prompt: "Selingan Pos 10 // Momen terbaik di tanggal 3 Oktober versi kamu:",
                options: [
                    { label: "Kode Notes 'jalma -> maw maw'", reply: "Singkat, padat, langsung jadi jalan perdana!" },
                    { label: "Makan malam & pindah WA", reply: "Sejak malam itu obrolannya makin panjang dan lancar." }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #03 // HUTAN LENTERA",
                teaser: "Flashback ke 3 Oktober kemarin plus main nyalain 5 lentera hutan!",
                question: "Waktu pertama kali jalan bareng ke Gramed Jalma tanggal 3 Oktober, awalnya canggung banget gak sih? Momen apa yang bikin suasana hari itu tiba-tiba cair?",
                hint: "Bahas versi POV Rara vs POV Jay, terus nyalain ke-5 lenteranya!",
                miniGame: {
                    type: "lentera-hutan",
                    badge: "MINI GAME #03 // LENTERA KENANGAN",
                    title: "Nyalakan 5 Lentera Hutan Malam Ini",
                    desc: "Klik tiap lentera satu per satu untuk menerangi 5 kata kunci babak Hutan Lentera!",
                    lanterns: ["JALMA", "MAW MAW", "CANDID LAG", "EESE MEET", "PINDAH WA"]
                }
            }
        },
        {
            id: "pos-11",
            biome: 2,
            postNum: "11",
            altitude: "1.200 mdpl",
            date: "08-09 Okt 2026",
            title: "Ketiduran Depan ThinkPad & Misteri Pabrik Permen Fumira",
            vignette: "teacup-stars",
            pullQuote: "Riset serius tengah sore: ternyata bau permen itu dari pabrik Erela, bukan Fumira.",
            lines: [
                "Sejak pindah ke WhatsApp, obrolannya makin nyambung ke hal-hal gak terduga: dari momen nugas sampai ketiduran di kafe, sampai riset detektif soal asal bau permen di jalan."
            ],
            photos: [
                {
                    src: "assets/moment-sleep-cafe.jpg",
                    alt: "Rara ketiduran di meja kayu kafe di depan laptop ThinkPad",
                    caption: "08 Okt 2026: Mode tumbang di depan ThinkPad"
                }
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "09 Okt 2026",
                    prompt: "Inget gak riset dadakan soal pabrik bau permen?",
                    messages: [
                        { from: "jay", text: "sama yg fumira, tau gk? bau permen klo lewat sore2 wkwkw", time: "16:48" },
                        { from: "rara", text: "fumira? mana tu", time: "16:48" },
                        { from: "jay", text: "After research, ternyata bukan dari fumira, tpi dari pabrik dibelakangnya namanya erela, pabrik obat, fumira tu ternyata pabrik atap seng galvalum..", time: "16:59" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 11 // Asal bau permen sore hari ternyata dari:",
                options: [
                    { label: "Pabrik Erela!", reply: "Pantas dicari tahu beneran selama 11 menit lewat riset!" },
                    { label: "Bukan Fumira si seng", reply: "Misteri berbulan-bulan akhirnya terpecahkan tuntas." }
                ]
            }
        },
        {
            id: "pos-12",
            biome: 2,
            postNum: "12",
            altitude: "1.300 mdpl",
            date: "12 Okt 2026",
            title: "Malam Khodam Silaturahmi",
            vignette: "lantern-oak",
            pullQuote: "\"Khodam kita perlu dipertemukan, biar mereka silaturahmi.\"",
            lines: [
                "Memasuki pertengahan Oktober, chat WhatsApp jam sebelas malam mulai gak bisa diprediksi arahnya, sampai muncul wacana pertemuan khodam."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "12 Okt 2026",
                    prompt: "Sesi random jam sebelas malam:",
                    messages: [
                        { from: "rara", text: "yakan, aplgi kl khodam ny udh keluar", time: "22:54" },
                        { from: "rara", text: "gbsa posthink lagi", time: "22:54" },
                        { from: "jay", text: "khodam kita perlu dipertemukan, biar mereka silaturahmi", time: "22:58" },
                        { from: "rara", text: "pake selimut tidur ka", time: "22:59" },
                        { from: "rara", text: "kaka udh mulai gila", time: "22:59" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 12 // Jam segini khodamnya masih aman atau waktunya selimutan?",
                options: [
                    { label: "Pake selimut tidur ka", reply: "Jawaban Rara paling realistis setiap Jay mulai random." },
                    { label: "Biarkan silaturahmi dulu", reply: "Bentar lagi pasti muncul bahasan makin random nih." }
                ]
            }
        },
        {
            id: "pos-13",
            biome: 2,
            postNum: "13",
            altitude: "1.380 mdpl",
            date: "15 Okt 2026",
            title: "Fitur Otak Multitasking: Nyanyi Sambil Nyetir",
            vignette: "headset-waves",
            pullQuote: "\"I feel youu ka, tp jgn sering2 bahaya ka.\"",
            lines: [
                "Tiga hari kemudian giliran siang hari yang bikin heran karena ngaku sempat microsleep tapi suara tetap lanjut nyanyi."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "15 Okt 2026",
                    prompt: "Ngaku microsleep sambil nyanyi dan nyetir:",
                    messages: [
                        { from: "jay", text: "aku nyanyi buat biar gk ketiduran tp bisa bisanya aku tu microsleep dalam keadaan nyanyi dan nyetir, ini fitur otak multitasking gk si", time: "11:09" },
                        { from: "rara", text: "i feel youu ka", time: "11:29" },
                        { from: "rara", text: "kemungkinan bisa jadi", time: "11:30" },
                        { from: "rara", text: "tp jgn sering2 bahaya ka", time: "11:30" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 13 // Nasihat wajib kalau lagi nyetir jauh:",
                options: [
                    { label: "Jangan sering2 bahaya!", reply: "Siap bu dokter lalu lintas, istirahat dulu kalau ngantuk." },
                    { label: "Nyanyi bareng aja", reply: "Kalau ada partner nyanyi di sebelahnya pasti langsung melek!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #04 // UJUNG HUTAN",
                teaser: "Uji ingatan jam-jam random kita sebelum buka pintu rahasia akun second!",
                question: "Dari obrolan sore sampai hampir tengah malam di bulan September-Oktober, kebiasaan acak apa yang paling kerasa bedanya dibanding awal kita kenal?",
                hint: "Bahas sebentar, lalu tes ketepatan jam begadang kalian lewat game!",
                miniGame: {
                    type: "tebak-jam",
                    badge: "MINI GAME #04 // TEBAK JAM ARSIP",
                    title: "Cocokkan Momen dengan Jam Kejadiannya",
                    desc: "Tebak kapan momen legendaris ini terekam di log chat kita!",
                    rounds: [
                        { label: "IG Note 'UUU SAYA SIAP MEN TUTOR'", choices: ["01.43 WIB", "14.01 WIB"], correct: "01.43 WIB" },
                        { label: "Insiden DM 'PRANKK -> RARA IH'", choices: ["22.10 WIB", "08.33 WIB"], correct: "22.10 WIB" },
                        { label: "Sesi Khodam Silaturahmi", choices: ["22.58 WIB", "16.59 WIB"], correct: "22.58 WIB" }
                    ]
                }
            }
        },
        {
            id: "pos-14",
            biome: 3,
            postNum: "14",
            altitude: "1.520 mdpl",
            date: "17 Okt 2026",
            title: "Pintu Rahasia Akun Second: Kontrak Tak Tertulis",
            vignette: "moon-angel",
            pullQuote: "\"Kesalahan engkau wahai bidadari, adalah menjalin kontak dengan sang gila.\"",
            lines: [
                "Entah angin apa yang bawa obrolan akun second ber berry x jiddan side. tiba-tiba dibuka pakai kalimat paling gak ada konteks."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "17 Okt 2026",
                    prompt: "Inget gak perkenalan paling gak jelas di akun second?",
                    messages: [
                        { from: "rara", text: "emg gila", time: "20:15" },
                        { from: "jay", text: "halo ini siapa ya? maaf, tiba tiba bgt ngatain gila", time: "20:27" },
                        { from: "rara", text: "bidadari", time: "20:35" },
                        { from: "jay", text: "OMG AM I TALKING WITH AN ANGEL?", time: "20:43" },
                        { from: "jay", text: "kubeliin, trus kukasih kamu, jdi hak milik kamu, trus kucuri", time: "21:06" },
                        { from: "jay", text: "kesalahan engkau wahai bidadari, adalah menjalin kontak dengan sang gila", time: "21:13" },
                        { from: "jay", text: "perlahan kontak tersebut berubah menjadi kontrak tak tertulis", time: "21:13" },
                        { from: "rara", text: "tidak adil rasanya jika kontrak dilakukan tanpa persetujuan kedua pihak", time: "21:25" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 14 // Status kontrak tak tertulis ber berry x jiddan side.:",
                options: [
                    { label: "Setuju & dilanjutkan!", reply: "Kontrak resmi lanjut ke obrolan akun second berikutnya." },
                    { label: "Bidadari vs Sang Gila", reply: "Pembukaan paling dramatis sepanjang sejarah akun second!" }
                ]
            }
        },
        {
            id: "pos-15",
            biome: 3,
            postNum: "15",
            altitude: "1.630 mdpl",
            date: "18-19 Okt 2026",
            title: "Era Saling Panggil \"Kebo\" & Diskusi Kopi vs Matcha",
            vignette: "teacup-stars",
            pullQuote: "\"Ak sekali minum kopi gaisa tidur\" dibalas \"kaka noh kebo\".",
            lines: [
                "Baru sehari kenalan lewat akun second, kosakata ejekannya langsung nambah, lanjut obrolan tengah malam soal kopi dan matcha."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "18 Okt 2026",
                    prompt: "Reaksi saat baru bangun setengah sadar:",
                    messages: [
                        { from: "jay", text: "jgn tnya kpnjgn fk, ak baru bgt bgn tidur.. ni mata msi stngh sadar", time: "08:18" },
                        { from: "rara", text: "kebo kebo", time: "08:22" }
                    ]
                },
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "19 Okt 2026",
                    prompt: "Lanjut jam 12 malam bahas kafein dan giliran balas dendam:",
                    messages: [
                        { from: "jay", text: "klo matcha?", time: "00:04" },
                        { from: "rara", text: "gaa, kan ga kopi", time: "00:04" },
                        { from: "rara", text: "ak sekali minum kopi gaisa tidur", time: "00:05" },
                        { from: "rara", text: "kaka noh kebo", time: "00:36" },
                        { from: "jay", text: "IDIH meremehkan", time: "00:36" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 15 // Pilih minuman wajib teman begadang:",
                options: [
                    { label: "Matcha manis", reply: "Aman buat mata dan tetap ramah di jam tidur!" },
                    { label: "Kopi anti ngantuk", reply: "Resiko langsung melek sampai subuh!" }
                ]
            }
        },
        {
            id: "pos-16",
            biome: 3,
            postNum: "16",
            altitude: "1.740 mdpl",
            date: "22-23 Okt 2026",
            title: "Dua Gelas Es, Telepon 1 Jam 22 Menit, & Selfie Locket",
            vignette: "teacup-stars",
            pullQuote: "Dari dua gelas es sore hari sampai telpon 1.22.46 yang gak terasa lewat tengah malam.",
            lines: [
                "Dari dua gelas es buat nemenin nugas sore tanggal 22 Oktober, lanjut telepon panjang 1 jam 22 menit 46 detik lewat tengah malam, sampai selfie kacamata di Locket."
            ],
            photos: [
                {
                    src: "assets/moment-coffee-oct22.jpg",
                    alt: "Dua gelas minuman es di meja sore 22 Oktober 2026",
                    caption: "22 Okt: Bekal sore sebelum nugas"
                },
                {
                    src: "assets/moment-wa-call.jpg",
                    alt: "Tangkapan layar panggilan WhatsApp berdurasi 1 jam 22 menit 46 detik",
                    caption: "22 Okt: Bukti call 1.22.46",
                    contain: true
                },
                {
                    src: "assets/moment-selfie-oct23.jpg",
                    alt: "Foto Locket berdua memakai kacamata tanggal 23 Oktober 2026",
                    caption: "23 Okt: Arsip Locket kacamata"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 16 // Pas call 1 jam 22 menit itu terasa sebentar atau lama?",
                options: [
                    { label: "Tau-tau udah jam satu aja", reply: "Tandanya ngobrolnya emang gak kerasa sama sekali!" },
                    { label: "Pengen ulangi lagi", reply: "Masih banyak topik seru buat dibahas berikutnya." }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #05 // LEMBAH BIDADARI",
                teaser: "Flashback ke telpon 1.22.46 plus Tes Telepati 3-2-1 Sebut Bareng!",
                question: "Di call tengah malam 1 jam 22 menit itu, masih inget gak kita bahas apa aja sampai gak sadar udah lewat jam satu? Sebenarnya siapa yang paling susah tidur duluan di antara kita?",
                hint: "Tatap jam 3-2-1 lalu jawab 3 pertanyaan telepati secara bersamaan!",
                miniGame: {
                    type: "kompak-123",
                    badge: "MINI GAME #05 // TES TELEPATI 3-2-1",
                    title: "Sebut Bareng Dalam Hitungan 3-2-1!",
                    desc: "Untuk tiap tema, hitung 3-2-1 bareng Jay lalu sebut satu jawaban. Klik hasilnya!",
                    prompts: [
                        "Sebutkan 1 minuman favorit buat nemenin nugas!",
                        "Sebutkan 1 tempat jalan bareng yang pengen diulang!",
                        "Sebutkan 1 hal pertama yang terlintas kalau denger kata 'Merbabu'!"
                    ]
                }
            }
        },
        {
            id: "pos-17",
            biome: 3,
            postNum: "17",
            altitude: "1.840 mdpl",
            date: "26 Okt 2026",
            title: "\"Modus Mau Mutual Discord\"",
            vignette: "headset-waves",
            pullQuote: "\"Wait, ak download dlu, ak aj g pernah main.\"",
            lines: [
                "Sebelum akhirnya betah berjam-jam di voice channel, dulunya kamu sampai harus download Discord dulu dari nol."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "26 Okt 2026",
                    prompt: "Inget gak momen ngajak mutualan Discord ini?",
                    messages: [
                        { from: "jay", text: "yang biasanya aneh aneh kamu gak si", time: "21:58" },
                        { from: "rara", text: "APA YA?", time: "21:59" },
                        { from: "rara", text: "di discord kah", time: "21:59" },
                        { from: "jay", text: "kwkw modus mau mutual discord ini", time: "21:59" },
                        { from: "rara", text: "wait, ak donwload dlu", time: "21:59" },
                        { from: "rara", text: "ak aj g pernah main", time: "21:59" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 17 // Plot twist terbesar setelah download Discord:",
                options: [
                    { label: "Jadi Study Room 5 jam+", reply: "Dari gak pernah main jadi basecamp ambis & nobar!" },
                    { label: "Mutualan paling sukses", reply: "Best download tahun ini!" }
                ]
            }
        },
        {
            id: "pos-18",
            biome: 3,
            postNum: "18",
            altitude: "1.940 mdpl",
            date: "29-30 Okt 2026",
            title: "Spotify Blend 100%, Plot Horor Novel, & Typo \"Lau Bercerita\"",
            vignette: "headset-waves",
            pullQuote: "Spotify Blend 100% cocok, lanjut ajakan 'lau bercerita' di malam sebelum bioskop.",
            lines: [
                "Tanggal 29 Oktober, Spotify Blend JyZ + Rara tembus 100% cocok lewat lagu La La Lost You, lalu disambung bahasan cerita horor sampai typo pas ngajak nonton keesokan malamnya."
            ],
            photos: [
                {
                    src: "assets/moment-spotify.jpg",
                    alt: "Spotify Blend JyZ dan Rara 100 persen cocok",
                    caption: "29 Okt: Spotify Blend 100% cocok (La La Lost You)",
                    contain: true
                }
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "30 Okt 2026",
                    prompt: "Dua obrolan kocak tanggal 30 Oktober sebelum berangkat bioskop:",
                    messages: [
                        { from: "rara", text: "novel, di nikahin diem2, HOROR BGT GILA", time: "00:36" },
                        { from: "rara", text: "habis ini gw ganti nama, liat aj", time: "00:36" },
                        { from: "rara", text: "pa mau nonton", time: "20:48" },
                        { from: "rara", text: "lau bercerita", time: "20:48" },
                        { from: "jay", text: "HIIII apipi ril date", time: "20:48" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 18 // Skor Spotify Blend kita yang tembus 100% lagu andalannya:",
                options: [
                    { label: "La La Lost You", reply: "Auto masuk playlist wajib setiap lagi nugas bareng." },
                    { label: "Judul baru 'Lau Bercerita'", reply: "Tetep berangkat nonton walaupun judulnya kepeleset dikit." }
                ]
            }
        },
        {
            id: "pos-19",
            biome: 3,
            postNum: "19",
            altitude: "2.040 mdpl",
            date: "31 Okt 2026",
            title: "The Park XXI Kursi D9-D10, Mirror Selfie, & Kucing Oren",
            vignette: "moon-angel",
            pullQuote: "Row D9 & D10 di The Park XXI, mirror selfie habis nonton, dan kucing oren wajib.",
            lines: [
                "Besoknya beneran berangkat ke The Park Semarang XXI duduk di baris D9 dan D10, ditutup mirror selfie plus ketemu satu kucing oren numpang eksis."
            ],
            photos: [
                {
                    src: "assets/moment-laut-tickets.jpg",
                    alt: "Dua tiket bioskop The Park Semarang XXI baris D nomor 9 dan 10",
                    caption: "31 Okt: Tiket bioskop XXI Row D9 & D10"
                },
                {
                    src: "assets/moment-mirror-oct31.jpg",
                    alt: "Mirror selfie berdua setelah menonton 31 Oktober 2026",
                    caption: "31 Okt: Mirror selfie habis nonton"
                },
                {
                    src: "assets/moment-orange-cat.webp",
                    alt: "Kucing oranye lucu yang ditemui Rara",
                    caption: "Penampakan wajib: kucing oren"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 19 // Bagian terbaik hari nonton tanggal 31 Oktober:",
                options: [
                    { label: "Mirror selfie & D9-D10", reply: "Tiketnya masih tersimpan rapi di arsip!" },
                    { label: "Kucing oren lewat", reply: "Gak sah pulang kalau belum motret kucing di jalan." }
                ]
            }
        },
        {
            id: "pos-20",
            biome: 3,
            postNum: "20",
            altitude: "2.150 mdpl",
            date: "01 Nov 2026",
            title: "Ambis 5 Jam 47 Menit, Dunia Fairy Tale & Morikei, Wave to Earth, & Pinned Chat",
            vignette: "moon-angel",
            pullQuote: "\"Soon nantikan akun ku yg isinya konten otd fairy tale, morikei, shoujoo yeaa.\"",
            lines: [
                "Jam dua pagi tanggal 1 November kamu cerita soal impian akun bertema fairy tale, morikei, shoujo, kangen Studio Ghibli, sampai cerita musik dari ayah dan wave to earth. Sorenya kita tembus 5 jam 47 menit di Discord SIPALING AMBIS KEJAR KARIR."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "01 Nov 2026",
                    prompt: "Obrolan jam 02.29 pagi tentang dunia impian & pesan ter-pin:",
                    messages: [
                        { from: "rara", text: "aamiinn, soon nantikan akun ku yg isinya konten otd fairy tale, morikei, shoujoo yeaa", time: "02:29" },
                        { from: "jay", text: "YEAAAA", time: "02:29" },
                        { from: "rara", text: "KANGEN NONTON GHIBLI DEH", time: "02:31" },
                        { from: "jay", text: "UJIAN DLU WE", time: "02:32" },
                        { from: "rara", text: "alasan ak suka wave to earth, esemka merubah playlist alay gweh, tdk sia2 mengikuti arahan ayah", time: "02:33" },
                        { from: "jay", text: "nurut sama ayah, jangan bikin kecewa beliau ya", time: "02:35" },
                        { from: "rara", text: "kaka tu emg pendengar yg baik", time: "02:36" },
                        { from: "jay", text: "i will", time: "02:37" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/moment-discord-study.jpg",
                    alt: "Tangkapan layar panggilan Discord Study Room 5 jam 47 menit",
                    caption: "Discord Study Room 1: 5 jam 47 menit",
                    contain: true
                },
                {
                    src: "assets/moment-berberry-pin.jpg",
                    alt: "Pesan terpin di akun ber berry: kaka tu emg pendengar yg baik",
                    caption: "Pesan yang diam-diam di-pin",
                    contain: true
                }
            ],
            secretNote: "Seluruh estetika dongeng, lentera, warna berry senja, dan puncak bintang di halaman ini terinspirasi langsung dari ceritamu jam 02.29 pagi ini.",
            quickGame: {
                prompt: "Selingan Pos 20 // Lagu atau vibe paling pas buat sesi Study Room 5 jam:",
                options: [
                    { label: "Playlist Wave to Earth", reply: "Bikin suasana fokus tapi tetap hangat sampai jam 02.30 pagi." },
                    { label: "Dunia Fairy Tale & Morikei", reply: "Estetika utamanya langsung menginspirasi web ini!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #06 // LANGIT MORIKEI",
                teaser: "Ngomongin akun konten fairy tale impianmu plus game Susun Kata Typo!",
                question: "Kalau akun konten bertema fairy tale & morikei impianmu udah mulai jalan nanti, lokasi atau konsep outfit pertama apa yang paling pengin kamu wujudin?",
                hint: "Habis bahas lokasi pemotretan pertama, coba susun 3 frasa legenda kita!",
                miniGame: {
                    type: "susun-typo",
                    badge: "MINI GAME #06 // SUSUN KATA LORE",
                    title: "Rangkai Ulang 3 Frasa Legendaris",
                    desc: "Pilih kata yang tepat untuk melengkapi potongan frasa ikonik kita!",
                    puzzles: [
                        { prefix: "pa mau nonton ___", choices: ["lau bercerita", "sang gila"], answer: "lau bercerita" },
                        { prefix: "canggung + canggung = ___", choices: ["nerveous", "cabggung"], answer: "nerveous" },
                        { prefix: "call me rara not ___", choices: ["semprul", "kebo"], answer: "semprul" }
                    ]
                }
            }
        },
        {
            id: "pos-21",
            biome: 4,
            postNum: "21",
            altitude: "2.240 mdpl",
            date: "02 & 04 Nov 2026",
            title: "Atedoz Library Theme, Red Berry Tea, & #sayapunyakamera",
            vignette: "camera-stars",
            pullQuote: "\"Aku punya banyak bahan kontenn muncakk\" -> \"boleh #sayapunyakamera\".",
            lines: [
                "Tanggal 2 November kita nugas bareng sambil minum Red Berry Tea dan foto bertema perpustakaan di Atedoz November Coffee. Dua hari kemudian, wacana bawa kamera ke Merbabu rame lagi."
            ],
            photos: [
                {
                    src: "assets/moment-library-booth.jpg",
                    alt: "Strip photobooth Atedoz Library Theme berdua pada 2 November 2026",
                    caption: "Atedoz Photobooth: Library Theme"
                },
                {
                    src: "assets/moment-redberry-nov2.jpg",
                    alt: "Meja kafe dengan dua minuman termasuk Red Berry Tea tanggal 2 November 2026",
                    caption: "02 Nov: Red Berry Tea & lanyard BINUS"
                }
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "04 Nov 2026",
                    prompt: "Inget gak pas bahas bahan konten muncak?",
                    messages: [
                        { from: "rara", text: "aku punya banyak bahan kontenn muncakk", time: "13:22" },
                        { from: "jay", text: "boleh #sayapunyakamera", time: "13:22" },
                        { from: "rara", text: "HOYY", time: "13:23" },
                        { from: "rara", text: "benerab meebabu?", time: "13:23" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 21 // Tugas wajib pemilik tagar #sayapunyakamera saat trip nanti:",
                options: [
                    { label: "Motoin konten Rara terus", reply: "Kamera udah siap tempur sejak zaman FYP!" },
                    { label: "Gantian foto berdua", reply: "Biar gak cuma candid, tapi banyak stok foto bareng juga." }
                ]
            }
        },
        {
            id: "pos-22",
            biome: 4,
            postNum: "22",
            altitude: "2.320 mdpl",
            date: "07 Nov 2026",
            title: "Protes Resmi: \"Call Me Rara Not Semprul\"",
            vignette: "quill-arch",
            pullQuote: "\"Call me rara not semprul\" -> \"tpi cute loh\".",
            lines: [
                "Tanggal 7 November malam akhirnya keluar nota protes resmi dari akun ber berry gara-gara dipanggil semprul."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry",
                    date: "07 Nov 2026",
                    prompt: "Protes resmi soal panggilan:",
                    messages: [
                        { from: "jay", text: "kenapa si semprul kok marah marah?", time: "20:36" },
                        { from: "rara", text: "call me rara not semprul", time: "20:37" },
                        { from: "jay", text: "tpi cute loh", time: "20:44" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 22 // Pilih julukan yang boleh dipakai sekarang:",
                options: [
                    { label: "Rara saja (resmi)", reply: "Baik Tuan Putri Rara, resmi dicatat!" },
                    { label: "Semprul pas lagi bercanda", reply: "Tetep cute kok kata arsip chat jam 20.44." }
                ]
            }
        },
        {
            id: "pos-23",
            biome: 4,
            postNum: "23",
            altitude: "2.400 mdpl",
            date: "09 Nov 2026",
            title: "Tagar #SIAPJDIPENDAMPING Belajar Bahasa Inggris",
            vignette: "quill-arch",
            pullQuote: "\"Kalo mau ditemenin belajar kyk jadi pendamping fine fine aja #SIAPJDIPENDAMPING.\"",
            lines: [
                "Dua hari berselang giliran bahas rencana nemenin belajar Bahasa Inggris bareng tanpa kesan menggurui."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "09 Nov 2026",
                    prompt: "Inget gak janji jadi pendamping belajar Bahasa Inggris ini?",
                    messages: [
                        { from: "rara", text: "bolehh", time: "18:00" },
                        { from: "jay", text: "bisaaa, tpi aku gabisa yg kayak tutor english gitu woeee itu butuh skill, tpi kalo mau ditemenin belajar kyk jadi pendamping fine fine aja #SIAPJDIPENDAMPING", time: "18:01" },
                        { from: "jay", text: "english", time: "18:01" },
                        { from: "rara", text: "iya juga", time: "18:01" },
                        { from: "rara", text: "yauda", time: "18:02" }
                    ]
                }
            ],
            secretNote: "Tagar #SIAPJDIPENDAMPING resmi tercatat di arsip: kapan pun butuh teman belajar atau diskusi, pintu selalu kebuka.",
            quickGame: {
                prompt: "Selingan Pos 23 // Agenda perdana kelas #SIAPJDIPENDAMPING:",
                options: [
                    { label: "Practice speaking santai", reply: "Biar lancar ngobrol bareng sambil ngopi atau Study Room." },
                    { label: "Nonton film sub English", reply: "Belajar paling ampuh sambil nonton Ghibli atau fantasi!" }
                ]
            }
        },
        {
            id: "pos-24",
            biome: 4,
            postNum: "24",
            altitude: "2.480 mdpl",
            date: "15 Nov 2026",
            title: "Nobar Fantasi Tengah Malam di Discord",
            vignette: "headset-waves",
            pullQuote: "Dari Study Room kejar karir jadi bioskop mini Fantastic Beasts pukul 23.42.",
            lines: [
                "Tanggal 15 November jam 23.42 malam, channel Discord Study Room 1 berubah fungsi dari tempat kejar karir jadi bioskop mini buat nobar dunia sihir Fantastic Beasts."
            ],
            photos: [
                {
                    src: "assets/moment-discord-movie.jpg",
                    alt: "Layar Discord Study Room 1 Jay dan Raraw sedang streaming film",
                    caption: "15 Nov 23.42: Jay. & Raraw di Discord",
                    contain: true
                },
                {
                    src: "assets/moment-movie-screen.jpg",
                    alt: "Layar laptop memutar adegan Fantastic Beasts di malam hari",
                    caption: "15 Nov 23.42: Adegan Fantastic Beasts"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 24 // Antrean tontonan nobar berikutnya:",
                options: [
                    { label: "Maraton Studio Ghibli", reply: "Dari Howl's Moving Castle sampai Spirited Away siap diputar!" },
                    { label: "Lanjut film dunia sihir", reply: "Tinggal atur jam call malam di Study Room 1!" }
                ]
            }
        },
        {
            id: "pos-25",
            biome: 4,
            postNum: "25",
            altitude: "2.560 mdpl",
            date: "13-18 Nov 2026",
            title: "Ramen Hangat, Dua Kartu Flazz, & Kamera Perpustakaan",
            vignette: "camera-stars",
            pullQuote: "\"Setiap ad kamera ada rara\" dari mangkuk ramen sampai sudut perpus.",
            lines: [
                "Pertengahan November penuh momen kecil yang hangat: berburu semangkuk ramen bareng, foto dua kartu Flazz berdampingan tanggal 17 November, lalu esoknya kamera langsung diarahkan ke kamu di perpustakaan."
            ],
            photos: [
                {
                    src: "assets/moment-ramen.jpg",
                    alt: "Dua mangkuk ramen hangat",
                    caption: "Misi cari mie hangat"
                },
                {
                    src: "assets/moment-flazz-nov17.jpg",
                    alt: "Dua kartu Flazz BINUS berdampingan tanggal 17 November 2026",
                    caption: "17 Nov: Dua kartu Flazz sebelahan",
                    contain: true
                },
                {
                    src: "assets/moment-camera.jpg",
                    alt: "Rara memegang kamera di perpustakaan",
                    caption: "18 Nov: 'setiap ad kamera ada rara'"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 25 // Misi cari makan paling gampang bikin happy berdua:",
                options: [
                    { label: "Semangkuk ramen hangat!", reply: "Cocok buat mengembalikan energi habis keliling kampus." },
                    { label: "Foto booth & hunting spot", reply: "Kamera siap, kartu Flazz juga selalu berdampingan." }
                ]
            }
        },
        {
            id: "pos-26",
            biome: 4,
            postNum: "26",
            altitude: "2.630 mdpl",
            date: "20 Nov 2026",
            title: "Totalitas Recreate 5 Ekspresi Meme Kita",
            vignette: "camera-stars",
            pullQuote: "Lima pose ikonik: dari setengah hati vs jempol sampai doa penuh penghayatan.",
            lines: [
                "Malam 20 November mungkin salah satu sesi paling niat sepanjang sejarah kita kenalan: bikin ulang 5 ekspresi meme terkenal sekaligus dalam satu malam!"
            ],
            photos: [
                {
                    src: "assets/moment-meme-heart.jpg",
                    alt: "Recreate meme tangan setengah hati dibalas jempol",
                    caption: "20 Nov: Half-heart vs jempol"
                },
                {
                    src: "assets/moment-meme-hand.jpg",
                    alt: "Recreate meme berbicara pada layar ponsel sambil mengacungkan tangan",
                    caption: "20 Nov: Sibuk main HP"
                },
                {
                    src: "assets/moment-meme-cat.jpg",
                    alt: "Recreate meme singa teriak dan kucing",
                    caption: "20 Nov: Singa dan kucing"
                },
                {
                    src: "assets/moment-meme-monkey.jpg",
                    alt: "Recreate meme monyet kaget",
                    caption: "20 Nov: Monyet bengong"
                },
                {
                    src: "assets/moment-meme-pray.jpg",
                    alt: "Recreate meme dua orang menutup mata berdoa dan pasrah",
                    caption: "20 Nov: Doa penuh penghayatan"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 26 // Dari ke-5 recreate meme 20 November, juara akting jatuh ke:",
                options: [
                    { label: "Half-heart vs Jempol", reply: "Paling sering terjadi di dunia nyata nih posenya!" },
                    { label: "Singa, Monyet & Doa Pasrah", reply: "Ekspresinya dapet banget sampai bikin ngakak gak berhenti." }
                ]
            }
        },
        {
            id: "pos-27",
            biome: 4,
            postNum: "27",
            altitude: "2.700 mdpl",
            date: "21-27 Nov 2026",
            title: "Puncak 27 & Typo Legendaris: \"What This Is Cui\"",
            vignette: "summit-crown",
            pullQuote: "\"Manual, di kos ku gaada mesin cucu\" -> \"cui, what this is cui\".",
            lines: [
                "Di titik tertinggi Pos 27 menuju 27 November ini, kita tutup perjalanan panjang dari kamera FYP BINUS dengan satu typo paling legendaris yang bikin ketawa bareng."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "21 Nov 2026",
                    prompt: "Inget gak typo hari ini sebelum puncak?",
                    messages: [
                        { from: "jay", text: "sumpah ini baju ku ga kejemur2 dari kemaren", time: "14:35" },
                        { from: "rara", text: "nyuci pake mesin cuci? ap manual", time: "14:36" },
                        { from: "jay", text: "manual, di kos ku gaada mesin cucu", time: "14:36" },
                        { from: "jay", text: "cui", time: "14:36" },
                        { from: "jay", text: "cuci", time: "14:36" },
                        { from: "rara", text: "cui", time: "14:37" },
                        { from: "rara", text: "what this is cui", time: "14:37" }
                    ]
                }
            ],
            footnote: "Dari canggung setengah mati di bulan Agustus sampai ketawa gara-gara 'mesin cucu'... selamat sampai di Puncak 27!",
            quickGame: {
                prompt: "Selingan Pos 27 // Predikat tertinggi buat typo sepanjang Agustus - November:",
                options: [
                    { label: "What this is cui (Juara 1)", reply: "Resmi dinobatkan menjadi kosakata penutup di Puncak 27!" },
                    { label: "Mesin cucu di kosan", reply: "Semoga habis ini bajunya cepet kering ya!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #07 // MAHKOTA PUNCAK 27",
                teaser: "Penutup 27 Pos sebelum baca Surat Puncak 27 & sesi Photobooth Berdua!",
                question: "Kalau seluruh perjalanan 27 pos kita dari Agustus sampai hari ini dijadiin satu judul cerita fantasi atau film Ghibli, kira-kira judul apa yang paling cocok menurut kalian berdua?",
                hint: "Simpan judul kalian, lalu putar tantangan Puncak 27 sebelum berpose di photobooth!",
                miniGame: {
                    type: "roda-tantangan",
                    badge: "MINI GAME #07 // PUTAR TANTANGAN PUNCAK",
                    title: "Putar Tantangan Seru Berdua Sebelum Surat & Photobooth!",
                    desc: "Klik tombol putar untuk dapat 1 tantangan spontan buat kalian lakukan bareng hari ini.",
                    dares: [
                        "Bikin 1 pose recreate meme paling kocak langsung di Photobooth bawah nanti!",
                        "Sebutkan secara bergantian 1 hal yang paling bikin bersyukur bisa kenal sejak Agustus.",
                        "Pilih 1 judul film Studio Ghibli / fantasi buat jadwal nobar Discord terdekat!",
                        "Foto high-five atau half-heart vs jempol tepat setelah baca Surat Puncak 27!",
                        "Tulis kesan rahasia paling jujur di kolom Catatan Rara buat Kartu Rangkuman PNG!"
                    ]
                }
            }
        }
    ];

    const QUICK_FILL_PHOTOS = [
        "assets/moment-library-booth.jpg",
        "assets/moment-camera.jpg",
        "assets/moment-selfie-oct23.jpg",
        "assets/moment-mirror-oct31.jpg"
    ];

    const STRIP_PALETTES = {
        parchment: {
            bg: "#F6F0E3",
            card: "#FFFDF8",
            mat: "#FAF5E8",
            border: "#784D0C",
            foil: "#D8A84E",
            accent: "#0F4D5A",
            accentSoft: "#E1F0F2",
            wax: "#8F2631",
            text: "#1A1720",
            muted: "#4A4252",
            stamp: "#8F2631"
        },
        lantern: {
            bg: "#FAF0E2",
            card: "#FFF9F0",
            mat: "#FBF3E4",
            border: "#763416",
            foil: "#D89B3C",
            accent: "#784D0C",
            accentSoft: "#F5E7D2",
            wax: "#8F2631",
            text: "#1A1720",
            muted: "#4A4252",
            stamp: "#763416"
        },
        berry: {
            bg: "#1D1426",
            card: "#291D35",
            mat: "#352645",
            border: "#C996BE",
            foil: "#F3D695",
            accent: "#F09BB0",
            accentSoft: "#3E2C4F",
            wax: "#BA3846",
            text: "#FAF6EE",
            muted: "#D9CBE4",
            stamp: "#EDC46E"
        },
        summit: {
            bg: "#0D1322",
            card: "#151D30",
            mat: "#1E2842",
            border: "#7E97C2",
            foil: "#F3D695",
            accent: "#EDC46E",
            accentSoft: "#22304D",
            wax: "#BA3846",
            text: "#F4EFE4",
            muted: "#C4CEE0",
            stamp: "#9BC4F8"
        }
    };

    const LIGHTBOX_GALLERY = [];
    TRAIL_CHECKPOINTS.forEach((cp) => {
        if (Array.isArray(cp.photos)) {
            cp.photos.forEach((photo) => {
                LIGHTBOX_GALLERY.push({
                    src: photo.src,
                    alt: photo.alt,
                    title: cp.title,
                    meta: `POS ${cp.postNum} // ${cp.altitude} // ${cp.date}`,
                    caption: photo.caption
                });
            });
        }
    });

    /**
     * Compiles all 42 ordered full-screen pages cleanly from real milestones & checkpoints.
     */
    function buildDeckPages() {
        const pages = [];
        pages.push({
            id: "onboarding",
            type: "onboarding",
            biome: 1,
            altitude: "0 mdpl",
            groupLabel: "PEMBUKAAN",
            title: "Sambutan Ekspedisi 27",
            shortLabel: "Sambutan Segel 27"
        });
        pages.push({
            id: "kuis",
            type: "quiz",
            biome: 1,
            altitude: "50 mdpl",
            groupLabel: "PEMBUKAAN",
            title: "Kuis Pemanasan Basecamp",
            shortLabel: "Kuis 7 Langkah"
        });

        let restCount = 0;
        let photoSpreadToggle = 0;

        [1, 2, 3, 4].forEach((bId) => {
            const meta = BIOME_META[bId];
            pages.push({
                id: `alam-${bId}`,
                type: "realm-intro",
                biome: bId,
                altitude: bId === 1 ? "100 mdpl" : bId === 2 ? "780 mdpl" : bId === 3 ? "1.520 mdpl" : "2.240 mdpl",
                groupLabel: meta.groupLabel,
                title: meta.title,
                shortLabel: `Intro ${meta.shortName}`
            });

            TRAIL_CHECKPOINTS.filter((cp) => cp.biome === bId).forEach((cp) => {
                const hasPhotos = Array.isArray(cp.photos) && cp.photos.length > 0;
                const hasChats = Array.isArray(cp.chats) && cp.chats.length > 0;
                let spreadVariant = "tarot-plate";
                if (hasPhotos && !hasChats) {
                    spreadVariant = "photo-focus";
                } else if (hasPhotos && hasChats) {
                    spreadVariant = photoSpreadToggle % 2 === 0 ? "split-chat" : "photo-focus";
                    photoSpreadToggle += 1;
                }

                pages.push({
                    id: cp.id,
                    type: "pos",
                    biome: cp.biome,
                    altitude: cp.altitude,
                    groupLabel: meta.groupLabel,
                    checkpoint: cp,
                    spreadVariant,
                    title: cp.title,
                    shortLabel: `Pos ${cp.postNum}: ${cp.title}`
                });

                if (cp.talkAfter) {
                    restCount += 1;
                    pages.push({
                        id: `istirahat-${restCount}`,
                        type: "rest-stop",
                        biome: cp.biome,
                        altitude: cp.altitude,
                        groupLabel: meta.groupLabel,
                        restNum: restCount,
                        talk: cp.talkAfter,
                        title: cp.talkAfter.badge,
                        shortLabel: `Istirahat #${String(restCount).padStart(2, "0")}: ${cp.talkAfter.miniGame.title}`
                    });
                }
            });
        });

        pages.push({
            id: "puncak",
            type: "letter",
            biome: 4,
            altitude: "2.700 mdpl",
            groupLabel: "PENUTUP PUNCAK 27",
            title: "Surat Puncak 27",
            shortLabel: "Surat Puncak 27"
        });
        pages.push({
            id: "photobooth",
            type: "photobooth",
            biome: 4,
            altitude: "2.700 mdpl",
            groupLabel: "PENUTUP PUNCAK 27",
            title: "Foto Berdua di Puncak",
            shortLabel: "Photobooth & Kartu PNG"
        });

        return pages.map((p, idx) => ({ ...p, index: idx }));
    }

    const DECK_PAGES = buildDeckPages();
    const pageNodeCache = new Map();

    const state = {
        theme: "light",
        currentPageIndex: 0,
        onboardingOpened: false,
        isBreakingSeal: false,
        quizStep: 0,
        quizAnswers: {},
        quizReactions: {},
        unlockedStamps: [],
        runawayAttempts: 0,
        ratingScore: 95,
        raraNote: "",
        shotCount: 3,
        timerSeconds: 3,
        stripTheme: "parchment",
        stripCaption: "Jay & Rara // Puncak 27",
        isMirrored: true,
        soundEnabled: false,
        photos: [null, null, null],
        compositeDataUrl: "",
        summaryDataUrl: "",
        cameraStatus: "idle",
        stream: null,
        videoDevices: [],
        activeDeviceId: null,
        isCapturing: false,
        captureAbortController: null,
        pendingSlotIndex: null,
        activeCardTab: "strip",
        dialogGalleryIndex: -1,
        dialogPreviewTarget: null,
        lastFocusedBeforeDialog: null,
        quickGameAnswers: {},
        posLeafTab: {},
        posLeafUnlocked: {},
        posPhotoIndex: {},
        posChatIndex: {},
        posChatVisibleCount: {},
        restTalkOpened: {},
        lastWheelFlipAt: 0,
        transitionSeq: 0,
        leaveCleanupTimer: null,
        enterCleanupTimer: null,
        flipCleanupTimer: null,
        chapterTransitionSeq: 0,
        chapterPortalTimer: null,
        cascadeCleanupTimer: null,
        warpCleanupTimer: null
    };

    let ambientWorldApi = {
        triggerChapterBurst: () => {},
        activeBurstCount: () => 0
    };

    const el = {
        root: document.documentElement,
        deckApp: document.getElementById("deck-app"),
        worldStage: document.getElementById("living-world-stage"),
        ambientCanvas: document.getElementById("ambient-world-canvas"),
        bookStage3d: document.getElementById("bookStage3d"),
        bookTome: document.getElementById("bookTome"),
        bookCornerPrev: document.getElementById("bookCornerPrev"),
        bookCornerNext: document.getElementById("bookCornerNext"),
        bookTurnShadow: document.getElementById("bookTurnShadow"),
        bookFlipLeaf: document.getElementById("bookFlipLeaf"),
        flipFrontTag: document.getElementById("flipFrontTag"),
        flipFrontPg: document.getElementById("flipFrontPg"),
        flipFrontKicker: document.getElementById("flipFrontKicker"),
        flipFrontTitle: document.getElementById("flipFrontTitle"),
        flipBackTag: document.getElementById("flipBackTag"),
        flipBackPg: document.getElementById("flipBackPg"),
        flipBackKicker: document.getElementById("flipBackKicker"),
        flipBackTitle: document.getElementById("flipBackTitle"),
        bookCascadeLeaves: document.getElementById("bookCascadeLeaves"),
        chapterPortalOverlay: document.getElementById("chapterPortalOverlay"),
        portalEmblem: document.getElementById("portalEmblem"),
        portalKicker: document.getElementById("portalKicker"),
        portalTitle: document.getElementById("portalTitle"),
        portalSubtitle: document.getElementById("portalSubtitle"),
        deckViewport: document.getElementById("deck-viewport"),
        goHomeBtn: document.getElementById("goHomeBtn"),
        hudContextPill: document.getElementById("hudContextPill"),
        realmTrackBtns: document.querySelectorAll(".realm-track-btn"),
        openAtlasBtn: document.getElementById("openAtlasBtn"),
        audioToggleBtn: document.getElementById("audioToggleBtn"),
        audioToggleLabel: document.getElementById("audioToggleLabel"),
        themeToggle: document.getElementById("themeToggle"),
        themeToggleLabel: document.getElementById("themeToggleLabel"),
        openHandoffBtn: document.getElementById("openHandoffBtn"),
        pageOnboarding: document.getElementById("page-onboarding"),
        waxSealTrigger: document.getElementById("waxSealTrigger"),
        pageQuiz: document.getElementById("page-quiz"),
        skipQuizBtn: document.getElementById("skipQuizBtn"),
        quizStepLabel: document.getElementById("quizStepLabel"),
        quizProgressMeter: document.getElementById("quizProgressMeter"),
        quizProgressFill: document.getElementById("quizProgressFill"),
        quizEvidenceStateTag: document.getElementById("quizEvidenceStateTag"),
        quizStepQuestionArea: document.getElementById("quizStepQuestionArea"),
        quizStepEvidenceArea: document.getElementById("quizStepEvidenceArea"),
        prevQuizBtn: document.getElementById("prevQuizBtn"),
        resetQuizBtn: document.getElementById("resetQuizBtn"),
        nextQuizBtn: document.getElementById("nextQuizBtn"),
        pageLetter: document.getElementById("page-letter"),
        letterSavedSummary: document.getElementById("letterSavedSummary"),
        puncakStampsStatus: document.getElementById("puncak-stamps-status"),
        letterEditQuizBtn: document.getElementById("letterEditQuizBtn"),
        letterGoBoothBtn: document.getElementById("letterGoBoothBtn"),
        pagePhotobooth: document.getElementById("page-photobooth"),
        prevPageBtn: document.getElementById("prevPageBtn"),
        nextPageBtn: document.getElementById("nextPageBtn"),
        dockPageReadout: document.getElementById("dockPageReadout"),
        dockProgressFill: document.getElementById("dockProgressFill"),
        atlasDialog: document.getElementById("atlas-dialog"),
        atlasCountTag: document.getElementById("atlasCountTag"),
        stampChips: document.querySelectorAll("#passport-stamps .stamp-chip"),
        atlasPageList: document.getElementById("atlasPageList"),
        atlasCloseBtn: document.getElementById("atlasCloseBtn"),
        handoffDialog: document.getElementById("handoff-dialog"),
        handoffCloseBtn: document.getElementById("handoffCloseBtn"),
        waSelfBtn: document.getElementById("waSelfBtn"),
        copyUrlBtn: document.getElementById("copyUrlBtn"),
        handoffFeedback: document.getElementById("handoffFeedback"),
        cameraStatus: document.getElementById("cameraStatus"),
        cameraStatusText: document.getElementById("cameraStatusText"),
        cameraVideo: document.getElementById("cameraVideo"),
        shootBanner: document.getElementById("shootBanner"),
        shootBannerText: document.getElementById("shootBannerText"),
        countdownOverlay: document.getElementById("countdownOverlay"),
        countdownNumber: document.getElementById("countdownNumber"),
        flashOverlay: document.getElementById("flashOverlay"),
        cameraStatePanel: document.getElementById("cameraStatePanel"),
        cameraStateTitle: document.getElementById("cameraStateTitle"),
        cameraStateMessage: document.getElementById("cameraStateMessage"),
        startCameraBtn: document.getElementById("startCameraBtn"),
        uploadFallbackBtn: document.getElementById("uploadFallbackBtn"),
        manualFileInput: document.getElementById("manualFileInput"),
        shutterBtn: document.getElementById("shutterBtn"),
        shutterBtnLabel: document.getElementById("shutterBtnLabel"),
        fillFromMomentsBtn: document.getElementById("fillFromMomentsBtn"),
        switchCameraBtn: document.getElementById("switchCameraBtn"),
        shutterHint: document.getElementById("shutterHint"),
        shotRadios: document.querySelectorAll('input[name="shotCount"]'),
        timerRadios: document.querySelectorAll('input[name="timerSeconds"]'),
        themeRadios: document.querySelectorAll('input[name="stripTheme"]'),
        mirrorToggle: document.getElementById("mirrorToggle"),
        soundToggle: document.getElementById("soundToggle"),
        stripCaptionInput: document.getElementById("stripCaptionInput"),
        slotCounter: document.getElementById("slotCounter"),
        tabStripCard: document.getElementById("tabStripCard"),
        tabSummaryCard: document.getElementById("tabSummaryCard"),
        stripPanelView: document.getElementById("stripPanelView"),
        summaryPanelView: document.getElementById("summaryPanelView"),
        stripCode: document.getElementById("stripCode"),
        stripSlots: document.getElementById("stripSlots"),
        stripCanvas: document.getElementById("strip-canvas"),
        summaryCanvas: document.getElementById("summary-canvas"),
        stripEmptyNote: document.getElementById("stripEmptyNote"),
        downloadBtn: document.getElementById("downloadBtn"),
        previewBtn: document.getElementById("previewBtn"),
        resetBtn: document.getElementById("resetBtn"),
        actionFeedback: document.getElementById("actionFeedback"),
        summaryPreviewBody: document.getElementById("summaryPreviewBody"),
        downloadSummaryBtn: document.getElementById("downloadSummaryBtn"),
        previewSummaryBtn: document.getElementById("previewSummaryBtn"),
        shareWaSummaryBtn: document.getElementById("shareWaSummaryBtn"),
        summaryFeedback: document.getElementById("summaryFeedback"),
        lightboxDialog: document.getElementById("lightbox-dialog"),
        dialogMetaTag: document.getElementById("dialogMetaTag"),
        previewDialogTitle: document.getElementById("previewDialogTitle"),
        previewImage: document.getElementById("previewImage"),
        previewCaption: document.getElementById("previewCaption"),
        dialogNavGroup: document.getElementById("dialogNavGroup"),
        dialogPrevBtn: document.getElementById("dialogPrevBtn"),
        dialogNextBtn: document.getElementById("dialogNextBtn"),
        dialogDownloadBtn: document.getElementById("dialogDownloadBtn"),
        dialogCloseTop: document.getElementById("dialogCloseTop"),
        dialogCloseBottom: document.getElementById("dialogCloseBottom")
    };

    // Pre-register static persistent deck pages so form values, quiz state, and active camera stream survive flips.
    pageNodeCache.set(0, el.pageOnboarding);
    pageNodeCache.set(1, el.pageQuiz);
    pageNodeCache.set(DECK_PAGES.length - 2, el.pageLetter);
    pageNodeCache.set(DECK_PAGES.length - 1, el.pagePhotobooth);

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    /**
     * Procedural Web Audio soundscape generator for subtle biome ambience (ocean tide, forest breeze, alpine wind)
     * plus tactile UI, page-turn, stamp, and camera feedback with zero external audio files.
     */
    const SoundscapeEngine = (() => {
        let ctx = null;
        let masterGain = null;
        let noiseFilter = null;
        let lfoOsc = null;
        let lfoGain = null;
        let padOsc = null;
        let started = false;
        let activeBiome = 1;

        const BIOME_AUDIO = {
            1: { freq: 380, q: 0.7, lfoHz: 0.14, lfoDepth: 160, padHz: 196.0 },
            2: { freq: 560, q: 1.0, lfoHz: 0.21, lfoDepth: 110, padHz: 220.0 },
            3: { freq: 720, q: 0.85, lfoHz: 0.18, lfoDepth: 95, padHz: 246.94 },
            4: { freq: 860, q: 1.1, lfoHz: 0.24, lfoDepth: 130, padHz: 293.66 }
        };

        const PENTATONIC = [392.0, 440.0, 493.88, 587.33, 659.25, 783.99];

        function initGraph() {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) {
                return null;
            }
            if (!ctx) {
                ctx = new AudioCtx();
            }
            if (ctx.state === "suspended") {
                ctx.resume().catch(() => {});
            }
            if (started) {
                return ctx;
            }

            started = true;
            masterGain = ctx.createGain();
            masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
            masterGain.connect(ctx.destination);

            // Generate smooth 4-second pink-filtered ambient noise loop
            const len = Math.floor(ctx.sampleRate * 4);
            const buf = ctx.createBuffer(1, len, ctx.sampleRate);
            const ch = buf.getChannelData(0);
            let b0 = 0, b1 = 0, b2 = 0;
            for (let i = 0; i < len; i += 1) {
                const white = Math.random() * 2 - 1;
                b0 = 0.997 * b0 + white * 0.029;
                b1 = 0.985 * b1 + white * 0.032;
                b2 = 0.950 * b2 + white * 0.048;
                ch[i] = (b0 + b1 + b2 + white * 0.02) * 0.35;
            }

            const noiseSrc = ctx.createBufferSource();
            noiseSrc.buffer = buf;
            noiseSrc.loop = true;

            noiseFilter = ctx.createBiquadFilter();
            noiseFilter.type = "lowpass";
            noiseFilter.frequency.setValueAtTime(380, ctx.currentTime);
            noiseFilter.Q.setValueAtTime(0.7, ctx.currentTime);

            const noiseGain = ctx.createGain();
            noiseGain.gain.setValueAtTime(0.08, ctx.currentTime);

            lfoOsc = ctx.createOscillator();
            lfoOsc.type = "sine";
            lfoOsc.frequency.setValueAtTime(0.14, ctx.currentTime);
            lfoGain = ctx.createGain();
            lfoGain.gain.setValueAtTime(160, ctx.currentTime);
            lfoOsc.connect(lfoGain);
            lfoGain.connect(noiseFilter.frequency);

            padOsc = ctx.createOscillator();
            padOsc.type = "sine";
            padOsc.frequency.setValueAtTime(196, ctx.currentTime);
            const padGain = ctx.createGain();
            padGain.gain.setValueAtTime(0.014, ctx.currentTime);

            noiseSrc.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(masterGain);

            padOsc.connect(padGain);
            padGain.connect(masterGain);

            noiseSrc.start();
            lfoOsc.start();
            padOsc.start();
            applyBiomeParams(activeBiome);
            return ctx;
        }

        function applyBiomeParams(biomeId) {
            activeBiome = biomeId;
            if (!ctx || !started) {
                return;
            }
            const cfg = BIOME_AUDIO[biomeId] || BIOME_AUDIO[1];
            const t = ctx.currentTime;
            noiseFilter.frequency.setTargetAtTime(cfg.freq, t, 0.7);
            noiseFilter.Q.setTargetAtTime(cfg.q, t, 0.7);
            lfoOsc.frequency.setTargetAtTime(cfg.lfoHz, t, 0.7);
            lfoGain.gain.setTargetAtTime(cfg.lfoDepth, t, 0.7);
            padOsc.frequency.setTargetAtTime(cfg.padHz, t, 0.8);
        }

        function setEnabled(enabled) {
            state.soundEnabled = Boolean(enabled);
            if (state.soundEnabled) {
                const c = initGraph();
                if (c && masterGain) {
                    masterGain.gain.setTargetAtTime(0.5, c.currentTime, 0.25);
                }
            } else if (ctx && masterGain) {
                masterGain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.15);
            }
            syncAudioButtons();
        }

        function playTone(freq, duration = 0.24, volume = 0.06, type = "sine") {
            if (!state.soundEnabled) {
                return;
            }
            const c = initGraph();
            if (!c) {
                return;
            }
            const now = c.currentTime;
            const osc = c.createOscillator();
            const g = c.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, now);
            g.gain.setValueAtTime(0.001, now);
            g.gain.exponentialRampToValueAtTime(volume, now + 0.015);
            g.gain.exponentialRampToValueAtTime(0.0005, now + duration);
            osc.connect(g);
            g.connect(c.destination);
            osc.start(now);
            osc.stop(now + duration + 0.02);
        }

        return {
            setEnabled,
            setBiome: applyBiomeParams,
            playSealOpen() {
                if (!state.soundEnabled) {
                    return;
                }
                [261.63, 329.63, 392.0, 493.88].forEach((freq, idx) => {
                    window.setTimeout(() => playTone(freq, 0.55, 0.045, "sine"), idx * 75);
                });
            },
            playPageTurn(dir, idx) {
                const note = PENTATONIC[(idx + (dir === "prev" ? 2 : 0)) % PENTATONIC.length];
                playTone(note, 0.22, 0.032, "triangle");
            },
            playUiTap() {
                playTone(587.33, 0.08, 0.035, "sine");
            },
            playStampUnlock() {
                playTone(523.25, 0.22, 0.05, "sine");
                window.setTimeout(() => playTone(783.99, 0.34, 0.055, "sine"), 90);
            },
            playChapterFanfare(biomeId) {
                if (!state.soundEnabled) {
                    return;
                }
                const chords = {
                    1: [261.63, 329.63, 392.0, 523.25, 659.25],
                    2: [293.66, 369.99, 440.0, 587.33, 739.99],
                    3: [329.63, 415.3, 493.88, 659.25, 830.61],
                    4: [392.0, 493.88, 587.33, 783.99, 987.77]
                };
                const notes = chords[biomeId] || chords[1];
                notes.forEach((freq, idx) => {
                    window.setTimeout(() => {
                        playTone(freq, 0.58 + idx * 0.07, 0.04, idx % 2 === 0 ? "triangle" : "sine");
                    }, idx * 68);
                });
            },
            playTick() {
                playTone(660, 0.055, 0.075, "triangle");
            },
            playShutter() {
                if (!state.soundEnabled) {
                    return;
                }
                const c = initGraph();
                if (!c) {
                    return;
                }
                const now = c.currentTime;
                const size = Math.floor(c.sampleRate * 0.075);
                const buf = c.createBuffer(1, size, c.sampleRate);
                const ch = buf.getChannelData(0);
                for (let i = 0; i < size; i += 1) {
                    ch[i] = (Math.random() * 2 - 1) * Math.exp(-i / (size * 0.28));
                }
                const src = c.createBufferSource();
                src.buffer = buf;
                const filter = c.createBiquadFilter();
                filter.type = "bandpass";
                filter.frequency.setValueAtTime(1400, now);
                const g = c.createGain();
                g.gain.setValueAtTime(0.24, now);
                g.gain.exponentialRampToValueAtTime(0.001, now + 0.075);
                src.connect(filter);
                filter.connect(g);
                g.connect(c.destination);
                src.start(now);
            }
        };
    })();

    function syncAudioButtons() {
        const on = state.soundEnabled;
        if (el.audioToggleBtn) {
            el.audioToggleBtn.setAttribute("aria-pressed", String(on));
        }
        if (el.audioToggleLabel) {
            el.audioToggleLabel.textContent = on ? "Suara: Aktif" : "Suara: Mati";
        }
        if (el.soundToggle) {
            el.soundToggle.setAttribute("aria-pressed", String(on));
            el.soundToggle.textContent = on ? "Suara: Aktif" : "Suara: Mati";
        }
    }

    /**
     * Renders living biome-specific backdrop creatures, shooting stars, pointer sparkle trails, and chapter burst fireworks.
     */
    function initAmbientParticles() {
        const canvas = el.ambientCanvas;
        if (!canvas || reducedMotionQuery.matches) {
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        const TONES = {
            1: ["247, 213, 150", "126, 220, 224", "252, 168, 128"],
            2: ["248, 200, 122", "118, 212, 164", "243, 152, 74"],
            3: ["240, 155, 176", "243, 214, 149", "192, 168, 240"],
            4: ["250, 246, 238", "155, 196, 248", "243, 214, 149"]
        };

        let width = 0;
        let height = 0;
        let meteorCooldown = 80;
        let lastPointerSparkAt = 0;

        const motes = Array.from({ length: 48 }, (_, idx) => ({
            x: (idx * 79) % 1200,
            y: (idx * 131) % 800,
            vx: ((idx % 7) - 3) * 0.14,
            vy: -0.22 - (idx % 4) * 0.09,
            radius: 1.5 + (idx % 3) * 0.95,
            phase: idx * 0.52,
            rot: (idx * 0.7) % (Math.PI * 2),
            rotSpeed: ((idx % 2 === 0 ? 1 : -1) * (0.012 + (idx % 3) * 0.005)),
            kind: idx % 3,
            toneIdx: idx % 3
        }));

        const meteors = [];
        const pointerSparks = [];
        const burstParticles = [];
        const shockwaves = [];

        function resize() {
            width = Math.max(320, window.innerWidth);
            height = Math.max(320, window.innerHeight);
            canvas.width = width;
            canvas.height = height;
        }

        function spawnMeteor() {
            const startX = width * (0.18 + Math.random() * 0.72);
            const startY = height * (0.04 + Math.random() * 0.28);
            const speed = 7.5 + Math.random() * 4.2;
            const angle = Math.PI * 0.74 + (Math.random() - 0.5) * 0.14;
            meteors.push({
                x: startX,
                y: startY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                len: 52 + Math.random() * 48,
                life: 0,
                maxLife: 36 + Math.random() * 18
            });
        }

        function triggerChapterBurst(biomeId) {
            const pair = TONES[biomeId] || TONES[1];
            const cx = width * 0.5;
            const cy = height * 0.48;

            shockwaves.push(
                { x: cx, y: cy, radius: 28, maxRadius: Math.max(width, height) * 0.52, alpha: 0.78, color: pair[0], lineWidth: 2.8 },
                { x: cx, y: cy, radius: 12, maxRadius: Math.max(width, height) * 0.36, alpha: 0.62, color: pair[1], lineWidth: 2.0 }
            );
            if (shockwaves.length > 6) {
                shockwaves.splice(0, shockwaves.length - 6);
            }

            const count = 72;
            for (let i = 0; i < count; i += 1) {
                const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.16;
                const speed = 3.2 + Math.random() * 7.4;
                burstParticles.push({
                    x: cx + (Math.random() - 0.5) * 34,
                    y: cy + (Math.random() - 0.5) * 24,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 1.1,
                    size: 2.4 + Math.random() * 3.4,
                    rot: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.16,
                    life: 0,
                    maxLife: 48 + Math.random() * 28,
                    shape: i % 3 === 0 ? "petal" : i % 2 === 0 ? "star" : "orb",
                    color: pair[i % pair.length]
                });
            }
            if (burstParticles.length > 220) {
                burstParticles.splice(0, burstParticles.length - 220);
            }
        }

        function drawBiomeMote(m, biomeId, color, alpha) {
            if (biomeId === 1 && m.kind === 1) {
                ctx.beginPath();
                ctx.arc(m.x, m.y, m.radius * 1.45, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(${color}, ${(alpha * 0.75).toFixed(3)})`;
                ctx.lineWidth = 1.1;
                ctx.stroke();
                return;
            }
            if (biomeId === 2 && m.kind !== 0) {
                ctx.beginPath();
                ctx.arc(m.x, m.y, m.radius * 3.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${(alpha * 0.2).toFixed(3)})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(m.x, m.y, m.radius * 0.95, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${Math.min(0.95, alpha * 1.35).toFixed(3)})`;
                ctx.fill();
                return;
            }
            if (biomeId === 3 && m.kind !== 2) {
                ctx.save();
                ctx.translate(m.x, m.y);
                ctx.rotate(m.rot);
                ctx.beginPath();
                ctx.ellipse(0, 0, m.radius * 1.9, m.radius * 0.9, 0, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${(alpha * 0.85).toFixed(3)})`;
                ctx.fill();
                ctx.restore();
                return;
            }
            if (m.kind === 0 || biomeId === 4) {
                drawFourPointStar(ctx, m.x, m.y, m.radius * 2.5, `rgba(${color}, 1)`, alpha);
                return;
            }
            ctx.beginPath();
            ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
            ctx.fill();
        }

        function drawFrame() {
            const curPage = DECK_PAGES[state.currentPageIndex] || DECK_PAGES[0];
            const biomeId = curPage.biome || 1;
            const pair = TONES[biomeId] || TONES[1];
            ctx.clearRect(0, 0, width, height);

            motes.forEach((m) => {
                m.phase += 0.025;
                m.rot += m.rotSpeed;
                const sway = biomeId === 3 ? Math.sin(m.phase * 0.8) * 0.35 : 0;
                m.x = (m.x + m.vx + sway + width) % width;
                m.y = (m.y + m.vy + height) % height;
                const alpha = (0.36 + 0.5 * Math.sin(m.phase)) * 0.68;
                const color = pair[m.toneIdx % pair.length];
                drawBiomeMote(m, biomeId, color, alpha);
            });

            if (biomeId === 4 || biomeId === 3) {
                meteorCooldown -= biomeId === 4 ? 1 : 0.45;
                if (meteorCooldown <= 0) {
                    spawnMeteor();
                    meteorCooldown = biomeId === 4 ? 85 + Math.random() * 65 : 165 + Math.random() * 95;
                }
            }

            for (let i = meteors.length - 1; i >= 0; i -= 1) {
                const mt = meteors[i];
                mt.x += mt.vx;
                mt.y += mt.vy;
                mt.life += 1;
                const ratio = 1 - mt.life / mt.maxLife;
                if (ratio <= 0) {
                    meteors.splice(i, 1);
                    continue;
                }
                const tailX = mt.x - (mt.vx / 8) * mt.len;
                const tailY = mt.y - (mt.vy / 8) * mt.len;
                const grad = ctx.createLinearGradient(mt.x, mt.y, tailX, tailY);
                grad.addColorStop(0, `rgba(250, 246, 238, ${(ratio * 0.92).toFixed(3)})`);
                grad.addColorStop(1, "rgba(250, 246, 238, 0)");
                ctx.strokeStyle = grad;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(mt.x, mt.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();
            }

            for (let i = pointerSparks.length - 1; i >= 0; i -= 1) {
                const sp = pointerSparks[i];
                sp.x += sp.vx;
                sp.y += sp.vy;
                sp.life += 1;
                const ratio = 1 - sp.life / sp.maxLife;
                if (ratio <= 0) {
                    pointerSparks.splice(i, 1);
                    continue;
                }
                drawFourPointStar(ctx, sp.x, sp.y, sp.size * ratio, `rgba(${sp.color}, 1)`, ratio * 0.78);
            }

            for (let i = shockwaves.length - 1; i >= 0; i -= 1) {
                const sw = shockwaves[i];
                sw.radius += (sw.maxRadius - sw.radius) * 0.085 + 3.2;
                sw.alpha *= 0.93;
                if (sw.alpha <= 0.03 || sw.radius >= sw.maxRadius) {
                    shockwaves.splice(i, 1);
                    continue;
                }
                ctx.beginPath();
                ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(${sw.color}, ${sw.alpha.toFixed(3)})`;
                ctx.lineWidth = sw.lineWidth;
                ctx.stroke();
            }

            for (let i = burstParticles.length - 1; i >= 0; i -= 1) {
                const bp = burstParticles[i];
                bp.vx *= 0.965;
                bp.vy = bp.vy * 0.965 + 0.045;
                bp.x += bp.vx;
                bp.y += bp.vy;
                bp.rot += bp.rotSpeed;
                bp.life += 1;
                const ratio = 1 - bp.life / bp.maxLife;
                if (ratio <= 0) {
                    burstParticles.splice(i, 1);
                    continue;
                }
                if (bp.shape === "star") {
                    drawFourPointStar(ctx, bp.x, bp.y, bp.size * (1.1 + ratio * 0.9), `rgba(${bp.color}, 1)`, ratio * 0.92);
                } else if (bp.shape === "petal") {
                    ctx.save();
                    ctx.translate(bp.x, bp.y);
                    ctx.rotate(bp.rot);
                    ctx.beginPath();
                    ctx.ellipse(0, 0, bp.size * 1.45, bp.size * 0.7, 0, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${bp.color}, ${(ratio * 0.88).toFixed(3)})`;
                    ctx.fill();
                    ctx.restore();
                } else {
                    ctx.beginPath();
                    ctx.arc(bp.x, bp.y, bp.size * 0.85, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${bp.color}, ${(ratio * 0.9).toFixed(3)})`;
                    ctx.fill();
                }
            }

            window.requestAnimationFrame(drawFrame);
        }

        window.addEventListener(
            "pointermove",
            (evt) => {
                if (evt.pointerType !== "mouse" || !finePointerQuery.matches) {
                    return;
                }
                const now = performance.now();
                if (now - lastPointerSparkAt < 45) {
                    return;
                }
                lastPointerSparkAt = now;
                const curPage = DECK_PAGES[state.currentPageIndex] || DECK_PAGES[0];
                const pair = TONES[curPage.biome] || TONES[1];
                pointerSparks.push({
                    x: evt.clientX,
                    y: evt.clientY,
                    vx: (Math.random() - 0.5) * 0.7,
                    vy: -0.5 - Math.random() * 0.65,
                    size: 4.5 + Math.random() * 3.5,
                    life: 0,
                    maxLife: 24,
                    color: pair[Math.floor(Math.random() * pair.length)]
                });
                if (pointerSparks.length > 28) {
                    pointerSparks.shift();
                }
            },
            { passive: true }
        );

        ambientWorldApi = {
            triggerChapterBurst,
            activeBurstCount: () => burstParticles.length + shockwaves.length
        };

        resize();
        window.addEventListener("resize", resize);
        window.requestAnimationFrame(drawFrame);
    }

    function applyTheme(theme, persist = true) {
        state.theme = theme === "dark" ? "dark" : "light";
        el.root.setAttribute("data-theme", state.theme);
        const isDark = state.theme === "dark";
        el.themeToggle.setAttribute("aria-pressed", String(isDark));
        el.themeToggleLabel.textContent = isDark ? "Siang" : "Malam";
        if (persist) {
            try {
                localStorage.setItem(STORAGE_THEME_KEY, state.theme);
            } catch (_) {
                // Storage unavailable.
            }
        }
    }

    function loadSavedState() {
        try {
            const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
            applyTheme(savedTheme === "dark" ? "dark" : "light", false);
        } catch (_) {
            applyTheme("light", false);
        }

        try {
            const raw = localStorage.getItem(STORAGE_QUIZ_KEY);
            if (!raw) {
                return;
            }
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                if (parsed.quizAnswers && typeof parsed.quizAnswers === "object") {
                    state.quizAnswers = parsed.quizAnswers;
                }
                if (parsed.quizReactions && typeof parsed.quizReactions === "object") {
                    state.quizReactions = parsed.quizReactions;
                }
                if (Array.isArray(parsed.unlockedStamps)) {
                    state.unlockedStamps = parsed.unlockedStamps;
                }
                if (typeof parsed.ratingScore === "number") {
                    state.ratingScore = Math.max(1, Math.min(100, parsed.ratingScore));
                }
                if (typeof parsed.raraNote === "string") {
                    state.raraNote = parsed.raraNote;
                }
            }
        } catch (_) {
            // Keep clean defaults.
        }
    }

    function saveQuizState() {
        try {
            localStorage.setItem(
                STORAGE_QUIZ_KEY,
                JSON.stringify({
                    quizAnswers: state.quizAnswers,
                    quizReactions: state.quizReactions,
                    unlockedStamps: state.unlockedStamps,
                    ratingScore: state.ratingScore,
                    raraNote: state.raraNote
                })
            );
        } catch (_) {
            // Ignore restricted storage.
        }
    }

    function renderPassportStamps() {
        const count = state.unlockedStamps.length;
        if (el.atlasCountTag) {
            el.atlasCountTag.textContent = `KOLEKSI STEMPEL (${count} / 6)`;
        }
        el.stampChips.forEach((chip) => {
            const unlocked = state.unlockedStamps.includes(chip.dataset.stamp);
            chip.classList.toggle("is-unlocked", unlocked);
        });
        if (el.puncakStampsStatus) {
            el.puncakStampsStatus.textContent =
                count === 6
                    ? "Semua 6 Stempel Ekspedisi lengkap terkumpul (FYP, Pesisir, Lentera, Bidadari, Bintang, Puncak 27)!"
                    : `Stempel Ekspedisi terkumpul: ${count} / 6.`;
        }
        renderSummaryCardPng();
    }

    function unlockStamp(stampId) {
        if (!stampId || state.unlockedStamps.includes(stampId)) {
            return;
        }
        state.unlockedStamps.push(stampId);
        saveQuizState();
        renderPassportStamps();
        SoundscapeEngine.playStampUnlock();
    }

    function getScoreDescriptor(score) {
        if (score >= 100) {
            return "Setara nilai matkul deeptalk & Spotify Blend 100%!";
        }
        if (score >= 85) {
            return "Seru maksimal, tinggal eksekusi agenda muncak!";
        }
        if (score >= 60) {
            return "Asyik banget buat diajak diskusi dan nyari mie bareng";
        }
        return "Masih ada banyak ruang buat cerita baru nanti";
    }

    function populateQuizEvidenceBack(backEl, step) {
        backEl.replaceChildren();

        const evBox = document.createElement("div");
        evBox.className = "quiz-evidence";

        const evBtn = document.createElement("button");
        evBtn.type = "button";
        evBtn.className = "quiz-evidence-btn";
        evBtn.setAttribute("aria-label", `Perbesar bukti foto: ${step.evidenceCaption}`);

        const evImg = document.createElement("img");
        evImg.src = step.evidenceImg;
        evImg.alt = step.evidenceCaption;
        evBtn.appendChild(evImg);
        evBtn.addEventListener("click", () => {
            const idx = LIGHTBOX_GALLERY.findIndex((item) => item.src === step.evidenceImg);
            openImageLightbox(step.evidenceImg, step.eyebrow, step.evidenceCaption, null, idx);
        });

        const evCap = document.createElement("p");
        evCap.className = "quiz-evidence-cap";
        evCap.textContent = step.evidenceCaption;
        evBox.append(evBtn, evCap);

        const reactionBox = document.createElement("div");
        reactionBox.className = "quiz-reaction-box";
        reactionBox.textContent = state.quizReactions[step.id] || "";

        const nextActionBtn = document.createElement("button");
        nextActionBtn.type = "button";
        nextActionBtn.className = "btn-primary quiz-evidence-next-btn";
        const isLastStep = state.quizStep >= QUIZ_STEPS.length - 1;
        nextActionBtn.textContent = isLastStep
            ? "Simpan & Masuki Pesisir Senja"
            : `Buka Pertanyaan ${String(state.quizStep + 2).padStart(2, "0")}`;
        nextActionBtn.addEventListener("click", () => {
            SoundscapeEngine.playUiTap();
            advanceQuizStep(1);
        });

        backEl.append(evBox, reactionBox, nextActionBtn);
    }

    function revealQuizEvidenceCard(step) {
        const card = document.getElementById("quizEvidenceCard");
        const backFace = document.getElementById("quizEvidenceBack");
        if (!card || !backFace) {
            return;
        }
        populateQuizEvidenceBack(backFace, step);
        if (el.quizEvidenceStateTag) {
            el.quizEvidenceStateTag.textContent = "TERBUKA";
            el.quizEvidenceStateTag.classList.add("is-unlocked");
        }
        el.resetQuizBtn.hidden = false;
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                card.classList.add("is-flipped");
            });
        });
    }

    function renderRatingEvidencePreview() {
        const preview = document.createElement("div");
        preview.className = "rating-summary-card";

        const eyebrow = document.createElement("p");
        eyebrow.className = "eyebrow";
        eyebrow.textContent = "PRATINJAU KARTU RANGKUMAN";

        const scoreBig = document.createElement("p");
        scoreBig.className = "rating-number";
        scoreBig.id = "quizPreviewScore";
        scoreBig.textContent = `${state.ratingScore} / 100`;

        const desc = document.createElement("p");
        desc.className = "rating-descriptor";
        desc.id = "quizPreviewDesc";
        desc.textContent = getScoreDescriptor(state.ratingScore);

        const noteQuote = document.createElement("blockquote");
        noteQuote.className = "rating-note-preview";
        noteQuote.id = "quizPreviewNote";
        const clean = state.raraNote.trim();
        noteQuote.textContent = clean
            ? `"${clean}"`
            : '"Catatan pribadimu nanti akan tercetak rapi di Kartu Rangkuman PNG."';

        const stampInfo = document.createElement("p");
        stampInfo.className = "mono-tag";
        stampInfo.textContent = `STEMPEL TERKUMPUL: ${state.unlockedStamps.length} / 6`;

        const finishBtn = document.createElement("button");
        finishBtn.type = "button";
        finishBtn.className = "btn-primary";
        finishBtn.textContent = "Simpan & Masuki Pesisir Senja";
        finishBtn.addEventListener("click", () => {
            SoundscapeEngine.playUiTap();
            advanceQuizStep(1);
        });

        preview.append(eyebrow, scoreBig, desc, noteQuote, stampInfo, finishBtn);
        return preview;
    }

    function syncQuizRatingPreviewNodes() {
        const scoreEl = document.getElementById("quizPreviewScore");
        const descEl = document.getElementById("quizPreviewDesc");
        const noteEl = document.getElementById("quizPreviewNote");
        if (scoreEl) {
            scoreEl.textContent = `${state.ratingScore} / 100`;
        }
        if (descEl) {
            descEl.textContent = getScoreDescriptor(state.ratingScore);
        }
        if (noteEl) {
            const clean = state.raraNote.trim();
            noteEl.textContent = clean
                ? `"${clean}"`
                : '"Catatan pribadimu nanti akan tercetak rapi di Kartu Rangkuman PNG."';
        }
    }

    function renderQuizStep() {
        const step = QUIZ_STEPS[state.quizStep];
        const total = QUIZ_STEPS.length;
        const pct = Math.round(((state.quizStep + 1) / total) * 100);
        const isAnswered = Boolean(state.quizAnswers[step.id]);

        el.quizStepLabel.textContent = `LANGKAH ${String(state.quizStep + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
        el.quizProgressMeter.setAttribute("aria-valuenow", String(state.quizStep + 1));
        el.quizProgressFill.style.width = `${pct}%`;

        el.prevQuizBtn.disabled = state.quizStep === 0;
        el.resetQuizBtn.hidden = Object.keys(state.quizAnswers).length === 0 && !state.raraNote;
        el.nextQuizBtn.textContent =
            state.quizStep === total - 1
                ? "Masuki Pesisir Senja"
                : `Pertanyaan ${String(state.quizStep + 2).padStart(2, "0")}`;

        if (el.quizEvidenceStateTag) {
            if (step.type === "rating") {
                el.quizEvidenceStateTag.textContent = "RINGKASAN";
                el.quizEvidenceStateTag.classList.add("is-unlocked");
            } else {
                el.quizEvidenceStateTag.textContent = isAnswered ? "TERBUKA" : "TERSEGEL";
                el.quizEvidenceStateTag.classList.toggle("is-unlocked", isAnswered);
            }
        }

        const qCol = document.createElement("div");
        qCol.className = "quiz-question-col";

        const ey = document.createElement("p");
        ey.className = "eyebrow";
        ey.textContent = step.eyebrow;

        const qEl = document.createElement("h3");
        qEl.className = "quiz-question";
        qEl.textContent = step.question;
        qCol.append(ey, qEl);

        const statusCue = document.createElement("p");
        statusCue.className = "quiz-unlock-cue";
        statusCue.id = "quizUnlockCue";
        statusCue.hidden = !isAnswered || step.type === "rating";
        statusCue.textContent = "Bukti asli dan catatan Jay terbuka di halaman kanan.";

        if (step.type === "choice" || step.type === "runaway") {
            const optGroup = document.createElement("div");
            optGroup.className = "quiz-options";

            step.options.forEach((opt) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "quiz-option-btn";
                btn.textContent = opt.label;
                if (state.quizAnswers[step.id] === opt.label) {
                    btn.classList.add("is-selected");
                }
                btn.addEventListener("click", () => {
                    SoundscapeEngine.playUiTap();
                    optGroup.querySelectorAll(".quiz-option-btn").forEach((b) => b.classList.remove("is-selected"));
                    btn.classList.add("is-selected");
                    state.quizAnswers[step.id] = opt.label;
                    state.quizReactions[step.id] = opt.reaction;
                    unlockStamp("fyp");
                    saveQuizState();
                    updateLetterAndSummaryPreview();
                    statusCue.hidden = false;
                    revealQuizEvidenceCard(step);
                });
                optGroup.appendChild(btn);
            });
            qCol.appendChild(optGroup);

            if (step.type === "runaway") {
                const arena = document.createElement("div");
                arena.className = "runaway-arena";

                const dodgeBtn = document.createElement("button");
                dodgeBtn.type = "button";
                dodgeBtn.className = "btn-runaway";
                const stageIdx = Math.min(state.runawayAttempts, step.runawayStages.length - 1);
                dodgeBtn.textContent = step.runawayStages[stageIdx];

                const moveDodgeBtn = () => {
                    if (state.runawayAttempts >= 4) {
                        return;
                    }
                    SoundscapeEngine.playUiTap();
                    state.runawayAttempts += 1;
                    dodgeBtn.textContent = step.runawayStages[Math.min(state.runawayAttempts, step.runawayStages.length - 1)];
                    const maxShiftX = Math.max(0, arena.clientWidth - dodgeBtn.offsetWidth - 28);
                    const rawX = state.runawayAttempts % 2 === 1 ? Math.min(maxShiftX, 170) : 14;
                    const xOffset = Math.max(0, Math.min(maxShiftX, rawX));
                    const yOffset = state.runawayAttempts % 2 === 1 ? 8 : -6;
                    dodgeBtn.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
                };

                dodgeBtn.addEventListener("pointerenter", (evt) => {
                    if (evt.pointerType === "mouse") {
                        moveDodgeBtn();
                    }
                });
                dodgeBtn.addEventListener("click", () => {
                    if (state.runawayAttempts < 4) {
                        moveDodgeBtn();
                        return;
                    }
                    SoundscapeEngine.playUiTap();
                    state.quizAnswers[step.id] = step.runawayStages[step.runawayStages.length - 1];
                    state.quizReactions[step.id] = step.runawayFinalReaction;
                    unlockStamp("fyp");
                    dodgeBtn.style.transform = "translate3d(0, 0, 0)";
                    dodgeBtn.classList.add("is-selected");
                    saveQuizState();
                    updateLetterAndSummaryPreview();
                    statusCue.hidden = false;
                    revealQuizEvidenceCard(step);
                });

                arena.appendChild(dodgeBtn);
                qCol.appendChild(arena);
            }

            qCol.appendChild(statusCue);
        } else if (step.type === "rating") {
            const panel = document.createElement("div");
            panel.className = "rating-panel";

            const readoutRow = document.createElement("div");
            readoutRow.className = "rating-readout-row";

            const scoreDisplay = document.createElement("span");
            scoreDisplay.className = "rating-number";
            scoreDisplay.textContent = `${state.ratingScore} / 100`;

            const descDisplay = document.createElement("span");
            descDisplay.className = "rating-descriptor";
            descDisplay.textContent = getScoreDescriptor(state.ratingScore);
            readoutRow.append(scoreDisplay, descDisplay);

            const rangeLabel = document.createElement("label");
            rangeLabel.className = "control-label";
            rangeLabel.htmlFor = "friendshipRatingRange";
            rangeLabel.textContent = "Geser nilai pertemanan (1 sampai 100)";

            const slider = document.createElement("input");
            slider.type = "range";
            slider.id = "friendshipRatingRange";
            slider.className = "rating-range";
            slider.min = "1";
            slider.max = "100";
            slider.value = String(state.ratingScore);
            slider.addEventListener("input", () => {
                state.ratingScore = Number(slider.value);
                state.quizAnswers["step-rating-note"] = `${state.ratingScore}/100`;
                unlockStamp("fyp");
                scoreDisplay.textContent = `${state.ratingScore} / 100`;
                descDisplay.textContent = getScoreDescriptor(state.ratingScore);
                syncQuizRatingPreviewNodes();
                saveQuizState();
                updateLetterAndSummaryPreview();
            });

            const noteLabel = document.createElement("label");
            noteLabel.className = "control-label";
            noteLabel.htmlFor = "raraPersonalNote";
            noteLabel.textContent = "Catatan kecil dari Rara buat masuk ke Kartu Rangkuman (opsional)";

            const textarea = document.createElement("textarea");
            textarea.id = "raraPersonalNote";
            textarea.className = "note-textarea";
            textarea.placeholder = "Tulis kesan singkat atau pesan apa saja di sini...";
            textarea.value = state.raraNote;
            textarea.addEventListener("input", () => {
                state.raraNote = textarea.value;
                syncQuizRatingPreviewNodes();
                saveQuizState();
                updateLetterAndSummaryPreview();
            });

            panel.append(readoutRow, rangeLabel, slider, noteLabel, textarea);
            qCol.appendChild(panel);
        }

        el.quizStepQuestionArea.replaceChildren(qCol);

        if (step.evidenceImg) {
            const flipStage = document.createElement("div");
            flipStage.className = "evidence-flip-stage";

            const flipCard = document.createElement("div");
            flipCard.className = `evidence-flip-card${isAnswered ? " is-flipped" : ""}`;
            flipCard.id = "quizEvidenceCard";

            const frontFace = document.createElement("div");
            frontFace.className = "evidence-face evidence-face--front";

            const sealIcon = document.createElement("div");
            sealIcon.className = "evidence-seal-emblem";
            sealIcon.setAttribute("aria-hidden", "true");
            sealIcon.innerHTML = '<svg viewBox="0 0 36 36" width="32" height="32" fill="none"><rect x="8" y="16" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M12 16V12C12 8.7 14.7 6 18 6C21.3 6 24 8.7 24 12V16" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="23" r="2.2" fill="currentColor"/></svg>';

            const frontTitle = document.createElement("h4");
            frontTitle.className = "evidence-lock-title";
            frontTitle.textContent = "Segel Bukti Arsip Terkunci";

            const frontHint = document.createElement("p");
            frontHint.className = "evidence-lock-desc";
            frontHint.textContent = "Pilih jawabanmu di halaman kiri dulu supaya kartu ini berbalik dan membuka foto bukti aslinya tanpa bocoran.";

            frontFace.append(sealIcon, frontTitle, frontHint);

            const backFace = document.createElement("div");
            backFace.className = "evidence-face evidence-face--back";
            backFace.id = "quizEvidenceBack";
            if (isAnswered) {
                populateQuizEvidenceBack(backFace, step);
            }

            flipCard.append(frontFace, backFace);
            flipStage.appendChild(flipCard);
            el.quizStepEvidenceArea.replaceChildren(flipStage);
        } else {
            el.quizStepEvidenceArea.replaceChildren(renderRatingEvidencePreview());
        }

        if (state.currentPageIndex === 1) {
            syncDeckChrome(1);
        }
    }

    function createChatBubbleNode(msg, animateIn = true) {
        const bubble = document.createElement("div");
        bubble.className = `chat-bubble ${msg.from === "jay" ? "chat-bubble--jay" : "chat-bubble--rara"}${animateIn ? " is-stepped-in" : ""}`;

        const body = document.createElement("p");
        body.className = "chat-text";
        body.textContent = msg.text;

        const meta = document.createElement("p");
        meta.className = "chat-meta";
        meta.textContent = `${msg.from === "jay" ? "Jay" : "Rara"} | ${msg.time}`;

        bubble.append(body, meta);
        return bubble;
    }

    function createChatCardElement(chat, stateKey, onCompleteNext) {
        const totalMsgs = chat.messages.length;
        if (typeof state.posChatVisibleCount[stateKey] !== "number") {
            state.posChatVisibleCount[stateKey] = 1;
        }

        const card = document.createElement("div");
        card.className = "chat-mockup";

        const header = document.createElement("div");
        header.className = "chat-header";

        const info = document.createElement("div");
        const tag = document.createElement("span");
        tag.className = "chat-platform-tag";
        tag.textContent = `${chat.platform} // ${chat.date}`;
        const prompt = document.createElement("p");
        prompt.className = "chat-prompt";
        prompt.textContent = chat.prompt;
        info.append(tag, prompt);

        const countTag = document.createElement("span");
        countTag.className = "mono-tag";
        header.append(info, countTag);

        const thread = document.createElement("div");
        thread.className = "chat-thread";

        const controls = document.createElement("div");
        controls.className = "chat-stepper-bar";

        const nextMsgBtn = document.createElement("button");
        nextMsgBtn.type = "button";
        nextMsgBtn.className = "btn-primary btn-chat-next";

        const showAllBtn = document.createElement("button");
        showAllBtn.type = "button";
        showAllBtn.className = "btn-outline btn-chat-all";

        function syncThreadInitial() {
            const visible = Math.max(1, Math.min(totalMsgs, state.posChatVisibleCount[stateKey]));
            state.posChatVisibleCount[stateKey] = visible;
            thread.replaceChildren();
            for (let i = 0; i < visible; i += 1) {
                thread.appendChild(createChatBubbleNode(chat.messages[i], i === visible - 1));
            }
            syncChatControls();
        }

        function syncChatControls() {
            const visible = state.posChatVisibleCount[stateKey];
            const done = visible >= totalMsgs;
            countTag.textContent = `${visible} / ${totalMsgs}`;
            if (!done) {
                nextMsgBtn.textContent = `Baca Pesan (${visible}/${totalMsgs})`;
                showAllBtn.textContent = "Tampilkan Semua";
            } else if (typeof onCompleteNext === "function") {
                nextMsgBtn.textContent = "Lanjut Bukti Foto";
                showAllBtn.textContent = "Ulangi Chat";
            } else {
                nextMsgBtn.textContent = "Semua Pesan Terbuka";
                nextMsgBtn.disabled = true;
                showAllBtn.textContent = "Ulangi Chat";
            }
            if (!done || typeof onCompleteNext === "function") {
                nextMsgBtn.disabled = false;
            }
        }

        nextMsgBtn.addEventListener("click", () => {
            SoundscapeEngine.playUiTap();
            const cur = state.posChatVisibleCount[stateKey];
            if (cur < totalMsgs) {
                const nextIdx = cur;
                state.posChatVisibleCount[stateKey] = cur + 1;
                thread.appendChild(createChatBubbleNode(chat.messages[nextIdx], true));
                thread.scrollTop = thread.scrollHeight;
                syncChatControls();
            } else if (typeof onCompleteNext === "function") {
                onCompleteNext();
            }
        });

        showAllBtn.addEventListener("click", () => {
            SoundscapeEngine.playUiTap();
            if (state.posChatVisibleCount[stateKey] >= totalMsgs) {
                state.posChatVisibleCount[stateKey] = 1;
                syncThreadInitial();
            } else {
                for (let i = state.posChatVisibleCount[stateKey]; i < totalMsgs; i += 1) {
                    thread.appendChild(createChatBubbleNode(chat.messages[i], true));
                }
                state.posChatVisibleCount[stateKey] = totalMsgs;
                thread.scrollTop = thread.scrollHeight;
                syncChatControls();
            }
        });

        controls.append(nextMsgBtn, showAllBtn);
        card.append(header, thread, controls);
        syncThreadInitial();
        return card;
    }

    function createPosQuickGame(cp, onAnsweredOrSkipped, nextTargetLabel) {
        const qg = cp.quickGame;
        if (!qg || !Array.isArray(qg.options) || qg.options.length === 0) {
            return null;
        }
        const box = document.createElement("div");
        box.className = "pos-selingan-box";

        const kicker = document.createElement("p");
        kicker.className = "selingan-kicker";
        kicker.textContent = `LANGKAH 1 // TEBAKAN POS ${cp.postNum}`;

        const prompt = document.createElement("p");
        prompt.className = "selingan-prompt";
        prompt.textContent = qg.prompt;

        const choicesRow = document.createElement("div");
        choicesRow.className = "selingan-choices";

        const resultBox = document.createElement("p");
        resultBox.className = "selingan-result";

        const nextLeafBtn = document.createElement("button");
        nextLeafBtn.type = "button";
        nextLeafBtn.className = "btn-primary btn-leaf-advance";
        nextLeafBtn.textContent = nextTargetLabel || "Buka Lembar Bukti";

        const skipBtn = document.createElement("button");
        skipBtn.type = "button";
        skipBtn.className = "btn-folio-link";
        skipBtn.textContent = "Langsung lihat bukti tanpa menebak";

        const existingAnswer = state.quickGameAnswers[cp.id];
        const existingOpt = qg.options.find((o) => o.label === existingAnswer);
        resultBox.hidden = !existingOpt;
        if (existingOpt) {
            resultBox.textContent = existingOpt.reply;
        }
        nextLeafBtn.hidden = !existingOpt;
        skipBtn.hidden = Boolean(existingOpt);

        qg.options.forEach((opt) => {
            const optBtn = document.createElement("button");
            optBtn.type = "button";
            optBtn.className = `btn-selingan${existingAnswer === opt.label ? " is-picked" : ""}`;
            optBtn.textContent = opt.label;
            optBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                choicesRow.querySelectorAll(".btn-selingan").forEach((b) => b.classList.remove("is-picked"));
                optBtn.classList.add("is-picked");
                state.quickGameAnswers[cp.id] = opt.label;
                state.posLeafUnlocked[cp.id] = true;
                resultBox.textContent = opt.reply;
                resultBox.hidden = false;
                nextLeafBtn.hidden = false;
                skipBtn.hidden = true;
                if (typeof onAnsweredOrSkipped === "function") {
                    onAnsweredOrSkipped(false);
                }
            });
            choicesRow.appendChild(optBtn);
        });

        nextLeafBtn.addEventListener("click", () => {
            SoundscapeEngine.playUiTap();
            if (typeof onAnsweredOrSkipped === "function") {
                onAnsweredOrSkipped(true);
            }
        });

        skipBtn.addEventListener("click", () => {
            SoundscapeEngine.playUiTap();
            state.posLeafUnlocked[cp.id] = true;
            if (typeof onAnsweredOrSkipped === "function") {
                onAnsweredOrSkipped(true);
            }
        });

        box.append(kicker, prompt, choicesRow, resultBox, nextLeafBtn, skipBtn);
        return box;
    }

    function createSinglePhotoViewer(cp) {
        const photos = cp.photos || [];
        const total = photos.length;
        if (typeof state.posPhotoIndex[cp.id] !== "number") {
            state.posPhotoIndex[cp.id] = 0;
        }

        const board = document.createElement("div");
        board.className = "polaroid-board polaroid-single-board";

        const boardHeader = document.createElement("div");
        boardHeader.className = "polaroid-board-header";
        const label = document.createElement("span");
        label.className = "mono-tag";
        label.textContent = `ARSIP FOTO POS ${cp.postNum}`;
        const counter = document.createElement("span");
        counter.className = "mono-tag";
        boardHeader.append(label, counter);

        const cardStage = document.createElement("div");
        cardStage.className = "polaroid-single-stage";

        const cardBtn = document.createElement("button");
        cardBtn.type = "button";
        cardBtn.className = "polaroid-item polaroid-single-card";

        const img = document.createElement("img");
        img.width = 480;
        img.height = 360;

        const stampTag = document.createElement("span");
        stampTag.className = "polaroid-stamp-tag";

        const cap = document.createElement("span");
        cap.className = "polaroid-caption";

        cardBtn.append(img, stampTag, cap);
        cardBtn.addEventListener("click", () => {
            const idx = state.posPhotoIndex[cp.id] || 0;
            const photo = photos[idx];
            if (!photo) {
                return;
            }
            const galleryIdx = LIGHTBOX_GALLERY.findIndex((item) => item.src === photo.src);
            openImageLightbox(photo.src, cp.title, photo.caption, null, galleryIdx);
        });
        cardStage.appendChild(cardBtn);

        const stepperBar = document.createElement("div");
        stepperBar.className = "photo-stepper-bar";
        stepperBar.hidden = total < 2;

        const prevPhotoBtn = document.createElement("button");
        prevPhotoBtn.type = "button";
        prevPhotoBtn.className = "btn-outline btn-photo-step";
        prevPhotoBtn.textContent = "Foto Sebelumnya";

        const dotsWrap = document.createElement("div");
        dotsWrap.className = "photo-dots-row";

        const nextPhotoBtn = document.createElement("button");
        nextPhotoBtn.type = "button";
        nextPhotoBtn.className = "btn-outline btn-photo-step";
        nextPhotoBtn.textContent = "Foto Berikutnya";

        function renderActivePhoto(animateFlip = false) {
            const cur = Math.max(0, Math.min(total - 1, state.posPhotoIndex[cp.id] || 0));
            state.posPhotoIndex[cp.id] = cur;
            const photo = photos[cur];
            counter.textContent = `FOTO ${String(cur + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

            cardBtn.className = `polaroid-item polaroid-single-card${photo.contain ? " polaroid-item--contain" : ""}`;
            cardBtn.setAttribute("aria-label", `Perbesar foto: ${photo.caption}`);
            img.src = photo.src;
            img.alt = photo.alt;
            stampTag.textContent = `ARSIP 27 // POS ${cp.postNum} // ${cp.date}`;
            cap.textContent = photo.caption;

            prevPhotoBtn.disabled = cur === 0;
            nextPhotoBtn.disabled = cur === total - 1;

            dotsWrap.querySelectorAll(".photo-dot-btn").forEach((dot, dIdx) => {
                dot.classList.toggle("is-active", dIdx === cur);
                dot.setAttribute("aria-current", dIdx === cur ? "true" : "false");
            });

            if (animateFlip && !reducedMotionQuery.matches) {
                cardBtn.classList.remove("is-photo-flipping");
                void cardBtn.offsetWidth;
                cardBtn.classList.add("is-photo-flipping");
            }
        }

        photos.forEach((_, idx) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "photo-dot-btn";
            dot.textContent = String(idx + 1);
            dot.setAttribute("aria-label", `Lihat foto ${idx + 1} dari ${total}`);
            dot.addEventListener("click", () => {
                if (state.posPhotoIndex[cp.id] !== idx) {
                    SoundscapeEngine.playUiTap();
                    state.posPhotoIndex[cp.id] = idx;
                    renderActivePhoto(true);
                }
            });
            dotsWrap.appendChild(dot);
        });

        prevPhotoBtn.addEventListener("click", () => {
            const cur = state.posPhotoIndex[cp.id] || 0;
            if (cur > 0) {
                SoundscapeEngine.playUiTap();
                state.posPhotoIndex[cp.id] = cur - 1;
                renderActivePhoto(true);
            }
        });

        nextPhotoBtn.addEventListener("click", () => {
            const cur = state.posPhotoIndex[cp.id] || 0;
            if (cur < total - 1) {
                SoundscapeEngine.playUiTap();
                state.posPhotoIndex[cp.id] = cur + 1;
                renderActivePhoto(true);
            }
        });

        stepperBar.append(prevPhotoBtn, dotsWrap, nextPhotoBtn);
        board.append(boardHeader, cardStage, stepperBar);
        renderActivePhoto(false);
        return board;
    }

    function createVignettePlate(cp) {
        const plate = document.createElement("div");
        plate.className = "story-vignette";

        const stamp = document.createElement("p");
        stamp.className = "vignette-stamp";
        stamp.textContent = `POS ${cp.postNum} // ${cp.altitude.toUpperCase()} // ${cp.date}`;

        const halo = document.createElement("div");
        halo.className = "vignette-arch-halo";
        halo.setAttribute("aria-hidden", "true");
        halo.innerHTML = VIGNETTE_SVGS[cp.vignette] || VIGNETTE_SVGS["quill-arch"];

        const quote = document.createElement("blockquote");
        quote.className = "vignette-quote";
        quote.textContent = cp.pullQuote || cp.title;

        const waxFoot = document.createElement("span");
        waxFoot.className = "vignette-wax-chip";
        waxFoot.textContent = `SEGEL EKSPEDISI 27 // POS ${cp.postNum}`;

        plate.append(stamp, halo, quote, waxFoot);
        return plate;
    }

    function buildPosRightLeafDeck(cp, statusBadgeEl) {
        const hasQuiz = Boolean(cp.quickGame && Array.isArray(cp.quickGame.options) && cp.quickGame.options.length);
        const hasChats = Array.isArray(cp.chats) && cp.chats.length > 0;
        const hasPhotos = Array.isArray(cp.photos) && cp.photos.length > 0;

        const leaves = [];
        let stepNum = 1;
        if (hasQuiz) {
            leaves.push({ id: "quiz", label: `${stepNum}. Tebakan` });
            stepNum += 1;
        }
        if (hasChats) {
            leaves.push({ id: "chat", label: `${stepNum}. Chat` });
            stepNum += 1;
        }
        if (hasPhotos) {
            leaves.push({ id: "photo", label: `${stepNum}. Foto (${cp.photos.length})` });
        } else {
            leaves.push({ id: "vignette", label: `${stepNum}. Ilustrasi` });
        }

        if (!hasQuiz) {
            state.posLeafUnlocked[cp.id] = true;
        } else if (state.quickGameAnswers[cp.id]) {
            state.posLeafUnlocked[cp.id] = true;
        }

        const defaultLeaf = leaves[0].id;
        if (!state.posLeafTab[cp.id] || !leaves.some((l) => l.id === state.posLeafTab[cp.id])) {
            state.posLeafTab[cp.id] = defaultLeaf;
        }

        const container = document.createElement("div");
        container.className = "leaf-switcher";

        const tabsRow = document.createElement("div");
        tabsRow.className = "leaf-tabs";
        tabsRow.setAttribute("role", "tablist");
        tabsRow.setAttribute("aria-label", `Lembar interaktif Pos ${cp.postNum}`);

        const bodyStage = document.createElement("div");
        bodyStage.className = "leaf-panel-stage";

        function updateLeafTabsUi() {
            const unlocked = Boolean(state.posLeafUnlocked[cp.id]);
            const curTab = state.posLeafTab[cp.id];
            if (statusBadgeEl) {
                statusBadgeEl.textContent = unlocked ? "BUKTI TERBUKA" : "TEBAK DULU";
                statusBadgeEl.classList.toggle("is-unlocked", unlocked);
            }
            tabsRow.querySelectorAll(".leaf-tab-btn").forEach((btn) => {
                const leafId = btn.dataset.leafId;
                const isLocked = leafId !== "quiz" && !unlocked;
                btn.disabled = isLocked;
                btn.setAttribute("aria-selected", String(leafId === curTab));
                btn.classList.toggle("is-active", leafId === curTab);
                btn.classList.toggle("is-locked", isLocked);
            });
        }

        function renderActiveLeaf(animateTurn = false, flipDir = "next") {
            const curTab = state.posLeafTab[cp.id];
            const activeLeafMeta = leaves.find((l) => l.id === curTab) || leaves[0];
            if (animateTurn) {
                state.transitionSeq += 1;
                playBookPageFlipAnimation(flipDir, false, {
                    fromPage: DECK_PAGES[state.currentPageIndex],
                    toPage: DECK_PAGES[state.currentPageIndex],
                    subTitle: `${cp.title} (${activeLeafMeta ? activeLeafMeta.label : "Lembar"})`
                });
            }
            const panel = document.createElement("div");
            panel.className = `leaf-panel${animateTurn && !reducedMotionQuery.matches ? " is-leaf-entering" : ""}`;

            if (curTab === "quiz") {
                const nextProofLeaf = leaves.find((l) => l.id !== "quiz");
                const nextLabel = nextProofLeaf
                    ? nextProofLeaf.id === "chat"
                        ? "Buka Rekaman Chat"
                        : nextProofLeaf.id === "photo"
                          ? "Buka Arsip Foto"
                          : "Buka Ilustrasi Bab"
                    : "Selesai";

                const qBox = createPosQuickGame(
                    cp,
                    (shouldAdvance) => {
                        updateLeafTabsUi();
                        if (shouldAdvance && nextProofLeaf) {
                            state.posLeafTab[cp.id] = nextProofLeaf.id;
                            updateLeafTabsUi();
                            renderActiveLeaf(true);
                        }
                    },
                    nextLabel
                );
                if (qBox) {
                    panel.appendChild(qBox);
                }
            } else if (curTab === "chat" && hasChats) {
                const chats = cp.chats;
                if (typeof state.posChatIndex[cp.id] !== "number") {
                    state.posChatIndex[cp.id] = 0;
                }
                if (chats.length > 1) {
                    const threadTabs = document.createElement("div");
                    threadTabs.className = "chat-thread-tabs";
                    chats.forEach((c, cIdx) => {
                        const tb = document.createElement("button");
                        tb.type = "button";
                        tb.className = `btn-thread-tab${state.posChatIndex[cp.id] === cIdx ? " is-active" : ""}`;
                        tb.textContent = `Obrolan ${cIdx + 1}: ${c.date}`;
                        tb.addEventListener("click", () => {
                            SoundscapeEngine.playUiTap();
                            state.posChatIndex[cp.id] = cIdx;
                            renderActiveLeaf(true);
                        });
                        threadTabs.appendChild(tb);
                    });
                    panel.appendChild(threadTabs);
                }

                const activeChatIdx = Math.max(0, Math.min(chats.length - 1, state.posChatIndex[cp.id]));
                const nextTarget = hasPhotos ? "photo" : "vignette";
                const chatCard = createChatCardElement(chats[activeChatIdx], `${cp.id}:chat:${activeChatIdx}`, () => {
                    state.posLeafTab[cp.id] = nextTarget;
                    updateLeafTabsUi();
                    renderActiveLeaf(true);
                });
                panel.appendChild(chatCard);
            } else if (curTab === "photo" && hasPhotos) {
                panel.appendChild(createSinglePhotoViewer(cp));
            } else {
                panel.appendChild(createVignettePlate(cp));
            }

            bodyStage.replaceChildren(panel);
            updateLeafTabsUi();
        }

        leaves.forEach((leaf) => {
            const tabBtn = document.createElement("button");
            tabBtn.type = "button";
            tabBtn.role = "tab";
            tabBtn.className = "leaf-tab-btn";
            tabBtn.dataset.leafId = leaf.id;
            tabBtn.textContent = leaf.label;
            tabBtn.addEventListener("click", () => {
                if (tabBtn.disabled || state.posLeafTab[cp.id] === leaf.id) {
                    return;
                }
                SoundscapeEngine.playUiTap();
                state.posLeafTab[cp.id] = leaf.id;
                renderActiveLeaf(true);
            });
            tabsRow.appendChild(tabBtn);
        });

        container.append(tabsRow, bodyStage);
        renderActiveLeaf(false);
        return container;
    }

    function normalizeGameRounds(game) {
        if (game.type === "tebak-chat" && Array.isArray(game.items)) {
            return game.items.map((item) => ({
                promptText: item.quote,
                choices: ["Jay", "Rara"],
                correctAnswer: item.answer
            }));
        }
        if (game.type === "tebak-jam" && Array.isArray(game.rounds)) {
            return game.rounds.map((r) => ({
                promptText: r.label,
                choices: r.choices,
                correctAnswer: r.correct
            }));
        }
        if (game.type === "susun-typo" && Array.isArray(game.puzzles)) {
            return game.puzzles.map((p) => ({
                promptText: p.prefix,
                choices: p.choices,
                correctAnswer: p.answer
            }));
        }
        return [];
    }

    function buildRoundMiniGame(game, stage, scoreEl) {
        const rounds = normalizeGameRounds(game);
        let roundIdx = 0;
        let score = 0;

        function renderRound() {
            stage.replaceChildren();
            if (roundIdx >= rounds.length) {
                scoreEl.textContent = `Skor Akhir: ${score} / ${rounds.length}`;
                const done = document.createElement("p");
                done.className = "minigame-feedback";
                done.textContent =
                    score === rounds.length
                        ? `Kompak maksimal! Skor sempurna ${score} / ${rounds.length}.`
                        : `Skor kalian ${score} / ${rounds.length}. Lumayan banget buat kenang-kenangan!`;

                const retryBtn = document.createElement("button");
                retryBtn.type = "button";
                retryBtn.className = "minigame-btn";
                retryBtn.textContent = "Main Lagi";
                retryBtn.addEventListener("click", () => {
                    SoundscapeEngine.playUiTap();
                    roundIdx = 0;
                    score = 0;
                    renderRound();
                });

                stage.append(done, retryBtn);
                return;
            }

            const cur = rounds[roundIdx];
            scoreEl.textContent = `Ronde ${roundIdx + 1} / ${rounds.length} | Skor: ${score}`;

            const qCard = document.createElement("div");
            qCard.className = "minigame-quote-card";
            qCard.textContent = cur.promptText;

            const actions = document.createElement("div");
            actions.className = "minigame-actions";

            const fb = document.createElement("p");
            fb.className = "minigame-feedback";
            fb.hidden = true;

            const nextBtn = document.createElement("button");
            nextBtn.type = "button";
            nextBtn.className = "minigame-btn is-active";
            nextBtn.textContent = roundIdx === rounds.length - 1 ? "Lihat Skor Akhir" : "Lanjut Ronde Berikutnya";
            nextBtn.hidden = true;

            let answered = false;
            cur.choices.forEach((choice) => {
                const cBtn = document.createElement("button");
                cBtn.type = "button";
                cBtn.className = "minigame-btn";
                cBtn.textContent = choice;
                cBtn.addEventListener("click", () => {
                    if (answered) {
                        return;
                    }
                    SoundscapeEngine.playUiTap();
                    answered = true;
                    const isRight = choice === cur.correctAnswer;
                    if (isRight) {
                        score += 1;
                    }
                    cBtn.classList.add("is-active");
                    actions.querySelectorAll(".minigame-btn").forEach((b) => {
                        b.disabled = true;
                    });
                    fb.textContent = isRight
                        ? `Tepat! Jawabannya memang ${cur.correctAnswer}.`
                        : `Hampir! Jawaban tepatnya: ${cur.correctAnswer}.`;
                    fb.hidden = false;
                    nextBtn.hidden = false;
                    scoreEl.textContent = `Ronde ${roundIdx + 1} / ${rounds.length} | Skor: ${score}`;
                });
                actions.appendChild(cBtn);
            });

            nextBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                roundIdx += 1;
                renderRound();
            });

            stage.append(qCard, actions, fb, nextBtn);
        }

        renderRound();
    }

    function buildSuitMiniGame(stage, scoreEl) {
        const moves = ["Batu Gunung", "Gunting Ranting", "Kertas Peta"];
        const beats = {
            "Batu Gunung": "Gunting Ranting",
            "Gunting Ranting": "Kertas Peta",
            "Kertas Peta": "Batu Gunung"
        };
        let wins = 0;
        let plays = 0;

        const actions = document.createElement("div");
        actions.className = "minigame-actions";
        const fb = document.createElement("p");
        fb.className = "minigame-feedback";
        fb.textContent = "Pilih jagoanmu dulu buat mulai ronde suit!";
        scoreEl.textContent = "Menang: 0 / 0";

        moves.forEach((move) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "minigame-btn";
            btn.textContent = move;
            btn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                const opp = moves[Math.floor(Math.random() * moves.length)];
                plays += 1;
                actions.querySelectorAll(".minigame-btn").forEach((b) => b.classList.remove("is-active"));
                btn.classList.add("is-active");

                if (move === opp) {
                    fb.textContent = `Seri! Sama-sama pilih ${move}. Ulangi lagi biar ketauan siapa bawa logistik!`;
                } else if (beats[move] === opp) {
                    wins += 1;
                    fb.textContent = `Menang! ${move} mengalahkan ${opp}. Jay kebagian bawain air minum ya!`;
                } else {
                    fb.textContent = `Kalah tipis! ${opp} mengalahkan ${move}. Rara siap-siap traktir es di pos depan ya!`;
                }
                scoreEl.textContent = `Menang: ${wins} / ${plays}`;
            });
            actions.appendChild(btn);
        });

        stage.append(actions, fb);
    }

    function buildLanternMiniGame(game, stage, scoreEl) {
        const grid = document.createElement("div");
        grid.className = "lantern-grid";
        const litSet = new Set();

        const fb = document.createElement("p");
        fb.className = "minigame-feedback";
        fb.textContent = "Klik ke-5 lentera untuk membuka kata kunci Hutan Lentera.";
        scoreEl.textContent = `Menyala: 0 / ${game.lanterns.length}`;

        game.lanterns.forEach((word, idx) => {
            const lBtn = document.createElement("button");
            lBtn.type = "button";
            lBtn.className = "lantern-node-btn";
            lBtn.textContent = `Lentera ${String(idx + 1).padStart(2, "0")}`;
            lBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                if (!litSet.has(idx)) {
                    litSet.add(idx);
                    lBtn.classList.add("is-lit");
                    lBtn.textContent = word;
                }
                scoreEl.textContent = `Menyala: ${litSet.size} / ${game.lanterns.length}`;
                fb.textContent =
                    litSet.size === game.lanterns.length
                        ? "Semua 5 Lentera Hutan menyala terang! Babak selanjutnya siap dimulai."
                        : `Lentera #${idx + 1} menyala (${word}). Nyalakan ${game.lanterns.length - litSet.size} lagi!`;
            });
            grid.appendChild(lBtn);
        });

        stage.append(grid, fb);
    }

    function buildTelepathyMiniGame(game, stage, scoreEl) {
        let idx = 0;
        let matchCount = 0;

        function renderPrompt() {
            stage.replaceChildren();
            if (idx >= game.prompts.length) {
                scoreEl.textContent = `Telepati: ${matchCount} / ${game.prompts.length}`;
                const fb = document.createElement("p");
                fb.className = "minigame-feedback";
                fb.textContent =
                    matchCount === game.prompts.length
                        ? "Telepati 100% tembus, persis kayak Spotify Blend kita!"
                        : `Skor telepati ${matchCount} / ${game.prompts.length}! Tetep seru walau jawabannya beda.`;
                const retryBtn = document.createElement("button");
                retryBtn.type = "button";
                retryBtn.className = "minigame-btn";
                retryBtn.textContent = "Ulangi Tes";
                retryBtn.addEventListener("click", () => {
                    SoundscapeEngine.playUiTap();
                    idx = 0;
                    matchCount = 0;
                    renderPrompt();
                });
                stage.append(fb, retryBtn);
                return;
            }

            scoreEl.textContent = `Tema ${idx + 1} / ${game.prompts.length} | Kompak: ${matchCount}`;
            const card = document.createElement("div");
            card.className = "minigame-quote-card";
            card.textContent = game.prompts[idx];

            const actions = document.createElement("div");
            actions.className = "minigame-actions";

            const sameBtn = document.createElement("button");
            sameBtn.type = "button";
            sameBtn.className = "minigame-btn is-active";
            sameBtn.textContent = "Kompak Sama! (+1)";
            sameBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                matchCount += 1;
                idx += 1;
                renderPrompt();
            });

            const diffBtn = document.createElement("button");
            diffBtn.type = "button";
            diffBtn.className = "minigame-btn";
            diffBtn.textContent = "Beda Jawaban";
            diffBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                idx += 1;
                renderPrompt();
            });

            actions.append(sameBtn, diffBtn);
            stage.append(card, actions);
        }

        renderPrompt();
    }

    function buildWheelMiniGame(game, stage, scoreEl) {
        let spins = 0;
        let lastIdx = -1;

        scoreEl.textContent = "Putaran: 0";
        const spinBtn = document.createElement("button");
        spinBtn.type = "button";
        spinBtn.className = "minigame-btn is-active";
        spinBtn.textContent = "Putar Tantangan Puncak 27!";

        const fb = document.createElement("p");
        fb.className = "minigame-feedback";
        fb.textContent = "Klik tombol di atas buat dapet tantangan spontan sebelum ke Photobooth!";

        spinBtn.addEventListener("click", () => {
            SoundscapeEngine.playUiTap();
            let pick = Math.floor(Math.random() * game.dares.length);
            if (game.dares.length > 1 && pick === lastIdx) {
                pick = (pick + 1) % game.dares.length;
            }
            lastIdx = pick;
            spins += 1;
            scoreEl.textContent = `Putaran: ${spins}`;
            fb.textContent = `Tantangan Terpilih: ${game.dares[pick]}`;
        });

        stage.append(spinBtn, fb);
    }

    /**
     * Dynamically constructs Realm Intro, Pos 2-Page Spread, and Rest-Stop Sanctuary 2-Page Spread elements.
     */
    function createDynamicPageElement(page) {
        const sec = document.createElement("section");
        sec.className = `deck-page deck-page--${page.type} biome-${page.biome}`;
        sec.id = `page-${page.id}`;
        sec.dataset.pageIndex = String(page.index);
        sec.setAttribute("aria-label", page.title);

        if (page.type === "realm-intro") {
            const meta = BIOME_META[page.biome];
            const spread = document.createElement("div");
            spread.className = "book-spread realm-book-spread";

            const leftPage = document.createElement("div");
            leftPage.className = "book-page book-page--left realm-plate-page";

            const leftFolio = document.createElement("div");
            leftFolio.className = "book-folio-bar";
            const leftTag = document.createElement("span");
            leftTag.className = "mono-tag";
            leftTag.textContent = `BAB ${page.biome} // PEMBUKA ALAM`;
            const altTag = document.createElement("span");
            altTag.className = "mono-tag";
            altTag.textContent = page.altitude.toUpperCase();
            leftFolio.append(leftTag, altTag);

            const crestBox = document.createElement("div");
            crestBox.className = "realm-crest-plate stage-reveal";
            crestBox.style.setProperty("--stagger", "1");

            const medallion = document.createElement("div");
            medallion.className = "realm-3d-medallion";

            const outerOrbit = document.createElement("span");
            outerOrbit.className = "medallion-orbit medallion-orbit--outer";
            outerOrbit.setAttribute("aria-hidden", "true");

            const innerOrbit = document.createElement("span");
            innerOrbit.className = "medallion-orbit medallion-orbit--inner";
            innerOrbit.setAttribute("aria-hidden", "true");

            const emblem = document.createElement("div");
            emblem.className = "realm-intro-emblem";
            emblem.setAttribute("aria-hidden", "true");
            emblem.innerHTML = meta.svg;

            medallion.append(outerOrbit, innerOrbit, emblem);

            const pills = document.createElement("div");
            pills.className = "realm-intro-pills";
            meta.pills.forEach((pText) => {
                const pill = document.createElement("span");
                pill.className = "realm-intro-pill";
                pill.textContent = pText;
                pills.appendChild(pill);
            });

            crestBox.append(medallion, pills);
            leftPage.append(leftFolio, crestBox);

            const rightPage = document.createElement("div");
            rightPage.className = "book-page book-page--right realm-story-page";

            const rightFolio = document.createElement("div");
            rightFolio.className = "book-folio-bar";
            const chTag = document.createElement("span");
            chTag.className = "mono-tag";
            chTag.textContent = meta.shortName.toUpperCase();
            const pgTag = document.createElement("span");
            pgTag.className = "mono-tag";
            pgTag.textContent = `HALAMAN ${String(page.index + 1).padStart(2, "0")}`;
            rightFolio.append(chTag, pgTag);

            const storyInner = document.createElement("div");
            storyInner.className = "realm-story-inner";

            const kicker = document.createElement("p");
            kicker.className = "realm-intro-kicker stage-reveal";
            kicker.style.setProperty("--stagger", "1");
            kicker.textContent = meta.kicker;

            const h2 = document.createElement("h2");
            h2.className = "realm-intro-title stage-reveal";
            h2.style.setProperty("--stagger", "2");
            h2.textContent = meta.title;

            const sub = document.createElement("p");
            sub.className = "realm-intro-sub stage-reveal";
            sub.style.setProperty("--stagger", "3");
            sub.textContent = meta.subtitle;

            const ctaRow = document.createElement("div");
            ctaRow.className = "realm-cta-row stage-reveal";
            ctaRow.style.setProperty("--stagger", "4");

            const ctaBtn = document.createElement("button");
            ctaBtn.type = "button";
            ctaBtn.className = "btn-realm-enter";
            ctaBtn.textContent = `Buka Bab ${meta.shortName}`;
            ctaBtn.addEventListener("click", () => goToPage(page.index + 1, { direction: "next" }));

            const replayBtn = document.createElement("button");
            replayBtn.type = "button";
            replayBtn.className = "btn-outline";
            replayBtn.textContent = "Putar Efek Bab";
            replayBtn.addEventListener("click", () => {
                triggerChapterTransitionSpectacle(page, "next", { replayOnly: true });
            });

            ctaRow.append(ctaBtn, replayBtn);
            storyInner.append(kicker, h2, sub, ctaRow);
            rightPage.append(rightFolio, storyInner);

            spread.append(leftPage, rightPage);
            sec.appendChild(spread);
            return sec;
        }

        if (page.type === "pos") {
            const cp = page.checkpoint;
            const spread = document.createElement("div");
            spread.className = "book-spread pos-book-spread";

            const leftPage = document.createElement("article");
            leftPage.className = "book-page book-page--left pos-story-page stage-reveal";
            leftPage.style.setProperty("--stagger", "1");

            const leftFolio = document.createElement("div");
            leftFolio.className = "book-folio-bar";
            const posMeta = document.createElement("span");
            posMeta.className = "mono-tag";
            posMeta.textContent = `POS ${cp.postNum} / 27 // ${cp.altitude.toUpperCase()}`;

            const dateAndSeal = document.createElement("div");
            dateAndSeal.className = "folio-date-group";
            const dateTag = document.createElement("span");
            dateTag.className = "mono-tag";
            dateTag.textContent = cp.date;
            const miniWax = document.createElement("span");
            miniWax.className = "card-wax-mini";
            miniWax.setAttribute("aria-hidden", "true");
            miniWax.textContent = "27";
            dateAndSeal.append(dateTag, miniWax);
            leftFolio.append(posMeta, dateAndSeal);

            const title = document.createElement("h2");
            title.className = "checkpoint-title";
            title.textContent = cp.title;
            leftPage.append(leftFolio, title);

            if (Array.isArray(cp.lines) && cp.lines.length > 0) {
                const linesWrap = document.createElement("div");
                linesWrap.className = "checkpoint-lines";
                cp.lines.forEach((txt) => {
                    const p = document.createElement("p");
                    p.textContent = txt;
                    linesWrap.appendChild(p);
                });
                leftPage.appendChild(linesWrap);
            }

            if (cp.pullQuote) {
                const quoteCard = document.createElement("blockquote");
                quoteCard.className = "book-epigraph-quote";
                quoteCard.textContent = cp.pullQuote;
                leftPage.appendChild(quoteCard);
            }

            if (cp.footnote) {
                const foot = document.createElement("p");
                foot.className = "checkpoint-footnote";
                foot.textContent = cp.footnote;
                leftPage.appendChild(foot);
            }

            if (cp.secretNote) {
                const secretWrap = document.createElement("div");
                secretWrap.className = "secret-note-wrap";

                const toggleBtn = document.createElement("button");
                toggleBtn.type = "button";
                toggleBtn.className = "btn-secret-note";
                toggleBtn.setAttribute("aria-expanded", "false");
                toggleBtn.textContent = "Buka Catatan Jay";

                const noteBody = document.createElement("div");
                noteBody.className = "secret-note-body";
                noteBody.hidden = true;
                noteBody.textContent = cp.secretNote;

                toggleBtn.addEventListener("click", () => {
                    SoundscapeEngine.playUiTap();
                    const isOpen = noteBody.hidden;
                    noteBody.hidden = !isOpen;
                    toggleBtn.setAttribute("aria-expanded", String(isOpen));
                    toggleBtn.textContent = isOpen ? "Tutup Catatan Jay" : "Buka Catatan Jay";
                });

                secretWrap.append(toggleBtn, noteBody);
                leftPage.appendChild(secretWrap);
            }

            const rightPage = document.createElement("div");
            rightPage.className = "book-page book-page--right pos-interactive-page stage-reveal";
            rightPage.style.setProperty("--stagger", "2");

            const rightFolio = document.createElement("div");
            rightFolio.className = "book-folio-bar";
            const rightLabel = document.createElement("span");
            rightLabel.className = "mono-tag";
            rightLabel.textContent = `LEMBAR INTERAKTIF // POS ${cp.postNum}`;
            const statusBadge = document.createElement("span");
            statusBadge.className = "mono-tag quiz-lock-tag";
            rightFolio.append(rightLabel, statusBadge);

            rightPage.append(rightFolio, buildPosRightLeafDeck(cp, statusBadge));
            spread.append(leftPage, rightPage);
            sec.appendChild(spread);
            return sec;
        }

        if (page.type === "rest-stop") {
            const talk = page.talk;
            const spread = document.createElement("div");
            spread.className = "book-spread rest-book-spread";

            const talkPage = document.createElement("article");
            talkPage.className = "book-page book-page--left rest-talk-page stage-reveal";
            talkPage.style.setProperty("--stagger", "1");

            const talkFolio = document.createElement("div");
            talkFolio.className = "book-folio-bar";
            const badge = document.createElement("span");
            badge.className = "mono-tag";
            badge.textContent = talk.badge;
            const talkTag = document.createElement("span");
            talkTag.className = "mono-tag";
            talkTag.textContent = "OBROLAN BERDUA";
            talkFolio.append(badge, talkTag);

            const h2 = document.createElement("h2");
            h2.className = "rest-title";
            h2.textContent = "Pos Istirahat: Obrolan Berdua";

            const flipStage = document.createElement("div");
            flipStage.className = "talk-flip-stage";

            const isOpened = Boolean(state.restTalkOpened[page.restNum]);
            const talkFlipCard = document.createElement("div");
            talkFlipCard.className = `talk-flip-card${isOpened ? " is-flipped" : ""}`;

            const frontFace = document.createElement("div");
            frontFace.className = "talk-flip-face talk-flip-face--front";
            const teaser = document.createElement("p");
            teaser.className = "talk-teaser";
            teaser.textContent = talk.teaser;
            const openCardBtn = document.createElement("button");
            openCardBtn.type = "button";
            openCardBtn.className = "btn-primary";
            openCardBtn.textContent = "Balik Kartu Obrolan";
            frontFace.append(teaser, openCardBtn);

            const backFace = document.createElement("div");
            backFace.className = "talk-flip-face talk-flip-face--back";
            const q = document.createElement("p");
            q.className = "talk-prompt-question";
            q.textContent = talk.question;
            const hint = document.createElement("p");
            hint.className = "talk-prompt-hint";
            hint.textContent = talk.hint;
            const closeCardBtn = document.createElement("button");
            closeCardBtn.type = "button";
            closeCardBtn.className = "btn-outline";
            closeCardBtn.textContent = "Tutup Kartu";
            backFace.append(q, hint, closeCardBtn);

            openCardBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                state.restTalkOpened[page.restNum] = true;
                talkFlipCard.classList.add("is-flipped");
            });

            closeCardBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                state.restTalkOpened[page.restNum] = false;
                talkFlipCard.classList.remove("is-flipped");
            });

            talkFlipCard.append(frontFace, backFace);
            flipStage.appendChild(talkFlipCard);
            talkPage.append(talkFolio, h2, flipStage);

            const game = talk.miniGame;
            const gamePage = document.createElement("section");
            gamePage.className = "book-page book-page--right rest-game-page stage-reveal";
            gamePage.style.setProperty("--stagger", "2");

            const gHead = document.createElement("div");
            gHead.className = "book-folio-bar";
            const gBadge = document.createElement("span");
            gBadge.className = "mono-tag";
            gBadge.textContent = game.badge;
            const scoreEl = document.createElement("span");
            scoreEl.className = "minigame-score";
            gHead.append(gBadge, scoreEl);

            const gTitle = document.createElement("h3");
            gTitle.className = "minigame-title";
            gTitle.textContent = game.title;

            const gDesc = document.createElement("p");
            gDesc.className = "minigame-desc";
            gDesc.textContent = game.desc;

            const gStage = document.createElement("div");
            gStage.className = "minigame-stage";

            if (game.type === "tebak-chat" || game.type === "tebak-jam" || game.type === "susun-typo") {
                buildRoundMiniGame(game, gStage, scoreEl);
            } else if (game.type === "suit-pendaki") {
                buildSuitMiniGame(gStage, scoreEl);
            } else if (game.type === "lentera-hutan") {
                buildLanternMiniGame(game, gStage, scoreEl);
            } else if (game.type === "kompak-123") {
                buildTelepathyMiniGame(game, gStage, scoreEl);
            } else if (game.type === "roda-tantangan") {
                buildWheelMiniGame(game, gStage, scoreEl);
            }

            gamePage.append(gHead, gTitle, gDesc, gStage);
            spread.append(talkPage, gamePage);
            sec.appendChild(spread);
            return sec;
        }

        return sec;
    }

    function getOrCreatePageNode(idx) {
        if (pageNodeCache.has(idx)) {
            return pageNodeCache.get(idx);
        }
        const page = DECK_PAGES[idx];
        const node = createDynamicPageElement(page);
        node.hidden = true;
        el.deckViewport.appendChild(node);
        pageNodeCache.set(idx, node);
        return node;
    }

    function buildAtlasMenu() {
        const frag = document.createDocumentFragment();
        const groups = new Map();

        DECK_PAGES.forEach((p) => {
            if (!groups.has(p.groupLabel)) {
                groups.set(p.groupLabel, []);
            }
            groups.get(p.groupLabel).push(p);
        });

        groups.forEach((items, groupName) => {
            const groupWrap = document.createElement("div");
            groupWrap.className = "atlas-group";

            const heading = document.createElement("h3");
            heading.className = "atlas-group-title";
            heading.textContent = groupName;
            groupWrap.appendChild(heading);

            const grid = document.createElement("div");
            grid.className = "atlas-page-grid";

            items.forEach((item) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "atlas-jump-btn";
                btn.dataset.atlasPageIndex = String(item.index);

                const num = document.createElement("span");
                num.className = "atlas-jump-num";
                num.textContent = String(item.index + 1).padStart(2, "0");

                const txt = document.createElement("span");
                txt.textContent = item.shortLabel;

                btn.append(num, txt);
                btn.addEventListener("click", () => {
                    closeAtlasDialog();
                    goToPage(item.index);
                });
                grid.appendChild(btn);
            });

            groupWrap.appendChild(grid);
            frag.appendChild(groupWrap);
        });

        el.atlasPageList.replaceChildren(frag);
    }

    function getNextButtonLabel(idx) {
        if (idx === 0) {
            return "Buka Sampul Buku";
        }
        if (idx === 1) {
            if (state.quizStep < QUIZ_STEPS.length - 1) {
                return `Pertanyaan ${String(state.quizStep + 2).padStart(2, "0")}`;
            }
            return "Masuki Pesisir Senja";
        }
        if (idx >= DECK_PAGES.length - 1) {
            return "Kembali ke Sampul";
        }
        const next = DECK_PAGES[idx + 1];
        if (next.type === "realm-intro") {
            return `Masuki ${BIOME_META[next.biome].shortName}`;
        }
        if (next.type === "letter") {
            return "Buka Surat Puncak";
        }
        if (next.type === "photobooth") {
            return "Ke Photobooth";
        }
        return "Halaman Berikutnya";
    }

    function syncDeckChrome(idx) {
        const page = DECK_PAGES[idx];
        const total = DECK_PAGES.length;
        const meta = BIOME_META[page.biome];
        const progress = idx / Math.max(1, total - 1);

        el.deckApp.classList.toggle("is-onboarding", idx === 0);
        el.deckApp.classList.remove("biome-1", "biome-2", "biome-3", "biome-4");
        el.deckApp.classList.add(`biome-${page.biome}`);
        el.worldStage.setAttribute("data-biome", String(page.biome));
        el.worldStage.style.setProperty("--world-shift", progress.toFixed(4));

        if (el.bookTome) {
            el.bookTome.style.setProperty("--book-progress", progress.toFixed(4));
            el.bookTome.classList.toggle("is-closed-tome", idx === 0);
        }

        if (idx === 1) {
            const qNum = String(state.quizStep + 1).padStart(2, "0");
            const qTot = String(QUIZ_STEPS.length).padStart(2, "0");
            el.hudContextPill.textContent = `BASECAMP | HAL 02 / ${total} | KUIS ${qNum}/${qTot}`;
            el.dockPageReadout.textContent = `HAL 02 / ${total} // KUIS LANGKAH ${qNum} / ${qTot}`;
        } else {
            el.hudContextPill.textContent = `${meta.shortName.toUpperCase()} | HAL ${String(idx + 1).padStart(2, "0")} / ${total}`;
            el.dockPageReadout.textContent = `HAL ${String(idx + 1).padStart(2, "0")} / ${total} // ${page.shortLabel.toUpperCase()}`;
        }

        el.dockProgressFill.style.width = `${(((idx + 1) / total) * 100).toFixed(2)}%`;

        el.prevPageBtn.disabled = idx === 0;
        el.prevPageBtn.textContent =
            idx === 1 && state.quizStep > 0
                ? `Pertanyaan ${String(state.quizStep).padStart(2, "0")}`
                : "Sebelumnya";
        el.nextPageBtn.textContent = getNextButtonLabel(idx);

        if (el.bookCornerPrev) {
            el.bookCornerPrev.hidden = idx === 0;
        }
        if (el.bookCornerNext) {
            el.bookCornerNext.hidden = idx === 0 || idx >= total - 1;
        }

        el.realmTrackBtns.forEach((btn) => {
            btn.classList.toggle("is-current", Number(btn.dataset.biomeJump) === page.biome && idx >= 2);
        });

        el.atlasPageList.querySelectorAll(".atlas-jump-btn").forEach((btn) => {
            btn.classList.toggle("is-current", Number(btn.dataset.atlasPageIndex) === idx);
        });

        if (page.type === "realm-intro" || page.type === "pos") {
            unlockStamp(meta.stampId);
        } else if (page.type === "letter") {
            unlockStamp("puncak");
        }

        SoundscapeEngine.setBiome(page.biome);

        try {
            window.history.replaceState(null, "", idx === 0 ? window.location.pathname + window.location.search : `#${page.id}`);
        } catch (_) {
            // Ignore restricted history state on sandboxed origins.
        }
    }

    function syncFlipLeafSheetContent(fromPage, toPage, dir = "next", subTitle = "") {
        const src = fromPage || DECK_PAGES[state.currentPageIndex] || DECK_PAGES[0];
        const dst = toPage || src;
        const srcMeta = BIOME_META[src.biome] || BIOME_META[1];
        const dstMeta = BIOME_META[dst.biome] || BIOME_META[1];
        const rightPage = dir === "prev" ? dst : src;
        const leftPage = dir === "prev" ? src : dst;
        const rightMeta = dir === "prev" ? dstMeta : srcMeta;
        const leftMeta = dir === "prev" ? srcMeta : dstMeta;

        if (el.flipFrontTag) {
            el.flipFrontTag.textContent = rightMeta.shortName.toUpperCase();
        }
        if (el.flipFrontPg) {
            el.flipFrontPg.textContent = `HAL ${String((rightPage.index || 0) + 1).padStart(2, "0")}`;
        }
        if (el.flipFrontKicker) {
            el.flipFrontKicker.textContent = (rightPage.shortLabel || "LEMBAR CERITA").toUpperCase();
        }
        if (el.flipFrontTitle) {
            el.flipFrontTitle.textContent = subTitle || rightPage.title || rightMeta.title;
        }
        if (el.flipBackTag) {
            el.flipBackTag.textContent = leftMeta.shortName.toUpperCase();
        }
        if (el.flipBackPg) {
            el.flipBackPg.textContent = `HAL ${String((leftPage.index || 0) + 1).padStart(2, "0")}`;
        }
        if (el.flipBackKicker) {
            el.flipBackKicker.textContent = (leftPage.shortLabel || "CATATAN PERJALANAN").toUpperCase();
        }
        if (el.flipBackTitle) {
            el.flipBackTitle.textContent = subTitle || leftPage.title || leftMeta.title;
        }
    }

    function playBookPageFlipAnimation(dir, isCoverOpening = false, sheetOpts = {}) {
        if (!el.bookFlipLeaf || !el.bookTurnShadow || reducedMotionQuery.matches) {
            return;
        }
        if (state.flipCleanupTimer) {
            window.clearTimeout(state.flipCleanupTimer);
            state.flipCleanupTimer = null;
        }
        const seq = state.transitionSeq;

        syncFlipLeafSheetContent(sheetOpts.fromPage, sheetOpts.toPage, dir, sheetOpts.subTitle || "");

        el.bookFlipLeaf.classList.remove("is-flipping-next", "is-flipping-prev", "is-cover-opening");
        el.bookTurnShadow.classList.remove("is-active-next", "is-active-prev");
        void el.bookFlipLeaf.offsetWidth;

        if (isCoverOpening) {
            el.bookFlipLeaf.classList.add("is-cover-opening");
        } else {
            el.bookFlipLeaf.classList.add(dir === "prev" ? "is-flipping-prev" : "is-flipping-next");
        }
        el.bookTurnShadow.classList.add(dir === "prev" ? "is-active-prev" : "is-active-next");

        const duration = isCoverOpening ? 780 : 680;
        state.flipCleanupTimer = window.setTimeout(() => {
            if (seq !== state.transitionSeq) {
                return;
            }
            el.bookFlipLeaf.classList.remove("is-flipping-next", "is-flipping-prev", "is-cover-opening");
            el.bookTurnShadow.classList.remove("is-active-next", "is-active-prev");
            state.flipCleanupTimer = null;
        }, duration);
    }

    function getChapterPortalMeta(page) {
        const meta = BIOME_META[page.biome] || BIOME_META[1];
        if (page.type === "quiz") {
            return {
                kicker: "GERBANG EKSPEDISI // BASECAMP",
                title: "Tujuh Pertanyaan Pembuka",
                subtitle: "Pemanasan sebelum lembar kenangan Alam I terbuka.",
                svg: BIOME_META[1].svg
            };
        }
        if (page.type === "letter") {
            return {
                kicker: "SURAT KELULUSAN // 2.700 MDPL",
                title: "Puncak Ekspedisi 27",
                subtitle: "Satu surat utuh dari kaki gunung hingga malam berbintang.",
                svg: BIOME_META[4].svg
            };
        }
        if (page.type === "photobooth") {
            return {
                kicker: "STUDIO KENANGAN // EDISI 27",
                title: "Photobooth Ekspedisi 27",
                subtitle: "Abadikan foto berdua di bingkai kenangan puncak.",
                svg: BIOME_META[4].svg
            };
        }
        return {
            kicker: meta.groupLabel,
            title: meta.title,
            subtitle: page.type === "realm-intro" ? meta.subtitle : page.title || meta.subtitle,
            svg: meta.svg
        };
    }

    function isChapterTransition(prevPage, targetPage, dir) {
        if (!prevPage || !targetPage || prevPage.index === targetPage.index) {
            return false;
        }
        if (prevPage.biome !== targetPage.biome) {
            return true;
        }
        if (targetPage.type === "realm-intro") {
            return dir === "next" || Math.abs(targetPage.index - prevPage.index) > 1;
        }
        return targetPage.type === "quiz" || targetPage.type === "letter" || targetPage.type === "photobooth";
    }

    /**
     * Triggers the celebratory multi-leaf cascade, 3D chapter portal banner, horizon pulse, firework burst, and fanfare.
     */
    function triggerChapterTransitionSpectacle(targetPage, dir = "next", opts = {}) {
        if (!targetPage) {
            return;
        }
        state.chapterTransitionSeq += 1;
        const seq = state.chapterTransitionSeq;

        if (state.chapterPortalTimer) {
            window.clearTimeout(state.chapterPortalTimer);
            state.chapterPortalTimer = null;
        }
        if (state.cascadeCleanupTimer) {
            window.clearTimeout(state.cascadeCleanupTimer);
            state.cascadeCleanupTimer = null;
        }
        if (state.warpCleanupTimer) {
            window.clearTimeout(state.warpCleanupTimer);
            state.warpCleanupTimer = null;
        }

        const biomeId = targetPage.biome || 1;
        ambientWorldApi.triggerChapterBurst(biomeId);

        if (!opts.silent) {
            SoundscapeEngine.playChapterFanfare(biomeId);
        }

        if (reducedMotionQuery.matches) {
            return;
        }

        if (el.worldStage) {
            el.worldStage.classList.remove("is-biome-shifting");
            void el.worldStage.offsetWidth;
            el.worldStage.classList.add("is-biome-shifting");
        }

        if (el.bookTome) {
            el.bookTome.classList.remove("is-chapter-warping");
            void el.bookTome.offsetWidth;
            el.bookTome.classList.add("is-chapter-warping");
            state.warpCleanupTimer = window.setTimeout(() => {
                if (seq === state.chapterTransitionSeq) {
                    el.bookTome.classList.remove("is-chapter-warping");
                    if (el.worldStage) {
                        el.worldStage.classList.remove("is-biome-shifting");
                    }
                    state.warpCleanupTimer = null;
                }
            }, 920);
        }

        if (el.bookCascadeLeaves) {
            el.bookCascadeLeaves.classList.remove("is-cascading-next", "is-cascading-prev");
            void el.bookCascadeLeaves.offsetWidth;
            el.bookCascadeLeaves.classList.add(dir === "prev" ? "is-cascading-prev" : "is-cascading-next");
            state.cascadeCleanupTimer = window.setTimeout(() => {
                if (seq === state.chapterTransitionSeq) {
                    el.bookCascadeLeaves.classList.remove("is-cascading-next", "is-cascading-prev");
                    state.cascadeCleanupTimer = null;
                }
            }, 920);
        }

        if (el.chapterPortalOverlay) {
            const info = getChapterPortalMeta(targetPage);
            if (el.portalEmblem) {
                el.portalEmblem.innerHTML = info.svg;
            }
            if (el.portalKicker) {
                el.portalKicker.textContent = info.kicker;
            }
            if (el.portalTitle) {
                el.portalTitle.textContent = info.title;
            }
            if (el.portalSubtitle) {
                el.portalSubtitle.textContent = info.subtitle;
            }

            el.chapterPortalOverlay.classList.remove("is-active");
            void el.chapterPortalOverlay.offsetWidth;
            el.chapterPortalOverlay.classList.add("is-active");
            state.chapterPortalTimer = window.setTimeout(() => {
                if (seq === state.chapterTransitionSeq) {
                    el.chapterPortalOverlay.classList.remove("is-active");
                    state.chapterPortalTimer = null;
                }
            }, 1180);
        }
    }

    /**
     * Advances or rewinds quiz steps uniformly from both in-page quiz controls and the bottom dock.
     */
    function advanceQuizStep(delta) {
        if (delta > 0) {
            if (state.quizStep < QUIZ_STEPS.length - 1) {
                state.quizStep += 1;
                state.transitionSeq += 1;
                playBookPageFlipAnimation("next", false, {
                    fromPage: DECK_PAGES[1],
                    toPage: DECK_PAGES[1],
                    subTitle: `Pertanyaan ${String(state.quizStep + 1).padStart(2, "0")} / ${String(QUIZ_STEPS.length).padStart(2, "0")}`
                });
                SoundscapeEngine.playPageTurn("next", state.quizStep);
                renderQuizStep();
                const quizPage = pageNodeCache.get(1);
                if (quizPage) {
                    quizPage.scrollTop = 0;
                }
            } else {
                state.quizAnswers["step-rating-note"] = `${state.ratingScore}/100`;
                unlockStamp("fyp");
                saveQuizState();
                updateLetterAndSummaryPreview();
                goToPage(2, { direction: "next" });
            }
            return;
        }

        if (state.quizStep > 0) {
            state.quizStep -= 1;
            state.transitionSeq += 1;
            playBookPageFlipAnimation("prev", false, {
                fromPage: DECK_PAGES[1],
                toPage: DECK_PAGES[1],
                subTitle: `Pertanyaan ${String(state.quizStep + 1).padStart(2, "0")} / ${String(QUIZ_STEPS.length).padStart(2, "0")}`
            });
            SoundscapeEngine.playPageTurn("prev", state.quizStep);
            renderQuizStep();
            const quizPage = pageNodeCache.get(1);
            if (quizPage) {
                quizPage.scrollTop = 0;
            }
        } else {
            goToPage(0, { direction: "prev" });
        }
    }

    /**
     * Fluidly transitions between any two pages using 3D hardcover leaf-turn choreography.
     */
    function goToPage(targetIdx, opts = {}) {
        const clamped = Math.max(0, Math.min(DECK_PAGES.length - 1, Number(targetIdx) || 0));
        const prevIdx = state.currentPageIndex;

        if (clamped === prevIdx && pageNodeCache.get(clamped) && !pageNodeCache.get(clamped).hidden) {
            syncDeckChrome(clamped);
            return;
        }

        state.transitionSeq += 1;
        const seq = state.transitionSeq;

        if (state.leaveCleanupTimer) {
            window.clearTimeout(state.leaveCleanupTimer);
            state.leaveCleanupTimer = null;
        }
        if (state.enterCleanupTimer) {
            window.clearTimeout(state.enterCleanupTimer);
            state.enterCleanupTimer = null;
        }

        pageNodeCache.forEach((node, nodeIdx) => {
            if (nodeIdx !== prevIdx && nodeIdx !== clamped) {
                node.hidden = true;
                node.classList.remove("is-active", "is-entering-next", "is-entering-prev", "is-leaving-next", "is-leaving-prev", "is-dragging", "is-snap-back");
                node.style.transform = "";
            }
        });

        const dir = opts.direction || (clamped >= prevIdx ? "next" : "prev");
        const prevPage = DECK_PAGES[prevIdx];
        const targetPage = DECK_PAGES[clamped];
        const outEl = getOrCreatePageNode(prevIdx);
        const inEl = getOrCreatePageNode(clamped);

        state.currentPageIndex = clamped;
        syncDeckChrome(clamped);

        if (!opts.skipFlipAnim) {
            playBookPageFlipAnimation(dir, Boolean(opts.coverOpening), {
                fromPage: prevPage,
                toPage: targetPage
            });
            if (isChapterTransition(prevPage, targetPage, dir)) {
                triggerChapterTransitionSpectacle(targetPage, dir, opts);
            }
        }

        if (outEl && outEl !== inEl) {
            outEl.classList.remove("is-active", "is-entering-next", "is-entering-prev", "is-dragging", "is-snap-back");
            outEl.style.transform = "";
            outEl.classList.add(dir === "next" ? "is-leaving-next" : "is-leaving-prev");
            state.leaveCleanupTimer = window.setTimeout(() => {
                if (seq === state.transitionSeq && state.currentPageIndex !== prevIdx) {
                    outEl.hidden = true;
                    outEl.classList.remove("is-leaving-next", "is-leaving-prev");
                }
            }, 340);
        }

        inEl.hidden = false;
        inEl.scrollTop = 0;
        inEl.style.transform = "";
        inEl.classList.remove("is-leaving-next", "is-leaving-prev", "is-entering-next", "is-entering-prev", "is-dragging", "is-snap-back");
        void inEl.offsetWidth;
        inEl.classList.add("is-active", dir === "next" ? "is-entering-next" : "is-entering-prev");

        state.enterCleanupTimer = window.setTimeout(() => {
            if (seq === state.transitionSeq) {
                inEl.classList.remove("is-entering-next", "is-entering-prev");
            }
        }, 520);

        if (!opts.silent) {
            SoundscapeEngine.playPageTurn(dir, clamped);
        }
    }

    function triggerOnboardingReveal() {
        if (state.currentPageIndex !== 0 || state.isBreakingSeal) {
            return;
        }
        state.isBreakingSeal = true;
        state.onboardingOpened = true;
        SoundscapeEngine.setEnabled(true);
        SoundscapeEngine.playSealOpen();

        if (el.waxSealTrigger && !reducedMotionQuery.matches) {
            el.waxSealTrigger.classList.add("is-breaking");
            window.setTimeout(() => {
                state.isBreakingSeal = false;
                goToPage(1, { direction: "next", silent: true, coverOpening: true });
                el.waxSealTrigger.classList.remove("is-breaking");
            }, 320);
        } else {
            state.isBreakingSeal = false;
            goToPage(1, { direction: "next", silent: true });
        }
    }

    function setupDeckNavigation() {
        // 1. Touch/Pen Horizontal Swipe with pointer capture and velocity momentum
        let dragState = null;

        el.deckViewport.addEventListener("pointerdown", (evt) => {
            if (evt.pointerType === "mouse") {
                return;
            }
            if (evt.target.closest("button, a, input, textarea, select, label, canvas, video, [data-no-drag]")) {
                return;
            }
            dragState = {
                pointerId: evt.pointerId,
                startX: evt.clientX,
                startY: evt.clientY,
                startTime: Date.now(),
                dx: 0,
                locked: null,
                captured: false
            };
        });

        el.deckViewport.addEventListener("pointermove", (evt) => {
            if (!dragState || evt.pointerId !== dragState.pointerId) {
                return;
            }
            const rawDx = evt.clientX - dragState.startX;
            const rawDy = evt.clientY - dragState.startY;

            if (!dragState.locked) {
                if (Math.abs(rawDy) > 12 && Math.abs(rawDy) >= Math.abs(rawDx)) {
                    dragState = null;
                    return;
                }
                if (Math.abs(rawDx) > 14 && Math.abs(rawDx) > Math.abs(rawDy) * 1.25) {
                    dragState.locked = "horizontal";
                    try {
                        el.deckViewport.setPointerCapture(evt.pointerId);
                        dragState.captured = true;
                    } catch (_) {
                        // Ignore capture restriction.
                    }
                } else {
                    return;
                }
            }

            const idx = state.currentPageIndex;
            const atLeftBound = idx === 0 && rawDx > 0;
            const atRightBound = idx === DECK_PAGES.length - 1 && rawDx < 0;
            const dampedDx = atLeftBound || atRightBound ? rawDx * 0.2 : rawDx * 0.48;
            dragState.dx = rawDx;

            const activeNode = getOrCreatePageNode(idx);
            activeNode.classList.remove("is-snap-back");
            activeNode.classList.add("is-dragging");
            activeNode.style.transform = `translate3d(${dampedDx.toFixed(1)}px, 0, 0)`;
        });

        function finishDrag(evt) {
            if (!dragState || (evt.pointerId !== undefined && evt.pointerId !== dragState.pointerId)) {
                return;
            }
            const cur = dragState;
            dragState = null;
            if (cur.captured && evt.pointerId !== undefined) {
                try {
                    if (el.deckViewport.hasPointerCapture(evt.pointerId)) {
                        el.deckViewport.releasePointerCapture(evt.pointerId);
                    }
                } catch (_) {
                    // Ignore release failure.
                }
            }

            const activeNode = getOrCreatePageNode(state.currentPageIndex);
            activeNode.classList.remove("is-dragging");

            if (cur.locked !== "horizontal") {
                activeNode.style.transform = "";
                return;
            }

            const elapsed = Math.max(16, Date.now() - cur.startTime);
            const velocity = Math.abs(cur.dx) / elapsed;
            const committed = Math.abs(cur.dx) >= 72 || velocity > 0.3;

            if (committed && cur.dx < 0 && state.currentPageIndex < DECK_PAGES.length - 1) {
                activeNode.style.transform = "";
                if (state.currentPageIndex === 0) {
                    triggerOnboardingReveal();
                } else if (state.currentPageIndex === 1) {
                    advanceQuizStep(1);
                } else {
                    goToPage(state.currentPageIndex + 1, { direction: "next" });
                }
            } else if (committed && cur.dx > 0 && state.currentPageIndex > 0) {
                activeNode.style.transform = "";
                if (state.currentPageIndex === 1) {
                    advanceQuizStep(-1);
                } else {
                    goToPage(state.currentPageIndex - 1, { direction: "prev" });
                }
            } else {
                activeNode.classList.add("is-snap-back");
                activeNode.style.transform = "translate3d(0, 0, 0)";
                window.setTimeout(() => {
                    activeNode.classList.remove("is-snap-back");
                    activeNode.style.transform = "";
                }, 260);
            }
        }

        el.deckViewport.addEventListener("pointerup", finishDrag);
        el.deckViewport.addEventListener("pointercancel", finishDrag);
        el.deckViewport.addEventListener("lostpointercapture", finishDrag);

        // 2. Intentional Horizontal Trackpad Swipe Only (never hijack vertical scroll)
        el.deckViewport.addEventListener(
            "wheel",
            (evt) => {
                if (el.atlasDialog.open || el.handoffDialog.open || el.lightboxDialog.open) {
                    return;
                }
                if (evt.target.closest(".chat-thread, .atlas-groups, textarea, input")) {
                    return;
                }
                const isIntentionalHorizontal = Math.abs(evt.deltaX) > Math.abs(evt.deltaY) * 1.8 && Math.abs(evt.deltaX) > 36;
                if (!isIntentionalHorizontal) {
                    return;
                }
                const now = Date.now();
                if (now - state.lastWheelFlipAt < 750) {
                    return;
                }
                state.lastWheelFlipAt = now;

                const goForward = evt.deltaX > 0;
                if (goForward && state.currentPageIndex < DECK_PAGES.length - 1) {
                    if (state.currentPageIndex === 0) {
                        triggerOnboardingReveal();
                    } else if (state.currentPageIndex === 1) {
                        advanceQuizStep(1);
                    } else {
                        goToPage(state.currentPageIndex + 1, { direction: "next" });
                    }
                } else if (!goForward && state.currentPageIndex > 0) {
                    if (state.currentPageIndex === 1) {
                        advanceQuizStep(-1);
                    } else {
                        goToPage(state.currentPageIndex - 1, { direction: "prev" });
                    }
                }
            },
            { passive: true }
        );
    }

    function openAtlasDialog() {
        state.lastFocusedBeforeDialog = document.activeElement;
        if (!el.atlasDialog.open) {
            el.atlasDialog.showModal();
        }
    }

    function closeAtlasDialog() {
        if (el.atlasDialog.open) {
            el.atlasDialog.close();
        }
    }

    function openHandoffDialog() {
        state.lastFocusedBeforeDialog = document.activeElement;
        if (!el.handoffDialog.open) {
            el.handoffDialog.showModal();
        }
    }

    function closeHandoffDialog() {
        if (el.handoffDialog.open) {
            el.handoffDialog.close();
        }
    }

    function getSummaryRows() {
        const fallback = "Belum dijawab di kuis";
        return [
            { label: "01. Awal Notice di FYP", answer: state.quizAnswers["step-origin-fyp"] || fallback },
            { label: "02. Matkul 17 Sep", answer: state.quizAnswers["step-deeptalk"] || fallback },
            { label: "03. Malam Gramed Jalma", answer: state.quizAnswers["step-gramed-jalma"] || fallback },
            { label: "04. Momen Paling Kita", answer: state.quizAnswers["step-momen-kita"] || fallback },
            { label: "05. Kamus Typo & Lore", answer: state.quizAnswers["step-kamus-typo"] || fallback },
            { label: "06. Nyesel Follback?", answer: state.quizAnswers["step-bareng-terus"] || fallback }
        ];
    }

    function wrapCanvasLines(ctx, text, maxWidth) {
        const words = String(text || "").split(/\s+/).filter(Boolean);
        if (words.length === 0) {
            return [];
        }
        const lines = [];
        let current = words[0];
        for (let i = 1; i < words.length; i += 1) {
            const candidate = `${current} ${words[i]}`;
            if (ctx.measureText(candidate).width <= maxWidth) {
                current = candidate;
            } else {
                lines.push(current);
                current = words[i];
            }
        }
        lines.push(current);
        return lines;
    }

    function updateLetterAndSummaryPreview() {
        const cleanNote = state.raraNote.trim();
        const snippet = cleanNote
            ? `Catatan Rara: "${cleanNote.slice(0, 72)}${cleanNote.length > 72 ? "..." : ""}"`
            : "Belum ada catatan pribadi dari Rara (opsional).";
        el.letterSavedSummary.textContent = `Nilai perjalanan saat ini: ${state.ratingScore} / 100. ${snippet}`;

        const frag = document.createDocumentFragment();
        getSummaryRows().forEach((row) => {
            const box = document.createElement("div");
            box.className = "summary-row";
            const q = document.createElement("p");
            q.className = "summary-q";
            q.textContent = row.label;
            const a = document.createElement("p");
            a.className = "summary-a";
            a.textContent = row.answer;
            box.append(q, a);
            frag.appendChild(box);
        });

        const scoreBox = document.createElement("div");
        scoreBox.className = "summary-row";
        const sq = document.createElement("p");
        sq.className = "summary-q";
        sq.textContent = "07. NILAI PERTEMANAN & CATATAN";
        const sa = document.createElement("p");
        sa.className = "summary-a";
        sa.textContent = cleanNote
            ? `${state.ratingScore} / 100 | "${cleanNote}"`
            : `${state.ratingScore} / 100 (${getScoreDescriptor(state.ratingScore)})`;
        scoreBox.append(sq, sa);
        frag.appendChild(scoreBox);

        el.summaryPreviewBody.replaceChildren(frag);
        renderSummaryCardPng();
    }

    function traceRoundRect(ctx, x, y, w, h, r) {
        const radius = Math.max(0, Math.min(r, w / 2, h / 2));
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + w, y, x + w, y + h, radius);
        ctx.arcTo(x + w, y + h, x, y + h, radius);
        ctx.arcTo(x, y + h, x, y, radius);
        ctx.arcTo(x, y, x + w, y, radius);
        ctx.closePath();
    }

    function drawFourPointStar(ctx, cx, cy, r, color, alpha = 1) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r);
        ctx.quadraticCurveTo(cx + r * 0.14, cy - r * 0.14, cx + r, cy);
        ctx.quadraticCurveTo(cx + r * 0.14, cy + r * 0.14, cx, cy + r);
        ctx.quadraticCurveTo(cx - r * 0.14, cy + r * 0.14, cx - r, cy);
        ctx.quadraticCurveTo(cx - r * 0.14, cy - r * 0.14, cx, cy - r);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawStripCornerFiligree(ctx, x, y, dirX, dirY, color, foilColor) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dirX, dirY);

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 46);
        ctx.lineTo(0, 8);
        ctx.quadraticCurveTo(0, 0, 8, 0);
        ctx.lineTo(46, 0);
        ctx.stroke();

        ctx.strokeStyle = foilColor;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(7, 32);
        ctx.lineTo(7, 13);
        ctx.quadraticCurveTo(7, 7, 13, 7);
        ctx.lineTo(32, 7);
        ctx.stroke();

        ctx.fillStyle = foilColor;
        ctx.beginPath();
        ctx.arc(8, 8, 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function drawWaxSeal27(ctx, cx, cy, radius, waxColor, foilColor) {
        ctx.save();
        ctx.fillStyle = waxColor;
        ctx.beginPath();
        ctx.moveTo(cx - radius * 0.45, cy + radius * 0.35);
        ctx.lineTo(cx - radius * 0.72, cy + radius * 1.45);
        ctx.lineTo(cx - radius * 0.25, cy + radius * 1.18);
        ctx.lineTo(cx, cy + radius * 0.65);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(cx + radius * 0.45, cy + radius * 0.35);
        ctx.lineTo(cx + radius * 0.72, cy + radius * 1.45);
        ctx.lineTo(cx + radius * 0.25, cy + radius * 1.18);
        ctx.lineTo(cx, cy + radius * 0.65);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        const lobes = 12;
        for (let i = 0; i <= lobes * 2; i += 1) {
            const angle = (i / (lobes * 2)) * Math.PI * 2;
            const r = i % 2 === 0 ? radius * 1.08 : radius * 0.94;
            const px = cx + Math.cos(angle) * r;
            const py = cy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = waxColor;
        ctx.fill();
        ctx.strokeStyle = foilColor;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.76, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.38)";
        ctx.lineWidth = 1.3;
        ctx.stroke();

        ctx.fillStyle = "#FAF6EE";
        ctx.font = `700 ${Math.round(radius * 0.72)}px "Fraunces", Georgia, serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("27", cx, cy + 1);
        ctx.restore();
    }

    function drawMiniStampRow(ctx, startX, y, totalWidth, palette) {
        const labels = ["FYP", "PESISIR", "LENTERA", "BIDADARI", "BINTANG", "PUNCAK 27"];
        const gap = 8;
        ctx.save();
        ctx.font = '600 10.5px "JetBrains Mono", Consolas, monospace';
        let curX = startX;
        let curY = y;
        labels.forEach((lbl) => {
            const chipW = Math.ceil(ctx.measureText(lbl).width + 16);
            if (curX + chipW > startX + totalWidth && curX > startX) {
                curX = startX;
                curY += 28;
            }
            ctx.fillStyle = palette.accentSoft;
            ctx.strokeStyle = palette.border;
            ctx.lineWidth = 1.1;
            traceRoundRect(ctx, curX, curY, chipW, 22, 11);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = palette.text;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(lbl, curX + chipW / 2, curY + 11.5);
            curX += chipW + gap;
        });
        ctx.restore();
    }

    async function renderSummaryCardPng() {
        if (document.fonts && document.fonts.ready) {
            try {
                await document.fonts.ready;
            } catch (_) {
                // Proceed cleanly with available fonts.
            }
        }

        const canvas = el.summaryCanvas;
        const width = 800;
        const height = 1360;
        canvas.width = width;
        canvas.height = height;
        const pad = 52;
        const innerW = width - pad * 2;
        const ctx = canvas.getContext("2d");
        const sumPalette = STRIP_PALETTES.parchment;

        ctx.fillStyle = "#FAF6EE";
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = "#784D0C";
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.strokeStyle = "#D8A84E";
        ctx.lineWidth = 1.3;
        ctx.strokeRect(18, 18, width - 36, height - 36);

        drawStripCornerFiligree(ctx, 24, 24, 1, 1, "#784D0C", "#D8A84E");
        drawStripCornerFiligree(ctx, width - 24, 24, -1, 1, "#784D0C", "#D8A84E");
        drawStripCornerFiligree(ctx, 24, height - 24, 1, -1, "#784D0C", "#D8A84E");
        drawStripCornerFiligree(ctx, width - 24, height - 24, -1, -1, "#784D0C", "#D8A84E");

        drawFourPointStar(ctx, width / 2, 46, 10, "#784D0C", 0.9);
        drawFourPointStar(ctx, width / 2 - 36, 46, 5, "#D8A84E", 0.9);
        drawFourPointStar(ctx, width / 2 + 36, 46, 5, "#D8A84E", 0.9);

        ctx.fillStyle = "#0F4D5A";
        ctx.fillRect(pad, 62, innerW, 5);
        ctx.fillStyle = "#D8A84E";
        ctx.fillRect(pad, 72, innerW, 1.5);

        ctx.fillStyle = "#1A1720";
        ctx.font = '600 25px "Fraunces", Georgia, serif';
        ctx.fillText("KARTU RANGKUMAN KENANGAN", pad, 114);

        ctx.fillStyle = "#4A4252";
        ctx.font = '600 15px "JetBrains Mono", Consolas, monospace';
        const codeTxt = "EKSPEDISI-27";
        ctx.fillText(codeTxt, width - pad - ctx.measureText(codeTxt).width, 114);

        ctx.fillStyle = "#EDE4D3";
        ctx.fillRect(pad, 136, innerW, 88);
        ctx.strokeStyle = "#784D0C";
        ctx.lineWidth = 1.2;
        ctx.strokeRect(pad, 136, innerW, 88);

        ctx.fillStyle = "#1A1720";
        ctx.font = '600 20px "Fraunces", Georgia, serif';
        ctx.fillText("Anisa Rahma Eka Widyastuti (Rara)", pad + 20, 172);
        ctx.fillStyle = "#4A4252";
        ctx.font = '500 14px "JetBrains Mono", Consolas, monospace';
        ctx.fillText("ARSIP KENANGAN // AGUSTUS - 27 NOV 2026", pad + 20, 204);

        let y = 264;
        const rows = getSummaryRows();
        rows.forEach((row) => {
            ctx.fillStyle = "#784D0C";
            ctx.font = '600 13.5px "JetBrains Mono", Consolas, monospace';
            ctx.fillText(row.label.toUpperCase(), pad, y);
            y += 24;

            ctx.fillStyle = "#1A1720";
            ctx.font = '600 18.5px "Plus Jakarta Sans", "Segoe UI", sans-serif';
            const wrapped = wrapCanvasLines(ctx, row.answer, innerW);
            wrapped.slice(0, 2).forEach((line) => {
                ctx.fillText(line, pad, y);
                y += 25;
            });

            ctx.fillStyle = "#E1D8C5";
            ctx.fillRect(pad, y + 4, innerW, 1.5);
            y += 28;
        });

        ctx.fillStyle = "#8F2631";
        ctx.font = '600 14px "JetBrains Mono", Consolas, monospace';
        ctx.fillText("07. NILAI PERTEMANAN KENAL JAY", pad, y + 6);
        y += 40;

        ctx.fillStyle = "#0F4D5A";
        ctx.font = '700 32px "Fraunces", Georgia, serif';
        ctx.fillText(`${state.ratingScore} / 100`, pad, y);

        y += 24;
        const cleanNote = state.raraNote.trim();
        const noteText = cleanNote
            ? `"${cleanNote}"`
            : '"Terima kasih sudah jalan bareng di Ekspedisi Arsip 27."';
        const noteLines = wrapCanvasLines(ctx, noteText, innerW - 36).slice(0, 3);
        const boxHeight = Math.max(86, 32 + noteLines.length * 25);

        ctx.fillStyle = "#EDE4D3";
        ctx.fillRect(pad, y, innerW, boxHeight);
        ctx.strokeStyle = "#784D0C";
        ctx.lineWidth = 1.4;
        ctx.strokeRect(pad, y, innerW, boxHeight);

        ctx.fillStyle = "#1A1720";
        ctx.font = 'italic 18px "Fraunces", Georgia, serif';
        noteLines.forEach((line, idx) => {
            ctx.fillText(line, pad + 18, y + 32 + idx * 25);
        });

        const footerY = height - 156;
        drawMiniStampRow(ctx, pad, footerY, innerW - 110, sumPalette);

        ctx.fillStyle = "#C9BEA8";
        ctx.fillRect(pad, footerY + 42, innerW - 110, 1.5);

        ctx.fillStyle = "#1A1720";
        ctx.font = '600 18px "Fraunces", Georgia, serif';
        ctx.fillText("DARI JAY // EKSPEDISI ARSIP 27", pad, footerY + 84);

        const dateText = "27 NOV 2026";
        ctx.fillStyle = "#8F2631";
        ctx.font = '600 13.5px "JetBrains Mono", Consolas, monospace';
        ctx.fillText(dateText, pad, footerY + 112);

        drawWaxSeal27(ctx, width - pad - 44, footerY + 72, 34, "#8F2631", "#D8A84E");

        try {
            state.summaryDataUrl = canvas.toDataURL("image/png");
        } catch (_) {
            state.summaryDataUrl = "";
        }
    }

    function drawCoverCropped(ctx, source, srcW, srcH, destX, destY, destW, destH, mirror) {
        const targetRatio = destW / destH;
        const sourceRatio = srcW / srcH;
        let sx = 0;
        let sy = 0;
        let sWidth = srcW;
        let sHeight = srcH;

        if (sourceRatio > targetRatio) {
            sWidth = srcH * targetRatio;
            sx = (srcW - sWidth) / 2;
        } else if (sourceRatio < targetRatio) {
            sHeight = srcW / targetRatio;
            sy = (srcH - sHeight) / 2;
        }

        ctx.save();
        if (mirror) {
            ctx.translate(destX + destW, destY);
            ctx.scale(-1, 1);
            ctx.drawImage(source, sx, sy, sWidth, sHeight, 0, 0, destW, destH);
        } else {
            ctx.drawImage(source, sx, sy, sWidth, sHeight, destX, destY, destW, destH);
        }
        ctx.restore();
    }

    function loadImageElement(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error("Gagal memuat gambar."));
            img.src = src;
        });
    }

    function drawStripMarginMotifs(ctx, width, height, palette) {
        ctx.save();
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 3;
        ctx.strokeRect(10, 10, width - 20, height - 20);

        ctx.fillStyle = palette.card;
        ctx.fillRect(18, 18, width - 36, height - 36);

        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1.4;
        ctx.strokeRect(24, 24, width - 48, height - 48);

        const dotStep = 44;
        for (let y = 130; y < height - 130; y += dotStep) {
            const odd = Math.floor(y / dotStep) % 2 === 0;
            if (odd) {
                drawFourPointStar(ctx, 14, y, 4.5, palette.foil, 0.9);
                drawFourPointStar(ctx, width - 14, y, 4.5, palette.foil, 0.9);
            } else {
                ctx.fillStyle = palette.border;
                ctx.beginPath();
                ctx.arc(14, y, 2.2, 0, Math.PI * 2);
                ctx.arc(width - 14, y, 2.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        drawStripCornerFiligree(ctx, 28, 28, 1, 1, palette.border, palette.foil);
        drawStripCornerFiligree(ctx, width - 28, 28, -1, 1, palette.border, palette.foil);
        drawStripCornerFiligree(ctx, 28, height - 28, 1, -1, palette.border, palette.foil);
        drawStripCornerFiligree(ctx, width - 28, height - 28, -1, -1, palette.border, palette.foil);
        ctx.restore();
    }

    function drawThemeEmblem(ctx, cx, cy, theme, palette) {
        ctx.save();
        ctx.strokeStyle = palette.border;
        ctx.fillStyle = palette.foil;
        ctx.lineWidth = 1.6;

        if (theme === "lantern") {
            ctx.beginPath();
            ctx.arc(cx, cy, 16, 0, Math.PI * 2);
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx - 7, cy - 8);
            ctx.lineTo(cx + 7, cy - 8);
            ctx.lineTo(cx + 9, cy);
            ctx.lineTo(cx + 6, cy + 9);
            ctx.lineTo(cx - 6, cy + 9);
            ctx.lineTo(cx - 9, cy);
            ctx.closePath();
            ctx.fillStyle = palette.foil;
            ctx.fill();
            ctx.stroke();
        } else if (theme === "berry") {
            ctx.beginPath();
            ctx.arc(cx, cy, 15, 0, Math.PI * 2);
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx - 1, cy, 8, 0.4, Math.PI * 1.65);
            ctx.fillStyle = palette.foil;
            ctx.fill();
            drawFourPointStar(ctx, cx + 6, cy - 3, 4.5, palette.accent, 0.95);
        } else if (theme === "summit") {
            ctx.beginPath();
            ctx.moveTo(cx - 20, cy + 11);
            ctx.lineTo(cx - 6, cy - 7);
            ctx.lineTo(cx + 2, cy + 4);
            ctx.lineTo(cx + 10, cy - 10);
            ctx.lineTo(cx + 22, cy + 11);
            ctx.closePath();
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            drawFourPointStar(ctx, cx, cy - 15, 5.5, palette.foil, 1);
        } else {
            ctx.beginPath();
            ctx.arc(cx, cy, 16, 0, Math.PI * 2);
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            drawFourPointStar(ctx, cx, cy, 11, palette.accent, 0.95);
            drawFourPointStar(ctx, cx, cy, 5, palette.foil, 1);
        }
        ctx.restore();
    }

    function drawStripHeaderCrest(ctx, width, sidePad, photoWidth, palette, theme, count) {
        const cx = width / 2;
        ctx.save();

        ctx.font = '600 12px "JetBrains Mono", Consolas, monospace';
        ctx.fillStyle = palette.muted;
        ctx.textAlign = "left";
        ctx.fillText("ARSIP-27", sidePad + 22, 54);
        ctx.textAlign = "right";
        ctx.fillText(`STRIP-${String(count).padStart(2, "0")}`, width - sidePad - 22, 54);

        drawThemeEmblem(ctx, cx, 54, theme, palette);
        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sidePad + 94, 54);
        ctx.lineTo(cx - 32, 54);
        ctx.moveTo(cx + 32, 54);
        ctx.lineTo(width - sidePad - 94, 54);
        ctx.stroke();

        ctx.textAlign = "center";
        ctx.fillStyle = palette.text;
        ctx.font = '700 25px "Fraunces", Georgia, serif';
        ctx.fillText("EKSPEDISI ARSIP 27", cx, 102);

        const pillW = Math.min(photoWidth - 16, 460);
        const pillX = cx - pillW / 2;
        const pillY = 114;
        ctx.fillStyle = palette.accentSoft;
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 1.2;
        traceRoundRect(ctx, pillX, pillY, pillW, 28, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = palette.text;
        ctx.font = '600 11.5px "JetBrains Mono", Consolas, monospace';
        ctx.textBaseline = "middle";
        ctx.fillText("JAY & RARA // 27 POS KENANGAN // 2.700 MDPL", cx, pillY + 14.5);

        ctx.textBaseline = "alphabetic";
        ctx.strokeStyle = palette.accent;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(sidePad, 158);
        ctx.lineTo(sidePad + photoWidth, 158);
        ctx.stroke();
        drawFourPointStar(ctx, cx, 158, 6.5, palette.wax, 1);

        ctx.restore();
    }

    function drawOrnatePhotoSlot(ctx, img, x, y, w, h, index, count, slotGap, palette, theme) {
        const cornerTags = [
            "POS 01 // FYP BINUS",
            "SPOTIFY BLEND 100%",
            "PUNCAK 27 // 2.700 MDPL",
            "27 AGU -> 27 NOV"
        ];
        const dividerLabels = [
            "POSE 01 // PESISIR SENJA",
            "POSE 02 // HUTAN LENTERA",
            "POSE 03 // LEMBAH BIDADARI",
            "POSE 04 // PUNCAK BINTANG"
        ];

        ctx.save();
        ctx.fillStyle = "rgba(14, 18, 30, 0.14)";
        ctx.fillRect(x + 4, y + 6, w, h);

        ctx.fillStyle = palette.mat;
        ctx.fillRect(x, y, w, h);

        const pad = 11;
        const innerX = x + pad;
        const innerY = y + pad;
        const innerW = w - pad * 2;
        const innerH = h - pad * 2;

        if (img) {
            drawCoverCropped(ctx, img, img.naturalWidth, img.naturalHeight, innerX, innerY, innerW, innerH, false);
        } else {
            const grad = ctx.createRadialGradient(
                innerX + innerW / 2,
                innerY + innerH / 2,
                20,
                innerX + innerW / 2,
                innerY + innerH / 2,
                innerW * 0.72
            );
            grad.addColorStop(0, palette.accentSoft);
            grad.addColorStop(1, palette.mat);
            ctx.fillStyle = grad;
            ctx.fillRect(innerX, innerY, innerW, innerH);

            ctx.save();
            ctx.setLineDash([6, 6]);
            ctx.strokeStyle = palette.border;
            ctx.lineWidth = 1.4;
            ctx.strokeRect(innerX + 14, innerY + 14, innerW - 28, innerH - 28);
            ctx.restore();

            drawThemeEmblem(ctx, innerX + innerW / 2, innerY + innerH / 2 - 28, theme, palette);

            ctx.textAlign = "center";
            ctx.fillStyle = palette.text;
            ctx.font = '700 20px "Fraunces", Georgia, serif';
            ctx.fillText(`POSE ${String(index + 1).padStart(2, "0")} // SIAP DIPOTRET`, innerX + innerW / 2, innerY + innerH / 2 + 16);

            ctx.fillStyle = palette.muted;
            ctx.font = '500 13px "JetBrains Mono", Consolas, monospace';
            ctx.fillText("Buka Kamera / Upload / Isi Cepat Foto Momen", innerX + innerW / 2, innerY + innerH / 2 + 44);
        }

        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);
        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1.2;
        ctx.strokeRect(innerX, innerY, innerW, innerH);

        const cSize = 22;
        const corners = [
            [x, y, 1, 1],
            [x + w, y, -1, 1],
            [x, y + h, 1, -1],
            [x + w, y + h, -1, -1]
        ];
        corners.forEach(([cx, cy, dx, dy]) => {
            ctx.fillStyle = palette.border;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + cSize * dx, cy);
            ctx.lineTo(cx, cy + cSize * dy);
            ctx.closePath();
            ctx.fill();
        });

        const tag = cornerTags[index % cornerTags.length];
        ctx.font = '600 10.5px "JetBrains Mono", Consolas, monospace';
        const tagW = Math.ceil(ctx.measureText(tag).width + 20);
        const onRight = index % 2 === 0;
        const tagX = onRight ? x + w - tagW - 14 : x + 14;
        const tagY = y + h - 34;

        ctx.fillStyle = palette.wax;
        traceRoundRect(ctx, tagX, tagY, tagW, 22, 6);
        ctx.fill();
        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = "#FAF6EE";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tag, tagX + tagW / 2, tagY + 11.5);

        if (index < count - 1) {
            const midY = y + h + slotGap / 2;
            const dText = dividerLabels[index % dividerLabels.length];
            ctx.font = '600 11px "JetBrains Mono", Consolas, monospace';
            const plaqueW = Math.ceil(ctx.measureText(dText).width + 32);
            const plaqueX = x + (w - plaqueW) / 2;

            ctx.strokeStyle = palette.border;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(x + 18, midY);
            ctx.lineTo(plaqueX - 10, midY);
            ctx.moveTo(plaqueX + plaqueW + 10, midY);
            ctx.lineTo(x + w - 18, midY);
            ctx.stroke();

            ctx.fillStyle = palette.accentSoft;
            ctx.strokeStyle = palette.border;
            traceRoundRect(ctx, plaqueX, midY - 12, plaqueW, 24, 12);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = palette.text;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(dText, x + w / 2, midY + 0.5);
        }

        ctx.restore();
    }

    function drawStripFooterCertificate(ctx, sidePad, footerY, photoWidth, canvasWidth, palette, captionText) {
        ctx.save();
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(sidePad, footerY);
        ctx.lineTo(sidePad + photoWidth, footerY);
        ctx.stroke();
        drawFourPointStar(ctx, canvasWidth / 2, footerY, 6, palette.wax, 1);

        ctx.textAlign = "left";
        ctx.fillStyle = palette.text;
        ctx.font = '700 20px "Fraunces", Georgia, serif';
        ctx.fillText(captionText.slice(0, 44), sidePad, footerY + 34);

        ctx.fillStyle = palette.muted;
        ctx.font = 'italic 15.5px "Cormorant Garamond", Georgia, serif';
        ctx.fillText("Dari Kamera FYP BINUS hingga Puncak 27 November 2026", sidePad, footerY + 58);

        drawMiniStampRow(ctx, sidePad, footerY + 74, photoWidth - 116, palette);

        const dateText = "27 NOV 2026";
        ctx.font = '600 12px "JetBrains Mono", Consolas, monospace';
        const stampW = Math.ceil(ctx.measureText(dateText).width + 20);
        ctx.strokeStyle = palette.stamp;
        ctx.lineWidth = 1.6;
        ctx.strokeRect(sidePad, footerY + 112, stampW, 26);
        ctx.fillStyle = palette.stamp;
        ctx.textBaseline = "middle";
        ctx.fillText(dateText, sidePad + 10, footerY + 125.5);

        drawWaxSeal27(ctx, sidePad + photoWidth - 46, footerY + 86, 35, palette.wax, palette.foil);
        ctx.restore();
    }

    async function renderCatalogStrip() {
        if (document.fonts && document.fonts.ready) {
            try {
                await document.fonts.ready;
            } catch (_) {
                // Proceed with available fallback fonts.
            }
        }

        const count = state.shotCount;
        const activePhotos = state.photos.slice(0, count);
        const allFilled = activePhotos.every(Boolean);
        const theme = state.stripTheme;
        const palette = STRIP_PALETTES[theme] || STRIP_PALETTES.parchment;

        const isSingle = count === 1;
        const canvasWidth = isSingle ? 980 : 760;
        const sidePad = isSingle ? 58 : 54;
        const photoWidth = canvasWidth - sidePad * 2;
        const photoHeight = Math.round((photoWidth * 3) / 4);
        const headerBottomY = 178;
        const slotGap = 52;
        const footerTopGap = 32;
        const footerHeight = 196;
        const canvasHeight = headerBottomY + count * photoHeight + (count - 1) * slotGap + footerTopGap + footerHeight;

        const canvas = el.stripCanvas;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = palette.bg;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        drawStripMarginMotifs(ctx, canvasWidth, canvasHeight, palette);
        drawStripHeaderCrest(ctx, canvasWidth, sidePad, photoWidth, palette, theme, count);

        const loadedImages = await Promise.all(
            activePhotos.map((src) => (src ? loadImageElement(src).catch(() => null) : Promise.resolve(null)))
        );

        loadedImages.forEach((img, index) => {
            const y = headerBottomY + index * (photoHeight + slotGap);
            drawOrnatePhotoSlot(ctx, img, sidePad, y, photoWidth, photoHeight, index, count, slotGap, palette, theme);
        });

        const footerLineY = headerBottomY + count * photoHeight + (count - 1) * slotGap + footerTopGap;
        const captionText = (state.stripCaption || "Jay & Rara // Puncak 27").trim() || "Jay & Rara // Puncak 27";
        drawStripFooterCertificate(ctx, sidePad, footerLineY, photoWidth, canvasWidth, palette, captionText);

        try {
            state.compositeDataUrl = canvas.toDataURL("image/png");
        } catch (_) {
            state.compositeDataUrl = "";
        }
        el.downloadBtn.disabled = state.isCapturing || !allFilled || !state.compositeDataUrl;
        updateControlsState();
    }

    function setCameraViewState(mode, title = "", message = "") {
        state.cameraStatus = mode;
        const statusLabels = {
            idle: "Kamera nonaktif",
            loading: "Menghubungkan kamera",
            ready: "Kamera aktif",
            capturing: "Sedang memotret",
            error: "Kamera tidak tersedia"
        };

        el.cameraStatus.setAttribute("data-state", mode);
        el.cameraStatusText.textContent = statusLabels[mode] || "Kamera nonaktif";
        el.cameraStatePanel.setAttribute("data-state", mode);

        const showPanel = mode === "idle" || mode === "loading" || mode === "error";
        el.cameraStatePanel.hidden = !showPanel;
        el.startCameraBtn.disabled = mode === "loading";

        if (showPanel && title) {
            el.cameraStateTitle.textContent = title;
            el.cameraStateMessage.textContent = message;
            el.startCameraBtn.textContent =
                mode === "loading"
                    ? "Menghubungkan..."
                    : mode === "error"
                      ? "Coba Nyalakan Lagi"
                      : "Buka Kamera";
        }

        updateControlsState();
    }

    function stopCurrentStream() {
        if (state.stream) {
            state.stream.getTracks().forEach((track) => track.stop());
            state.stream = null;
        }
        el.cameraVideo.srcObject = null;
    }

    async function refreshVideoDevices() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return;
        }
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            state.videoDevices = devices.filter((item) => item.kind === "videoinput");
            el.switchCameraBtn.hidden = state.videoDevices.length < 2;
        } catch (_) {
            state.videoDevices = [];
            el.switchCameraBtn.hidden = true;
        }
    }

    function describeCameraError(err) {
        if (!window.isSecureContext) {
            return {
                title: "Kamera butuh koneksi lokal atau HTTPS",
                message: "Buka halaman ini lewat localhost atau HTTPS agar browser mengizinkan kamera, atau pakai Upload Foto."
            };
        }
        const name = err && err.name ? err.name : "";
        if (name === "NotAllowedError" || name === "PermissionDeniedError") {
            return {
                title: "Izin kamera ditolak",
                message: "Izinkan akses kamera pada ikon gembok browser, atau klik Upload Foto / Isi Cepat dari Foto Momen."
            };
        }
        if (name === "NotFoundError" || name === "DevicesNotFoundError") {
            return {
                title: "Kamera tidak ditemukan",
                message: "Perangkat belum mendeteksi kamera. Kamu tetap bisa Upload Foto atau klik Isi Cepat dari Foto Momen."
            };
        }
        return {
            title: "Kamera gagal dinyalakan",
            message: "Browser belum bisa membuka kamera saat ini. Coba ulangi atau pakai Upload Foto."
        };
    }

    async function startCamera(deviceId = null) {
        if (!window.isSecureContext || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            const info = describeCameraError(null);
            setCameraViewState("error", info.title, info.message);
            return;
        }

        stopCurrentStream();
        setCameraViewState(
            "loading",
            "Menghubungkan ke kamera perangkat",
            "Jika muncul permintaan izin kamera dari browser, pilih Izinkan untuk mulai memotret."
        );

        const videoConstraints = { width: { ideal: 1280 }, height: { ideal: 960 } };
        if (deviceId) {
            videoConstraints.deviceId = { exact: deviceId };
        } else {
            videoConstraints.facingMode = "user";
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
            state.stream = stream;
            const activeTrack = stream.getVideoTracks()[0];
            if (activeTrack && activeTrack.getSettings().deviceId) {
                state.activeDeviceId = activeTrack.getSettings().deviceId;
            }
            el.cameraVideo.srcObject = stream;
            await el.cameraVideo.play();
            await refreshVideoDevices();
            setCameraViewState("ready");
        } catch (err) {
            stopCurrentStream();
            const info = describeCameraError(err);
            setCameraViewState("error", info.title, info.message);
        }
    }

    function updateControlsState() {
        const cameraReady = state.cameraStatus === "ready" && Boolean(state.stream);
        const filledCount = state.photos.slice(0, state.shotCount).filter(Boolean).length;
        const isFull = filledCount === state.shotCount;

        if (state.isCapturing) {
            el.shutterBtn.disabled = false;
            el.shutterBtnLabel.textContent = "Batalkan Sesi";
            el.shutterHint.textContent = "Pengambilan foto berlangsung. Tekan Batalkan Sesi atau Escape untuk berhenti.";
        } else if (cameraReady) {
            el.shutterBtn.disabled = false;
            el.shutterBtnLabel.textContent = `Ambil Foto Berdua (${state.shotCount} Pose)`;
            el.shutterHint.textContent =
                state.timerSeconds === 0
                    ? `Mode langsung aktif untuk ${state.shotCount} bingkai berurutan.`
                    : `Hitung mundur ${state.timerSeconds} detik per pose untuk ${state.shotCount} bingkai.`;
        } else {
            el.shutterBtn.disabled = true;
            el.shutterBtnLabel.textContent = `Ambil Foto Berdua (${state.shotCount} Pose)`;
            el.shutterHint.textContent = "Nyalakan kamera untuk memotret, atau klik Isi Cepat dari Foto Momen.";
        }

        el.fillFromMomentsBtn.disabled = state.isCapturing;
        el.shotRadios.forEach((r) => {
            r.disabled = state.isCapturing;
        });
        el.timerRadios.forEach((r) => {
            r.disabled = state.isCapturing;
        });
        el.themeRadios.forEach((r) => {
            r.disabled = state.isCapturing;
        });
        el.switchCameraBtn.disabled = state.isCapturing || state.videoDevices.length < 2;

        el.downloadBtn.disabled = state.isCapturing || !isFull || !state.compositeDataUrl;
        el.previewBtn.disabled = state.isCapturing || !state.compositeDataUrl;
        el.resetBtn.disabled = state.isCapturing || filledCount === 0;
    }

    function renderStripSlots() {
        const count = state.shotCount;
        const filledCount = state.photos.slice(0, count).filter(Boolean).length;
        el.slotCounter.textContent = `${filledCount} / ${count} bingkai`;
        el.stripCode.textContent = `STRIP-${String(count).padStart(2, "0")}`;

        if (filledCount === 0) {
            el.stripEmptyNote.textContent = "Belum ada foto. Potret lewat kamera, upload foto, atau pakai Isi Cepat dari Foto Momen.";
        } else if (filledCount < count) {
            el.stripEmptyNote.textContent = `${filledCount} dari ${count} bingkai terisi. Tambah ${count - filledCount} foto lagi untuk mengunduh.`;
        } else {
            el.stripEmptyNote.textContent = "Semua bingkai terisi! Kamu sudah bisa mengunduh Strip Foto PNG dan Kartu Rangkuman Kenangan.";
        }

        const frag = document.createDocumentFragment();
        for (let i = 0; i < count; i += 1) {
            const li = document.createElement("li");
            li.className = "strip-slot";

            const frame = document.createElement("div");
            frame.className = "slot-frame";
            if (state.photos[i]) {
                const img = document.createElement("img");
                img.className = "slot-photo";
                img.src = state.photos[i];
                img.alt = `Bingkai foto ${i + 1} dari ${count}`;
                frame.appendChild(img);
            } else {
                const empty = document.createElement("div");
                empty.className = "slot-empty";
                empty.textContent = `Pose ${String(i + 1).padStart(2, "0")}`;
                frame.appendChild(empty);
            }

            const meta = document.createElement("div");
            meta.className = "slot-meta";
            const idxSpan = document.createElement("span");
            idxSpan.className = "slot-index";
            idxSpan.textContent = `#${i + 1}`;
            meta.appendChild(idxSpan);

            const retakeBtn = document.createElement("button");
            retakeBtn.type = "button";
            retakeBtn.className = "btn-slot-retake";
            retakeBtn.textContent = state.photos[i] ? "Ulangi" : "Isi";
            retakeBtn.disabled = state.isCapturing;
            retakeBtn.setAttribute("aria-label", `${state.photos[i] ? "Ulangi" : "Isi"} foto bingkai ${i + 1}`);
            retakeBtn.addEventListener("click", () => retakeSlot(i));
            meta.appendChild(retakeBtn);

            li.append(frame, meta);
            frag.appendChild(li);
        }

        el.stripSlots.replaceChildren(frag);
        updateControlsState();
    }

    function captureFrameFromVideo() {
        const video = el.cameraVideo;
        if (!video.videoWidth || !video.videoHeight) {
            return null;
        }
        const canvas = document.createElement("canvas");
        canvas.width = FRAME_WIDTH;
        canvas.height = FRAME_HEIGHT;
        const ctx = canvas.getContext("2d");
        drawCoverCropped(ctx, video, video.videoWidth, video.videoHeight, 0, 0, FRAME_WIDTH, FRAME_HEIGHT, state.isMirrored);
        return canvas.toDataURL("image/jpeg", 0.92);
    }

    function triggerFlash() {
        SoundscapeEngine.playShutter();
        el.flashOverlay.classList.remove("is-flashing");
        void el.flashOverlay.offsetWidth;
        el.flashOverlay.classList.add("is-flashing");
    }

    function waitWithAbort(ms, signal) {
        return new Promise((resolve, reject) => {
            if (signal.aborted) {
                reject(new DOMException("Aborted", "AbortError"));
                return;
            }
            const id = window.setTimeout(() => {
                signal.removeEventListener("abort", onAbort);
                resolve();
            }, ms);

            function onAbort() {
                window.clearTimeout(id);
                reject(new DOMException("Aborted", "AbortError"));
            }

            signal.addEventListener("abort", onAbort, { once: true });
        });
    }

    async function runCountdown(seconds, signal) {
        if (seconds <= 0) {
            return;
        }
        el.countdownOverlay.hidden = false;
        try {
            for (let cur = seconds; cur >= 1; cur -= 1) {
                if (signal.aborted) {
                    throw new DOMException("Aborted", "AbortError");
                }
                el.countdownNumber.textContent = String(cur);
                SoundscapeEngine.playTick();
                await waitWithAbort(1000, signal);
            }
        } finally {
            el.countdownOverlay.hidden = true;
            el.countdownNumber.textContent = "";
        }
    }

    function finishCaptureUi() {
        state.isCapturing = false;
        state.captureAbortController = null;
        el.shootBanner.hidden = true;
        el.shootBannerText.textContent = "";
        el.countdownOverlay.hidden = true;
        setCameraViewState(state.stream ? "ready" : "idle");
        renderStripSlots();
    }

    async function startSessionCapture() {
        if (state.isCapturing) {
            if (state.captureAbortController) {
                state.captureAbortController.abort();
            }
            return;
        }
        if (state.cameraStatus !== "ready" || !state.stream) {
            return;
        }

        const controller = new AbortController();
        state.captureAbortController = controller;
        state.isCapturing = true;
        state.photos = Array(state.shotCount).fill(null);
        state.compositeDataUrl = "";
        el.actionFeedback.textContent = "";
        setCameraViewState("capturing");
        renderStripSlots();

        try {
            for (let i = 0; i < state.shotCount; i += 1) {
                el.shootBanner.hidden = false;
                el.shootBannerText.textContent = `Pose ${i + 1} dari ${state.shotCount}`;
                await runCountdown(state.timerSeconds, controller.signal);

                const frameDataUrl = captureFrameFromVideo();
                if (!frameDataUrl) {
                    throw new Error("Bingkai kamera belum siap.");
                }
                triggerFlash();
                state.photos[i] = frameDataUrl;
                renderStripSlots();
                await renderCatalogStrip();

                if (i < state.shotCount - 1) {
                    await waitWithAbort(INTER_SHOT_PAUSE_MS, controller.signal);
                }
            }
            el.actionFeedback.textContent = `Strip berisi ${state.shotCount} pose siap diunduh!`;
        } catch (err) {
            if (err && err.name === "AbortError") {
                el.actionFeedback.textContent = "Pengambilan foto dibatalkan.";
            } else {
                el.actionFeedback.textContent = "Terjadi kendala saat mengambil gambar. Coba lagi.";
            }
        } finally {
            finishCaptureUi();
        }
    }

    async function retakeSlot(index) {
        if (state.isCapturing) {
            return;
        }
        const cameraReady = state.cameraStatus === "ready" && Boolean(state.stream);
        if (!cameraReady) {
            state.pendingSlotIndex = index;
            el.manualFileInput.multiple = false;
            el.manualFileInput.click();
            return;
        }

        const controller = new AbortController();
        state.captureAbortController = controller;
        state.isCapturing = true;
        el.actionFeedback.textContent = "";
        setCameraViewState("capturing");

        try {
            el.shootBanner.hidden = false;
            el.shootBannerText.textContent = `Ulangi pose ${index + 1} dari ${state.shotCount}`;
            await runCountdown(state.timerSeconds, controller.signal);
            const frameDataUrl = captureFrameFromVideo();
            if (frameDataUrl) {
                triggerFlash();
                state.photos[index] = frameDataUrl;
                renderStripSlots();
                await renderCatalogStrip();
                el.actionFeedback.textContent = `Pose #${index + 1} diperbarui.`;
            }
        } catch (err) {
            if (err && err.name === "AbortError") {
                el.actionFeedback.textContent = "Pengambilan ulang dibatalkan.";
            }
        } finally {
            finishCaptureUi();
        }
    }

    async function loadUrlAsCroppedFrame(src) {
        const img = await loadImageElement(src);
        const canvas = document.createElement("canvas");
        canvas.width = FRAME_WIDTH;
        canvas.height = FRAME_HEIGHT;
        const ctx = canvas.getContext("2d");
        drawCoverCropped(ctx, img, img.naturalWidth, img.naturalHeight, 0, 0, FRAME_WIDTH, FRAME_HEIGHT, false);
        try {
            return canvas.toDataURL("image/jpeg", 0.92);
        } catch (_) {
            return src;
        }
    }

    async function fillStripFromMoments() {
        if (state.isCapturing) {
            return;
        }
        el.actionFeedback.textContent = "Memuat foto momen ke strip...";
        try {
            const selected = QUICK_FILL_PHOTOS.slice(0, state.shotCount);
            const frames = await Promise.all(selected.map((src) => loadUrlAsCroppedFrame(src)));
            state.photos = frames;
            renderStripSlots();
            await renderCatalogStrip();
            el.actionFeedback.textContent = state.compositeDataUrl
                ? `Strip diisi dengan ${state.shotCount} foto momen Rara & Jay.`
                : `Strip diisi ${state.shotCount} foto momen (unduh PNG penuh tersedia via HTTPS / Vercel).`;
        } catch (_) {
            el.actionFeedback.textContent = "Gagal memuat foto momen ke strip.";
        }
    }

    function readImageFileAsFrame(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async () => {
                try {
                    resolve(await loadUrlAsCroppedFrame(reader.result));
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = () => reject(new Error("Gagal membaca file gambar."));
            reader.readAsDataURL(file);
        });
    }

    async function handleManualFiles(fileList) {
        const files = Array.from(fileList || []).filter((file) => file.type.startsWith("image/"));
        if (files.length === 0) {
            el.actionFeedback.textContent = "Pilih file gambar berformat JPG, PNG, atau WebP.";
            return;
        }

        const frames = [];
        for (const file of files) {
            try {
                frames.push(await readImageFileAsFrame(file));
            } catch (_) {
                // Skip unreadable files.
            }
        }
        if (frames.length === 0) {
            el.actionFeedback.textContent = "Gambar tidak bisa diproses. Coba file lain.";
            return;
        }

        if (state.pendingSlotIndex !== null) {
            state.photos[state.pendingSlotIndex] = frames[0];
            state.pendingSlotIndex = null;
        } else {
            let cursor = 0;
            for (let i = 0; i < state.shotCount && cursor < frames.length; i += 1) {
                if (!state.photos[i]) {
                    state.photos[i] = frames[cursor];
                    cursor += 1;
                }
            }
            for (let i = 0; i < state.shotCount && cursor < frames.length; i += 1) {
                state.photos[i] = frames[cursor];
                cursor += 1;
            }
        }

        renderStripSlots();
        await renderCatalogStrip();
        el.actionFeedback.textContent = "Foto dari perangkat berhasil dimasukkan ke strip.";
    }

    function triggerPngDownload(dataUrl, prefix) {
        if (!dataUrl) {
            return;
        }
        const now = new Date();
        const stamp = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0"),
            "-",
            String(now.getHours()).padStart(2, "0"),
            String(now.getMinutes()).padStart(2, "0")
        ].join("");

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${prefix}-${stamp}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    function openImageLightbox(src, title, caption = "", downloadKind = null, galleryIndex = -1) {
        if (!src) {
            return;
        }
        state.lastFocusedBeforeDialog = document.activeElement;
        state.dialogPreviewTarget = downloadKind;
        state.dialogGalleryIndex = galleryIndex;

        const galleryItem = galleryIndex >= 0 && LIGHTBOX_GALLERY[galleryIndex] ? LIGHTBOX_GALLERY[galleryIndex] : null;
        el.dialogMetaTag.textContent = galleryItem
            ? galleryItem.meta
            : downloadKind === "summary"
              ? "KARTU RANGKUMAN KENANGAN"
              : "STRIP PHOTOBOOTH PUNCAK 27";
        el.previewDialogTitle.textContent = title;
        el.previewImage.src = src;
        el.previewImage.alt = galleryItem ? galleryItem.alt : title;

        if (caption) {
            el.previewCaption.textContent = caption;
            el.previewCaption.hidden = false;
        } else {
            el.previewCaption.textContent = "";
            el.previewCaption.hidden = true;
        }

        el.dialogNavGroup.hidden = galleryIndex < 0 || LIGHTBOX_GALLERY.length < 2;
        el.dialogDownloadBtn.hidden = !downloadKind;
        el.dialogDownloadBtn.textContent =
            downloadKind === "summary" ? "Unduh Rangkuman PNG" : "Unduh Strip PNG";

        if (!el.lightboxDialog.open) {
            el.lightboxDialog.showModal();
        }
    }

    function stepLightboxGallery(delta) {
        if (state.dialogGalleryIndex < 0 || LIGHTBOX_GALLERY.length === 0) {
            return;
        }
        const nextIdx = (state.dialogGalleryIndex + delta + LIGHTBOX_GALLERY.length) % LIGHTBOX_GALLERY.length;
        const item = LIGHTBOX_GALLERY[nextIdx];
        openImageLightbox(item.src, item.title, item.caption, null, nextIdx);
    }

    function closePreviewDialog() {
        if (el.lightboxDialog.open) {
            el.lightboxDialog.close();
        }
    }

    async function handleShotCountChange(newCount) {
        if (state.isCapturing || newCount === state.shotCount) {
            return;
        }
        const nextPhotos = Array(newCount).fill(null);
        for (let i = 0; i < Math.min(state.photos.length, newCount); i += 1) {
            nextPhotos[i] = state.photos[i];
        }
        state.shotCount = newCount;
        state.photos = nextPhotos;
        state.compositeDataUrl = "";
        renderStripSlots();
        await renderCatalogStrip();
    }

    function switchPrintCardTab(tabName) {
        state.activeCardTab = tabName;
        const isStrip = tabName === "strip";
        el.stripPanelView.hidden = !isStrip;
        el.summaryPanelView.hidden = isStrip;
        el.tabStripCard.setAttribute("aria-selected", String(isStrip));
        el.tabSummaryCard.setAttribute("aria-selected", String(!isStrip));
        if (!isStrip) {
            updateLetterAndSummaryPreview();
        }
    }

    async function copyPageLink() {
        const url = window.location.href;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(url);
            } else {
                const temp = document.createElement("input");
                temp.value = url;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand("copy");
                temp.remove();
            }
            el.handoffFeedback.textContent = "Link tersalin. Tempel di browser laptop untuk buka halaman lengkap.";
        } catch (_) {
            el.handoffFeedback.textContent = `Salin manual link ini: ${url}`;
        }
    }

    function openWhatsAppSelfLink() {
        const url = window.location.href;
        const text = `Ekspedisi Arsip 27 - buka di laptop biar halaman penuh dan photobooth lega: ${url}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
        el.handoffFeedback.textContent = "WhatsApp dibuka. Kirim ke chat sendiri lalu buka di laptop.";
    }

    function shareSummaryViaWhatsApp() {
        const lines = [
            "Hasil Ekspedisi Arsip 27 (dari Rara):",
            ...getSummaryRows().map((r) => `- ${r.label}: ${r.answer}`),
            `- Nilai Pertemanan: ${state.ratingScore}/100`,
            `- Catatan Rara: ${state.raraNote.trim() || "(belum diisi)"}`
        ];
        window.open(`https://wa.me/?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
        el.summaryFeedback.textContent = "Draft rangkuman dibuka di WhatsApp.";
    }

    function handlePrevNavControl() {
        if (state.currentPageIndex === 1) {
            advanceQuizStep(-1);
        } else if (state.currentPageIndex > 0) {
            goToPage(state.currentPageIndex - 1, { direction: "prev" });
        }
    }

    function handleNextNavControl() {
        if (state.currentPageIndex === 0) {
            triggerOnboardingReveal();
        } else if (state.currentPageIndex === 1) {
            advanceQuizStep(1);
        } else if (state.currentPageIndex >= DECK_PAGES.length - 1) {
            goToPage(0, { direction: "prev" });
        } else {
            goToPage(state.currentPageIndex + 1, { direction: "next" });
        }
    }

    /**
     * Applies smooth 3D parallax tilt to the hardcover book and interactive multi-layer biome parallax on fine-pointer desktops.
     */
    function initBook3dTilt() {
        if (!el.bookStage3d || !el.bookTome || !finePointerQuery.matches || reducedMotionQuery.matches) {
            return;
        }

        let targetRx = 0;
        let targetRy = 0;
        let curRx = 0;
        let curRy = 0;
        let targetPx = 0;
        let targetPy = 0;
        let curPx = 0;
        let curPy = 0;
        let rafId = null;

        function writeFrameVars() {
            el.bookTome.style.setProperty("--book-tilt-x", `${curRx.toFixed(3)}deg`);
            el.bookTome.style.setProperty("--book-tilt-y", `${curRy.toFixed(3)}deg`);
            if (el.worldStage) {
                el.worldStage.style.setProperty("--bg-parallax-x", curPx.toFixed(4));
                el.worldStage.style.setProperty("--bg-parallax-y", curPy.toFixed(4));
            }
        }

        function tick() {
            curRx += (targetRx - curRx) * 0.14;
            curRy += (targetRy - curRy) * 0.14;
            curPx += (targetPx - curPx) * 0.1;
            curPy += (targetPy - curPy) * 0.1;

            const settled =
                Math.abs(targetRx - curRx) <= 0.006 &&
                Math.abs(targetRy - curRy) <= 0.006 &&
                Math.abs(targetPx - curPx) <= 0.004 &&
                Math.abs(targetPy - curPy) <= 0.004;

            if (settled) {
                curRx = targetRx;
                curRy = targetRy;
                curPx = targetPx;
                curPy = targetPy;
                writeFrameVars();
                rafId = null;
                return;
            }
            writeFrameVars();
            rafId = window.requestAnimationFrame(tick);
        }

        function schedule() {
            if (!rafId) {
                rafId = window.requestAnimationFrame(tick);
            }
        }

        window.addEventListener(
            "pointermove",
            (evt) => {
                if (evt.pointerType !== "mouse" || el.atlasDialog.open || el.handoffDialog.open || el.lightboxDialog.open) {
                    return;
                }
                const vw = Math.max(1, window.innerWidth);
                const vh = Math.max(1, window.innerHeight);
                targetPx = Math.max(-1, Math.min(1, (evt.clientX / vw - 0.5) * 2));
                targetPy = Math.max(-1, Math.min(1, (evt.clientY / vh - 0.5) * 2));
                schedule();
            },
            { passive: true }
        );

        document.addEventListener("mouseleave", () => {
            targetPx = 0;
            targetPy = 0;
            schedule();
        });

        el.bookStage3d.addEventListener("pointermove", (evt) => {
            if (evt.pointerType !== "mouse" || el.atlasDialog.open || el.handoffDialog.open || el.lightboxDialog.open) {
                return;
            }
            if (state.currentPageIndex === DECK_PAGES.length - 1) {
                targetRx = 0;
                targetRy = 0;
                schedule();
                return;
            }
            const rect = el.bookStage3d.getBoundingClientRect();
            if (!rect.width || !rect.height) {
                return;
            }
            const nx = ((evt.clientX - rect.left) / rect.width - 0.5) * 2;
            const ny = ((evt.clientY - rect.top) / rect.height - 0.5) * 2;
            targetRy = nx * 1.45;
            targetRx = -ny * 1.1;
            schedule();
        });

        el.bookStage3d.addEventListener("pointerleave", () => {
            targetRx = 0;
            targetRy = 0;
            schedule();
        });
    }

    function bindEvents() {
        el.goHomeBtn.addEventListener("click", () => goToPage(0, { direction: "prev" }));
        el.waxSealTrigger.addEventListener("click", triggerOnboardingReveal);

        el.prevPageBtn.addEventListener("click", handlePrevNavControl);
        el.nextPageBtn.addEventListener("click", handleNextNavControl);

        el.nextPageBtn.addEventListener("pointerenter", () => {
            if (el.bookTome && state.currentPageIndex > 0) {
                el.bookTome.classList.add("is-peeking-next");
            }
        });
        el.nextPageBtn.addEventListener("pointerleave", () => {
            if (el.bookTome) {
                el.bookTome.classList.remove("is-peeking-next");
            }
        });
        el.prevPageBtn.addEventListener("pointerenter", () => {
            if (el.bookTome && state.currentPageIndex > 0) {
                el.bookTome.classList.add("is-peeking-prev");
            }
        });
        el.prevPageBtn.addEventListener("pointerleave", () => {
            if (el.bookTome) {
                el.bookTome.classList.remove("is-peeking-prev");
            }
        });

        if (el.bookCornerPrev) {
            el.bookCornerPrev.addEventListener("click", handlePrevNavControl);
        }
        if (el.bookCornerNext) {
            el.bookCornerNext.addEventListener("click", handleNextNavControl);
        }
        if (el.skipQuizBtn) {
            el.skipQuizBtn.addEventListener("click", () => {
                SoundscapeEngine.playUiTap();
                goToPage(2, { direction: "next" });
            });
        }

        el.realmTrackBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const targetBiome = Number(btn.dataset.biomeJump);
                const match = DECK_PAGES.find((p) => p.type === "realm-intro" && p.biome === targetBiome);
                if (match) {
                    goToPage(match.index);
                }
            });
        });

        el.openAtlasBtn.addEventListener("click", openAtlasDialog);
        el.atlasCloseBtn.addEventListener("click", closeAtlasDialog);
        el.atlasDialog.addEventListener("click", (evt) => {
            if (evt.target === el.atlasDialog) {
                closeAtlasDialog();
            }
        });

        el.openHandoffBtn.addEventListener("click", openHandoffDialog);
        el.handoffCloseBtn.addEventListener("click", closeHandoffDialog);
        el.handoffDialog.addEventListener("click", (evt) => {
            if (evt.target === el.handoffDialog) {
                closeHandoffDialog();
            }
        });

        el.audioToggleBtn.addEventListener("click", () => {
            SoundscapeEngine.setEnabled(!state.soundEnabled);
            if (state.soundEnabled) {
                SoundscapeEngine.playUiTap();
            }
        });

        el.soundToggle.addEventListener("click", () => {
            SoundscapeEngine.setEnabled(!state.soundEnabled);
            if (state.soundEnabled) {
                SoundscapeEngine.playUiTap();
            }
        });

        el.themeToggle.addEventListener("click", () => {
            applyTheme(state.theme === "light" ? "dark" : "light", true);
        });

        el.waSelfBtn.addEventListener("click", openWhatsAppSelfLink);
        el.copyUrlBtn.addEventListener("click", copyPageLink);

        el.prevQuizBtn.addEventListener("click", () => advanceQuizStep(-1));
        el.nextQuizBtn.addEventListener("click", () => advanceQuizStep(1));

        el.resetQuizBtn.addEventListener("click", () => {
            state.quizStep = 0;
            state.quizAnswers = {};
            state.quizReactions = {};
            state.unlockedStamps = [];
            state.runawayAttempts = 0;
            state.ratingScore = 95;
            state.raraNote = "";
            saveQuizState();
            renderPassportStamps();
            updateLetterAndSummaryPreview();
            renderQuizStep();
        });

        el.letterEditQuizBtn.addEventListener("click", () => goToPage(1, { direction: "prev" }));
        el.letterGoBoothBtn.addEventListener("click", () => goToPage(DECK_PAGES.length - 1, { direction: "next" }));

        el.tabStripCard.addEventListener("click", () => switchPrintCardTab("strip"));
        el.tabSummaryCard.addEventListener("click", () => switchPrintCardTab("summary"));

        el.startCameraBtn.addEventListener("click", () => startCamera(state.activeDeviceId));
        el.uploadFallbackBtn.addEventListener("click", () => {
            state.pendingSlotIndex = null;
            el.manualFileInput.multiple = true;
            el.manualFileInput.click();
        });
        el.manualFileInput.addEventListener("change", async (evt) => {
            await handleManualFiles(evt.target.files);
            evt.target.value = "";
        });

        el.shutterBtn.addEventListener("click", startSessionCapture);
        el.fillFromMomentsBtn.addEventListener("click", fillStripFromMoments);

        el.shotRadios.forEach((r) => {
            r.addEventListener("change", (evt) => handleShotCountChange(Number(evt.target.value)));
        });
        el.timerRadios.forEach((r) => {
            r.addEventListener("change", (evt) => {
                state.timerSeconds = Number(evt.target.value);
                updateControlsState();
            });
        });
        el.themeRadios.forEach((r) => {
            r.addEventListener("change", (evt) => {
                state.stripTheme = evt.target.value;
                renderCatalogStrip();
            });
        });

        el.stripCaptionInput.addEventListener("input", () => {
            state.stripCaption = el.stripCaptionInput.value;
            renderCatalogStrip();
        });

        el.mirrorToggle.addEventListener("click", () => {
            state.isMirrored = !state.isMirrored;
            el.cameraVideo.classList.toggle("is-mirrored", state.isMirrored);
            el.mirrorToggle.setAttribute("aria-pressed", String(state.isMirrored));
            el.mirrorToggle.textContent = state.isMirrored ? "Cermin: Aktif" : "Cermin: Mati";
        });

        el.switchCameraBtn.addEventListener("click", () => {
            if (state.videoDevices.length < 2 || state.isCapturing) {
                return;
            }
            const cur = state.videoDevices.findIndex((d) => d.deviceId === state.activeDeviceId);
            const next = (cur + 1) % state.videoDevices.length;
            startCamera(state.videoDevices[next].deviceId);
        });

        el.downloadBtn.addEventListener("click", () => {
            triggerPngDownload(state.compositeDataUrl, "photobooth-rara-jay");
            el.actionFeedback.textContent = "Strip Foto PNG berhasil diunduh.";
        });
        el.previewBtn.addEventListener("click", () => {
            openImageLightbox(state.compositeDataUrl, "Pratinjau Strip Photobooth Berdua", state.stripCaption, "strip", -1);
        });
        el.resetBtn.addEventListener("click", () => {
            if (state.isCapturing) {
                return;
            }
            state.photos = Array(state.shotCount).fill(null);
            state.compositeDataUrl = "";
            el.actionFeedback.textContent = "Sesi foto diulang. Bingkai siap diisi kembali.";
            renderStripSlots();
            renderCatalogStrip();
        });

        el.downloadSummaryBtn.addEventListener("click", () => {
            triggerPngDownload(state.summaryDataUrl, "kartu-rangkuman-kenangan");
            el.summaryFeedback.textContent = "Kartu Rangkuman Kenangan PNG berhasil diunduh.";
        });
        el.previewSummaryBtn.addEventListener("click", () => {
            openImageLightbox(state.summaryDataUrl, "Pratinjau Kartu Rangkuman Kenangan", "", "summary", -1);
        });
        el.shareWaSummaryBtn.addEventListener("click", shareSummaryViaWhatsApp);

        el.dialogPrevBtn.addEventListener("click", () => stepLightboxGallery(-1));
        el.dialogNextBtn.addEventListener("click", () => stepLightboxGallery(1));
        el.dialogDownloadBtn.addEventListener("click", () => {
            if (state.dialogPreviewTarget === "summary") {
                triggerPngDownload(state.summaryDataUrl, "kartu-rangkuman-kenangan");
            } else if (state.dialogPreviewTarget === "strip") {
                triggerPngDownload(state.compositeDataUrl, "photobooth-rara-jay");
            }
        });
        el.dialogCloseTop.addEventListener("click", closePreviewDialog);
        el.dialogCloseBottom.addEventListener("click", closePreviewDialog);
        el.lightboxDialog.addEventListener("click", (evt) => {
            if (evt.target === el.lightboxDialog) {
                closePreviewDialog();
            }
        });

        [el.atlasDialog, el.handoffDialog, el.lightboxDialog].forEach((dlg) => {
            dlg.addEventListener("close", () => {
                if (state.lastFocusedBeforeDialog && typeof state.lastFocusedBeforeDialog.focus === "function") {
                    state.lastFocusedBeforeDialog.focus();
                    state.lastFocusedBeforeDialog = null;
                }
            });
        });

        document.addEventListener("keydown", (evt) => {
            if (evt.key === "Escape" && state.isCapturing && !el.lightboxDialog.open) {
                if (state.captureAbortController) {
                    state.captureAbortController.abort();
                }
                return;
            }
            if (el.lightboxDialog.open && state.dialogGalleryIndex >= 0) {
                if (evt.key === "ArrowLeft") {
                    stepLightboxGallery(-1);
                } else if (evt.key === "ArrowRight") {
                    stepLightboxGallery(1);
                }
                return;
            }
            if (el.atlasDialog.open || el.handoffDialog.open || el.lightboxDialog.open) {
                return;
            }
            if (evt.target && evt.target.closest("input, textarea, select, [contenteditable]")) {
                return;
            }
            if (evt.key === "ArrowRight" || evt.key === "PageDown") {
                evt.preventDefault();
                if (state.currentPageIndex < DECK_PAGES.length - 1) {
                    handleNextNavControl();
                }
            } else if (evt.key === "ArrowLeft" || evt.key === "PageUp") {
                evt.preventDefault();
                if (state.currentPageIndex > 0) {
                    handlePrevNavControl();
                }
            }
        });
    }

    function applyInitialHashRoute() {
        const hash = (window.location.hash || "").replace(/^#/, "");
        if (!hash) {
            syncDeckChrome(0);
            return;
        }
        const match = DECK_PAGES.find((p) => p.id === hash);
        if (match && match.index > 0) {
            goToPage(match.index, { direction: "next", silent: true, skipFlipAnim: true });
        } else {
            syncDeckChrome(0);
        }
    }

    window.__EKSPEDISI_DECK__ = {
        count: () => DECK_PAGES.length,
        currentIndex: () => state.currentPageIndex,
        goTo: (idx, opts) => goToPage(idx, opts),
        activeBurstCount: () => ambientWorldApi.activeBurstCount(),
        pages: DECK_PAGES.map((p) => ({
            index: p.index,
            id: p.id,
            type: p.type,
            biome: p.biome,
            title: p.title
        }))
    };

    loadSavedState();
    buildAtlasMenu();
    syncAudioButtons();
    initAmbientParticles();
    renderPassportStamps();
    renderQuizStep();
    updateLetterAndSummaryPreview();
    renderStripSlots();
    renderCatalogStrip();
    bindEvents();
    setupDeckNavigation();
    initBook3dTilt();
    applyInitialHashRoute();
    setCameraViewState(
        "idle",
        "Kamera siap dinyalakan",
        "Klik Buka Kamera untuk mulai foto berdua, upload foto dari perangkat, atau klik Isi Cepat dari Foto Momen."
    );
})();
